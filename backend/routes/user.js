// routes/user.js
import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();
const router = express.Router();

// ✅ JWT Auth Middleware
function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(403).json({ message: 'Invalid token' });
  }
}

// ➕ Add to Favorites
router.post('/favorites/:movieId', authenticate, async (req, res) => {
  const { movieId } = req.params;
  const user = await User.findById(req.userId);
  if (!user.favorites.includes(+movieId)) {
    user.favorites.push(+movieId);
    await user.save();
  }
  res.json({ message: 'Added to favorites', favorites: user.favorites });
});

// ➖ Remove from Favorites
router.delete('/favorites/:movieId', authenticate, async (req, res) => {
  const { movieId } = req.params;
  const user = await User.findById(req.userId);
  user.favorites = user.favorites.filter(id => id !== +movieId);
  await user.save();
  res.json({ message: 'Removed from favorites', favorites: user.favorites });
});

// ➕ Add to Watchlist
router.post('/watchlist/:movieId', authenticate, async (req, res) => {
  const { movieId } = req.params;
  const user = await User.findById(req.userId);
  if (!user.watchlist.includes(+movieId)) {
    user.watchlist.push(+movieId);
    await user.save();
  }
  res.json({ message: 'Added to watchlist', watchlist: user.watchlist });
});

// ➖ Remove from Watchlist
router.delete('/watchlist/:movieId', authenticate, async (req, res) => {
  const { movieId } = req.params;
  const user = await User.findById(req.userId);
  user.watchlist = user.watchlist.filter(id => id !== +movieId);
  await user.save();
  res.json({ message: 'Removed from watchlist', watchlist: user.watchlist });
});

// 👤 Get User Profile
router.get('/me', authenticate, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json({
    username: user.username,
    email: user.email,
    favorites: user.favorites,
    watchlist: user.watchlist,
  });
});

export default router;
