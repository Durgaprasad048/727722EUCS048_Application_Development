import React from 'react';
import { Link } from 'react-router-dom';
import logo from './loh.png'; // Ensure this path is correct
import '../Navbar.css'; // Ensure this path is correct

const Navbar = () => {
    return (
        <>
            <header className="main-head">
                <img src={logo} alt="College Logo" style={{ width: "135px", height: "110px" }} />
                <h4 className="main-heading">NATIONAL COLLEGE OF TECHNOLOGY</h4>
            </header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" to="/Home/academics">Academics</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-light navhover dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admission
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/admissionform">Admission Form</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/fees">Admission Fees</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/Payment">Payment</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/rules">Rules Of Admission</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" to="/Studentreport">Student Reports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" to="/facilities">Facilities</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" to="/contact">Inquiry</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" to="/login">LogOut</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" to="/dashboard">DashBoard</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
