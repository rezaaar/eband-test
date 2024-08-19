// // public/firebase-messaging-sw.js
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');


// const firebaseConfig = {
//     apiKey: "AIzaSyDW1fHqAqbasuAQBqDyNzXiCme8BDFmz5s",
//     authDomain: "eband-nuxt.firebaseapp.com",
//     projectId: "eband-nuxt",
//     storageBucket: "eband-nuxt.appspot.com",
//     messagingSenderId: "737637505340",
//     appId: "1:737637505340:web:f21827140f45f033f12639",
//     measurementId: "G-3J4M9QCJCR"
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {
//     console.log('Received background message ', payload);
//     // Customize the notification here
//     self.registration.showNotification(payload.notification.title, {
//         body: payload.notification.body,
//         icon: payload.notification.icon
//     });
// });
