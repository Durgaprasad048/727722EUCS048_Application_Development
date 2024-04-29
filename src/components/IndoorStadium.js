import React from 'react';
import './IndoorStadium.css'; 

const IndoorStadium = () => {
    return (
        <div className="indoor-stadium-container">
            <h1>Welcome to Our Indoor Stadium</h1>
            <div className="indoor-stadium-info">
                <img src="https://i.pinimg.com/originals/23/52/fb/2352fb0fcde02ca86c397fa344e1d179.jpg" alt="Indoor Stadium" />
                <h2>About Our Indoor Stadium</h2>
                <ul>
                    <li>An indoor stadium is a large, enclosed structure designed for hosting various sports and events.</li>
                    <li>Indoor stadiums provide a controlled environment, protecting athletes and spectators from weather conditions like rain or extreme heat.</li>
                    <li>They serve as versatile venues for a wide range of sports, including basketball, volleyball, gymnastics, and indoor track and field events.</li>
                    <li>Indoor stadiums are also used for concerts, exhibitions, trade shows, and other entertainment events.</li>
                    <li>Features of indoor stadiums typically include a large playing area, seating for spectators, locker rooms for athletes, and facilities for media coverage and broadcasting.</li>
                    <li>They may also have amenities such as concessions, restrooms, and VIP lounges.</li>
                    <li>The controlled environment of an indoor stadium ensures that events can proceed as scheduled without being affected by weather disruptions.</li>
                    <li>Overall, indoor stadiums provide a versatile and comfortable venue for a wide range of activities.</li>
                </ul>
            </div>
        </div>
    );
}

export default IndoorStadium;