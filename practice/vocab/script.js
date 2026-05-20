// ================================================================
// AUTH GUARD
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

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];

const dom = {
  screenSetup: document.getElementById('screen-setup'),
  screenPractice: document.getElementById('screen-practice'),
  btnStart: document.getElementById('btnStart'),
  levelButtons: document.querySelectorAll('.level-btn'),
  directionButtons: document.querySelectorAll('.dir-btn'),
  tableHead: document.getElementById('tableHead'),
  tableBody: document.getElementById('tableBody'),
  pillLevel: document.getElementById('pillLevel'),
  pillDirection: document.getElementById('pillDirection'),
  scoreText: document.getElementById('scoreText'),
  btnBack: document.getElementById('btnBack'),
  btnReset: document.getElementById('btnReset')
};

let selectedLevel = null;
let selectedDirection = null;
let currentWords = [];
let rowStates = new Map();

function showScreen(name) {
  dom.screenSetup.classList.toggle('active', name === 'setup');
  dom.screenPractice.classList.toggle('active', name === 'practice');
}

function updateStartButton() {
  dom.btnStart.disabled = !(selectedLevel && selectedDirection);
}

function selectLevel(level) {
  selectedLevel = level;
  dom.levelButtons.forEach((btn) => {
    btn.classList.toggle('selected', btn.dataset.level === level);
  });
  updateStartButton();
}

function selectDirection(direction) {
  selectedDirection = direction;
  dom.directionButtons.forEach((btn) => {
    btn.classList.toggle('selected', btn.dataset.direction === direction);
  });
  updateStartButton();
}

function normalizeText(text, isChinese) {
  const raw = String(text || '')
    .toLowerCase()
    .replace(/[.,!?%。，！？；：、“”‘’"'()（）…—]/g, ' ')
    .trim();

  if (isChinese) {
    return raw.replace(/\s+/g, '');
  }
  return raw.replace(/\s+/g, ' ');
}

function expandParentheses(value) {
  const variants = new Set([value]);
  const removedContent = value.replace(/\s*[\(（][^)）]*[\)）]\s*/g, '');
  const withoutParens = value.replace(/[()（）]/g, '');

  if (removedContent && removedContent !== value) variants.add(removedContent);
  if (withoutParens && withoutParens !== value) variants.add(withoutParens);
  return Array.from(variants);
}

function buildChineseAnswers(chinese) {
  const base = String(chinese || '').trim();
  if (!base) return [];

  const parts = base.split(/[\/、;；]/g).map(part => part.trim()).filter(Boolean);
  const variants = new Set();

  parts.forEach((part) => {
    expandParentheses(part).forEach((variant) => {
      variants.add(variant);
    });
  });

  return Array.from(variants);
}

function buildVietnameseAnswers(meaning) {
  const base = String(meaning || '').trim();
  if (!base) return [];

  const parts = base.split(/[;,/、]/g).map(part => part.trim()).filter(Boolean);
  const variants = new Set(parts);
  variants.add(base);
  return Array.from(variants);
}

function isAnswerCorrect(value, word) {
  if (!value.trim()) return null;

  if (selectedDirection === 'vi_zh') {
    const answers = buildChineseAnswers(word.chinese);
    const user = normalizeText(value, true);
    return answers.some(ans => normalizeText(ans, true) === user);
  }

  const answers = buildVietnameseAnswers(word.meaning);
  const user = normalizeText(value, false);
  return answers.some(ans => normalizeText(ans, false) === user);
}

function updateScore() {
  const total = currentWords.length;
  let correct = 0;
  rowStates.forEach((state) => {
    if (state === true) correct += 1;
  });
  dom.scoreText.textContent = `Dung ${correct}/${total}`;
}

function renderTable() {
  dom.tableHead.innerHTML = '';
  dom.tableBody.innerHTML = '';
  rowStates = new Map();

  if (selectedDirection === 'vi_zh') {
    dom.tableHead.innerHTML = `
      <tr>
        <th>tieng viet</th>
        <th>nhap tieng trung</th>
        <th>kiem tra</th>
      </tr>
    `;
  } else {
    dom.tableHead.innerHTML = `
      <tr>
        <th>tieng trung</th>
        <th>pinyin</th>
        <th>nhap tieng viet</th>
        <th>kiem tra</th>
      </tr>
    `;
  }

  currentWords.forEach((word, index) => {
    const row = document.createElement('tr');
    if (selectedDirection === 'vi_zh') {
      row.innerHTML = `
        <td>${escapeHtml(word.meaning || '')}</td>
        <td>
          <input class="practice-input" data-index="${index}" placeholder="Nhap dap an..." />
        </td>
        <td class="check-cell" data-check="${index}"></td>
      `;
    } else {
      row.innerHTML = `
        <td class="cn-text">${escapeHtml(word.chinese || '')}</td>
        <td>${escapeHtml(word.pinyin || '')}</td>
        <td>
          <input class="practice-input" data-index="${index}" placeholder="Nhap dap an..." />
        </td>
        <td class="check-cell" data-check="${index}"></td>
      `;
    }
    dom.tableBody.appendChild(row);
  });

  updateScore();
}

function handleInput(event) {
  const target = event.target;
  if (!target.classList.contains('practice-input')) return;

  const index = Number(target.dataset.index);
  const word = currentWords[index];
  if (!word) return;

  const result = isAnswerCorrect(target.value, word);
  const checkCell = dom.tableBody.querySelector(`[data-check="${index}"]`);

  target.classList.remove('is-correct', 'is-wrong');
  if (result === true) {
    target.classList.add('is-correct');
    if (checkCell) checkCell.textContent = '✅';
  } else if (result === false) {
    target.classList.add('is-wrong');
    if (checkCell) checkCell.textContent = '❌';
  } else {
    if (checkCell) checkCell.textContent = '';
  }

  rowStates.set(index, result === true);
  updateScore();
}

function startPractice() {
  if (!selectedLevel || !selectedDirection) return;

  if (typeof vocabularyData === 'undefined') {
    alert('Chua tai du lieu tu vung.');
    return;
  }

  currentWords = vocabularyData.filter(word => word.level === selectedLevel);
  if (currentWords.length === 0) {
    alert(`Khong co tu vung cho band ${selectedLevel}.`);
    return;
  }
  dom.pillLevel.textContent = `Band ${selectedLevel}`;
  dom.pillDirection.textContent = selectedDirection === 'vi_zh' ? 'Viet -> Trung' : 'Trung -> Viet';

  renderTable();
  showScreen('practice');
}

function resetAnswers() {
  dom.tableBody.querySelectorAll('.practice-input').forEach((input) => {
    input.value = '';
    input.classList.remove('is-correct', 'is-wrong');
  });
  dom.tableBody.querySelectorAll('.check-cell').forEach((cell) => {
    cell.textContent = '';
  });
  rowStates = new Map();
  updateScore();
}

function goBack() {
  showScreen('setup');
}

function applyInitialLevelSelection() {
  const params = new URLSearchParams(window.location.search);
  const levelParam = (params.get('level') || '').toUpperCase();
  if (LEVELS.includes(levelParam)) {
    selectLevel(levelParam);
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ================================================================
// INIT
// ================================================================
showScreen('setup');
applyInitialLevelSelection();

if (dom.levelButtons) {
  dom.levelButtons.forEach((btn) => {
    btn.addEventListener('click', () => selectLevel(btn.dataset.level));
  });
}

if (dom.directionButtons) {
  dom.directionButtons.forEach((btn) => {
    btn.addEventListener('click', () => selectDirection(btn.dataset.direction));
  });
}

if (dom.btnStart) {
  dom.btnStart.addEventListener('click', startPractice);
}

if (dom.btnBack) {
  dom.btnBack.addEventListener('click', goBack);
}

if (dom.btnReset) {
  dom.btnReset.addEventListener('click', resetAnswers);
}

if (dom.tableBody) {
  dom.tableBody.addEventListener('input', handleInput);
}
