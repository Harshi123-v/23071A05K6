// pages/Dashboard.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, logoutUser } from '../utils/auth';
import Fibonacci from '../components/Fibanocci';
import '../Dashboard.css';
 // Optional import if you want to create a separate CSS for this page

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <div className="dashboard container">
      <h2>Welcome to Fibonacci Dashboard</h2>
      <Fibonacci />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
