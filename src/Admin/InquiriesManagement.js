import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Admin/InquiriesManagement';

const ResponseManagement = () => {
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
        <div className="response-management-container">
            <h1 className="response-management-title">Inquiry Management</h1>
            
            <input
                type="text"
                placeholder="Search inquiries..."
                value={searchTerm}
                onChange={handleSearch}
                className="response-management-search-input"
            />
            
            <table className="response-management-table">
                <thead>
                    <tr>
                        <th className="response-management-table-header">ID</th>
                        <th className="response-management-table-header">Name</th>
                        <th className="response-management-table-header">Subject</th>
                        <th className="response-management-table-header">Status</th>
                        <th className="response-management-table-header">Priority</th>
                        <th className="response-management-table-header">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {inquiries
                        .filter(inquiry => inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((inquiry) => (
                            <tr key={inquiry.id}>
                                <td className="response-management-table-cell">{inquiry.id}</td>
                                <td className="response-management-table-cell">{inquiry.name}</td>
                                <td className="response-management-table-cell">{inquiry.subject}</td>
                                <td className="response-management-table-cell">{inquiry.status}</td>
                                <td className="response-management-table-cell">{inquiry.priority}</td>
                                <td className="response-management-table-cell">
                                    <button onClick={() => handleEdit(inquiry)} className="response-management-edit-button">Edit</button>
                                    <button onClick={() => handleDelete(inquiry.id)} className="response-management-delete-button">Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

            <div className="response-management-form-container">
                <h2 className="response-management-form-title">{selectedInquiry ? 'Edit Inquiry' : 'Add New Inquiry'}</h2>
                <form onSubmit={handleFormSubmit} className="response-management-form">
                    <label className="response-management-form-label">
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleFormChange}
                            className="response-management-form-input"
                            required
                        />
                    </label>
                    <br />
                    <label className="response-management-form-label">
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleFormChange}
                            className="response-management-form-input"
                            required
                        />
                    </label>
                    <br />
                    <label className="response-management-form-label">
                        Subject:
                        <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleFormChange}
                            className="response-management-form-input"
                            required
                        />
                    </label>
                    <br />
                    <label className="response-management-form-label">
                        Message:
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleFormChange}
                            className="response-management-form-textarea"
                            required
                        />
                    </label>
                    <br />
                    <label className="response-management-form-label">
                        Status:
                        <input
                            type="text"
                            name="status"
                            value={form.status}
                            onChange={handleFormChange}
                            className="response-management-form-input"
                        />
                    </label>
                    <br />
                    <label className="response-management-form-label">
                        Priority:
                        <input
                            type="text"
                            name="priority"
                            value={form.priority}
                            onChange={handleFormChange}
                            className="response-management-form-input"
                        />
                    </label>
                    <br />
                    <label className="response-management-form-label">
                        Staff Name:
                        <input
                            type="text"
                            name="staffName"
                            value={form.staffName}
                            onChange={handleFormChange}
                            className="response-management-form-input"
                        />
                    </label>
                    <br />
                    <label className="response-management-form-label">
                        Attachment:
                        <input
                            type="file"
                            name="attachment"
                            onChange={handleFileChange}
                            className="response-management-form-file"
                        />
                    </label>
                    <br />
                    <button type="submit" className="response-management-submit-button">
                        {selectedInquiry ? 'Update Inquiry' : 'Add Inquiry'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ResponseManagement;
