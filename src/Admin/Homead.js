import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/loh.png';
import Footer from '../components/Footer';

const Homead = () => {
    document.title = "National College of Technology";

    const styles = {
        body: {
            backgroundImage: 'url(https://i.pinimg.com/564x/92/fe/04/92fe046fe9f4098e02ffdb903dce0970.jpg)', // Update this URL to your image path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            margin: 0,
            padding: 0
        },
        mainHead: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8f9fa',
            padding: '20px'
        },
        mainHeading: {
            marginLeft: '15px',
            color: '#343a40'
        },
        navHover: {
            color: '#ffc107'
        },
        container: {
            marginTop: '30px'
        },
        contentSection: {
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
        }
    };

    return (
        <>
        <div style={styles.body}>
            <header style={styles.mainHead}>
                <img src={logo} alt="College Logo" style={{ width: "135px", height: "110px" }} />
                <h4 style={styles.mainHeading}>NATIONAL COLLEGE OF TECHNOLOGY</h4>
            </header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light" style={styles.navHover} to="/Homead">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" style={styles.navHover} to="/AdminDashBoard">Admin Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" style={styles.navHover} to="/adminassignment">Inquiry Assignment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" style={styles.navHover} to="/adminresponse">Response Management</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" style={styles.navHover} to="/adminsetting">Priority Setting</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" to="/admin-login">LogOut</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </div>
            <div className='main-container'>
                <div className=" home-container">
                    <h2 className='my-4 home-heading text-center'  to="academics">Welcome</h2>
                    <p>National College of Technology  is situated in chennai TamilNadu. National College of Technology   is under Anna University. Location of NEC is Anna Nagar Chennai TamilNadu</p>
                    <b>Institute Type: Private </b>
                    <p>Private college is leading educational organisation in india. Teaching facualty of Private ITI is suprimo. ITI is providing latest Job oriented course for student. This Private ITI is powerd by <b>'Ministry of Skill Development and Entrepreneurship, Government of India for Craftsmen Training Scheme.</b> ITI is registered by government under<b>NCVT.</b></p>
                </div>
            </div>
            <Footer />
            </>
    );
}

export default Homead;

