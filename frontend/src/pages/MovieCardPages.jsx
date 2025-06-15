import React from 'react';
import MovieCard from '../components/MovieCard';
import movie2 from '../assets/movie2.jpg'; // You can change this image if needed

const dummyMovie = {
  poster: movie2,
  title: 'Inception',
  rating: 8.8,
};

const MovieCardPage = () => {
  return (
    <div className="movie-card-page" style={{ backgroundColor: '#151a1b', color: 'antiquewhite', padding: '2rem', textAlign: 'center' }}>
      <h2>Featured Movie</h2>
      <MovieCard movie={dummyMovie} />
    </div>
  );
};

export default MovieCardPage;
