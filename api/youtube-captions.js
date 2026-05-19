export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const url = req.query.url || '';
  const videoId = extractVideoId(String(url));

  if (!videoId) {
    res.status(400).json({ message: 'Khong tim thay video ID hop le.' });
    return;
  }

  const languages = ['zh-Hant', 'zh-Hans', 'zh', 'zh-TW', 'zh-CN', 'zh-HK'];
  let lastError = null;

  for (const lang of languages) {
    try {
      const xml = await fetchCaptionsXml(videoId, lang);
      const segments = parseCaptionXml(xml);
      if (segments.length === 0) continue;

      res.status(200).json({
        videoId,
        lang,
        segments
      });
      return;
    } catch (err) {
      lastError = err;
    }
  }

  res.status(404).json({
    message: 'Khong tim thay phu de tieng Trung cong khai cho video nay.'
  });
}

function extractVideoId(input) {
  if (!input) return '';

  const trimmed = input.trim();
  const idMatch = trimmed.match(/^[a-zA-Z0-9_-]{11}$/);
  if (idMatch) return idMatch[0];

  const patterns = [
    /[?&]v=([a-zA-Z0-9_-]{11})/, // watch?v=
    /youtu\.be\/([a-zA-Z0-9_-]{11})/, // youtu.be/
    /\/embed\/([a-zA-Z0-9_-]{11})/, // /embed/
    /\/shorts\/([a-zA-Z0-9_-]{11})/ // /shorts/
  ];

  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match && match[1]) return match[1];
  }

  return '';
}

async function fetchCaptionsXml(videoId, lang) {
  const url = `https://www.youtube.com/api/timedtext?lang=${encodeURIComponent(lang)}&v=${encodeURIComponent(videoId)}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Khong the tai phu de.');
  }
  return response.text();
}

function parseCaptionXml(xml) {
  if (!xml || !xml.includes('<text')) return [];

  const segments = [];
  const regex = /<text([^>]*)>([\s\S]*?)<\/text>/g;
  let match;

  while ((match = regex.exec(xml)) !== null) {
    const attrs = match[1] || '';
    const text = decodeXml(match[2] || '').replace(/\s+/g, ' ').trim();
    if (!text) continue;

    const start = getAttr(attrs, 'start');
    const dur = getAttr(attrs, 'dur');

    segments.push({
      start: start ? Number(start) : null,
      dur: dur ? Number(dur) : null,
      text
    });
  }

  return segments;
}

function getAttr(attrs, key) {
  const match = attrs.match(new RegExp(`${key}="([^"]+)"`));
  return match ? match[1] : '';
}

function decodeXml(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/<[^>]+>/g, '');
}
