/* ================================================================
       STATE
    ================================================================ */
let selectedLevel = null;
let selectedDirection = null;
let exercises = [];         // all loaded exercises for current config
let questionSuffSheet = []; // shuffled index array (session-aware)
let currentPosInSheet = 0;  // pointer into questionSuffSheet
let isAnswerShown = false;
let attemptCount = 0;       // wrong attempts on current question

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
  } catch (e) { }
  return null;
}

function saveSheet(level, direction, sheet, pos) {
  const key = getSessionKey(level, direction);
  sessionStorage.setItem(key, JSON.stringify({ sheet, pos }));
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
  document.getElementById('practiceCounter').innerHTML =
    `<strong>${current}</strong> / ${total}`;
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



  // Reset hint
  document.getElementById('btnHint').disabled = false;
  document.getElementById('btnHint').textContent = '💡 Gợi ý';

  // Reset answer area (also reset placeholder in case hint was shown)
  const textarea = document.getElementById('answerInput');
  textarea.value = '';
  textarea.disabled = false;
  textarea.placeholder = selectedDirection === 'zh_vi'
    ? 'Nhập câu dịch tiếng Việt của bạn…'
    : '請輸入您的翻譯…';
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
function checkAnswerCorrect(userAnswer, referenceAnswers) {
  function isCJK(c) {
    const code = c.codePointAt(0);
    return (code >= 0x4E00 && code <= 0x9FFF) || 
           (code >= 0x3400 && code <= 0x4DBF) ||
           (code >= 0x20000 && code <= 0x2A6DF);
  }

  // Determine language context from reference answers
  const isChineseTarget = referenceAnswers.some(ref => {
    const cjk = [...ref].filter(isCJK);
    return cjk.length > 0; // if any CJK, it's a Chinese exercise
  });

  function normalize(s, isChinese) {
    let norm = s
      .toLowerCase()
      .replace(/[.,!?。，！？；：、「」『』【】《》〈〉“”‘’()（）…—]/g, '')
      .trim();
    
    if (isChinese) {
      const cnNums = {'0':'零','1':'一','2':'二','3':'三','4':'四','5':'五','6':'六','7':'七','8':'八','9':'九','10':'十'};
      norm = norm.replace(/[0-9]/g, m => cnNums[m] || m);
      return norm.replace(/\s+/g, '');
    } else {
      const viNums = {'0':'không','1':'một','2':'hai','3':'ba','4':'bốn','5':'năm','6':'sáu','7':'bảy','8':'tám','9':'chín','10':'mười'};
      norm = norm.replace(/\b([0-9]|10)\b/g, m => viNums[m] || m);
      return norm.replace(/\s+/g, ' ');
    }
  }

  const userNorm = normalize(userAnswer, isChineseTarget);
  if (!userNorm) return false;

  return referenceAnswers.some(ref => {
    const refNorm = normalize(ref, isChineseTarget);
    if (userNorm === refNorm) return true;

    const refCJK = [...refNorm].filter(isCJK);
    if (refCJK.length > 0) {
      const userCJKSet = new Set([...userNorm].filter(isCJK));
      const missing = refCJK.filter(c => !userCJKSet.has(c));
      const tolerance = Math.ceil(refCJK.length * 0.15);
      return missing.length <= tolerance;
    }

    const refWords = refNorm.split(' ').filter(Boolean);
    const userWordsSet = new Set(userNorm.split(' ').filter(Boolean));
    if (!refWords.length) return false;
    const matched = refWords.filter(w => userWordsSet.has(w)).length;
    return (matched / refWords.length) >= 0.80;
  });
}

/* ================================================================
   CHECK ANSWER
================================================================ */
function checkAnswer() {
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
  const isCorrect = checkAnswerCorrect(userAnswer, q.referenceAnswers);

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
  const hint = q.referenceAnswers[0] || '';
  const textarea = document.getElementById('answerInput');
  textarea.placeholder = hint;
  textarea.focus();
  const btn = document.getElementById('btnHint');
  btn.textContent = '💡 Đang hiện gợi ý';
  btn.disabled = true;
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
    const levelColors = { A1: '#10b981', A2: '#3b82f6', B1: '#f59e0b', B2: '#06b6d4' };
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
   INIT
================================================================ */
// Parse URL config
const urlParams = new URLSearchParams(window.location.search);
const initialLevel = urlParams.get('level');

// Start on setup screen
showScreen('setup');

// Pre-select level if provided in URL
if (initialLevel && ['A1', 'A2', 'B1', 'B2'].includes(initialLevel.toUpperCase())) {
  selectLevel(initialLevel.toUpperCase());
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Duolingo-style diff:
 * Marks each token in userAnswer as correct/wrong based on the best matching reference.
 */
function showWrongFeedback(userAnswer, q, attemptCount) {
  const container = document.getElementById('wrongFeedbackContainer');
  const isChinese = q.direction === 'vi_zh';

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
  let bestRef = q.referenceAnswers[0];
  let maxMatch = -1;

  q.referenceAnswers.forEach(ref => {
    const refTokens = tokenize(ref);
    const refSet = new Set(refTokens.map(t => t.toLowerCase()));
    
    let matches = 0;
    userTokens.forEach(t => { if(refSet.has(t.toLowerCase())) matches++; });

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
