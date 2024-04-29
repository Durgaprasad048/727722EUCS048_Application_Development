import React, { useState } from 'react';

const Result = () => {
  return (
    <p className='alert alert-success'>Your Message Has Been Successfully Sent.</p>
  );
}

const Contact = () => {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 4000);

  return (
    <div className="container h2-ubuntu contact-container mt-4">
      <form method='post' onSubmit={sendEmail}>
        <h1 className='contact-heading h2-ubuntu h3-border text-center mb-2'>Contact US</h1>
        <p className="text-center">{result ? <Result /> : null}</p>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" name="name" className="form-control" placeholder='Enter Your Name' id="name" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Id</label>
          <input type="email" name='email' className="form-control" placeholder='Enter Email Id' id="email" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile No.</label>
          <input type="text" name='mobile' className="form-control" placeholder='Enter Mobile No.' id="mobile" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">DEPARTMENT</label>
          <input type="text" name='subject' className="form-control" placeholder='Enter Department' id="subject" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="textarea" className="form-label">Message</label>
          <textarea name='message' className="form-control" rows={8} placeholder="Enter Your Message Here" id="textarea" required/>
        </div>
        <div className="d-grid gap-2 mt-4">
          <button type="submit" name='submit' className="btn btn-primary mb-4">Submit</button>
        </div>
      </form>

      <h1 className="text-center h2-ubuntu h1-border my-4">More Contact Details:</h1>
      <table className="table table-hover table-bordered table-striped text-center table-responsive">
        <tbody className='table-primary'>
          <tr className='table-dark'>
            <th colSpan="2">Contact Details</th>
          </tr>
          <tr>
            <td rowSpan="2">College</td>
            <td>9578181025</td>
          </tr>
          <tr>
            <td>Angelsnowlita@gmail.com</td>
          </tr>
          <tr>
            <td rowSpan="2">Principal</td>
            <td>9223456870</td>
          </tr>
          <tr>
            <td>Abu@gmail.com</td>
          </tr>
          <tr>
            <td rowSpan="2">Head Clerk</td>
            <td>8234565436</td>
          </tr>
          <tr>
            <td>durgaprasad22062004@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Contact;