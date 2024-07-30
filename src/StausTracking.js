// src/InquiryList.js
import React, { useState, useEffect } from 'react';
import './StatusTracking.css'

const InquiryList = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const mockInquiries = [
      { id: 1, status: 'Pending' },
      { id: 2, status: 'In Progress' },
      { id: 3, status: 'Resolved' }
    ];
    setInquiries(mockInquiries);
  }, []);

  return (
    <div className="inquiry-list">
      <h1>Inquiry Tracking</h1>
      <ul>
        {inquiries.map(inquiry => (
          <li key={inquiry.id}>
            <p className="inquiry-id"><strong>Inquiry ID:</strong> {inquiry.id}</p>
            <p className="status"><strong>Status:</strong> {inquiry.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InquiryList;
