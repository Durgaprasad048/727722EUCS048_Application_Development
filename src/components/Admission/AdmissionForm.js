import React, { useState } from 'react';

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        dob: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {!submitted ? (
                        <form onSubmit={handleSubmit}>
                            <center>
                            <h1>Online registeration</h1>
                            </center>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone:</label>
                                <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address:</label>
                                <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="city" className="form-label">City:</label>
                                        <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="mb-3">
                                        <label htmlFor="state" className="form-label">State:</label>
                                        <input type="text" className="form-control" id="state" name="state" value={formData.state} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="mb-3">
                                        <label htmlFor="zip" className="form-label">Zip:</label>
                                        <input type="text" className="form-control" id="zip" name="zip" value={formData.zip} onChange={handleChange} required />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dob" className="form-label">Date of Birth:</label>
                                <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
                            </div>
                            <div>
                                <center>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            </center>
                            </div>
                        </form>
                       
                    ) : (
                        <div className="text-center">
                            <h2>Form Submitted Successfully!</h2>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu09m9I8nWEpVG9hsJxOBdSjpeouW5JrAvxiNFVzGqZw6R9L4i24lp944mHZ5O88FkE2U&usqp=CAU" alt="Submitted GIF" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdmissionForm;
