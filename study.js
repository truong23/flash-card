const WORDS_PER_COLOR = 50;
const CARD_COLOR_SCALE = [
  "#f8b51e",
  "#267f94",
  "#fa501c",
  "#bb1818",
  "#1c3e76",
  "#6a3669",
];
const LEVEL_COLORS = {
  A1: "#10b981",
  A2: "#3b82f6",
  B1: "#f8b51e",
  B2: "#267f94",
};

const state = {
  currentLevelFilter: null,
  currentZoom: 1,
  isRendering: false,
  renderAbortController: new AbortController(),
  searchTimeout: null,
  currentUser: null,
  accessRecord: null,
  displaySettings: flashCardAuth.loadDisplaySettings(),
};

const dom = {
  loading: document.getElementById("studyLoading"),
  loadingMessage: document.getElementById("studyLoadingMessage"),
  app: document.getElementById("studyApp"),
  searchInput: document.getElementById("searchInput"),
  searchButton: document.getElementById("searchButton"),
  filterAllButton: document.getElementById("filterAllButton"),
  filterA1Button: document.getElementById("filterA1Button"),
  filterA2Button: document.getElementById("filterA2Button"),
  filterB1Button: document.getElementById("filterB1Button"),
  filterB2Button: document.getElementById("filterB2Button"),
  flipChineseButton: document.getElementById("flipChineseButton"),
  flipVietnameseButton: document.getElementById("flipVietnameseButton"),
  zoomOutButton: document.getElementById("zoomOutButton"),
  zoomResetButton: document.getElementById("zoomResetButton"),
  zoomInButton: document.getElementById("zoomInButton"),
  zoomIndicator: document.getElementById("zoomIndicator"),
  backToTopButton: document.getElementById("backToTop"),
  wordsContainer: document.getElementById("wordsContainer"),
  signOutButton: document.getElementById("signOutButton"),
  sessionNotice: document.getElementById("sessionNotice"),
};

function getGridGapSize() {
  const rootStyles = getComputedStyle(document.documentElement);
  return (
    (parseFloat(rootStyles.getPropertyValue("--grid-gap")) || 0) *
    state.currentZoom
  );
}

function fitLevelToViewport(section) {
  const grid = section.querySelector(".words-grid");
  const cards = section.querySelectorAll(".word-card");
  const cardCount = cards.length;
  if (!grid || cardCount === 0) return;

  const rootStyles = getComputedStyle(document.documentElement);
  const baseCardSize =
    parseFloat(rootStyles.getPropertyValue("--card-size")) || 52;
  const preferredCardSize = baseCardSize * state.currentZoom;
  const gridGap = getGridGapSize();
  const availableWidth = grid.clientWidth || section.clientWidth;
  const header = section.querySelector(".level-header");
  const headerHeight = header ? header.offsetHeight + 10 : 50;
  const availableHeight = window.innerHeight - headerHeight - 20;

  let bestSize = 8;
  for (let cols = 1; cols <= cardCount; cols += 1) {
    const rows = Math.ceil(cardCount / cols);
    const widthPerCard = (availableWidth - gridGap * (cols - 1)) / cols;
    const heightPerCard = (availableHeight - gridGap * (rows - 1)) / rows;
    const candidateSize = Math.floor(Math.min(widthPerCard, heightPerCard));
    if (candidateSize > bestSize) bestSize = candidateSize;
    if (rows === 1) break;
  }

  const effectiveCardSize = Math.max(10, Math.min(preferredCardSize, bestSize));
  const effectiveCardScale = effectiveCardSize / baseCardSize;
  section.style.setProperty("--effective-card-size", `${effectiveCardSize}px`);
  section.style.setProperty("--effective-card-scale", effectiveCardScale.toFixed(4));
}

function getApproxCardsPerRow(section, grid) {
  const cardSize =
    parseFloat(
      getComputedStyle(section).getPropertyValue("--effective-card-size"),
    ) || 52;
  const gridGap = getGridGapSize();
  const cardFootprint = Math.max(1, cardSize + gridGap);
  return Math.max(1, Math.floor((grid.clientWidth + gridGap) / cardFootprint));
}

function getCardColor(levelIndex, cardsPerRow) {
  const staggerStride = Math.max(8, cardsPerRow - 1);
  const staggerOffset = Math.floor(levelIndex / staggerStride);
  const adjustedIndex = levelIndex + staggerOffset;
  const paletteIndex =
    Math.floor(adjustedIndex / WORDS_PER_COLOR) % CARD_COLOR_SCALE.length;
  return CARD_COLOR_SCALE[paletteIndex];
}

function applyLevelColors(section) {
  const grid = section.querySelector(".words-grid");
  const cards = section.querySelectorAll(".word-card");
  const cardsPerRow = getApproxCardsPerRow(section, grid);
  cards.forEach((card, index) => {
    if (!card.style.getPropertyValue("--card-front-color")) {
      card.style.setProperty("--card-front-color", getCardColor(index, cardsPerRow));
    }
  });
}

function applyLevelLayout() {
  document.querySelectorAll(".level-section").forEach((section) => {
    fitLevelToViewport(section);
    applyLevelColors(section);
  });
}

function parseSearchQuery(rawQuery) {
  const tokens = rawQuery.trim().split(/\s+/).filter(Boolean);
  const textTokens = [];
  let levelFilter = null;

  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    const normalizedToken = token.toLowerCase();
    const inlineLevelMatch = normalizedToken.match(
      /^#(?:(?:sym:)?level)(?::|=)(a1|a2|b1|b2)$/i,
    );

    if (inlineLevelMatch) {
      levelFilter = inlineLevelMatch[1].toUpperCase();
      continue;
    }

    if (normalizedToken === "#sym:level" || normalizedToken === "#level") {
      const nextToken = tokens[index + 1];
      if (nextToken && /^(a1|a2|b1|b2)$/i.test(nextToken)) {
        levelFilter = nextToken.toUpperCase();
        index += 1;
        continue;
      }
    }

    textTokens.push(token);
  }

  return {
    levelFilter,
    textQuery: textTokens.join(" ").toLowerCase(),
  };
}

function updateLevelFilterButtons() {
  const buttons = [
    { element: dom.filterAllButton, level: null },
    { element: dom.filterA1Button, level: "A1", class: "active-a1" },
    { element: dom.filterA2Button, level: "A2", class: "active-a2" },
    { element: dom.filterB1Button, level: "B1", class: "active-b1" },
    { element: dom.filterB2Button, level: "B2", class: "active-b2" },
  ];

  buttons.forEach(({ element, level, class: activeClass }) => {
    element.classList.toggle("active", state.currentLevelFilter === level);
    if (activeClass) {
      element.classList.toggle(activeClass, state.currentLevelFilter === level);
    }
  });
}

function setLevelFilter(level) {
  state.currentLevelFilter = level;
  updateLevelFilterButtons();
  generateWords();
  setTimeout(applyLevelLayout, 0);
  handleSearch();
}

function scrollToLevel(level) {
  if (!level) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const section = document.querySelector(`.level-section[data-level="${level}"]`);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}

function updateStats() {
  const levels = ["A1", "A2", "B1", "B2"];
  const counts = {};
  levels.forEach((level) => {
    counts[level] = vocabularyData.filter((word) => word.level === level).length;
  });
  document.getElementById("totalWords").textContent = vocabularyData.length;
  document.getElementById("a1Count").textContent = counts.A1;
  document.getElementById("a2Count").textContent = counts.A2;
  document.getElementById("b1Count").textContent = counts.B1;
  document.getElementById("b2Count").textContent = counts.B2;
}

function generateWords() {
  if (state.isRendering) {
    state.renderAbortController.abort();
    state.renderAbortController = new AbortController();
  }

  state.isRendering = true;
  const signals = state.renderAbortController.signal;
  dom.wordsContainer.innerHTML = "";
  const levels = ["A1", "A2", "B1", "B2"];
  const filteredLevels = state.currentLevelFilter ? [state.currentLevelFilter] : levels;
  const sectionsToRender = [];
  const maxCardsPerSection = 406;
  const maxCharsPerCard = 150;

  filteredLevels.forEach((level) => {
    const baseLevelWords = vocabularyData.filter((word) => word.level === level);
    const processedLevelWords = [];

    baseLevelWords.forEach((word) => {
      const meaning = word.meaning || "";
      if (meaning.length > maxCharsPerCard) {
        const partsCount = Math.ceil(meaning.length / maxCharsPerCard);
        for (let partIndex = 0; partIndex < partsCount; partIndex += 1) {
          processedLevelWords.push({
            ...word,
            chinese: `${word.chinese} (${partIndex + 1}/${partsCount})`,
            meaning: meaning.substring(
              partIndex * maxCharsPerCard,
              (partIndex + 1) * maxCharsPerCard,
            ),
            originalIndex: vocabularyData.indexOf(word),
          });
        }
      } else {
        processedLevelWords.push({
          ...word,
          originalIndex: vocabularyData.indexOf(word),
        });
      }
    });

    for (let index = 0; index < processedLevelWords.length; index += maxCardsPerSection) {
      sectionsToRender.push({
        level,
        words: processedLevelWords.slice(index, index + maxCardsPerSection),
        part: Math.floor(index / maxCardsPerSection) + 1,
        isMultiPart: processedLevelWords.length > maxCardsPerSection,
      });
    }
  });

  let currentSectionIndex = 0;

  function renderNextSection() {
    if (signals.aborted || currentSectionIndex >= sectionsToRender.length) {
      state.isRendering = false;
      applyLevelLayout();
      updateStats();
      return;
    }

    const { level, words, part, isMultiPart } = sectionsToRender[currentSectionIndex];
    const section = document.createElement("div");
    section.className = "level-section";
    section.dataset.level = level;
    section.style.setProperty("--level-accent", LEVEL_COLORS[level] || "#d9dee8");

    const partTitle = isMultiPart ? ` - Phần ${part}` : "";
    const header = document.createElement("h2");
    header.className = "level-header";
    header.innerHTML = `
      <span style="border-left: 4px solid var(--level-accent); padding-left: 10px;">TOCFL ${level}${partTitle}</span>
      <span style="color: #64748b; font-size: 0.92rem; font-weight: 600;">${words.length} thẻ</span>
    `;

    const grid = document.createElement("div");
    grid.className = "words-grid";
    section.appendChild(header);
    section.appendChild(grid);
    dom.wordsContainer.appendChild(section);

    const chunkSize = 150;
    let wordIndex = 0;

    function renderChunks() {
      if (signals.aborted) return;

      const fragment = document.createDocumentFragment();
      const end = Math.min(wordIndex + chunkSize, words.length);
      for (let index = wordIndex; index < end; index += 1) {
        const word = words[index];
        const card = document.createElement("div");
        card.className = `word-card level-${level}`;
        card.dataset.index = word.originalIndex;
        card.innerHTML = `
          <div class="word-card-inner">
            <div class="word-face word-front">${flashCardAuth.escapeHtml(word.chinese)}</div>
            <div class="word-face word-back">
              <div class="word-back-scrollable">
                <div class="word-back-meaning">${flashCardAuth.escapeHtml(word.meaning || "")}</div>
                <div class="word-back-pinyin">${flashCardAuth.escapeHtml(word.pinyin || "")}</div>
              </div>
            </div>
          </div>
        `;
        card.addEventListener("click", (event) => {
          event.stopPropagation();
          card.classList.toggle("flipped");
        });
        fragment.appendChild(card);
      }

      grid.appendChild(fragment);
      wordIndex = end;

      if (wordIndex < words.length) {
        requestAnimationFrame(() => {
          window.setTimeout(renderChunks, 10);
        });
      } else {
        fitLevelToViewport(section);
        applyLevelColors(section);
        currentSectionIndex += 1;
        requestAnimationFrame(() => {
          window.setTimeout(renderNextSection, 20);
        });
      }
    }

    renderChunks();
  }

  renderNextSection();
}

function handleSearch() {
  clearTimeout(state.searchTimeout);
  state.searchTimeout = window.setTimeout(() => {
    const { levelFilter: inlineLevelFilter, textQuery } = parseSearchQuery(dom.searchInput.value);
    const effectiveLevelFilter = inlineLevelFilter || state.currentLevelFilter;
    const cards = document.querySelectorAll(".word-card");
    let firstMatchedCard = null;

    if (textQuery === "") {
      cards.forEach((card) => card.classList.remove("highlight", "search-target"));
      if (effectiveLevelFilter) scrollToLevel(effectiveLevelFilter);
      return;
    }

    cards.forEach((card) => {
      card.classList.remove("search-target");
      const section = card.closest(".level-section");
      if (!section) return;

      const matchesLevel = !effectiveLevelFilter || section.dataset.level === effectiveLevelFilter;
      if (!matchesLevel) {
        card.classList.remove("highlight");
        return;
      }

      const word = vocabularyData[Number(card.dataset.index)];
      const isMatch =
        word.chinese.includes(textQuery) ||
        (word.pinyin && word.pinyin.toLowerCase().includes(textQuery)) ||
        (word.meaning && word.meaning.toLowerCase().includes(textQuery));

      if (isMatch) {
        card.classList.add("highlight");
        if (!firstMatchedCard) firstMatchedCard = card;
      } else {
        card.classList.remove("highlight");
      }
    });

    if (firstMatchedCard) {
      firstMatchedCard.classList.add("search-target");
      firstMatchedCard.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, 300);
}

function setAllCardsFace(showBack) {
  document.querySelectorAll(".word-card").forEach((card) => {
    card.classList.toggle("flipped", showBack);
  });
}

function applyZoom() {
  document.documentElement.style.setProperty("--card-zoom", state.currentZoom.toFixed(2));
  dom.zoomIndicator.textContent = `${Math.round(state.currentZoom * 100)}%`;
  applyLevelLayout();
}

function changeZoom(delta) {
  state.currentZoom = Math.min(1.8, Math.max(1, Number((state.currentZoom + delta).toFixed(2))));
  applyZoom();
}

function applyDisplaySettings() {
  document.documentElement.style.setProperty("--card-size", `${state.displaySettings.cardSize}px`);
  document.documentElement.style.setProperty("--grid-gap", `${state.displaySettings.gridGap}`);
  document.documentElement.style.setProperty("--word-front-size", `${state.displaySettings.wordFrontSize}rem`);
  document.documentElement.style.setProperty(
    "--word-back-meaning-size",
    `${state.displaySettings.wordBackMeaningSize}rem`,
  );
  document.documentElement.style.setProperty(
    "--word-back-pinyin-size",
    `${state.displaySettings.wordBackPinyinSize}rem`,
  );
  applyLevelLayout();
}

function updateSessionNotice(session) {
  dom.sessionNotice.textContent = session.isAdmin
    ? `Bạn đang đăng nhập với quyền admin: ${session.user.email}.`
    : `Bạn đang học với tài khoản: ${session.user.email}.`;
}

async function guardStudyAccess() {
  await flashCardAuth.initializeFirebase();
  await flashCardAuth.onSessionChange(async (session) => {
    if (session.error) {
      dom.loadingMessage.textContent = flashCardAuth.getFriendlyFirestoreError(session.error);
      flashCardAuth.redirectTo("login");
      return;
    }

    if (!session.user || !session.hasAccess) {
      dom.loadingMessage.textContent = !session.user
        ? "Bạn chưa đăng nhập. Đang chuyển về trang đăng nhập."
        : "Tài khoản chưa được phê duyệt. Đang chuyển về trang đăng nhập.";
      flashCardAuth.redirectTo("login");
      return;
    }

    state.currentUser = session.user;
    state.accessRecord = session.accessRecord;
    dom.loading.classList.add("hidden");
    dom.app.classList.remove("hidden");
    updateSessionNotice(session);
  });
}

function bindEvents() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      dom.backToTopButton.classList.add("visible");
    } else {
      dom.backToTopButton.classList.remove("visible");
    }
  });

  dom.backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  dom.searchInput.addEventListener("input", handleSearch);
  dom.searchButton.addEventListener("click", handleSearch);
  dom.filterAllButton.addEventListener("click", () => setLevelFilter(null));
  dom.filterA1Button.addEventListener("click", () => setLevelFilter("A1"));
  dom.filterA2Button.addEventListener("click", () => setLevelFilter("A2"));
  dom.filterB1Button.addEventListener("click", () => setLevelFilter("B1"));
  dom.filterB2Button.addEventListener("click", () => setLevelFilter("B2"));
  dom.flipChineseButton.addEventListener("click", () => setAllCardsFace(false));
  dom.flipVietnameseButton.addEventListener("click", () => setAllCardsFace(true));
  dom.zoomOutButton.addEventListener("click", () => changeZoom(-0.15));
  dom.zoomResetButton.addEventListener("click", () => {
    state.currentZoom = 1;
    applyZoom();
  });
  dom.zoomInButton.addEventListener("click", () => changeZoom(0.15));
  dom.signOutButton.addEventListener("click", async () => {
    await flashCardAuth.signOutCurrentUser();
    flashCardAuth.redirectTo("login");
  });
  window.addEventListener("resize", applyLevelLayout);
}

async function init() {
  bindEvents();
  applyDisplaySettings();
  generateWords();
  updateLevelFilterButtons();
  updateStats();
  applyZoom();
  await guardStudyAccess();
}

init();
