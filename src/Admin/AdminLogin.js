import React from 'react';
import './AdminLogin.css'
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();

  const goToAdminDashboard = () => {
    navigate('/Homead'); 
  };

  return (
    <div className='admin-login'>
      <div className="admin-login-container">
        <h1>Admin Portal</h1>
        <p>Please sign in to access the admin dashboard</p>
        <div className="admin-login-fields">
          <input type="email" placeholder='Admin Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button onClick={goToAdminDashboard}>Login</button>
        <p className="admin-login-signup">Don't have an account? <Link to='/admin-signup'><span>SignUp here</span></Link></p>
      </div>
    </div>
  );
}

export default AdminLogin;
