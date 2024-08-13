import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Admin/AdminDashboard.css';

const AdminDashboard = () => {
    const [inquiries, setInquiries] = useState([]);
    const [selectedInquiry, setSelectedInquiry] = useState(null);
    const [staffName, setStaffName] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchInquiries();
    }, []);

    const fetchInquiries = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/inquiries');
            setInquiries(response.data);
        } catch (error) {
            console.error('Error fetching inquiries:', error);
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleAssignStaff = async () => {
        if (selectedInquiry) {
            try {
                await axios.put(`http://localhost:8080/api/inquiries/${selectedInquiry.id}/assign`, null, {
                    params: { staffName }
                });
                fetchInquiries();
                setStaffName('');
                setSelectedInquiry(null);
            } catch (error) {
                console.error('Error assigning staff:', error);
            }
        }
    };

    const handleSetPriority = async () => {
        if (selectedInquiry) {
            try {
                await axios.put(`http://localhost:8080/api/inquiries/${selectedInquiry.id}/priority`, null, {
                    params: { priority }
                });
                fetchInquiries();
                setPriority('');
                setSelectedInquiry(null);
            } catch (error) {
                console.error('Error setting priority:', error);
            }
        }
    };

    const handleUpdateStatus = async () => {
        if (selectedInquiry) {
            try {
                await axios.put(`http://localhost:8080/api/inquiries/${selectedInquiry.id}/status`, null, {
                    params: { status }
                });
                fetchInquiries();
                setStatus('');
                setSelectedInquiry(null);
            } catch (error) {
                console.error('Error updating status:', error);
            }
        }
    };

    const handleDeleteInquiry = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/inquiries/${id}`);
            fetchInquiries();
        } catch (error) {
            console.error('Error deleting inquiry:', error);
        }
    };

    const handleViewAttachment = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/inquiries/${id}/attachment`, {
                responseType: 'arraybuffer'
            });
            const file = new Blob([response.data], { type: 'application/octet-stream' });
            const fileURL = URL.createObjectURL(file);
            window.open(fileURL);
        } catch (error) {
            console.error('Error retrieving attachment:', error);
        }
    };

    const filteredInquiries = inquiries.filter(inquiry =>
        inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.message.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="admin-container mt-4">
            <h1 className="admin-text-center mb-4">Admin Dashboard</h1>
            
            <div className="admin-row mb-4">
                <div className="admin-col-md-12">
                    <input
                        type="text"
                        placeholder="Search inquiries..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="search-input"
                    />
                </div>
            </div>
            
            <div className="admin-row">
                <div className="admin-col-md-12">
                    <table className="admin-table admin-table-bordered">
                        <thead>
                            <tr>
                                {/* <th>ID</th> */}
                                <th>Name</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Message</th>
                                <th>Status</th>
                                <th>Priority</th>
                                <th>Assigned Staff</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredInquiries.map((inquiry) => (
                                <tr key={inquiry.id}>
                                    {/* <td>{inquiry.id}</td> */}
                                    <td>{inquiry.name}</td>
                                    <td>{inquiry.email}</td>
                                    <td>{inquiry.subject}</td>
                                    <td>{inquiry.message}</td>
                                    <td>{inquiry.status}</td>
                                    <td>{inquiry.priority}</td>
                                    <td>{inquiry.staffName}</td>
                                    <td>
                                        <button
                                            className="admin-btn admin-btn-primary admin-btn-sm me-2"
                                            onClick={() => handleViewAttachment(inquiry.id)}
                                        >
                                            View Attachment
                                        </button>
                                        <button
                                            className="admin-btn admin-btn-warning admin-btn-sm me-2"
                                            onClick={() => setSelectedInquiry(inquiry)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="admin-btn admin-btn-danger admin-btn-sm"
                                            onClick={() => handleDeleteInquiry(inquiry.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedInquiry && (
                <div className="admin-modal fade show d-block" tabIndex="-1" role="dialog">
                    <div className="admin-modal-dialog" role="document">
                        <div className="admin-modal-content">
                            <div className="admin-modal-header">
                                <h5 className="admin-modal-title">Update Inquiry</h5>
                                <button
                                    type="button"
                                    className="admin-close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => setSelectedInquiry(null)}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="admin-modal-body">
                                <div className="admin-form-group">
                                    <label>Assign Staff:</label>
                                    <input
                                        type="text"
                                        className="admin-form-control"
                                        value={staffName}
                                        onChange={(e) => setStaffName(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        className="admin-btn admin-btn-warning mt-2"
                                        onClick={handleAssignStaff}
                                    >
                                        Assign
                                    </button>
                                </div>
                                <div className="admin-form-group mt-3">
                                    <label>Set Priority:</label>
                                    <input
                                        type="text"
                                        className="admin-form-control"
                                        value={priority}
                                        onChange={(e) => setPriority(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        className="admin-btn admin-btn-warning mt-2"
                                        onClick={handleSetPriority}
                                    >
                                        Set
                                    </button>
                                </div>
                                <div className="admin-form-group mt-3">
                                    <label>Update Status:</label>
                                    <input
                                        type="text"
                                        className="admin-form-control"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        className="admin-btn admin-btn-warning mt-2"
                                        onClick={handleUpdateStatus}
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                            <div className="admin-modal-footer">
                                <button
                                    type="button"
                                    className="admin-btn admin-btn-secondary"
                                    onClick={() => setSelectedInquiry(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
