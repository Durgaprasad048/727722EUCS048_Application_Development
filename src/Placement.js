import React from 'react';
import { Link } from 'react-router-dom';
const PlacementPage = () => {
    React.useEffect(() => {
        document.title = "Placement";
    }, []);

    
    const placementData = [
        {
            id: 1,
            company: "Google",
            role: "Software Developer",
            package: "40 LPA",
            location: "Bangalore",
            date: "01-07-2023",
            image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/C7AA/production/_127641115_gettyimages-1243527255.jpg" 
        },
        {
            id: 2,
            company: "ZOHO",
            role: "Data Analyst",
            package: "10 LPA",
            location: "Chennai",
            date: "15-07-2023",
            image: "https://www.freshersvoice.com/wp-content/uploads/2023/09/Zoho-Off-Campus.png" // Path to company logo image
        },
        {
            id: 3,
            company: "Accenture",
            role: "Data Analyst",
            package: "5.5 LPA",
            location: "Mumbai",
            date: "15-07-2023",
            image: "https://images.livemint.com/img/2023/03/23/600x338/Accenture_1679427786760_1679597580728_1679597580728.jpg" // Path to company logo image
        },
        {
            id: 4,
            company: "Infosys",
            role: "Software Engineer",
            package: "6 LPA",
            location: "Chennai",
            date: "15-07-2023",
            image: "https://media.glassdoor.com/l/80/6c/f0/18/infosys-reception.jpg"
        },
        {
            id: 5,
            company: "TCS",
            role: "Data Analyst",
            package: "5.5 LPA",
            location: "Mumbai",
            date: "15-07-2023",
            image: "https://images.news18.com/ibnlive/uploads/2022/02/tcs-2-16572878614x3.jpg" 
        },
        {
            id: 6,
            company: "Wipro",
            role: "Data Analyst",
            package: "5.5 LPA",
            location: "Mumbai",
            date: "15-07-2023",
            image: "https://www.armcommunications.com/ckfinder/userfiles/images/25%20top/wipro.png" 
        },
       
    ];
    const separateImage = "https://i.pinimg.com/originals/8b/76/76/8b7676af68f075adea762f9c70de7f2f.jpg"
    return (
        <div className='container'>
            <h1 className='text-center mt-4'>PLACEMENTS</h1><br></br><br></br>
            <div className="row">
                {placementData.map((placement, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                              
                            <img src={placement.image} className="card-img-top" alt={placement.company} />
                            <div className="card-body">
                                <h5 className="card-title">{placement.company}</h5>
                                <p className="card-text">Role: {placement.role}</p>
                                <p className="card-text">Package: {placement.package}</p>
                                <p className="card-text">Location: {placement.location}</p>
                                <p className="card-text">Date: {placement.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="text-center">
                    <h1> Other Top Companies </h1><br></br><br></br>
                <img src={separateImage} alt="Separate "  />
            </div>
            </div>
            <Link to="/chart" >HARi</Link>
        </div>
    );
}

export default PlacementPage;
