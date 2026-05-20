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
