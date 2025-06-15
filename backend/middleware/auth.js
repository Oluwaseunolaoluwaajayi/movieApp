// middleware/authenticateToken.js
import jwt from 'jsonwebtoken';

export default function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // contains { userId, username }
    next();
  } catch (err) {
    console.error('❌ JWT Error:', err);
    res.status(401).json({ message: 'Token is not valid' });
  }
}
