import React from 'react';
import Profile from './Profile';
import { Link } from 'react-router-dom';

import '../Dashboard.css';

const Dashboard = () => (
  <div className="dashboard-container">
    <h1 className='contact-heading h2-ubuntu h3-border text-center mb-2'>Dashboard</h1>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
          <Link className="nav-link text-light navhover" to="/Home">Home</Link>
          </li>
          <li className="nav-item active">
          <Link className="nav-link text-light navhover" to="/Profile">Profile</Link>
          </li>
          <li className="nav-item active">
          <Link className="nav-link text-light navhover" to="/Home">Settings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light navhover" to="/Login">LogOut</Link>
        </li>
        </ul>
      </div>
    </nav>
    <div className="container mt-4">
      <h1 className="text-center mb-4">Welcome to Your Dashboard</h1>
      <Profile />
      {/* Add more sections or components here */}
    </div>
  </div>
);

export default Dashboard;
