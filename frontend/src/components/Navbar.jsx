import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // import your CSS here

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};


export default Navbar;
