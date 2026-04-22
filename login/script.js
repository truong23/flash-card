const dom = {
  statusBadge: document.getElementById("statusBadge"),
  statusDescription: document.getElementById("statusDescription"),
  signInButton: document.getElementById("signInButton"),
  refreshButton: document.getElementById("refreshButton"),
  signOutButton: document.getElementById("signOutButton"),
  currentUserEmail: document.getElementById("currentUserEmail"),
  currentUserRole: document.getElementById("currentUserRole"),
  currentUserState: document.getElementById("currentUserState"),
  setupNotice: document.getElementById("setupNotice"),
  infoNotice: document.getElementById("infoNotice"),
  errorNotice: document.getElementById("errorNotice"),
  successNotice: document.getElementById("successNotice"),
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
  toggleElement(dom.infoNotice, false);
  toggleElement(dom.errorNotice, false);
  toggleElement(dom.successNotice, false);
}

async function renderSession(session) {
  dom.currentUserEmail.textContent = session.user?.email || "Chưa đăng nhập";
  dom.currentUserRole.textContent = session.accessRecord?.role || "Khách";
  dom.currentUserState.textContent = session.hasAccess
    ? "Đã được duyệt"
    : session.user
      ? "Đang chờ duyệt"
      : "Chưa đăng nhập";

  clearNotices();
  toggleElement(dom.signInButton, false);
  toggleElement(dom.refreshButton, false);
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
    toggleElement(dom.refreshButton, true);
    return;
  }

  if (!session.user) {
    setStatus("Chưa đăng nhập", "info");
    dom.statusDescription.textContent = "Đăng nhập bằng Google để hệ thống kiểm tra quyền vào trang học.";
    dom.infoNotice.textContent = "Nếu đăng nhập xong mà chưa được duyệt, bạn sẽ thấy thông báo chờ duyệt ngay tại đây.";
    toggleElement(dom.infoNotice, true);
    toggleElement(dom.signInButton, true);
    return;
  }

  if (session.hasAccess) {
    setStatus("Đã được phê duyệt", "success");
    dom.statusDescription.textContent = "Đăng nhập thành công. Đang chuyển bạn về trang chủ...";
    dom.successNotice.textContent = "Bạn đã có quyền truy cập. Hệ thống sẽ chuyển hướng tự động.";
    toggleElement(dom.successNotice, true);
    flashCardAuth.redirectTo("home");
    return;
  }

  setStatus("Yêu cầu đang chờ duyệt", "pending");
  dom.statusDescription.textContent = "Bạn đã đăng nhập nhưng chưa được phê duyệt vào trang học.";
  dom.infoNotice.textContent = "Yêu cầu của bạn đang chờ admin duyệt. Khi admin cấp quyền approved=true, bạn có thể bấm kiểm tra lại trạng thái.";
  toggleElement(dom.infoNotice, true);
  toggleElement(dom.refreshButton, true);
}

async function init() {
  dom.signInButton.addEventListener("click", async () => {
    try {
      await flashCardAuth.signInWithGoogle();
    } catch (error) {
      setStatus("Đăng nhập thất bại", "error");
      dom.errorNotice.textContent = flashCardAuth.getFriendlyFirebaseError(error);
      toggleElement(dom.errorNotice, true);
    }
  });

  dom.refreshButton.addEventListener("click", async () => {
    await renderSession(await flashCardAuth.getCurrentSession());
  });

  dom.signOutButton.addEventListener("click", async () => {
    await flashCardAuth.signOutCurrentUser();
    await renderSession(await flashCardAuth.getCurrentSession());
  });

  await flashCardAuth.initializeFirebase();
  await flashCardAuth.onSessionChange(renderSession);
}

init();
