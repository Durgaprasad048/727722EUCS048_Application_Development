import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Result = () => {
  return (
    <p className='alert alert-success'>Your inquiry has been successfully submitted.</p>
  );
}

const InquirySubmission = () => {
  const [result, showResult] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    attachment: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const sendInquiry = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('subject', formData.subject);
    data.append('message', formData.message);
    
    if (formData.attachment) {
      data.append('attachment', formData.attachment);
    }

    try {
      const response = await axios.post('http://localhost:8080/api/inquiries', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Response:', response);  // Log response for debugging
      showResult(true);
      setError(null);
    } catch (err) {
      console.error('Error:', err);  // Log error for debugging
      setError('Failed to submit inquiry.');
      showResult(false);
    }

    setTimeout(() => {
      showResult(false);
    }, 4000);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      attachment: null
    });
  };

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
          {error && <p className='alert alert-danger'>{error}</p>}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" name="name" className="form-control" placeholder='Enter Your Name' id="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name='email' className="form-control" placeholder='Enter Your Email' id="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" name='subject' className="form-control" placeholder='Enter Subject' id="subject" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea name='message' className="form-control" rows={8} placeholder="Enter Your Message Here" id="message" value={formData.message} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="attachment" className="form-label">Attachment</label>
            <input type="file" name="attachment" className="form-control" id="attachment" onChange={handleChange} />
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
