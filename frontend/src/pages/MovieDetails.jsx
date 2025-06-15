import { Link } from 'react-router-dom';
import '../index.css'; // Make sure this path is correct
import bgImage from '../assets/cinema-bg.jpg'; // Step 1: import image

const Index = () => {
  return (
    <div className="index-page">
      {/* Hero Section with background */}
      <header
        className="hero-section"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <h1>Welcome to Your Movie Haven!</h1>
        <p>Discover, Review, and Share Your Favorite Films</p>
        <div className="cta-buttons">
          <Link to="/register" className="btn primary-btn">Get Started</Link>
          <Link to="/login" className="btn secondary-btn">Sign In</Link>
        </div>
      </header>

      {/* Other Sections */}
      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon">🎬</div>
            <h3>Discover Movies</h3>
            <p>Explore a vast collection of movies tailored to your taste. Find new favorites with ease!</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📋</div>
            <h3>Build Watchlists</h3>
            <p>Create personalized watchlists to keep track of movies you want to see next.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Share Reviews</h3>
            <p>Rate and review films to share your thoughts with the community.</p>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <p>Your Ultimate Movie Companion</p>
        <div className="footer-links">
          <a href="#" className="footer-link">About</a> | 
          <a href="#" className="footer-link">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
