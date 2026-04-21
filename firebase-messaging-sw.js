// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// --- CẤU HÌNH FIREBASE ---
// (Copy y hệt config từ index.html của bạn vào đây)
const firebaseConfig = {
    apiKey: "AIzaSyA8aPILWL4jL0rN62VfsIx1J4Ouclu-WzA",
    authDomain: "doso151.firebaseapp.com",
    databaseURL: "https://doso151-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "doso151",
    storageBucket: "doso151.firebasestorage.app",
    messagingSenderId: "142725282351",
    appId: "1:142725282351:web:5743887f0a8d391f2864da"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Xử lý thông báo khi app đang chạy ngầm (background)
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico' // Hoặc link icon logo của bạn
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
