// ================================================================
// AI & SEMANTIC SIMILARITY SETUP
// ================================================================
import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.0.2';

// Configure for browser-only caching
env.allowLocalModels = false;

let extractor = null;

async function initAI() {
  const container = document.getElementById('modelProgressContainer');
  const bar = document.getElementById('modelProgressBar');
  if (container) container.style.display = 'block';

  try {
    // Model paraphrase-multilingual-MiniLM-L12-v2 supports Vietnamese & Chinese
    extractor = await pipeline('feature-extraction', 'Xenova/paraphrase-multilingual-MiniLM-L12-v2', {
      progress_callback: (data) => {
        if (data.status === 'progress' && bar) {
          bar.style.width = `${data.progress}%`;
        }
        if (data.status === 'ready' && container) {
          container.style.display = 'none';
        }
      }
    });
    console.log("✅ AI Model ready for semantic validation");
  } catch (err) {
    console.error("❌ Lỗi tải Model AI:", err);
    if (container) container.style.display = 'none';
  }
}

initAI();

// ================================================================
// EXPOSE TO WINDOW (for HTML onclick compatibility)
// ================================================================
// We expose these early so they are available as soon as possible
window.selectLevel = selectLevel;
window.selectDirection = selectDirection;
window.startPractice = startPractice;
window.checkAnswer = checkAnswer;
window.showHint = showHint;
window.nextQuestion = nextQuestion;
window.skipQuestion = skipQuestion;
window.restartSession = restartSession;
window.goBack = goBack;
window.closeVocabCard = closeVocabCard;
window.changeSidebarZoom = changeSidebarZoom;
window.openVocabCard = openVocabCard;
window.togglePinyinVisibility = togglePinyinVisibility;

function normalizeReferenceAnswers(referenceAnswers) {
  if (Array.isArray(referenceAnswers)) {
    return referenceAnswers
      .map(item => String(item).trim())
      .filter(Boolean);
  }
  if (typeof referenceAnswers === 'string') {
    return referenceAnswers
      .split('|')
      .map(part => part.trim())
      .filter(Boolean);
  }
  if (referenceAnswers === null || referenceAnswers === undefined) return [];
  return [String(referenceAnswers).trim()].filter(Boolean);
}

function dotProduct(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) sum += a[i] * b[i];
  return sum;
}

async function getSimilarity(text1, text2) {
  if (!extractor) return 0;
  // Use mean pooling and normalization for cosine similarity via dot product
  const out1 = await extractor(text1, { pooling: 'mean', normalize: true });
  const out2 = await extractor(text2, { pooling: 'mean', normalize: true });
  return dotProduct(out1.data, out2.data);
}

// ================================================================
// AUTH GUARD — redirect to login if session has no access
// ================================================================
(async function () {
  document.documentElement.style.visibility = '';
  showScreen('loading');

  if (typeof flashCardAuth === 'undefined') {
    showScreen('setup');
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
    showScreen('setup');
    applyInitialLevelSelection();
  });
})();

/* ================================================================
       STATE
    ================================================================ */
let selectedLevel = null;
let selectedDirection = null;
let exercises = []; // all loaded exercises for current config
let questionSuffSheet = []; // shuffled index array (session-aware)
let currentPosInSheet = 0; // pointer into questionSuffSheet
let isAnswerShown = false;
let attemptCount = 0; // wrong attempts on current question
const PINYIN_STORAGE_KEY = 'practice_pinyin_visible';
let isPinyinVisible = loadPinyinPreference();

function loadPinyinPreference() {
  try {
    const value = localStorage.getItem(PINYIN_STORAGE_KEY);
    if (value === null) return false;
    return value === 'true';
  } catch (e) {
    return false;
  }
}

function savePinyinPreference(value) {
  try {
    localStorage.setItem(PINYIN_STORAGE_KEY, String(value));
  } catch (e) {}
}

/* Settings for flashcard colors (matching study.js) */
const WORDS_PER_COLOR = 50;
const CARD_COLOR_SCALE = ['#f8b51e', '#267f94', '#fa501c', '#bb1818', '#1c3e76', '#6a3669'];

/* ================================================================
   SESSION STORAGE HELPERS
================================================================ */
function getSessionKey(level, direction) {
  return `practice_sheet_${level}_${direction}`;
}

function loadSheet(level, direction) {
  const key = getSessionKey(level, direction);
  try {
    const raw = sessionStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return null;
}

function saveSheet(level, direction, sheet, pos) {
  const key = getSessionKey(level, direction);
  sessionStorage.setItem(key, JSON.stringify({
    sheet,
    pos
  }));
}

function clearSheet(level, direction) {
  const key = getSessionKey(level, direction);
  sessionStorage.removeItem(key);
}

/* ================================================================
   FISHER-YATES SHUFFLE
================================================================ */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ================================================================
   SETUP SCREEN LOGIC
================================================================ */
function selectLevel(level) {
  selectedLevel = level;
  document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById(`lvl${level}`).classList.add('selected');
  updateStartButton();
  updateSessionHint();
}

function selectDirection(dir) {
  selectedDirection = dir;
  document.querySelectorAll('.dir-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById(dir === 'zh_vi' ? 'dirZhVi' : 'dirViZh').classList.add('selected');
  updateStartButton();
  updateSessionHint();
}

function updateStartButton() {
  const btn = document.getElementById('btnStart');
  btn.disabled = !(selectedLevel && selectedDirection);
}

function updateSessionHint() {
  const hint = document.getElementById('sessionHint');
  if (!selectedLevel || !selectedDirection) {
    hint.innerHTML = '';
    return;
  }
  const saved = loadSheet(selectedLevel, selectedDirection);
  if (saved && saved.sheet && saved.pos < saved.sheet.length) {
    const remaining = saved.sheet.length - saved.pos;
    hint.innerHTML = `
      <span class="session-info-badge">
        💾 Tiếp tục từ câu ${saved.pos + 1} &mdash; còn ${remaining} câu trong vòng này
      </span>
    `;
  } else {
    hint.innerHTML = `
      <span class="session-info-badge">
        🎲 Sẽ tạo thứ tự câu hỏi ngẫu nhiên mới
      </span>
    `;
  }
}

/* ================================================================
   LOAD EXERCISES + INIT SHEET
================================================================ */
async function startPractice() {
  if (!selectedLevel || !selectedDirection) return;

  showScreen('loading');

  // Small delay for UX feel
  await new Promise(r => setTimeout(r, 400));

  const key = `${selectedLevel}_${selectedDirection}`;
  let data = null;
  try {
    const res = await fetch(`/exercises/${key}.json`);
    if (res.ok) {
      data = await res.json();
    }
  } catch (err) {
    console.error("Lỗi khi tải file JSON:", err);
  }

  if (!data || data.length === 0) {
    showScreen('setup');
    alert(`Không tìm thấy dữ liệu bài tập cho cấp độ: ${key}\nHãy chắc chắn file exercises/${key}.json đã tồn tại.`);
    return;
  }

  exercises = data;

  // Build or restore questionSuffSheet
  const saved = loadSheet(selectedLevel, selectedDirection);
  if (saved && saved.sheet && Array.isArray(saved.sheet) && saved.pos <= saved.sheet.length) {
    questionSuffSheet = saved.sheet;
    currentPosInSheet = saved.pos;
    // Validate indices still in range
    if (questionSuffSheet.some(i => i >= exercises.length)) {
      questionSuffSheet = shuffle(exercises.map((_, i) => i));
      currentPosInSheet = 0;
    }
  } else {
    questionSuffSheet = shuffle(exercises.map((_, i) => i));
    currentPosInSheet = 0;
  }

  saveSheet(selectedLevel, selectedDirection, questionSuffSheet, currentPosInSheet);

  renderSidebarCards(selectedLevel);
  setupPracticeUI();
  showQuestion();
}

/* ================================================================
   SIDEBAR FLASHCARDS
================================================================ */
function renderSidebarCards(level) {
  const grid = document.getElementById('sidebarCardsGrid');
  const bandNameSpan = document.getElementById('sidebarBandName');

  if (!grid || !bandNameSpan) return;

  bandNameSpan.textContent = level;
  grid.innerHTML = '';

  if (typeof vocabularyData === 'undefined') return;

  const cards = vocabularyData.filter(w => w.level === level);

  cards.forEach((word, index) => {
    const cardEl = document.createElement('div');
    cardEl.className = `word-card level-${level}`;
    cardEl.onclick = () => cardEl.classList.toggle('flipped');

    // Assign color based on index, same as study.js
    const paletteIndex = Math.floor(index / WORDS_PER_COLOR) % CARD_COLOR_SCALE.length;
    cardEl.style.setProperty('--card-front-color', CARD_COLOR_SCALE[paletteIndex]);

    cardEl.innerHTML = `
      <div class="word-card-inner">
        <div class="word-face word-front">${escapeHtml(word.chinese)}</div>
        <div class="word-face word-back">
          <div class="word-back-scrollable">
            <div class="word-back-meaning">${escapeHtml(word.meaning || '')}</div>
            <div class="word-back-pinyin">${escapeHtml(word.pinyin || '')}</div>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(cardEl);
  });
}

/* ================================================================
   PRACTICE UI SETUP
================================================================ */
function setupPracticeUI() {
  // Badges
  const lvlBadge = document.getElementById('badgeLevel');
  lvlBadge.textContent = `Band ${selectedLevel}`;
  lvlBadge.className = `badge badge-level-${selectedLevel}`;

  const dirBadge = document.getElementById('badgeDir');
  dirBadge.textContent = selectedDirection === 'zh_vi' ? '🇨🇳 → 🇻🇳' : '🇻🇳 → 🇨🇳';

  // Answer label
  const answerLabel = document.getElementById('answerAreaLabel');
  if (selectedDirection === 'zh_vi') {
    answerLabel.textContent = '✏️ Dịch sang tiếng Việt';
    document.getElementById('answerInput').classList.remove('is-chinese-answer');
    document.getElementById('answerInput').placeholder = 'Nhập câu dịch tiếng Việt của bạn…';
  } else {
    answerLabel.textContent = '✏️ Dịch sang tiếng Trung';
    document.getElementById('answerInput').classList.add('is-chinese-answer');
    document.getElementById('answerInput').placeholder = '請輸入您的翻譯…';
  }

  showScreen('practice');
}

/* ================================================================
   SHOW QUESTION
================================================================ */
function showQuestion() {
  // Check if we've exhausted the sheet
  if (currentPosInSheet >= questionSuffSheet.length) {
    // Session complete — celebrate then reset
    showScreen('done');
    return;
  }

  isAnswerShown = false;

  const idx = questionSuffSheet[currentPosInSheet];
  const q = exercises[idx];

  // Update counter + progress
  const total = questionSuffSheet.length;
  const current = currentPosInSheet + 1;
  const completedCount = currentPosInSheet;
  document.getElementById('practiceCounter').innerHTML =
    `<strong>${completedCount}</strong> câu đã làm`;
  document.getElementById('progressFill').style.width =
    `${((current - 1) / total) * 100}%`;

  // Direction label
  document.getElementById('questionDirLabel').textContent =
    selectedDirection === 'zh_vi' ? '🇨🇳 Đọc câu tiếng Trung và dịch sang tiếng Việt' : '🇻🇳 Đọc câu tiếng Việt và dịch sang tiếng Trung';

  // Source text
  const sourceEl = document.getElementById('questionSource');
  sourceEl.textContent = q.sourceText;
  if (selectedDirection === 'zh_vi') {
    sourceEl.classList.add('is-chinese');
  } else {
    sourceEl.classList.remove('is-chinese');
  }

  // Pinyin handling
  const pinyinRow = document.getElementById('questionPinyinRow');
  const pinyinEl = document.getElementById('questionPinyin');
  const toggleBtn = document.getElementById('btnTogglePinyin');
  const pinyinText = (q.pinyin || '').trim();
  if (pinyinRow && pinyinEl && toggleBtn) {
    pinyinEl.textContent = pinyinText;
    updatePinyinVisibility();
  }



  // Reset hint
  document.getElementById('btnHint').disabled = false;
  document.getElementById('btnHint').textContent = '💡 Gợi ý';

  // Reset answer area (also reset placeholder in case hint was shown)
  const textarea = document.getElementById('answerInput');
  textarea.value = '';
  textarea.disabled = false;
  if (selectedDirection === 'zh_vi') {
    textarea.placeholder = 'Nhập câu dịch tiếng Việt của bạn…';
  } else if (isPinyinVisible && pinyinText) {
    textarea.placeholder = pinyinText;
  } else {
    textarea.placeholder = '請輸入您的翻譯…';
  }
  textarea.focus();

  // Reset feedback
  hideWrongFeedback();


  // Reset UI
  document.getElementById('wrongPanel').classList.remove('visible');
  document.getElementById('correctPanel').classList.remove('visible');
  document.getElementById('answerInput').disabled = false;
  document.getElementById('answerInput').value = '';
  document.getElementById('btnCheck').style.display = 'block';
  document.getElementById('btnHint').textContent = '💡 Gợi ý';
  attemptCount = 0;

  // Animate card
  const card = document.getElementById('questionCard');
  card.classList.remove('exit');
  void card.offsetWidth; // reflow
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = '';
}

/* ================================================================
   ANSWER COMPARISON
================================================================ */
async function checkAnswerCorrect(userAnswer, referenceAnswers) {
  function isCJK(c) {
    const code = c.codePointAt(0);
    return (code >= 0x4E00 && code <= 0x9FFF) ||
      (code >= 0x3400 && code <= 0x4DBF) ||
      (code >= 0x20000 && code <= 0x2A6DF);
  }

  const refs = normalizeReferenceAnswers(referenceAnswers);

  // Determine language context from reference answers
  const isChineseTarget = refs.some(ref => {
    const cjk = [...ref].filter(isCJK);
    return cjk.length > 0;
  });

  function normalize(s, isChinese) {
    let norm = s
      .toLowerCase()
      .replace(/[.,!?%。，！？；：、「」『』【】《》〈〉“”‘’()（）…—]/g, '')
      .trim();

    if (isChinese) {
      const cnNums = {
        '0': '零',
        '1': '一',
        '2': '二',
        '3': '三',
        '4': '四',
        '5': '五',
        '6': '六',
        '7': '七',
        '8': '八',
        '9': '九',
        '10': '十'
      };
      norm = norm.replace(/[0-9]/g, m => cnNums[m] || m);
      return norm.replace(/\s+/g, '');
    } else {
      const viNums = {
        '0': 'không',
        '1': 'một',
        '2': 'hai',
        '3': 'ba',
        '4': 'bốn',
        '5': 'năm',
        '6': 'sáu',
        '7': 'bảy',
        '8': 'tám',
        '9': 'chín',
        '10': 'mười'
      };
      norm = norm.replace(/\b([0-9]|10)\b/g, m => viNums[m] || m);
      return norm.replace(/\s+/g, ' ');
    }
  }

  function levenshtein(a, b) {
    const tmp = [];
    for (let i = 0; i <= a.length; i++) tmp[i] = [i];
    for (let j = 0; j <= b.length; j++) tmp[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        tmp[i][j] = a[i - 1] === b[j - 1] ?
          tmp[i - 1][j - 1] :
          Math.min(tmp[i - 1][j - 1] + 1, tmp[i][j - 1] + 1, tmp[i - 1][j] + 1);
      }
    }
    return tmp[a.length][b.length];
  }

  const userNorm = normalize(userAnswer, isChineseTarget);
  if (!userNorm) return false;

  console.log(`%c[Kiểm tra đáp án] Nhập: "${userNorm}"`, "color: #3b82f6; font-weight: bold;");

  const lexicalMatch = refs.some(ref => {
    const refNorm = normalize(ref, isChineseTarget);
    if (userNorm === refNorm) {
      console.log(`  ✅ Khớp tuyệt đối với: "${refNorm}"`);
      return true;
    }

    let similarity = 0;
    let threshold = isChineseTarget ? 0.95 : 0.90;

    if (isChineseTarget) {
      const refChars = [...refNorm].filter(isCJK);
      const userChars = [...userNorm].filter(isCJK);
      if (refChars.length === 0) return false;
      const dist = levenshtein(refChars, userChars);
      similarity = 1 - (dist / Math.max(refChars.length, userChars.length));
    } else {
      const refWords = refNorm.split(' ').filter(Boolean);
      const userWords = userNorm.split(' ').filter(Boolean);
      if (refWords.length === 0) return false;
      const dist = levenshtein(refWords, userWords);
      similarity = 1 - (dist / Math.max(refWords.length, userWords.length));
    }

    const isPass = similarity >= threshold;
    console.log(`  ${isPass ? '✅' : '❌'} So với: "${refNorm}" | Khớp: ${(similarity * 100).toFixed(1)}% | Ngưỡng: ${threshold * 100}%`);

    return isPass;
  });

  if (lexicalMatch) return true;

  // --- SEMANTIC CHECK (AI) ---
  if (extractor) {
    console.log("%c[AI Check] Đang phân tích ngữ nghĩa...", "color: #7c3aed; font-weight: bold;");
    for (const ref of refs) {
      const score = await getSimilarity(userAnswer, ref);
      console.log(`  🤖 So với: "${ref}" | Khớp ngữ nghĩa: ${(score * 100).toFixed(1)}%`);
      // 0.82 is a safe threshold for "very similar" meanings in this model
      if (score >= 0.82) {
        console.log("  ✅ AI chấp nhận đáp án này!");
        return true;
      }
    }
  }

  return false;
}

/* ================================================================
   CHECK ANSWER
================================================================ */
async function checkAnswer() {
  if (isAnswerShown) return;

  const textarea = document.getElementById('answerInput');
  const userAnswer = textarea.value.trim();

  // Empty answer — shake textarea
  if (!userAnswer) {
    textarea.classList.remove('shake');
    void textarea.offsetWidth;
    textarea.classList.add('shake');
    setTimeout(() => textarea.classList.remove('shake'), 500);
    return;
  }

  const idx = questionSuffSheet[currentPosInSheet];
  const q = exercises[idx];
  const isCorrect = await checkAnswerCorrect(userAnswer, q.referenceAnswers);

  if (isCorrect) {
    // --- CORRECT ---
    isAnswerShown = true;
    document.getElementById('wrongPanel').classList.remove('visible');
    document.getElementById('correctPanel').classList.add('visible');
    textarea.disabled = true;
    document.getElementById('btnCheck').style.display = 'none';
    document.getElementById('btnHint').disabled = true;
    // Auto-advance after 1.3s
    setTimeout(() => nextQuestion(), 1300);
  } else {
    // --- WRONG ---
    attemptCount++;
    const wrongPanel = document.getElementById('wrongPanel');
    const wrongText = document.getElementById('wrongPanelText');
    const attemptEl = document.getElementById('wrongAttemptCount');

    // Vary message
    if (attemptCount === 1) wrongText.textContent = 'Chưa đúng! Hãy thử lại…';
    else if (attemptCount === 2) wrongText.textContent = 'Vẫn chưa đúng, thử lại nhé!';
    else wrongText.textContent = 'Có thể dùng gợi ý để xem đáp án!';

    attemptEl.textContent = `Lần ${attemptCount}`;
    wrongPanel.classList.add('visible');

    // Show detailed feedback (highlights always, correct answer after 3 attempts)
    showWrongFeedback(userAnswer, q, attemptCount);


    // Shake textarea
    textarea.classList.remove('shake');
    void textarea.offsetWidth;
    textarea.classList.add('shake');
    setTimeout(() => textarea.classList.remove('shake'), 450);

    // Keep focus so user can correct their answer
    textarea.focus();
    textarea.select();
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ================================================================
   NAVIGATION
================================================================ */
function nextQuestion() {
  currentPosInSheet++;
  saveSheet(selectedLevel, selectedDirection, questionSuffSheet, currentPosInSheet);

  const card = document.getElementById('questionCard');
  card.classList.add('exit');
  setTimeout(() => {
    card.classList.remove('exit');
    showQuestion();
  }, 280);
}

function skipQuestion() {
  // Move current question to end of remaining sheet so it appears later
  if (currentPosInSheet < questionSuffSheet.length - 1) {
    const skipped = questionSuffSheet.splice(currentPosInSheet, 1)[0];
    questionSuffSheet.push(skipped);
    saveSheet(selectedLevel, selectedDirection, questionSuffSheet, currentPosInSheet);
  } else {
    // Last question, just advance (will trigger done)
    currentPosInSheet++;
    saveSheet(selectedLevel, selectedDirection, questionSuffSheet, currentPosInSheet);
  }

  isAnswerShown = false;
  const card = document.getElementById('questionCard');
  card.classList.add('exit');
  setTimeout(() => {
    card.classList.remove('exit');
    showQuestion();
  }, 280);
}

function restartSession() {
  // New shuffle, reset pos
  questionSuffSheet = shuffle(exercises.map((_, i) => i));
  currentPosInSheet = 0;
  saveSheet(selectedLevel, selectedDirection, questionSuffSheet, currentPosInSheet);
  setupPracticeUI();
  showQuestion();
}

function goBack() {
  showScreen('setup');
  updateSessionHint();
}

/* ================================================================
   SCREEN SWITCHER
================================================================ */
function showScreen(name) {
  document.getElementById('screen-loading').classList.remove('active');
  document.getElementById('screen-setup').style.display = 'none';
  document.getElementById('screen-practice').classList.remove('active');
  document.getElementById('screen-done').classList.remove('active');

  if (name === 'loading') {
    document.getElementById('screen-loading').classList.add('active');
  } else if (name === 'setup') {
    document.getElementById('screen-setup').style.display = 'block';
  } else if (name === 'practice') {
    document.getElementById('screen-practice').classList.add('active');
  } else if (name === 'done') {
    const done = document.getElementById('screen-done');
    done.classList.add('active');
    done.querySelector('#doneSubText').textContent =
      `Bạn đã luyện xong ${questionSuffSheet.length} câu trong vòng này. Nhấn "Luyện tập tiếp" để tạo thứ tự mới và tiếp tục!`;
  }
}

/* ================================================================
   HINT FUNCTION
================================================================ */
function showHint() {
  const idx = questionSuffSheet[currentPosInSheet];
  const q = exercises[idx];
  const refs = normalizeReferenceAnswers(q.referenceAnswers);
  const hint = refs[0] || '';
  const textarea = document.getElementById('answerInput');
  textarea.placeholder = hint;
  textarea.focus();
  const btn = document.getElementById('btnHint');
  btn.textContent = '💡 Đang hiện gợi ý';
  btn.disabled = true;
}

function updatePinyinVisibility() {
  const pinyinRow = document.getElementById('questionPinyinRow');
  const pinyinEl = document.getElementById('questionPinyin');
  const toggleBtn = document.getElementById('btnTogglePinyin');
  if (!pinyinRow || !pinyinEl || !toggleBtn) return;

  if (selectedDirection === 'vi_zh') {
    const hasPinyin = pinyinEl.textContent.trim().length > 0;
    pinyinRow.style.display = hasPinyin ? 'flex' : 'none';
    pinyinEl.style.display = 'none';
    if (hasPinyin) {
      toggleBtn.textContent = isPinyinVisible ? 'Ẩn pinyin' : 'Hiện pinyin';
      toggleBtn.setAttribute('aria-pressed', String(isPinyinVisible));
    }
    const textarea = document.getElementById('answerInput');
    if (textarea) {
      const pinyinText = pinyinEl.textContent.trim();
      textarea.placeholder = isPinyinVisible && pinyinText ? pinyinText : '請輸入您的翻譯…';
    }
    return;
  }

  const hasPinyin = pinyinEl.textContent.trim().length > 0;
  pinyinRow.style.display = hasPinyin ? 'flex' : 'none';
  if (!hasPinyin) return;

  pinyinEl.style.display = isPinyinVisible ? 'block' : 'none';
  toggleBtn.textContent = isPinyinVisible ? 'Ẩn pinyin' : 'Hiện pinyin';
  toggleBtn.setAttribute('aria-pressed', String(isPinyinVisible));

}

function togglePinyinVisibility() {
  isPinyinVisible = !isPinyinVisible;
  savePinyinPreference(isPinyinVisible);
  updatePinyinVisibility();
}

/* ================================================================
   VOCABULARY CARD POPUP
================================================================ */
function openVocabCard(chinese) {
  if (typeof vocabularyData === 'undefined') return;

  const matches = vocabularyData.filter(w => w.chinese === chinese);

  const overlay = document.getElementById('vocabOverlay');
  const vcChinese = document.getElementById('vcChinese');
  const vcPinyin = document.getElementById('vcPinyin');
  const vcLevelWrap = document.getElementById('vcLevelWrap');
  const vcEntries = document.getElementById('vcEntries');

  vcChinese.textContent = chinese;

  if (matches.length === 0) {
    vcPinyin.textContent = '';
    vcLevelWrap.innerHTML = '';
    vcEntries.innerHTML = `<div class="vocab-not-found">Không tìm thấy từ "${escapeHtml(chinese)}" trong từ điển.</div>`;
  } else {
    // Pinyin: take first unique
    vcPinyin.textContent = matches[0].pinyin || '';

    // Level badge
    const level = matches[0].level || '';
    const levelColors = {
      A1: '#10b981',
      A2: '#3b82f6',
      B1: '#f59e0b',
      B2: '#06b6d4'
    };
    const lc = levelColors[level] || '#7c3aed';
    vcLevelWrap.innerHTML = `<span class="vocab-level-badge" style="background:${lc}22;color:${lc};border:1px solid ${lc}44;">Band ${level}</span>`;

    // Entries (multiple POS)
    vcEntries.innerHTML = '';
    matches.forEach(m => {
      const entry = document.createElement('div');
      entry.className = 'vocab-entry';
      entry.innerHTML = `
        <span class="vocab-pos">${escapeHtml(m.part_of_speech || '?')}</span>
        <span class="vocab-meaning">${escapeHtml(m.meaning || '')}</span>
      `;
      vcEntries.appendChild(entry);
    });
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVocabCard(e) {
  if (e && e.target !== document.getElementById('vocabOverlay')) return;
  document.getElementById('vocabOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function (e) {
  // Escape: close vocab popup
  if (e.key === 'Escape') {
    const overlay = document.getElementById('vocabOverlay');
    if (overlay.classList.contains('open')) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      return;
    }
  }

  if (!document.getElementById('screen-practice').classList.contains('active')) return;
  if (document.getElementById('vocabOverlay').classList.contains('open')) return;

  // Enter in textarea (not Shift+Enter) → check answer
  if (e.key === 'Enter' && !e.shiftKey) {
    const focused = document.activeElement;
    if (focused && focused.id === 'answerInput' && !isAnswerShown) {
      e.preventDefault();
      checkAnswer();
    }
  }
});

/* ================================================================
   SIDEBAR ZOOM
================================================================ */
let sidebarZoom = 1;

function changeSidebarZoom(delta) {
  sidebarZoom = Math.min(2, Math.max(0.5, Number((sidebarZoom + delta).toFixed(2))));
  const sidebar = document.querySelector('.practice-sidebar-col');
  if (sidebar) {
    const BASE_CARD_SIZE = 80; // matches --card-size: 80px in CSS
    const size = Math.round(BASE_CARD_SIZE * sidebarZoom);
    sidebar.style.setProperty('--effective-card-size', size + 'px');
    sidebar.style.setProperty('--effective-card-scale', sidebarZoom.toFixed(2));
  }
  const indicator = document.getElementById('sidebarZoomIndicator');
  if (indicator) indicator.textContent = `${Math.round(sidebarZoom * 100)}%`;
}

/* ================================================================
   INIT
================================================================ */
// Parse URL config
function getInitialLevelFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const levelParam = params.get('level');
  if (levelParam) return levelParam;

  const hash = window.location.hash || '';
  const hashParams = new URLSearchParams(hash.replace(/^#/, ''));
  return hashParams.get('level');
}

function applyInitialLevelSelection() {
  const initialLevel = getInitialLevelFromUrl();
  if (!initialLevel) return;

  const normalized = initialLevel.toUpperCase();
  if (!['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].includes(normalized)) return;

  const targetButton = document.getElementById(`lvl${normalized}`);
  if (!targetButton) return;

  selectLevel(normalized);
}

// Start on setup screen
showScreen('setup');

// Pre-select level if provided in URL
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(applyInitialLevelSelection);
  });
} else {
  requestAnimationFrame(applyInitialLevelSelection);
}


/**
 * Duolingo-style diff:
 * Marks each token in userAnswer as correct/wrong based on the best matching reference.
 */
function showWrongFeedback(userAnswer, q, attemptCount) {
  const container = document.getElementById('wrongFeedbackContainer');
  const isChinese = q.direction === 'vi_zh';
  const refs = normalizeReferenceAnswers(q.referenceAnswers);
  if (refs.length === 0) return;

  // 1. Helper: Tokenize based on language
  const tokenize = (s) => {
    if (!s) return [];
    if (isChinese) {
      return [...s.replace(/[.,!?。，！？]/g, '').replace(/\s+/g, '')];
    } else {
      return s.replace(/[.,!?。，！？]/g, '').split(/\s+/).filter(Boolean);
    }
  };

  const userTokens = tokenize(userAnswer);
  if (userTokens.length === 0) return;

  // 2. Find best reference (most token overlap)
  let bestRef = refs[0];
  let maxMatch = -1;

  refs.forEach(ref => {
    const refTokens = tokenize(ref);
    const refSet = new Set(refTokens.map(t => t.toLowerCase()));

    let matches = 0;
    userTokens.forEach(t => {
      if (refSet.has(t.toLowerCase())) matches++;
    });

    if (matches > maxMatch) {
      maxMatch = matches;
      bestRef = ref;
    }
  });

  const finalRefTokens = tokenize(bestRef);
  const finalRefSet = new Set(finalRefTokens.map(t => t.toLowerCase()));

  // 3. Generate HTML with highlights
  let html = `
    <div class="wrong-feedback-container">
      <div class="diff-title"><span>⚠️</span> Phân tích lỗi:</div>
      <div class="diff-text">
  `;

  userTokens.forEach(token => {
    const isCorrect = finalRefSet.has(token.toLowerCase());
    const cls = isCorrect ? 'correct' : 'wrong';
    html += `<span class="diff-token ${cls}">${escapeHtml(token)}</span>`;
  });

  html += `</div>`;

  // Show correct answer only after 3 attempts
  if (attemptCount >= 3) {
    html += `
      <div class="diff-correct-answer">
        <span>💡 Đáp án chuẩn:</span><br/>
        <strong>${escapeHtml(bestRef)}</strong>
      </div>
    `;
  }

  html += `</div>`;

  container.innerHTML = html;
  container.style.display = 'block';
}

function hideWrongFeedback() {
  const container = document.getElementById('wrongFeedbackContainer');
  if (container) {
    container.style.display = 'none';
    container.innerHTML = '';
  }
}

// ================================================================
// EXPOSE TO WINDOW (for HTML onclick compatibility)
// ================================================================
window.selectLevel = selectLevel;
window.selectDirection = selectDirection;
window.startPractice = startPractice;
window.checkAnswer = checkAnswer;
window.showHint = showHint;
window.nextQuestion = nextQuestion;
window.skipQuestion = skipQuestion;
window.restartSession = restartSession;
window.goBack = goBack;
window.closeVocabCard = closeVocabCard;
window.changeSidebarZoom = changeSidebarZoom;
window.openVocabCard = openVocabCard;