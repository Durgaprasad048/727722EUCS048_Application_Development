
import React, { useState } from 'react';
import './PrioritySetting.css';


const sampleInquiries = [
    { id: 1, name: 'John Doe', inquiry: 'Admission process query.', priority: 'Medium', date: '2024-07-25' },
    { id: 2, name: 'Jane Smith', inquiry: 'Course prerequisites question.', priority: 'High', date: '2024-07-26' },
];

const PrioritySetting = () => {
    const [inquiries, setInquiries] = useState(sampleInquiries);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedInquiry, setSelectedInquiry] = useState(null);
    const [form, setForm] = useState({ name: '', inquiry: '', priority: '', date: '' });


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
 
            setInquiries(inquiries.map(inc =>
                inc.id === selectedInquiry.id ? { ...inc, ...form } : inc
            ));
        } else {
 
            setInquiries([...inquiries, { ...form, id: inquiries.length + 1 }]);
        }
        setForm({ name: '', inquiry: '', priority: '', date: '' });
        setSelectedInquiry(null);
    };

    const handleEdit = (inquiry) => {
        setForm(inquiry);
        setSelectedInquiry(inquiry);
    };

    const handleDelete = (id) => {
        setInquiries(inquiries.filter(inquiry => inquiry.id !== id));
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
}

export default PrioritySetting;
