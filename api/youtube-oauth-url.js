export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const clientId = process.env.YOUTUBE_CLIENT_ID;
  const redirectUri = process.env.YOUTUBE_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    res.status(400).json({
      message: 'Thieu bien moi truong YOUTUBE_CLIENT_ID hoac YOUTUBE_REDIRECT_URI.'
    });
    return;
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
    scope: 'https://www.googleapis.com/auth/youtube.force-ssl'
  });

  res.status(200).json({
    url: `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
  });
}
