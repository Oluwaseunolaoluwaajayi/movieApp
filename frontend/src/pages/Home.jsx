import React from 'react';
import movie2 from '../assets/movie2.jpg';



const Home = () => {
  return (
    <div className="global-container">
      <h1> ⭐ Recommendation Home.. !</h1>
      <img
        src={movie2} // ← fixed here
        alt="Movie Poster"
        style={{ width: '800px', height: '700px', objectFit: 'cover', borderRadius: '1rem' }}
      />
      <p>Discover new movies, add them to your favorites, and share your reviews!</p>
    </div>
  );
};


export default Home;
