// middleware/auth.js
const admin = require('../services/firebase'); // Firebase Admin 초기화된 파일 불러옴

const verifyFirebaseToken = async (req, res, next) => {
  const token = req.headers.authorization?.split('Bearer ')[1];
  if (!token) return res.status(401).json({ message: '토큰 없음' });

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: '토큰 검증 실패' });
  }
};

module.exports = { verifyFirebaseToken };