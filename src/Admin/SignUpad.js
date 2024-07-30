import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUpad.css';

const SignUpad = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSignUp = () => {
    if (password === confirmPassword) {
      if (validatePassword(password)) {
        console.log('Sign up successful');
        
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        navigate('/AdminSignUp');
      } else {
        alert(
          'Password must have one uppercase letter, one lowercase letter, one number, one symbol, and be at least 8 characters long.'
        );
      }
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="admin-signup">
      <div className="admin-signup-container">
        <h1>Admin Portal</h1>
        <p className="admin-signup-question">
          Are you an admin? <Link to="/admin-login"><span>Login here</span></Link>
        </p>
        <div className="admin-signup-fields">
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Admin Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="admin-signup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <button onClick={handleSignUp}>SignUp</button>
      </div>
    </div>
  );
};

export default SignUpad;
