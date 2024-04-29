// Gym.js
import React from 'react';
import './Gym.css'; 

const Gym = () => {
    return (
        <div className="gym-container">
            <h1>Welcome to Our Gym</h1>
            <img src="https://www.davidlloyd.co.uk/cms/images/softwire-david-lloyd/image/upload/f_auto/v1/Gym/glhf19k2agnqjhzbzwb5.jpg" alt="Gym" className="gym-image" />
            <div className="gym-info">
                <p>
                    The gym is a facility designed for physical exercise and fitness activities. It typically contains equipment such as treadmills, weightlifting machines, free weights, and exercise bikes. Gyms offer a variety of services and amenities to help individuals achieve their fitness goals.
                </p>
                <h2>Key Aspects of a Gym:</h2>
                <ol>
                    <li><strong>Fitness Equipment:</strong> Gyms are equipped with a variety of exercise machines and equipment to target different muscle groups and fitness goals.</li>
                    <li><strong>Group Exercise Classes:</strong> Many gyms offer group fitness classes such as yoga, Zumba, spinning, and aerobics. These classes are led by instructors and provide a fun and social way to stay fit.</li>
                    <li><strong>Personal Training:</strong> Gyms often have personal trainers available to provide one-on-one fitness instruction, personalized workout plans, and motivation.</li>
                    <li><strong>Cardiovascular Area:</strong> This area typically includes treadmills, elliptical machines, stationary bikes, and rowing machines for cardiovascular exercise.</li>
                    <li><strong>Strength Training Area:</strong> Gyms have a dedicated space for strength training, which includes weightlifting machines, free weights, and benches.</li>
                    <li><strong>Amenities:</strong> Some gyms offer additional amenities such as saunas, steam rooms, swimming pools, and sports facilities.</li>
                    <li><strong>Health and Wellness Services:</strong> Some gyms provide health and wellness services such as nutrition counseling, massage therapy, and physical therapy.</li>
                    <li><strong>Community and Social Interaction:</strong> Gyms can also serve as community hubs, providing a space for people to meet, socialize, and connect with others who share similar fitness goals.</li>
                </ol>
                <p>
                    Overall, gyms play a crucial role in promoting physical activity, health, and well-being. They provide a supportive environment for individuals to improve their fitness, reduce stress, and enhance their overall quality of life.
                </p>
            </div>
        </div>
    );
}

export default Gym;