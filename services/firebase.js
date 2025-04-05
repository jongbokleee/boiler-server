// services/firebase.js
const admin = require('firebase-admin');
// const serviceAccount = require('../firebase-admin-key.json'); // 이 파일은 Firebase에서 직접 다운로드한 JSON 키

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://your-project-id.firebaseio.com',
// });

module.exports = admin;