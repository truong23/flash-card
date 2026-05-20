export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const clientId = process.env.YOUTUBE_CLIENT_ID;
  const clientSecret = process.env.YOUTUBE_CLIENT_SECRET;
  const redirectUri = process.env.YOUTUBE_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    res.status(400).json({
      message: 'Thieu bien moi truong OAuth.'
    });
    return;
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  const code = body.code;

  if (!code) {
    res.status(400).json({ message: 'Thieu code OAuth.' });
    return;
  }

  const payload = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    code,
    redirect_uri: redirectUri,
    grant_type: 'authorization_code'
  });

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: payload.toString()
  });

  if (!response.ok) {
    res.status(400).json({ message: 'Khong the doi token.', detail: await response.text() });
    return;
  }

  const data = await response.json();

  res.status(200).json({
    refresh_token: data.refresh_token || null,
    access_token: data.access_token || null,
    expires_in: data.expires_in || null,
    token_type: data.token_type || null
  });
}
