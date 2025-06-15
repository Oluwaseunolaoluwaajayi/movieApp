import express from 'express';
import User from '../models/User.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// POST: Add to favorites
router.post('/:id/favorites', authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { movie } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { $addToSet: { favorites: movie } }, // Avoid duplicates
      { new: true }
    );
    res.status(200).json(user.favorites);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add favorite', error: err.message });
  }
});

// GET: Get all favorites
router.get('/:id/favorites', authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user.favorites || []);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch favorites', error: err.message });
  }
});

// DELETE: Remove favorite
router.delete('/:id/favorites/:movieId', authMiddleware, async (req, res) => {
  const { id, movieId } = req.params;
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { $pull: { favorites: { id: movieId } } }, // Remove by movie ID
      { new: true }
    );
    res.status(200).json(user.favorites);
  } catch (err) {
    res.status(500).json({ message: 'Failed to remove favorite', error: err.message });
  }
});

export default router;
