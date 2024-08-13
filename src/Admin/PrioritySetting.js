import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PrioritySetting.css'; // Ensure to have appropriate styles in this file

const AdminInquiryResponseManagement = () => {
    const [inquiries, setInquiries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedInquiry, setSelectedInquiry] = useState(null);
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        status: '',
        priority: '',
        staffName: '',
        response: '',
        responseDate: '',
        attachment: null
    });

    useEffect(() => {
        fetchInquiries();
    }, []);

    const fetchInquiries = async () => {
        try {
            const result = await axios.get('http://localhost:8080/api/inquiries');
            setInquiries(result.data);
        } catch (error) {
            console.error('Failed to fetch inquiries', error);
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (e) => {
        setForm({ ...form, attachment: e.target.files[0] });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in form) {
            formData.append(key, form[key]);
        }

        try {
            if (selectedInquiry) {
                // Update existing inquiry
                await axios.put(`http://localhost:8080/api/inquiries/${selectedInquiry.id}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            } else {
                // Add new inquiry
                await axios.post('http://localhost:8080/api/inquiries', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            }
            fetchInquiries(); // Refresh inquiries
            setForm({
                name: '',
                email: '',
                subject: '',
                message: '',
                status: '',
                priority: '',
                staffName: '',
                response: '',
                responseDate: '',
                attachment: null
            });
            setSelectedInquiry(null);
        } catch (error) {
            console.error('Failed to submit form', error);
        }
    };

    const handleEdit = (inquiry) => {
        setForm({
            name: inquiry.name,
            email: inquiry.email,
            subject: inquiry.subject,
            message: inquiry.message,
            status: inquiry.status,
            priority: inquiry.priority,
            staffName: inquiry.staffName,
            response: inquiry.response || '',
            responseDate: inquiry.responseDate ? new Date(inquiry.responseDate).toISOString().split('T')[0] : '',
            attachment: null
        });
        setSelectedInquiry(inquiry);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/inquiries/${id}`);
            fetchInquiries(); // Refresh inquiries
        } catch (error) {
            console.error('Failed to delete inquiry', error);
        }
    };

    return (
        <div className="admin-inquiry-response-management-container">
            <h1 className="admin-inquiry-response-management-title">Admin Inquiry Response Management</h1>
            
            <input
                type="text"
                placeholder="Search inquiries..."
                value={searchTerm}
                onChange={handleSearch}
                className="admin-inquiry-response-management-search-input"
            />
            
            <table className="admin-inquiry-response-management-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Priority</th>
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
                                <td>{inquiry.subject}</td>
                                <td>{inquiry.status}</td>
                                <td>{inquiry.priority}</td>
                                <td>
                                    <button onClick={() => handleEdit(inquiry)} className="admin-inquiry-response-management-edit-button">Edit</button>
                                    <button onClick={() => handleDelete(inquiry.id)} className="admin-inquiry-response-management-delete-button">Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

            <div className="admin-inquiry-response-management-form-container">
                <h2 className="admin-inquiry-response-management-form-title">{selectedInquiry ? 'Edit Inquiry Response' : 'Add New Inquiry Response'}</h2>
                <form onSubmit={handleFormSubmit} className="admin-inquiry-response-management-form">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Subject:
                        <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Message:
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Status:
                        <input
                            type="text"
                            name="status"
                            value={form.status}
                            onChange={handleFormChange}
                        />
                    </label>
                    <br />
                    <label>
                        Priority:
                        <input
                            type="text"
                            name="priority"
                            value={form.priority}
                            onChange={handleFormChange}
                        />
                    </label>
                    <br />
                    <label>
                        Staff Name:
                        <input
                            type="text"
                            name="staffName"
                            value={form.staffName}
                            onChange={handleFormChange}
                        />
                    </label>
                    <br />
                    <label>
                        Response:
                        <textarea
                            name="response"
                            value={form.response}
                            onChange={handleFormChange}
                        />
                    </label>
                    <br />
                    <label>
                        Response Date:
                        <input
                            type="date"
                            name="responseDate"
                            value={form.responseDate}
                            onChange={handleFormChange}
                        />
                    </label>
                    <br />
                    <label>
                        Attachment:
                        <input
                            type="file"
                            name="attachment"
                            onChange={handleFileChange}
                        />
                    </label>
                    <br />
                    <button type="submit">
                        {selectedInquiry ? 'Update Inquiry Response' : 'Add Inquiry Response'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminInquiryResponseManagement;
