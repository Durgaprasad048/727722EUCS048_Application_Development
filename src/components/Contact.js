import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Result = () => {
  return (
    <p className='alert alert-success'>Your inquiry has been successfully submitted.</p>
  );
}

const InquirySubmission = () => {
  const [result, showResult] = useState(false);

  const sendInquiry = (e) => {
    e.preventDefault();
    e.target.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
  }, 4000);

  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
          <Link className="nav-link text-light navhover" to="/StatusTracking">Status Tracking</Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link text-light navhover" to="/Login">LogOut</Link>
        </li>
        </ul>
      </div>
    </nav>
    <div className="container h2-ubuntu inquiry-container mt-4">
      <form method='post' onSubmit={sendInquiry} encType="multipart/form-data">
        <h1 className='inquiry-heading h2-ubuntu h3-border text-center mb-2'>New Inquiry</h1>
        <p className="text-center">{result ? <Result /> : null}</p>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" name="name" className="form-control" placeholder='Enter Your Name' id="name" required/>
        </div>
      
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" name='email' className="form-control" placeholder='Enter Your Email' id="email" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input type="text" name='subject' className="form-control" placeholder='Enter Subject' id="subject" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea name='message' className="form-control" rows={8} placeholder="Enter Your Message Here" id="message" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="attachment" className="form-label">Attachment</label>
          <input type="file" name="attachment" className="form-control" id="attachment" />
        </div>
        <div className="d-grid gap-2 mt-4">
          <button type="submit" name='submit' className="btn btn-primary mb-4">Submit</button>
        </div>
      </form>
    </div>
    </>
  );
}

export default InquirySubmission;
