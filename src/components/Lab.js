import React from 'react';
// Assuming you have a CSS file named 'laboratory.css' for styling

const Lab = () => {
    return (
        <div className="about-laboratory-container">
            <div className="about-laboratory-image">
                {/* Image source can be changed */}
                <img src="https://example.com/lab_image.jpg" alt="Laboratory" />
            </div>
            <div className="about-laboratory-text">
                <h2>About Our Laboratory</h2>
                <ul>
                    <li>A laboratory is a facility where scientific research, experiments, measurements, and analyses are conducted in various fields such as biology, chemistry, physics, and engineering.</li>
                    <li>Laboratories are equipped with specialized instruments, equipment, and materials to facilitate research and experimentation.</li>
                    <li>Scientists, researchers, and students use laboratories to explore and discover new knowledge, conduct experiments to test hypotheses, and develop new technologies.</li>
                    <li>Depending on the field of study, laboratories may focus on different areas such as microbiology, genetics, organic chemistry, robotics, and environmental science.</li>
                    <li>Laboratories adhere to strict safety protocols and guidelines to ensure the well-being of researchers and prevent accidents or exposure to hazardous materials.</li>
                    <li>They may also have dedicated areas for specific types of experiments, such as clean rooms for sensitive experiments or containment facilities for working with hazardous substances.</li>
                    <li>Many laboratories are part of academic institutions, government agencies, or private companies and play a crucial role in advancing scientific knowledge and technological innovation.</li>
                    <li>Overall, laboratories are essential for advancing scientific understanding, developing new technologies, and addressing complex challenges in various fields.</li>
                </ul>
            </div>
        </div>
    );
}

export default Lab;
