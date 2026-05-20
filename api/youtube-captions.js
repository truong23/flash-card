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

  const oauthConfig = getOAuthConfig();
  if (!oauthConfig) {
    res.status(400).json({
      message: 'Thieu bien moi truong OAuth. Can YOUTUBE_CLIENT_ID, YOUTUBE_CLIENT_SECRET, YOUTUBE_REFRESH_TOKEN.'
    });
    return;
  }

  try {
    const accessToken = await fetchOAuthToken(oauthConfig);
    const tracks = await fetchCaptionTracks(videoId, accessToken);
    const preferred = pickPreferredTrack(tracks, languages);

    if (preferred) {
      const srt = await downloadCaptionTrack(preferred.id, accessToken);
      const segments = parseSrt(srt);
      if (segments.length > 0) {
        res.status(200).json({
          videoId,
          lang: preferred.language,
          segments
        });
        return;
      }
    }
  } catch (err) {
    lastError = err;
  }

  res.status(404).json({
    message: 'Khong the tai phu de tu YouTube Data API.',
    error: lastError ? String(lastError.message || lastError) : undefined
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

function getOAuthConfig() {
  const clientId = process.env.YOUTUBE_CLIENT_ID;
  const clientSecret = process.env.YOUTUBE_CLIENT_SECRET;
  const refreshToken = process.env.YOUTUBE_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) return null;
  return { clientId, clientSecret, refreshToken };
}

async function fetchOAuthToken(config) {
  const body = new URLSearchParams({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    refresh_token: config.refreshToken,
    grant_type: 'refresh_token'
  });

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString()
  });

  if (!response.ok) {
    throw new Error('Khong the lay access token YouTube.');
  }

  const data = await response.json();
  if (!data.access_token) {
    throw new Error('Thieu access token YouTube.');
  }

  return data.access_token;
}

async function fetchCaptionTracks(videoId, accessToken) {
  const url = new URL('https://www.googleapis.com/youtube/v3/captions');
  url.searchParams.set('part', 'snippet');
  url.searchParams.set('videoId', videoId);

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  if (!response.ok) {
    throw new Error('Khong the lay danh sach phu de.');
  }

  const data = await response.json();
  return data.items || [];
}

function pickPreferredTrack(tracks, languages) {
  if (!tracks || tracks.length === 0) return null;

  const sorted = [...tracks].sort((a, b) => {
    const aKind = a.snippet?.trackKind === 'ASR' ? 1 : 0;
    const bKind = b.snippet?.trackKind === 'ASR' ? 1 : 0;
    return aKind - bKind;
  });

  for (const lang of languages) {
    const match = sorted.find((item) => item.snippet?.language === lang);
    if (match) {
      return { id: match.id, language: match.snippet?.language || lang };
    }
  }

  const fallback = sorted[0];
  return fallback ? { id: fallback.id, language: fallback.snippet?.language || '' } : null;
}

async function downloadCaptionTrack(captionId, accessToken) {
  const url = new URL(`https://www.googleapis.com/youtube/v3/captions/${captionId}`);
  url.searchParams.set('tfmt', 'srt');

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  if (!response.ok) {
    throw new Error('Khong the tai phu de tu YouTube Data API.');
  }

  return response.text();
}

function parseSrt(srt) {
  if (!srt) return [];
  const blocks = srt.split(/\r?\n\r?\n/);
  const segments = [];

  blocks.forEach((block) => {
    const lines = block.split(/\r?\n/).filter(Boolean);
    if (lines.length < 2) return;

    const timeLine = lines.find((line) => line.includes('-->'));
    if (!timeLine) return;

    const [startRaw, endRaw] = timeLine.split('-->').map((v) => v.trim());
    const start = parseSrtTime(startRaw);
    const end = parseSrtTime(endRaw);
    const textLines = lines.filter((line) => line !== timeLine && !/^\d+$/.test(line));
    const text = textLines.join(' ').replace(/\s+/g, ' ').trim();

    if (!text) return;
    segments.push({
      start: Number.isFinite(start) ? start : null,
      dur: Number.isFinite(start) && Number.isFinite(end) ? Math.max(0, end - start) : null,
      text
    });
  });

  return segments;
}

function parseSrtTime(value) {
  if (!value) return null;
  const match = value.match(/(\d+):(\d+):(\d+),(\d+)/);
  if (!match) return null;
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  const seconds = Number(match[3]);
  const millis = Number(match[4]);
  if ([hours, minutes, seconds, millis].some((n) => Number.isNaN(n))) return null;
  return hours * 3600 + minutes * 60 + seconds + millis / 1000;
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
