import React, { useEffect, useState } from 'react';
import { getFavorites } from '../services/user';
import MovieCard from '../components/MovieCard';
import './profile.css';

const Profile = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = localStorage.getItem('token');
      const email = localStorage.getItem('email');
      if (!token || !email) {
        setLoading(false);
        return;
      }

      setUserEmail(email);

      try {
        const data = await getFavorites(token);
        setFavorites(data.favorites || []);
      } catch (err) {
        console.error('Failed to fetch favorites:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="profile-wrapper">
      <div className="profile-box">
        <h2>My Profile</h2>
        <p className="user-email">📧 {userEmail}</p>

        <h3>My Favorite Movies</h3>

        {loading ? (
          <p>Loading...</p>
        ) : favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          <div className="favorites-grid">
            {favorites.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
