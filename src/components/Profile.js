import React, { useState } from 'react';

const Result = () => (
  <p className='alert alert-success'>Your profile has been successfully updated.</p>
);

const Profile = () => {
  const [result, showResult] = useState(false);

  const updateProfile = (e) => {
    e.preventDefault();
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 4000);

  return (
    <div className="container profile-container mt-4">
      <div className="profile-header text-center mb-4">
        <img src="https://i.pinimg.com/564x/fa/ff/bb/faffbbb5eea2eaad95d0ec50f30c8f67.jpg" alt="Profile" className="profile-img" />
        <h2>DURGA PRASAD R</h2>
        <p className="published">Published</p>
      </div>
      <form onSubmit={updateProfile}>
        <h3>Personal Information</h3>
        <p className="text-center">{result ? <Result /> : null}</p>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" name="name" className="form-control" placeholder='Eg.DURGA PRASAD R' required />
        </div>
        <div className="mb-3">
          <label htmlFor="registration-number" className="form-label">Registration Number</label>
          <input type="text" id="registration-number" name="registration-number" className="form-control" placeholder='Eg.727722EUCS048' required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" name="email" className="form-control" placeholder='Eg.727722eucs048@skcet.ac.in' required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="text" id="phone" name="phone" className="form-control" placeholder='Eg.+91 - 9578181025' required />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <input type="text" id="gender" name="gender" className="form-control" placeholder='Eg.Male' required />
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input type="date" id="dob" name="dob" className="form-control" placeholder='Eg.22-06-04' required />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" id="tag" name="tag" className="form-control" placeholder='Eg.CSE A' required />
        </div>
        <div className="d-grid gap-2 mt-4">
          <button type="submit" className="btn btn-primary mb-4">Update</button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
