// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Application</h1>
      <div className="buttons-container">
        <Link to="/login">
          <button className="home-btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="home-btn">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
