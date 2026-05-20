const statusLine = document.getElementById('oauthStatus');
const resultEl = document.getElementById('oauthResult');
const openButton = document.getElementById('openConsent');

function setStatus(text) {
  statusLine.textContent = text;
}

async function openConsent() {
  setStatus('Đang tạo URL đồng ý...');
  const response = await fetch('/api/youtube-oauth-url');
  const data = await response.json();
  if (!response.ok) {
    resultEl.textContent = JSON.stringify(data, null, 2);
    setStatus('Loi khi tao URL dong y.');
    return;
  }
  window.location.href = data.url;
}

async function exchangeCode(code) {
  setStatus('Đang đổi token...');
  const response = await fetch('/api/youtube-oauth-exchange', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code })
  });
  const data = await response.json();
  resultEl.textContent = JSON.stringify(data, null, 2);
  setStatus(response.ok ? 'Da lay token.' : 'Loi khi doi token.');
}

openButton.addEventListener('click', openConsent);

const params = new URLSearchParams(window.location.search);
const code = params.get('code');
if (code) {
  exchangeCode(code);
}
