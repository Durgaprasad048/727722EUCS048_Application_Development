import React from 'react';
import './food.css'; 

const AboutFoodCourt = () => {
    return (
        <div className="about-food-court-container">
            <div className="about-food-court-image">
                <img src="https://marketplace.canva.com/EAE9xsH_sKM/1/0/1600w/canva-black-white-minimalist-food-photo-collage--IrKlYuedFE.jpg" alt="Food Court" />
            </div>
            <div className="about-food-court-text">
                <h2>About Our Food Court</h2>
                <ul>
                    <li>A food court is a common area within a shopping mall, airport, or other large facility where various food vendors operate stalls or booths, typically selling a variety of food items.</li>
                    <li>Food courts are popular because they offer a wide range of food options in one convenient location, making it easy for people to find something they like to eat.</li>
                    <li>They often feature a mix of fast food, casual dining, and specialty food vendors, catering to different tastes and preferences.</li>
                    <li>Food courts usually have seating areas where customers can sit and enjoy their meals.</li>
                    <li>The layout and design of food courts can vary widely, ranging from simple and functional to elaborate and themed.</li>
                    <li>Some food courts may also include entertainment options or activities to enhance the dining experience.</li>
                    <li>Overall, food courts provide a convenient and diverse dining experience for people in busy locations, offering a wide range of food options in one place.</li>
                </ul>
            </div>
        </div>
    );
}

export default AboutFoodCourt;