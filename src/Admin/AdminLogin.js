import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Ensure this path matches your project structure

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/admins/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const token = await response.text(); // JWT token
        localStorage.setItem('token', token);
        navigate('/Homead');
      } else {
        alert('Login failed: Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-login-container">
        <h1>Admin Portal</h1>
        <div className="admin-login-fields">
          <input
            type="email"
            placeholder="Admin Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        <p className="admin-login-signup">
          Don't have an account? <Link to="/admin-signup"><span>SignUp here</span></Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
