import axios from 'axios';
const API = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export const getFavorites = async (userId, token) => {
  const res = await axios.get(`${API}/users/${userId}/favorites`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const addFavorite = async (userId, movie, token) => {
  const res = await axios.post(`${API}/users/${userId}/favorites`, movie, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const removeFavorite = async (userId, movieId, token) => {
  const res = await axios.delete(`${API}/users/${userId}/favorites/${movieId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
