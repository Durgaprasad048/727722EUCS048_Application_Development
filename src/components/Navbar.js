import React from 'react'
import { Link } from 'react-router-dom';
import logo from './loh.png';
const Navbar = () => {
    return (
        <>
            <div className="main-head">
                <img src ={logo} alt="loading..."style={{width:"135px",height:"110px"}}></img>
                <h4 className="main-heading">NATIONAL COLLEGE OF TECHNOLOGY</h4>
            </div>
           <right> <nav className="sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" aria-current="page" to="academics">Academics</Link>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-light navhover dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admission
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/admissionform">AdmissionForm</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/fees">Admission Fees</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/Payment">Payment</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/rules">Rules Of Admission</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" aria-current="page" to="Studentreport">StudentReports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" aria-current="page" to="/facilities">Facilities</Link>
                            </li>
                    
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" aria-current="page" to="/placement">Placement</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" aria-current="page" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item">

            <Link className="nav-link text-light navhover" aria-current="Login" to="/Login">SignUp</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav></right>
        </>
    )
}

export default Navbar
