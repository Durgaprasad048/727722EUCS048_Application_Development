// src/InquiryList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StatusTracking.css';

const InquiryList = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/inquiries/status'); // Update this URL based on your API endpoint
        setInquiries(response.data);
      } catch (error) {
        setError('Failed to fetch inquiries');
        console.error('Error fetching inquiries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInquiries();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="inquiry-list">
      <h1>Inquiry Tracking</h1>
      <ul>
        {inquiries.map(inquiry => (
          <li key={inquiry.id}>
            <p className="inquiry-id"><strong>Inquiry ID:</strong> {inquiry.name}</p>
            <p className="status"><strong>Status:</strong> {inquiry.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InquiryList;
