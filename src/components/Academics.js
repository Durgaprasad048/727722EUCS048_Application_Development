import React from 'react';
import { Link } from 'react-router-dom';
const Academics = () => {
    return (
        <div className="container">
            <h1 className="my-4 h1-ubuntu h1-border">Academics</h1>

           
            <div className="undergraduate">
                <h2 className="mt-4 h2-ubuntu">Undergraduate Programs</h2>
                <div className="academics-table">
                    <table className="table table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>Course</th>
                                <th>Duration</th>
                                <th>Type</th>
                                <th>Eligibility</th>
                                <th>Location</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Admission Deadline</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Computer Engineering</td>
                                <td>4 years</td>
                                <td>Bachelor's Degree</td>
                                <td>12th</td>
                                <td>Coimbatore</td>
                                <td>01/01/2024</td>
                                <td>12/31/2028</td>
                                <td>12/15/2023</td>
                            </tr>
                            <tr>
                                <td>Information Technology</td>
                                <td>4 years</td>
                                <td>Bachelor's Degree</td>
                                <td>12th</td>
                                <td>Coimbatore</td>
                                <td>01/01/2024</td>
                                <td>12/31/2028</td>
                                <td>12/15/2023</td>
                            </tr>
                            <tr>
                                <td>Electrical Engineering</td>
                                <td>4 years</td>
                                <td>Bachelor's Degree</td>
                                <td>12th</td>
                                <td>Coimbatore</td>
                                <td>01/01/2024</td>
                                <td>12/31/2028</td>
                                <td>12/15/2023</td>
                            </tr>
                            <tr>
                                <td>Artificial Intelligence and Data Science</td>
                                <td>4 years</td>
                                <td>Bachelor's Degree</td>
                                <td>12th</td>
                                <td>Coimbatore</td>
                                <td>01/01/2024</td>
                                <td>12/31/2028</td>
                                <td>12/15/2023</td>
                            </tr>
                            <tr>
                                <td>Artificial Intelligence and Machine Learning</td>
                                <td>4 years</td>
                                <td>Bachelor's Degree</td>
                                <td>12th</td>
                                <td>Coimbatore</td>
                                <td>01/01/2024</td>
                                <td>12/31/2028</td>
                                <td>12/15/2023</td>
                            </tr>
                            <tr>
                                <td>Internet Of Things</td>
                                <td>4 years</td>
                                <td>Bachelor's Degree</td>
                                <td>12th</td>
                                <td>Coimbatore</td>
                                <td>01/01/2024</td>
                                <td>12/31/2028</td>
                                <td>12/15/2023</td>
                            </tr>
                            <tr>
                                <td>Cyber Security</td>
                                <td>4 years</td>
                                <td>Bachelor's Degree</td>
                                <td>12th</td>
                                <td>Coimbatore</td>
                                <td>01/01/2024</td>
                                <td>12/31/2028</td>
                                <td>12/15/2023</td>
                            </tr>
                            <tr>
                                <td>Civil Engineering</td>
                                <td>4 years</td>
                                <td>Bachelor's Degree</td>
                                <td>12th</td>
                                <td>Coimbatore</td>
                                <td>01/01/2024</td>
                                <td>12/31/2028</td>
                                <td>12/15/2023</td>
                            </tr>
                            <tr>
                                <td>Mechanical Engineering</td>
                                <td>4 years</td>
                                <td>Bachelor's Degree</td>
                                <td>12th</td>
                                <td>Coimbatore</td>
                                <td>01/01/2024</td>
                                <td>12/31/2028</td>
                                <td>12/15/2023</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

          
            <div className="postgraduate">
                <h2 className="mt-4 h2-ubuntu">Postgraduate Programs</h2>
                <div className="academics-table">
                    <table className="table table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>Course</th>
                                <th>Duration</th>
                                <th>Type</th>
                                <th>Eligibility</th>
                                <th>Location</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Admission Deadline</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Computer Science</td>
                                <td>2 years</td>
                                <td>Master's Degree</td>
                                <td>Bachelor's Degree</td>
                                <td>Coimbatore</td>
                                <td>01/01/2024</td>
                                <td>12/31/2026</td>
                                <td>12/15/2023</td>
                            </tr>
                            <tr>
                                <td>Electrical Engineering (Masters)</td>
                                <td>2 years</td>
                                <td>Master's Degree</td>
                                <td>Bachelor's Degree</td>
                                <td>Coimbatore</td>
                                <td>01/01/2024</td>
                                <td>12/31/2026</td>
                                <td>12/15/2023</td>
                            </tr>
                           
                        </tbody>
                    </table>
                    <div className="navigation-button-container text-center">
                <p>For more information about our college, visit the About page:</p>
                <li className="nav-item">
                                <Link className="nav-link" to="/StudentsReports">Admission Form</Link>
                            </li>
                </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default Academics;
