import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PrioritySetting.css';

const PrioritySetting = () => {
    const [inquiries, setInquiries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedInquiry, setSelectedInquiry] = useState(null);
    const [form, setForm] = useState({ name: '', inquiry: '', priority: '', date: '' });

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
        setForm({ ...form, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (selectedInquiry) {
            // Update an existing inquiry
            axios.put(`http://localhost:8080/api/inquiries/${selectedInquiry.id}`, form)
                .then(response => {
                    setInquiries(inquiries.map(inc =>
                        inc.id === selectedInquiry.id ? response.data : inc
                    ));
                    setForm({ name: '', inquiry: '', priority: '', date: '' });
                    setSelectedInquiry(null);
                })
                .catch(error => console.error('Error updating inquiry:', error));
        } else {
            // Add a new inquiry
            axios.post('http://localhost:8080/api/inquiries', form)
                .then(response => {
                    setInquiries([...inquiries, response.data]);
                    setForm({ name: '', inquiry: '', priority: '', date: '' });
                })
                .catch(error => console.error('Error adding inquiry:', error));
        }
    };

    const handleEdit = (inquiry) => {
        setForm(inquiry);
        setSelectedInquiry(inquiry);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/inquiries/${id}`)
            .then(() => {
                setInquiries(inquiries.filter(inquiry => inquiry.id !== id));
            })
            .catch(error => console.error('Error deleting inquiry:', error));
    };

    return (
        <div className="priority-setting-container">
            <h1>Priority Setting</h1>

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
                        <th>Priority</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {inquiries
                        .filter(inc => inc.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((inc) => (
                            <tr key={inc.id}>
                                <td>{inc.id}</td>
                                <td>{inc.name}</td>
                                <td>{inc.inquiry}</td>
                                <td>{inc.priority}</td>
                                <td>{inc.date}</td>
                                <td>
                                    <button onClick={() => handleEdit(inc)} className="edit-button">Edit</button>
                                    <button onClick={() => handleDelete(inc.id)} className="delete-button">Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

            <h2>{selectedInquiry ? 'Edit Inquiry' : 'Add New Inquiry'}</h2>
            <form onSubmit={handleFormSubmit} className="form-container">
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
                    Inquiry:
                    <textarea
                        name="inquiry"
                        value={form.inquiry}
                        onChange={handleFormChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Priority:
                    <select
                        name="priority"
                        value={form.priority}
                        onChange={handleFormChange}
                        required
                    >
                        <option value="">Select Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </label>
                <br />
                <label>
                    Date:
                    <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleFormChange}
                        required
                    />
                </label>
                <br />
                <button type="submit" className="submit-button">
                    {selectedInquiry ? 'Update Inquiry' : 'Add Inquiry'}
                </button>
            </form>
        </div>
    );
};

export default PrioritySetting;
