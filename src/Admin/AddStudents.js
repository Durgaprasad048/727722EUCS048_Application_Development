import React, { useState } from 'react';

const Addstudent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSignUp = async () => {
    if (!termsAccepted) {
      alert('Please accept the terms of use and privacy policy.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!validatePassword(password)) {
      alert('Password must have one uppercase letter, one lowercase letter, one number, one symbol, and be at least 8 characters long.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      if (response.ok) {
        setSuccessMessage('Sign up successful!'); // Set success message
      } else {
        const data = await response.json();
        alert(data.message || 'Sign up failed');
      }
    } catch (error) {
      alert('Sign up failed: ' + error.message);
    }
  };

  return (
    <div className="loginsignup">
      <div className="login-signup-container">
        <h1>Welcome</h1>
        
        <div className="loginsignup-fields">
          <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" checked={termsAccepted} onChange={() => setTermsAccepted(!termsAccepted)} />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <button onClick={handleSignUp}>Register</button>
        {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
      </div>
    </div>
  );
};

export default Addstudent;
