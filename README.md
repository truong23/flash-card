# flash-card

Ung dung hien duoc tach thanh 3 trang rieng:

- `index.html`: trang login mac dinh
- `study.html`: trang hoc, chi mo duoc khi tai khoan da duoc duyet
- `admin/index.html`: trang admin, chi mo duoc khi tai khoan co `role=admin` va `approved=true`

## Luong su dung

1. Tat ca nguoi dung vao `index.html`
2. Dang nhap Google
3. Frontend doc document trong `configPageAccess/{email}`
4. Neu `approved=true` thi tu dong chuyen sang `study.html`
5. Neu chua duoc duyet thi hien thong bao `yeu cau cua ban dang cho duyet`
6. Admin vao duong dan `admin/` de duyet tai khoan

## Cac file chinh

- `shared-auth.js`: logic Firebase Auth + Firestore dung chung cho login, study va admin
- `study.js`: logic render flash card
- `auth-pages.css`: giao dien cho login va admin
- `study.css`: giao dien cho trang hoc

## Cau hinh Firebase

Cau hinh dang nam trong `shared-auth.js`:

```js
const FIREBASE_CONFIG = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  appId: "...",
};
```

Neu day la lan dau khoi tao admin, them email vao `FIREBASE_BOOTSTRAP_ADMINS` trong `shared-auth.js`.

Sau khi dang nhap bang email do, vao `admin/` va bam `Ghi quyen admin khoi tao` de ghi record admin dau tien vao Firestore.

## Collection Firestore

Ten collection mac dinh la `configPageAccess`.

Moi document dung chinh email viet thuong lam ID, vi du:

```json
{
  "email": "user@example.com",
  "role": "viewer",
  "approved": true,
  "createdAt": "serverTimestamp()",
  "updatedAt": "serverTimestamp()"
}
```

Y nghia:

- `role`: `viewer` hoac `admin`
- `approved`: `true` thi vao duoc `study.html`, `false` thi se thay trang cho duyet o `index.html`

## Firestore Rules goi y

```txt
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function signedIn() {
      return request.auth != null && request.auth.token.email != null;
    }

    function myEmail() {
      return request.auth.token.email;
    }

    function myAccessDoc() {
      return get(/databases/$(database)/documents/configPageAccess/$(myEmail()));
    }

    function isApproved() {
      return signedIn() && myAccessDoc().data.approved == true;
    }

    function isAdmin() {
      return isApproved() && myAccessDoc().data.role == 'admin';
    }

    match /configPageAccess/{email} {
      allow get: if signedIn() && (email == myEmail() || isAdmin());
      allow list: if isAdmin();
      allow create, update, delete: if isAdmin();
    }
  }
}
```
