(function () {
  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyB3vd_f0NUIeYISaU1APd4PkIHeH8mKAHE",
    authDomain: "flashcard-63b2a.firebaseapp.com",
    projectId: "flashcard-63b2a",
    storageBucket: "flashcard-63b2a.firebasestorage.app",
    messagingSenderId: "885158734627",
    appId: "1:885158734627:web:bcb976db28faac1c0c7a96",
    measurementId: "G-5R55Z28HXQ",
  };

  const FIREBASE_BOOTSTRAP_ADMINS = ["truongdv@vmms.com.vn", "thanhsangvippro2000@gmail.com"];
  const FIRESTORE_ACCESS_COLLECTION = "configPageAccess";
  const DISPLAY_SETTINGS_STORAGE_KEY = "flash-card-display-settings";
  const DEFAULT_DISPLAY_SETTINGS = {
    cardSize: 52,
    gridGap: 1,
    wordFrontSize: 0.9,
    wordBackMeaningSize: 0.42,
    wordBackPinyinSize: 0.3,
  };

  const firebaseServices = {
    enabled: false,
    app: null,
    auth: null,
    db: null,
    initialized: false,
  };

  function normalizeEmail(email) {
    return (email || "").trim().toLowerCase();
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function isFirebaseConfigured() {
    return Boolean(
      FIREBASE_CONFIG.apiKey &&
      FIREBASE_CONFIG.authDomain &&
      FIREBASE_CONFIG.projectId &&
      FIREBASE_CONFIG.appId,
    );
  }

  function isAdminEmail(email) {
    return FIREBASE_BOOTSTRAP_ADMINS.includes(normalizeEmail(email));
  }

  function getFriendlyFirebaseError(error) {
    const code = error ?.code || "";

    if (code === "auth/configuration-not-found") {
      return "Firebase Authentication chưa được cấu hình đầy đủ. Hãy bật Authentication trong Firebase Console, kích hoạt Google provider, rồi kiểm tra Authorized domains.";
    }

    if (code === "auth/operation-not-allowed") {
      return "Google Sign-In chưa được bật cho project này. Vào Firebase Console > Authentication > Sign-in method để bật Google.";
    }

    if (code === "auth/unauthorized-domain") {
      return "Domain hiện tại chưa được cho phép. Hãy thêm domain đang chạy app vào Firebase Console > Authentication > Settings > Authorized domains.";
    }

    if (code === "auth/popup-blocked") {
      return "Popup đăng nhập bị chặn bởi trình duyệt. Hãy cho phép popup và thử lại.";
    }

    if (code === "auth/popup-closed-by-user") {
      return "Bạn đã đóng popup đăng nhập trước khi hoàn tất.";
    }

    return error ?.message || "Không thể đăng nhập bằng Google.";
  }

  function getFriendlyFirestoreError(error) {
    const code = error ?.code || "";
    const message = error ?.message || "";
    const isFileProtocol = window.location.protocol === "file:";

    if (
      code === "unavailable" ||
      message.includes("client is offline") ||
      message.includes("Failed to get document because the client is offline")
    ) {
      if (isFileProtocol) {
        return "Firestore không kết nối được tới server. Hãy chạy app qua localhost/http thay vì mở file trực tiếp, rồi kiểm tra lại Firestore Database trong Firebase Console.";
      }

      return "Firestore không kết nối được tới server dù app đang chạy qua localhost/http. Khả năng cao là Firestore Database chưa được tạo trong Firebase Console, hoặc trình duyệt/mạng đang chặn kết nối tới firestore.googleapis.com.";
    }

    if (code === "permission-denied") {
      return "Firestore đã kết nối nhưng rules đang chặn đọc dữ liệu. Cần kiểm tra Firestore Rules cho collection configPageAccess.";
    }

    if (code === "not-found") {
      return "Firestore Database hoặc document chưa tồn tại. Hãy kiểm tra đã tạo Firestore Database trong project flashcard-63b2a chưa.";
    }

    return message || "Không thể đọc quyền truy cập từ Firestore.";
  }

  async function initializeFirebase() {
    if (firebaseServices.initialized) {
      return firebaseServices;
    }

    firebaseServices.initialized = true;

    if (!window.firebase || !isFirebaseConfigured()) {
      return firebaseServices;
    }

    firebaseServices.app = firebase.apps.length ?
      firebase.app() :
      firebase.initializeApp(FIREBASE_CONFIG);
    firebaseServices.auth = firebase.auth();
    firebaseServices.db = firebase.firestore();
    firebaseServices.enabled = true;
    return firebaseServices;
  }

  async function resolveAccessRecord(email) {
    const normalizedEmail = normalizeEmail(email);
    if (!normalizedEmail) return null;

    const isBootstrapAdminEmail = isAdminEmail(normalizedEmail);
    let firestoreRecord = null;

    if (firebaseServices.db) {
      const snapshot = await firebaseServices.db
        .collection(FIRESTORE_ACCESS_COLLECTION)
        .doc(normalizedEmail)
        .get();

      if (snapshot.exists) {
        const data = snapshot.data() || {};
        firestoreRecord = {
          id: snapshot.id,
          email: snapshot.id,
          role: data.role || "viewer",
          approved: data.approved !== false,
          updatedAt: data.updatedAt || null,
          createdAt: data.createdAt || null,
          isBootstrapAdmin: isBootstrapAdminEmail,
          pendingBootstrap: false,
        };
      }
    }

    if (firestoreRecord) return firestoreRecord;
    if (!isBootstrapAdminEmail) return null;

    return {
      email: normalizedEmail,
      role: "admin",
      approved: true,
      updatedAt: null,
      createdAt: null,
      isBootstrapAdmin: true,
      pendingBootstrap: true,
    };
  }

  async function buildSession(user) {
    const session = {
      authReady: true,
      user: user || null,
      accessRecord: null,
      hasAccess: false,
      isApproved: false,
      isAdmin: false,
      pendingBootstrap: false,
      error: null,
    };

    if (!user) return session;

    try {
      session.accessRecord = await resolveAccessRecord(user.email);
      session.isApproved = Boolean(session.accessRecord?.approved);
      session.hasAccess = true; // Bất kỳ ai đăng nhập đều có quyền truy cập cơ bản
      session.isAdmin = session.isApproved && session.accessRecord?.role === "admin";
      session.pendingBootstrap = Boolean(session.accessRecord?.pendingBootstrap);
      return session;
    } catch (error) {
      session.error = error;
      return session;
    }
  }

  async function getCurrentSession() {
    await initializeFirebase();

    if (!firebaseServices.auth) {
      return {
        authReady: true,
        user: null,
        accessRecord: null,
        hasAccess: false,
        isAdmin: false,
        pendingBootstrap: false,
        error: null,
      };
    }

    return buildSession(firebaseServices.auth.currentUser);
  }

  async function signInWithGoogle() {
    await initializeFirebase();
    if (!firebaseServices.auth) {
      throw new Error("Firebase Authentication chưa sẵn sàng.");
    }

    const provider = new firebase.auth.GoogleAuthProvider();
    await firebaseServices.auth.signInWithPopup(provider);
  }

  async function signOutCurrentUser() {
    await initializeFirebase();
    if (!firebaseServices.auth) return;
    await firebaseServices.auth.signOut();
  }

  async function persistBootstrapAdmin() {
    await initializeFirebase();
    const currentUser = firebaseServices.auth ?.currentUser;
    if (!firebaseServices.db || !currentUser || !isAdminEmail(currentUser.email)) {
      return;
    }

    const email = normalizeEmail(currentUser.email);
    await firebaseServices.db
      .collection(FIRESTORE_ACCESS_COLLECTION)
      .doc(email)
      .set({
        email,
        role: "admin",
        approved: true,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      }, {
        merge: true
      }, );
  }

  async function listAccessRecords() {
    await initializeFirebase();
    if (!firebaseServices.db) return [];

    const snapshot = await firebaseServices.db
      .collection(FIRESTORE_ACCESS_COLLECTION)
      .orderBy("email")
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      email: doc.id,
      ...doc.data(),
    }));
  }

  async function saveAccessRecord(record) {
    await initializeFirebase();
    if (!firebaseServices.db) {
      throw new Error("Firestore chưa sẵn sàng.");
    }

    const email = normalizeEmail(record.email);
    if (!email) {
      throw new Error("Email không hợp lệ.");
    }

    await firebaseServices.db
      .collection(FIRESTORE_ACCESS_COLLECTION)
      .doc(email)
      .set({
        email,
        role: record.role || "viewer",
        approved: Boolean(record.approved),
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      }, {
        merge: true
      }, );
  }

  async function toggleApproved(email) {
    await initializeFirebase();
    const normalizedEmail = normalizeEmail(email);
    const docRef = firebaseServices.db
      .collection(FIRESTORE_ACCESS_COLLECTION)
      .doc(normalizedEmail);
    const snapshot = await docRef.get();
    if (!snapshot.exists) return;
    const data = snapshot.data() || {};

    await docRef.set({
      email: normalizedEmail,
      role: data.role || "viewer",
      approved: !(data.approved !== false),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    }, {
      merge: true
    }, );
  }

  async function toggleRole(email) {
    await initializeFirebase();
    const normalizedEmail = normalizeEmail(email);
    const docRef = firebaseServices.db
      .collection(FIRESTORE_ACCESS_COLLECTION)
      .doc(normalizedEmail);
    const snapshot = await docRef.get();
    if (!snapshot.exists) return;
    const data = snapshot.data() || {};

    await docRef.set({
      email: normalizedEmail,
      role: data.role === "admin" ? "viewer" : "admin",
      approved: data.approved !== false,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    }, {
      merge: true
    }, );
  }

  async function deleteAccessRecord(email) {
    await initializeFirebase();
    const normalizedEmail = normalizeEmail(email);
    await firebaseServices.db
      .collection(FIRESTORE_ACCESS_COLLECTION)
      .doc(normalizedEmail)
      .delete();
  }

  function formatTimestamp(value) {
    if (!value) return "Chưa có";
    if (typeof value.toDate === "function") {
      return value.toDate().toLocaleString("vi-VN");
    }
    if (value instanceof Date) {
      return value.toLocaleString("vi-VN");
    }
    return String(value);
  }

  function loadDisplaySettings() {
    try {
      const raw = window.localStorage.getItem(DISPLAY_SETTINGS_STORAGE_KEY);
      if (!raw) return {
        ...DEFAULT_DISPLAY_SETTINGS
      };
      return {
        ...DEFAULT_DISPLAY_SETTINGS,
        ...JSON.parse(raw)
      };
    } catch (error) {
      return {
        ...DEFAULT_DISPLAY_SETTINGS
      };
    }
  }

  function saveDisplaySettings(settings) {
    window.localStorage.setItem(
      DISPLAY_SETTINGS_STORAGE_KEY,
      JSON.stringify(settings),
    );
  }

  function getRoute(name) {
    if (name === "login") {
      return "/login";
    }

    if (name === "home") {
      return "/";
    }

    if (name === "study") {
      return "/study";
    }

    if (name === "admin") {
      return "/admin/";
    }

    if (name === "practice") {
      return  "/practice"
    }

    return "/";
  }

  function redirectTo(name) {
    window.location.replace(getRoute(name));
  }

  async function onSessionChange(handler) {
    await initializeFirebase();

    if (!firebaseServices.auth) {
      handler(await getCurrentSession());
      return function unsubscribe() {};
    }

    return firebaseServices.auth.onAuthStateChanged(async (user) => {
      handler(await buildSession(user));
    });
  }

  function showUpgradeModal() {
    let modal = document.getElementById('upgrade-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'upgrade-modal';
      modal.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; z-index: 99999; padding: 20px;">
          <div style="background: white; border-radius: 20px; padding: 30px 24px; max-width: 360px; width: 100%; text-align: center; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04); position: relative; animation: modalPop 0.3s cubic-bezier(0.16, 1, 0.3, 1);">
            <button onclick="document.getElementById('upgrade-modal').style.display='none'" style="position: absolute; top: 12px; right: 16px; background: none; border: none; font-size: 28px; cursor: pointer; color: #94a3b8; padding: 4px; line-height: 1;">&times;</button>
            
            <div style="width: 64px; height: 64px; background: #eff6ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
              <span style="font-size: 32px;">🔒</span>
            </div>
            
            <h3 style="margin: 0 0 12px 0; font-family: inherit; color: #0f172a; font-size: 1.25rem; font-weight: 700;">Tính năng cao cấp</h3>
            
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin: 0 0 24px 0;">
              Vui lòng liên hệ với mình qua Zalo để được duyệt tài khoản và mở khoá trải nghiệm học đầy đủ nhé!
            </p>
            
            <img src="/images/zalo-qr.jpg" alt="Zalo QR Code" style="width: 100%; max-width: 300px; border-radius: 12px; border: 1px solid #e2e8f0; display: block; margin: 0 auto 24px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
            
            <button onclick="document.getElementById('upgrade-modal').style.display='none'" style="display: block; width: 100%; background: #0068ff; color: white; padding: 14px; border-radius: 12px; border: none; font-weight: 600; font-size: 1rem; cursor: pointer; transition: background 0.2s;">
              Đã hiểu
            </button>
          </div>
        </div>
        <style>
          @keyframes modalPop {
            0% { opacity: 0; transform: scale(0.95) translateY(10px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
          }
        </style>
      `;
      document.body.appendChild(modal);
    }
    modal.style.display = 'flex';
  }

  window.flashCardAuth = {
    FIRESTORE_ACCESS_COLLECTION,
    DISPLAY_SETTINGS_STORAGE_KEY,
    DEFAULT_DISPLAY_SETTINGS,
    escapeHtml,
    normalizeEmail,
    isFirebaseConfigured,
    getFriendlyFirebaseError,
    getFriendlyFirestoreError,
    initializeFirebase,
    getCurrentSession,
    onSessionChange,
    signInWithGoogle,
    signOutCurrentUser,
    persistBootstrapAdmin,
    listAccessRecords,
    saveAccessRecord,
    toggleApproved,
    toggleRole,
    deleteAccessRecord,
    formatTimestamp,
    loadDisplaySettings,
    saveDisplaySettings,
    getRoute,
    redirectTo,
    showUpgradeModal,
  };
})();