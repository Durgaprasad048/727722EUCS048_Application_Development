import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const token = await response.text(); // JWT token
        localStorage.setItem('token', token);
        navigate('/home');
      } else {
        alert('Login failed: Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div className="lognsignup">
      <div className="logn-signup-container">
        <h1>Welcome Back!</h1>
        <div className="lognsignup-fields">
          <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleLogin}>Login</button>
        <p className="lognsignup-login">Don't have an account? <Link to='/signup'><span>SignUp here</span></Link></p>
      </div>
    </div>
  );
}

export default Login;
