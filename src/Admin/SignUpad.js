import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUpad.css';

const SignUpad = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!name) formErrors.name = 'Name is required';
    if (!email) formErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = 'Email is invalid';
    if (!password) formErrors.password = 'Password is required';
    if (password !== confirmPassword) formErrors.confirmPassword = 'Passwords do not match';
    if (!validatePassword(password)) formErrors.password = 'Password must have one uppercase letter, one lowercase letter, one number, one symbol, and be at least 8 characters long';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSignUp = async () => {
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:8080/api/admins/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });

        if (response.ok) {
          console.log('Sign up successful');
          navigate('/Homead');
        } else {
          const data = await response.json();
          setErrors({ server: data.message || 'Sign up failed' });
        }
      } catch (error) {
        setErrors({ server: 'Sign up failed: ' + error.message });
      }
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
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}

          <input
            type="email"
            placeholder="Admin Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
        </div>

        <div className="admin-signup-agree">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">By continuing, I agree to the terms of use & privacy policy</label>
        </div>

        <button onClick={handleSignUp}>SignUp</button>

        {errors.server && <p className="error-message">{errors.server}</p>}
      </div>
    </div>
  );
};

export default SignUpad;
