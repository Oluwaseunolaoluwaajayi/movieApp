import { useEffect, useState } from 'react';
import { getFavorites } from '../services/user';
import { useAuth } from '../context/AuthContext';

const [favorites, setFavorites] = useState([]);
const { user, token } = useAuth();

useEffect(() => {
  const fetchFavorites = async () => {
    try {
      const data = await getFavorites(user._id, token);
      setFavorites(data);
    } catch (err) {
      console.error('Failed to load favorites', err);
    }
  };

  if (user && token) {
    fetchFavorites();
  }
}, [user, token]);
