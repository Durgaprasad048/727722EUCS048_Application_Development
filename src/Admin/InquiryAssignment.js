import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InquiryAssignment.css';

const sampleAssignments = [
    'Admin',
    'Support Team',
    'Staff',
    'Scholarship'   
];

const InquiryAssignment = () => {
    const [inquiries, setInquiries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedInquiry, setSelectedInquiry] = useState(null);
    const [form, setForm] = useState({ assignedTo: '' });

    // Fetch inquiries from the database when the component mounts
    useEffect(() => {
        axios.get('http://localhost:8080/api/inquiries')
            .then(response => setInquiries(response.data))
            .catch(error => console.error('Error fetching inquiries:', error));
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm({ [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (selectedInquiry) {
            axios.put(`/api/inquiries/${selectedInquiry.id}/assign`, { assignedTo: form.assignedTo })
                .then(response => {
                    setInquiries(inquiries.map(inquiry =>
                        inquiry.id === selectedInquiry.id ? { ...inquiry, assignedTo: response.data.assignedTo } : inquiry
                    ));
                    setForm({ assignedTo: '' });
                    setSelectedInquiry(null);
                })
                .catch(error => console.error('Error assigning inquiry:', error));
        }
    };

    const handleEdit = (inquiry) => {
        setForm({ assignedTo: inquiry.assignedTo });
        setSelectedInquiry(inquiry);
    };

    return (
        <div className="inquiry-assignment-container">
            <h1>Inquiry Assignment</h1>
            
            <input
                type="text"
                placeholder="Search inquiries..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
            />
            
            <table className="inquiry-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Inquiry</th>
                        <th>Date</th>
                        <th>Assigned To</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {inquiries
                        .filter(inquiry => inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((inquiry) => (
                            <tr key={inquiry.id}>
                                <td>{inquiry.id}</td>
                                <td>{inquiry.name}</td>
                                <td>{inquiry.inquiry}</td>
                                <td>{inquiry.date}</td>
                                <td>{inquiry.assignedTo || 'Not Assigned'}</td>
                                <td>
                                    <button onClick={() => handleEdit(inquiry)} className="edit-button">Assign</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

            {selectedInquiry && (
                <div className="form-container">
                    <h2>Assign Inquiry</h2>
                    <form onSubmit={handleFormSubmit}>
                        <label>
                            Assign To:
                            <select
                                name="assignedTo"
                                value={form.assignedTo}
                                onChange={handleFormChange}
                                required
                            >
                                <option value="" disabled>Select department or individual</option>
                                {sampleAssignments.map((assignment, index) => (
                                    <option key={index} value={assignment}>{assignment}</option>
                                ))}
                            </select>
                        </label>
                        <br />
                        <button type="submit">Assign Inquiry</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default InquiryAssignment;
