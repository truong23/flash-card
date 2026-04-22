const dom = {
  statusBadge: document.getElementById("statusBadge"),
  statusDescription: document.getElementById("statusDescription"),
  signOutButton: document.getElementById("signOutButton"),
  currentUserAvatar: document.getElementById("currentUserAvatar"),
  currentUserAvatarFallback: document.getElementById("currentUserAvatarFallback"),
  currentUserName: document.getElementById("currentUserName"),
  currentUserEmail: document.getElementById("currentUserEmail"),
  currentUserRole: document.getElementById("currentUserRole"),
  currentUserState: document.getElementById("currentUserState"),
  setupNotice: document.getElementById("setupNotice"),
  errorNotice: document.getElementById("errorNotice"),
};

function setStatus(text, tone) {
  dom.statusBadge.textContent = text;
  dom.statusBadge.className = `status-badge ${tone}`;
}

function toggleElement(element, shouldShow) {
  element.classList.toggle("hidden", !shouldShow);
}

function clearNotices() {
  toggleElement(dom.setupNotice, false);
  toggleElement(dom.errorNotice, false);
}

function renderUserAvatar(user) {
  const photoURL = user?.photoURL || "";
  if (!photoURL) {
    dom.currentUserAvatar.removeAttribute("src");
    toggleElement(dom.currentUserAvatar, false);
    toggleElement(dom.currentUserAvatarFallback, true);
    return;
  }

  dom.currentUserAvatar.src = photoURL;
  toggleElement(dom.currentUserAvatar, true);
  toggleElement(dom.currentUserAvatarFallback, false);
}

function setSessionStateClass(session) {
  dom.currentUserState.classList.remove(
    "state-approved",
    "state-pending",
    "state-guest",
    "state-unknown",
  );

  if (session.hasAccess) {
    dom.currentUserState.classList.add("state-approved");
    return;
  }

  if (session.user) {
    dom.currentUserState.classList.add("state-pending");
    return;
  }

  dom.currentUserState.classList.add("state-guest");
}

async function renderSession(session) {
  const emailText = session.user?.email || "Chưa đăng nhập";
  const displayName = session.user?.displayName || (session.user?.email ? session.user.email.split("@")[0] : "Khách");
  renderUserAvatar(session.user);
  dom.currentUserName.textContent = displayName;
  dom.currentUserEmail.textContent = emailText;
  dom.currentUserRole.textContent = session.accessRecord?.role || "Khách";
  const stateLabel = session.hasAccess
    ? "Đã được duyệt"
    : session.user
      ? "Đang chờ duyệt"
      : "Chưa đăng nhập";
  dom.currentUserState.textContent = "";
  dom.currentUserState.setAttribute("aria-label", stateLabel);
  dom.currentUserState.setAttribute("title", stateLabel);
  setSessionStateClass(session);

  clearNotices();
  toggleElement(dom.signOutButton, Boolean(session.user));

  if (!flashCardAuth.isFirebaseConfigured()) {
    setStatus("Chưa cấu hình Firebase", "error");
    dom.statusDescription.textContent = "Cần cấu hình Firebase trước khi sử dụng đăng nhập.";
    dom.setupNotice.textContent = "Hãy kiểm tra FIREBASE_CONFIG trong shared-auth.js.";
    toggleElement(dom.setupNotice, true);
    return;
  }

  if (session.error) {
    setStatus("Lỗi đọc Firestore", "error");
    dom.statusDescription.textContent = "Không thể kiểm tra quyền truy cập của tài khoản này.";
    dom.errorNotice.textContent = flashCardAuth.getFriendlyFirestoreError(session.error);
    toggleElement(dom.errorNotice, true);
    return;
  }

  if (!session.user) {
    flashCardAuth.redirectTo("login");
    return;
  }

  if (session.hasAccess) {
    setStatus("Đã được phê duyệt", "success");
    dom.statusDescription.textContent = "Bạn đang ở trang chủ. Hãy chọn Từ Vựng hoặc Luyện Tập để bắt đầu.";
    return;
  }

  flashCardAuth.redirectTo("login");
}

async function init() {
  dom.currentUserAvatar.addEventListener("error", () => {
    dom.currentUserAvatar.removeAttribute("src");
    toggleElement(dom.currentUserAvatar, false);
    toggleElement(dom.currentUserAvatarFallback, true);
  });

  dom.signOutButton.addEventListener("click", async () => {
    await flashCardAuth.signOutCurrentUser();
    flashCardAuth.redirectTo("login");
  });

  await flashCardAuth.initializeFirebase();
  await flashCardAuth.onSessionChange(renderSession);
}

init();
