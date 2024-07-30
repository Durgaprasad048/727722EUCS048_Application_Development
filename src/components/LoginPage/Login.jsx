// import React from 'react';
import '../Login.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email.endsWith('student@nct.ac.in')) {
      navigate('/Home');
    } else {
      setError('Invalid email address. Please use your student email ending with "student@nct.ac.in".');
    }
  };

  return (
    <div className='lognsignup'>
      <div className="logn-signup-container">
        <h1>Welcome Back!</h1>
        <p className="loginsignup-">
          Are you an admin? <Link to="/admin-login"><span>Login here</span></Link>
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="lognsignup-fields">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p><Link to="/forgot-password">Forgot Password?</Link></p>
          {error && <p className="error">{error}</p>}
          <button type="button" onClick={handleLogin}>Login</button>
        </form>
        <p className="lognsignup-login">Don't have an account? <Link to='/signup'><span>SignUp here</span></Link></p>
      </div>
    </div>
  );
}

export default Login;
