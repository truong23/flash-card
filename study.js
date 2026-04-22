// ================================================================
// AUTH GUARD — redirect to login if session has no access
// ================================================================
(async function () {
  document.documentElement.style.visibility = 'hidden';

  if (typeof flashCardAuth === 'undefined') {
    document.documentElement.style.visibility = '';
    return;
  }

  let resolved = false;
  const unsubscribe = await flashCardAuth.onSessionChange(function (session) {
    if (resolved) return;
    resolved = true;
    if (typeof unsubscribe === 'function') unsubscribe();
    if (!session.hasAccess) {
      flashCardAuth.redirectTo('login');
      return;
    }
    document.documentElement.style.visibility = '';
  });
})();

const WORDS_PER_COLOR = 50;
const CARD_COLOR_SCALE = ['#f8b51e', '#267f94', '#fa501c', '#bb1818', '#1c3e76', '#6a3669'];
const LEVELS = ['A1', 'A2', 'B1', 'B2'];
const MAX_CARDS_PER_SECTION = 406;
const MAX_CHARS_PER_CARD = 150;
const SECTION_WINDOW_OVERSCAN_MULTIPLIER = 0.75;

const levelColors = {
  'A1': '#10b981',
  'A2': '#3b82f6',
  'B1': '#f8b51e',
  'B2': '#267f94'
};

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const filterAllButton = document.getElementById('filterAllButton');
const filterA1Button = document.getElementById('filterA1Button');
const filterA2Button = document.getElementById('filterA2Button');
const filterB1Button = document.getElementById('filterB1Button');
const filterB2Button = document.getElementById('filterB2Button');
const flipChineseButton = document.getElementById('flipChineseButton');
const flipVietnameseButton = document.getElementById('flipVietnameseButton');
const zoomOutButton = document.getElementById('zoomOutButton');
const zoomResetButton = document.getElementById('zoomResetButton');
const zoomInButton = document.getElementById('zoomInButton');
const zoomIndicator = document.getElementById('zoomIndicator');
const wordsContainer = document.getElementById('wordsContainer');
const backToTopButton = document.getElementById('backToTop');

let currentLevelFilter = null;
let currentZoom = 1;
let isRendering = false;
let renderAbortController = new AbortController();
let searchTimeout;
let showBackFace = false;
let searchMatchIndexes = null;
let pendingSearchTargetIndex = null;
let sectionWindowFrame = null;
let backToTopFrame = null;
let resizeTimeout = null;

const dataIndex = buildDataIndex();

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildDataIndex() {
  const counts = {
    A1: 0,
    A2: 0,
    B1: 0,
    B2: 0
  };
  const searchableEntries = [];
  const sectionsByLevel = {
    A1: [],
    A2: [],
    B1: [],
    B2: []
  };
  const processedByLevel = {
    A1: [],
    A2: [],
    B1: [],
    B2: []
  };
  const firstSectionByWordIndex = new Map();
  const sectionsById = new Map();

  vocabularyData.forEach((word, index) => {
    if (!LEVELS.includes(word.level)) {
      return;
    }

    counts[word.level] += 1;
    searchableEntries.push({
      index,
      level: word.level,
      searchText: `${word.chinese}\n${word.pinyin || ''}\n${word.meaning || ''}`.toLowerCase()
    });

    const meaning = word.meaning || '';
    const pinyin = word.pinyin || '';

    if (meaning.length > MAX_CHARS_PER_CARD) {
      const partsCount = Math.ceil(meaning.length / MAX_CHARS_PER_CARD);
      for (let partIndex = 0; partIndex < partsCount; partIndex += 1) {
        processedByLevel[word.level].push({
          originalIndex: index,
          chinese: `${word.chinese} (${partIndex + 1}/${partsCount})`,
          meaning: meaning.substring(
            partIndex * MAX_CHARS_PER_CARD,
            (partIndex + 1) * MAX_CHARS_PER_CARD
          ),
          pinyin
        });
      }
      return;
    }

    processedByLevel[word.level].push({
      originalIndex: index,
      chinese: word.chinese,
      meaning,
      pinyin
    });
  });

  LEVELS.forEach((level) => {
    const processedWords = processedByLevel[level];
    const isMultiPart = processedWords.length > MAX_CARDS_PER_SECTION;

    for (let offset = 0; offset < processedWords.length; offset += MAX_CARDS_PER_SECTION) {
      const part = Math.floor(offset / MAX_CARDS_PER_SECTION) + 1;
      const sectionId = `${level}-${part}`;
      const words = processedWords.slice(offset, offset + MAX_CARDS_PER_SECTION);

      sectionsByLevel[level].push({
        sectionId,
        level,
        part,
        isMultiPart,
        words
      });

      sectionsById.set(sectionId, {
        sectionId,
        level,
        part,
        isMultiPart,
        words
      });

      words.forEach((entry) => {
        if (!firstSectionByWordIndex.has(entry.originalIndex)) {
          firstSectionByWordIndex.set(entry.originalIndex, sectionId);
        }
      });
    }
  });

  return {
    counts,
    searchableEntries,
    sectionsByLevel,
    sectionsById,
    firstSectionByWordIndex
  };
}

function getGridGapSize() {
  const rootStyles = getComputedStyle(document.documentElement);
  return (parseFloat(rootStyles.getPropertyValue('--grid-gap')) || 0) * currentZoom;
}

function fitLevelToViewport(section) {
  const grid = section.querySelector('.words-grid');
  const cards = section.querySelectorAll('.word-card');
  const cardCount = cards.length;
  if (!grid || cardCount === 0) return;

  const rootStyles = getComputedStyle(document.documentElement);
  const baseCardSize = parseFloat(rootStyles.getPropertyValue('--card-size')) || 52;
  const preferredCardSize = baseCardSize * currentZoom;
  const gridGap = getGridGapSize();
  const availableWidth = grid.clientWidth || section.clientWidth;
  const header = section.querySelector('.level-header');
  const headerHeight = header ? header.offsetHeight + 10 : 50;
  const availableHeight = window.innerHeight - headerHeight - 20;

  let bestSize = 8;
  for (let cols = 1; cols <= cardCount; cols += 1) {
    const rows = Math.ceil(cardCount / cols);
    const widthPerCard = (availableWidth - gridGap * (cols - 1)) / cols;
    const heightPerCard = (availableHeight - gridGap * (rows - 1)) / rows;
    const candidateSize = Math.floor(Math.min(widthPerCard, heightPerCard));

    if (candidateSize > bestSize) {
      bestSize = candidateSize;
    }

    if (rows === 1) {
      break;
    }
  }

  const effectiveCardSize = Math.max(10, Math.min(preferredCardSize, bestSize));
  const effectiveCardScale = effectiveCardSize / baseCardSize;

  section.style.setProperty('--effective-card-size', `${effectiveCardSize}px`);
  section.style.setProperty('--effective-card-scale', effectiveCardScale.toFixed(4));
}

function getApproxCardsPerRow(section, grid) {
  const cardSize = parseFloat(getComputedStyle(section).getPropertyValue('--effective-card-size')) || 52;
  const gridGap = getGridGapSize();
  const cardFootprint = Math.max(1, cardSize + gridGap);

  return Math.max(1, Math.floor((grid.clientWidth + gridGap) / cardFootprint));
}

function getCardColor(levelIndex, cardsPerRow) {
  const staggerStride = Math.max(8, cardsPerRow - 1);
  const staggerOffset = Math.floor(levelIndex / staggerStride);
  const adjustedIndex = levelIndex + staggerOffset;
  const paletteIndex = Math.floor(adjustedIndex / WORDS_PER_COLOR) % CARD_COLOR_SCALE.length;

  return CARD_COLOR_SCALE[paletteIndex];
}

function applyLevelColors(section) {
  const grid = section.querySelector('.words-grid');
  const cards = section.querySelectorAll('.word-card');
  if (!grid || cards.length === 0) return;

  const cardsPerRow = getApproxCardsPerRow(section, grid);
  cards.forEach((card, index) => {
    if (!card.style.getPropertyValue('--card-front-color')) {
      card.style.setProperty('--card-front-color', getCardColor(index, cardsPerRow));
    }
  });
}

function applyLevelLayout() {
  document.querySelectorAll('.level-section[data-rendered="true"]').forEach((section) => {
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
    const inlineLevelMatch = normalizedToken.match(/^#(?:(?:sym:)?level)(?::|=)(a1|a2|b1|b2)$/i);

    if (inlineLevelMatch) {
      levelFilter = inlineLevelMatch[1].toUpperCase();
      continue;
    }

    if (normalizedToken === '#sym:level' || normalizedToken === '#level') {
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
    textQuery: textTokens.join(' ').toLowerCase()
  };
}

function updateLevelFilterButtons() {
  const buttons = [{
      element: filterAllButton,
      level: null
    },
    {
      element: filterA1Button,
      level: 'A1',
      class: 'active-a1'
    },
    {
      element: filterA2Button,
      level: 'A2',
      class: 'active-a2'
    },
    {
      element: filterB1Button,
      level: 'B1',
      class: 'active-b1'
    },
    {
      element: filterB2Button,
      level: 'B2',
      class: 'active-b2'
    }
  ];

  buttons.forEach(({
    element,
    level,
    class: activeClass
  }) => {
    element.classList.toggle('active', currentLevelFilter === level);
    if (activeClass) {
      element.classList.toggle(activeClass, currentLevelFilter === level);
    }
  });
}

function buildSectionStatusMarkup(message = 'Cuộn đến đây để tải thẻ nhanh hơn.') {
  return `<div class="section-status">${message}</div>`;
}

function createSectionElement(sectionData) {
  const section = document.createElement('div');
  section.className = 'level-section';
  section.dataset.level = sectionData.level;
  section.dataset.sectionId = sectionData.sectionId;
  section.dataset.rendered = 'false';
  section.style.setProperty('--level-accent', levelColors[sectionData.level] || '#d9dee8');

  const partTitle = sectionData.isMultiPart ? ` - Phần ${sectionData.part}` : '';
  section.innerHTML = `
    <h2 class="level-header">
      <div class="level-header-title">
        <span style="border-left: 4px solid var(--level-accent); padding-left: 10px;">TOCFL ${sectionData.level}${partTitle}</span>
        <span style="color: #64748b; font-size: 0.92rem; font-weight: 600;">${sectionData.words.length} thẻ</span>
      </div>
      <a href="practice/?level=${sectionData.level}" class="btn-practice-inline" title="Luyện tập từ vựng phần này">
        🎯 Luyện tập
      </a>
    </h2>
    <div class="words-grid">
      ${buildSectionStatusMarkup()}
    </div>
  `;

  return section;
}

function getVisibleSections() {
  if (currentLevelFilter) {
    return dataIndex.sectionsByLevel[currentLevelFilter];
  }

  return LEVELS.flatMap((level) => dataIndex.sectionsByLevel[level]);
}

function renderSection(section) {
  if (!section || section.dataset.rendered === 'true') {
    return;
  }

  const sectionId = section.dataset.sectionId;
  const sectionData = dataIndex.sectionsById.get(sectionId);
  if (!sectionData) {
    return;
  }

  const grid = section.querySelector('.words-grid');
  if (!grid) {
    return;
  }

  const cardsMarkup = sectionData.words.map((word) => `
    <div class="word-card level-${sectionData.level}${showBackFace ? ' flipped' : ''}" data-index="${word.originalIndex}">
      <div class="word-card-inner">
        <div class="word-face word-front">${escapeHtml(word.chinese)}</div>
        <div class="word-face word-back">
          <div class="word-back-scrollable">
            <div class="word-back-meaning">${escapeHtml(word.meaning || '')}</div>
            <div class="word-back-pinyin">${escapeHtml(word.pinyin || '')}</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  grid.innerHTML = cardsMarkup;
  section.dataset.rendered = 'true';
  fitLevelToViewport(section);
  applyLevelColors(section);
  updateRenderedSearchHighlights(section);

  if (pendingSearchTargetIndex !== null) {
    focusSearchTarget(pendingSearchTargetIndex);
  }
}

function unrenderSection(section) {
  if (!section || section.dataset.rendered !== 'true') {
    return;
  }

  const grid = section.querySelector('.words-grid');
  if (!grid) {
    return;
  }

  grid.innerHTML = buildSectionStatusMarkup('Đang chờ trong vùng nhìn thấy để tải thẻ.');
  section.dataset.rendered = 'false';
}

function isSectionWithinWindow(section) {
  const rect = section.getBoundingClientRect();
  const overscan = window.innerHeight * SECTION_WINDOW_OVERSCAN_MULTIPLIER;

  return rect.bottom >= -overscan && rect.top <= window.innerHeight + overscan;
}

function updateSectionWindow() {
  sectionWindowFrame = null;

  document.querySelectorAll('.level-section').forEach((section) => {
    if (isSectionWithinWindow(section)) {
      renderSection(section);
      return;
    }

    unrenderSection(section);
  });
}

function scheduleSectionWindowUpdate() {
  if (sectionWindowFrame !== null) {
    return;
  }

  sectionWindowFrame = requestAnimationFrame(updateSectionWindow);
}

function setLevelFilter(level) {
  currentLevelFilter = level;
  updateLevelFilterButtons();
  generateWords();
  handleSearch();
}

function scrollToLevel(level) {
  if (!level) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return;
  }

  const section = document.querySelector(`.level-section[data-level="${level}"]`);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}

function updateStats() {
  document.getElementById('totalWords').textContent = vocabularyData.length;
  document.getElementById('a1Count').textContent = dataIndex.counts.A1;
  document.getElementById('a2Count').textContent = dataIndex.counts.A2;
  document.getElementById('b1Count').textContent = dataIndex.counts.B1;
  document.getElementById('b2Count').textContent = dataIndex.counts.B2;
}

function clearRenderedHighlights() {
  document.querySelectorAll('.word-card.highlight, .word-card.search-target').forEach((card) => {
    card.classList.remove('highlight', 'search-target');
  });
}

function updateRenderedSearchHighlights(scope = document) {
  const cards = scope.querySelectorAll ? scope.querySelectorAll('.word-card') : [];
  cards.forEach((card) => {
    const isMatch = Boolean(searchMatchIndexes && searchMatchIndexes.has(Number(card.dataset.index)));
    card.classList.toggle('highlight', isMatch);
    card.classList.remove('search-target');
  });
}

function focusSearchTarget(wordIndex) {
  clearRenderedHighlights();
  updateRenderedSearchHighlights();

  const targetCard = document.querySelector(`.word-card[data-index="${wordIndex}"]`);
  if (!targetCard) {
    return;
  }

  targetCard.classList.add('search-target');
  targetCard.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}

function revealWord(wordIndex) {
  const sectionId = dataIndex.firstSectionByWordIndex.get(wordIndex);
  if (!sectionId) {
    return;
  }

  const section = document.querySelector(`.level-section[data-section-id="${sectionId}"]`);
  if (!section) {
    return;
  }

  renderSection(section);
  focusSearchTarget(wordIndex);
}

function generateWords() {
  if (isRendering) {
    renderAbortController.abort();
  }

  renderAbortController = new AbortController();
  isRendering = true;
  if (sectionWindowFrame !== null) {
    cancelAnimationFrame(sectionWindowFrame);
    sectionWindowFrame = null;
  }
  wordsContainer.innerHTML = '';

  const fragment = document.createDocumentFragment();
  const sections = getVisibleSections();
  sections.forEach((sectionData) => {
    fragment.appendChild(createSectionElement(sectionData));
  });

  wordsContainer.appendChild(fragment);

  updateSectionWindow();
  applyLevelLayout();
  updateStats();
  isRendering = false;
}

function handleSearch() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    const {
      levelFilter: inlineLevelFilter,
      textQuery
    } = parseSearchQuery(searchInput.value);
    const effectiveLevelFilter = inlineLevelFilter || currentLevelFilter;
    pendingSearchTargetIndex = null;

    if (textQuery === '') {
      searchMatchIndexes = null;
      clearRenderedHighlights();
      if (effectiveLevelFilter) {
        scrollToLevel(effectiveLevelFilter);
      }
      return;
    }

    const matches = [];
    let firstMatchIndex = null;
    dataIndex.searchableEntries.forEach((entry) => {
      if (effectiveLevelFilter && entry.level !== effectiveLevelFilter) {
        return;
      }

      if (!entry.searchText.includes(textQuery)) {
        return;
      }

      matches.push(entry.index);
      if (firstMatchIndex === null) {
        firstMatchIndex = entry.index;
      }
    });

    searchMatchIndexes = new Set(matches);
    updateRenderedSearchHighlights();

    if (firstMatchIndex !== null) {
      pendingSearchTargetIndex = firstMatchIndex;
      revealWord(firstMatchIndex);
    }
  }, 200);
}

function setAllCardsFace(showBack) {
  showBackFace = showBack;
  document.querySelectorAll('.word-card').forEach((card) => {
    card.classList.toggle('flipped', showBack);
  });
}

function applyZoom() {
  document.documentElement.style.setProperty('--card-zoom', currentZoom.toFixed(2));
  zoomIndicator.textContent = `${Math.round(currentZoom * 100)}%`;
  scheduleSectionWindowUpdate();
  requestAnimationFrame(applyLevelLayout);
}

function changeZoom(delta) {
  currentZoom = Math.min(1.8, Math.max(1, Number((currentZoom + delta).toFixed(2))));
  applyZoom();
}

function updateBackToTopVisibility() {
  backToTopButton.classList.toggle('visible', window.scrollY > 500);
}

function scheduleBackToTopVisibilityUpdate() {
  if (backToTopFrame !== null) {
    return;
  }

  backToTopFrame = requestAnimationFrame(() => {
    backToTopFrame = null;
    updateBackToTopVisibility();
  });
}

function handleScroll() {
  scheduleSectionWindowUpdate();
  scheduleBackToTopVisibilityUpdate();
}

function handleResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = window.setTimeout(() => {
    scheduleSectionWindowUpdate();
    requestAnimationFrame(applyLevelLayout);
  }, 80);
}

window.addEventListener('scroll', handleScroll, {
  passive: true
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

wordsContainer.addEventListener('click', (event) => {
  const card = event.target.closest('.word-card');
  if (!card || !wordsContainer.contains(card)) {
    return;
  }

  event.stopPropagation();
  card.classList.toggle('flipped');
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') {
    return;
  }

  event.preventDefault();
  handleSearch();
});
searchButton.addEventListener('click', handleSearch);
filterAllButton.addEventListener('click', () => setLevelFilter(null));
filterA1Button.addEventListener('click', () => setLevelFilter('A1'));
filterA2Button.addEventListener('click', () => setLevelFilter('A2'));
filterB1Button.addEventListener('click', () => setLevelFilter('B1'));
filterB2Button.addEventListener('click', () => setLevelFilter('B2'));
flipChineseButton.addEventListener('click', () => setAllCardsFace(false));
flipVietnameseButton.addEventListener('click', () => setAllCardsFace(true));
zoomOutButton.addEventListener('click', () => changeZoom(-0.15));
zoomResetButton.addEventListener('click', () => {
  currentZoom = 1;
  applyZoom();
});
zoomInButton.addEventListener('click', () => changeZoom(0.15));
window.addEventListener('resize', handleResize, {
  passive: true
});

generateWords();
updateLevelFilterButtons();
updateStats();
applyZoom();
updateBackToTopVisibility();