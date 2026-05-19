const urlInput = document.getElementById('youtubeUrl');
const loadButton = document.getElementById('loadCaptions');
const statusLine = document.getElementById('statusLine');
const readingContent = document.getElementById('readingContent');
const meaningBody = document.getElementById('meaningBody');
const captionMeta = document.getElementById('captionMeta');

const vocabIndex = buildVocabularyIndex(vocabularyData || []);

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildVocabularyIndex(entries) {
  const map = new Map();
  let maxLength = 1;

  entries.forEach((entry) => {
    if (!entry || !entry.chinese) return;
    const word = String(entry.chinese).trim();
    if (!word) return;
    map.set(word, entry);
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  });

  return { map, maxLength };
}

function isCjk(char) {
  const code = char.codePointAt(0);
  return (
    (code >= 0x4e00 && code <= 0x9fff) ||
    (code >= 0x3400 && code <= 0x4dbf) ||
    (code >= 0x20000 && code <= 0x2a6df)
  );
}

function buildReadingMarkup(text) {
  if (!text) return 'Khong co phu de.';

  const { map, maxLength } = vocabIndex;
  let output = '';
  let index = 0;

  while (index < text.length) {
    const char = text[index];

    if (!isCjk(char)) {
      output += escapeHtml(char);
      index += 1;
      continue;
    }

    let matched = null;
    let matchedLength = 0;
    const maxScan = Math.min(maxLength, text.length - index);

    for (let length = maxScan; length >= 1; length -= 1) {
      const candidate = text.slice(index, index + length);
      if (map.has(candidate)) {
        matched = candidate;
        matchedLength = length;
        break;
      }
    }

    if (matched) {
      const entry = map.get(matched);
      output += `<span class="vocab-hit" data-word="${escapeHtml(matched)}" data-meaning="${escapeHtml(entry.meaning || '')}" data-pinyin="${escapeHtml(entry.pinyin || '')}" data-level="${escapeHtml(entry.level || '')}">${escapeHtml(matched)}</span>`;
      index += matchedLength;
    } else {
      output += escapeHtml(char);
      index += 1;
    }
  }

  return output;
}

function setStatus(message, tone = 'normal') {
  statusLine.textContent = message;
  statusLine.dataset.tone = tone;
}

function renderMeaningCard(dataset) {
  if (!dataset) return;

  const word = dataset.word || '';
  const meaning = dataset.meaning || '';
  const pinyin = dataset.pinyin || '';
  const level = dataset.level || '';

  meaningBody.innerHTML = `
    <div class="meaning-title">${escapeHtml(word)}</div>
    <div class="meaning-pinyin">${escapeHtml(pinyin)}</div>
    <div>${escapeHtml(meaning)}</div>
    <div class="meaning-meta">Band: ${escapeHtml(level || 'N/A')}</div>
  `;
}

async function fetchCaptions(videoUrl) {
  const params = new URLSearchParams({ url: videoUrl });
  const response = await fetch(`/api/youtube-captions?${params.toString()}`);
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'Khong tai duoc phu de.');
  }
  return response.json();
}

function joinCaptionText(segments) {
  return segments.map((seg) => seg.text).join('');
}

async function handleLoadCaptions() {
  const url = urlInput.value.trim();
  if (!url) {
    setStatus('Hay nhap link YouTube.', 'error');
    return;
  }

  setStatus('Dang tai phu de...', 'loading');
  readingContent.textContent = 'Dang tai...';
  captionMeta.textContent = 'Dang xu ly';

  try {
    const data = await fetchCaptions(url);
    const text = joinCaptionText(data.segments || []);
    readingContent.innerHTML = buildReadingMarkup(text);
    captionMeta.textContent = `Ngon ngu: ${data.lang || 'zh'} • ${data.segments.length} dong`;
    setStatus('Da tai phu de. Click vao tu de xem nghia.');
  } catch (err) {
    readingContent.textContent = 'Khong the tai phu de.';
    captionMeta.textContent = 'Loi tai phu de';
    setStatus(err.message, 'error');
  }
}

loadButton.addEventListener('click', handleLoadCaptions);
urlInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    handleLoadCaptions();
  }
});

readingContent.addEventListener('click', (event) => {
  const target = event.target.closest('.vocab-hit');
  if (!target) return;
  renderMeaningCard(target.dataset);
});
