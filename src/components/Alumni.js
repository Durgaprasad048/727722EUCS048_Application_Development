import React from 'react'
import { Link } from 'react-router-dom';

const Photo = () => {
  document.title="A.I.J ITI - Alumni Association";

    return (
        <>
            <h1 className='text-center photo-h1 h1-ubuntu m-4'>Alumni Association</h1>
            <div className="container mb-4">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                            <div className="card h-100">
                                <Link to='/Images/Gallery/home1.jpg' target="_blank" rel="noreferrer"><img src='/Images/Gallery/home1.jpg' className="card-img-top" alt="..." /></Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <Link to='/Images/Gallery/home2.jpg' target="_blank" rel="noreferrer"><img src='/Images/Gallery/home2.jpg' className="card-img-top" alt="..." /></Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <Link to='/Images/Gallery/home3.jpg' target="_blank" rel="noreferrer"><img src='/Images/Gallery/home3.jpg' className="card-img-top" alt="..." /></Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <Link to='/Images/Gallery/home4.jpg' target="_blank" rel="noreferrer"><img src='/Images/Gallery/home4.jpg' className="card-img-top" alt="..." /></Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <Link to='/Images/Gallery/home5.jpg' target="_blank" rel="noreferrer"><img src='/Images/Gallery/home5.jpg' className="card-img-top" alt="..." /></Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <Link to='/Images/Gallery/home6.jpg' target="_blank" rel="noreferrer"><img src='/Images/Gallery/home6.jpg' className="card-img-top" alt="..." /></Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <Link to='/Images/Gallery/home7.jpg' target="_blank" rel="noreferrer"><img src='/Images/Gallery/home7.jpg' className="card-img-top" alt="..." /></Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <Link to='/Images/Gallery/home8.jpg' target="_blank" rel="noreferrer"><img src='/Images/Gallery/home8.jpg' className="card-img-top" alt="..." /></Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <Link to='/Images/Gallery/home9.jpg' target="_blank" rel="noreferrer"><img src='/Images/Gallery/home9.jpg' className="card-img-top" alt="..." /></Link>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Photo