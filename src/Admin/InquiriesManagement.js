
import React, { useState } from 'react'; 
import './InquiriesManagement.css'


const sampleResponses = [
    { id: 1, name: 'John Doe', response: 'Inquiry about admission process.', date: '2024-07-25' },
    { id: 2, name: 'Jane Smith', response: 'Question about course prerequisites.', date: '2024-07-26' },
];

const ResponseManagement = () => {
    const [responses, setResponses] = useState(sampleResponses);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedResponse, setSelectedResponse] = useState(null);
    const [form, setForm] = useState({ name: '', response: '', date: '' });

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (selectedResponse) {
           
            setResponses(responses.map(resp =>
                resp.id === selectedResponse.id ? { ...resp, ...form } : resp
            ));
        } else {
          
            setResponses([...responses, { ...form, id: responses.length + 1 }]);
        }
        setForm({ name: '', response: '', date: '' });
        setSelectedResponse(null);
    };

    const handleEdit = (response) => {
        setForm(response);
        setSelectedResponse(response);
    };

    const handleDelete = (id) => {
        setResponses(responses.filter(response => response.id !== id));
    };

    return (
        <div className="response-management-container">
            <h1>Response Management</h1>
            
            <input
                type="text"
                placeholder="Search responses..."
                value={searchTerm}
                onChange={handleSearch}
                style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
            />
            
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Response</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {responses
                        .filter(resp => resp.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((resp) => (
                            <tr key={resp.id}>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{resp.id}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{resp.name}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{resp.response}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{resp.date}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    <button onClick={() => handleEdit(resp)} className="edit-button">Edit</button>
                                    <button onClick={() => handleDelete(resp.id)} className="delete-button" style={{ marginLeft: '10px' }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

            <div className="form-container">
                <h2>{selectedResponse ? 'Edit Response' : 'Add New Response'}</h2>
                <form onSubmit={handleFormSubmit}>
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
                        Response:
                        <textarea
                            name="response"
                            value={form.response}
                            onChange={handleFormChange}
                            required
                        />
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
                    <button type="submit">{selectedResponse ? 'Update Response' : 'Add Response'}</button>
                </form>
            </div>
        </div>
    );
}

export default ResponseManagement;
