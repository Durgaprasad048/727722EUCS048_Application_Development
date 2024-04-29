import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    document.title = "National College of Technology";

    return (
        <>
            <div className="container">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src='https://wallpapercave.com/wp/wp2468660.jpg' className="d-block w-100" alt="Loading" />
                        </div>
                        <div className="carousel-item">
                            <img src='https://en.idei.club/uploads/posts/2023-06/1686084469_en-idei-club-p-indian-college-students-dizain-instagram-2.jpg' className="d-block w-100" alt="Loading" />
                        </div>
                        {/* <div className="carousel-item">
                            <img src='https://shakuntaladevidedcollege.com/images/playg.jpg' className="d-block w-100" alt="Loading" />
                        </div> */}
                        <div className="carousel-item">
                            <img src='https://www.etsu.edu/students/univcent/pictures/auditorium2.jpg' className="d-block w-100" alt="Loading" />
                        </div>
                        <div className="carousel-item">
                            <img src='https://itechindia.co/wp-content/uploads/2021/11/Blog-Image-1.jpeg' className="d-block w-100" alt="Loading" />
                        </div>
                       
                        
                       
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            <div className='main-container'>
                <div className=" home-container">
                    <h2 className='my-4 home-heading text-center'>Welcome To National college of Technology</h2>
                    <p>National College of Technology  is situated in chennai TamilNadu. National College of Technology   is under Anna University. Location of NEC is Anna Nagar Chennai TamilNadu</p>
                    <b>Institute Type: Private </b>
                    <p>Private college is leading educational organisation in india. Teaching facualty of Private ITI is suprimo. ITI is providing latest Job oriented course for student. This Private ITI is powerd by <b>'Ministry of Skill Development and Entrepreneurship, Government of India for Craftsmen Training Scheme.</b> ITI is registered by government under<b>NCVT.</b></p>
                </div>
            </div>


                <h1 className="text-center h1-ubuntu h1-border my-4">Courses Available</h1>
                <div className="course-container h1-ubuntu mb-4">
                    <div className="left">
                        <div className="image">
                            <Link to="/Mechanicaldepartment" ><img src='https://www.tus.ac.jp/en/assets/img/grad/ko/bg_mec.jpg' alt="Loading" /></Link>
                            <div className="text">
                                MechanicalDepartment
                            </div>
                        </div>
                        <div className="image">
                            <Link to="/Electricaldepartment" ><img src='Images/Electrician.jpg' alt="Loading" /></Link>
                            <div className="text">
                                ElectricalDepartment
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="image">
                            <Link to="/Computerdepartment"><img src='https://tse2.mm.bing.net/th?id=OIP.ADOWgga5FKP0vv5u1wk91AHaEU&pid=Api&P=0&h=180' alt="Loading" /></Link>
                            <div className="text">
                                Computer Department
                            </div>
                        </div>
                        <div className="image">
                            <Link to="/civildepartment"><img src='https://i.pinimg.com/736x/ab/75/c9/ab75c958594a7680bfec50406d030d08.jpg' alt="Loading" /></Link>
                            <div className="text">
                                Civil Department
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navigation-button-container text-center">
                <p>For more information about our college, visit the About page:</p>
                <Link to="/About" className="btn btn-primary">About </Link>
            </div>
        </>
    )
}

export default Home