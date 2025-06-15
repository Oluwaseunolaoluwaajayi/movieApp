// routes/movies.js
import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// 🔍 Search movies by title
router.get('/search', async (req, res) => {
  const query = req.query.query;
  if (!query) {
    return res.status(400).json({ message: 'Query parameter is required' });
  }

  try {
    const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        query,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('TMDB search error:', error.message);
    res.status(500).json({ message: 'Failed to fetch movies from TMDB' });
  }
});

// 🎬 Get popular movies
router.get('/popular', async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      params: {
        api_key: TMDB_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('TMDB popular error:', error.message);
    res.status(500).json({ message: 'Failed to fetch popular movies' });
  }
});

// 📄 Get movie details
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${id}`, {
      params: {
        api_key: TMDB_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('TMDB movie details error:', error.message);
    res.status(500).json({ message: 'Failed to fetch movie details' });
  }
});

export default router;
