import React from 'react';
import './Abou.css'; // Import CSS file for styling

function About() {
    return (
        <div className="about-container">
            <header>
                <h1>Welcome to Our College</h1>
            </header>
            <main>
                <section className="about-section">
                    <div className="content">
                        <h2>About Us</h2>
                        <p>Our college is committed to providing a comprehensive educational experience that prepares students for success in their careers and in life. With a focus on innovation, excellence, and diversity, we strive to create a supportive learning environment where students can thrive academically, professionally, and personally.</p>
                        <p>Our dedicated faculty members are experts in their fields and are passionate about helping students reach their full potential. Through hands-on learning opportunities, cutting-edge research, and partnerships with industry leaders, we ensure that our graduates are well-equipped to meet the challenges of today's world.</p>
                        <p>At our college, we believe in fostering a culture of inclusivity and belonging. We celebrate diversity and encourage students from all backgrounds to pursue their passions and achieve their goals. Our campus is a vibrant community where students can engage in a variety of extracurricular activities, clubs, and events, enriching their college experience and creating lasting memories.</p>
                        <p>With state-of-the-art facilities, modern technology, and dynamic teaching methods, we provide students with the tools they need to succeed in the ever-evolving global marketplace. Whether you're interested in pursuing a degree in STEM, humanities, business, or the arts, our college offers a wide range of programs and opportunities for personal and professional growth.</p>
                        <p>Join us at Our College and embark on a transformative journey towards a brighter future!</p>
                    </div>
                    <div className="image-container">
                        <img src="https://3.bp.blogspot.com/-9OhCIaGN7WY/WkSvKGe0OGI/AAAAAAAABi4/DcvX1aC1R9goCpXh3TAW4PKAll3j8iBugCLcBGAs/s1600/17.%2BSports%2Bground.jpg" alt="College Building" />
                        <img src="https://tse2.mm.bing.net/th?id=OIP.rYjM0YdsMYwtrD7aKVtMbQHaFj&pid=Api&P=0&h=180" alt="College Campus" />
                        <img src="https://tse4.mm.bing.net/th?id=OIP.1SumJqvcPUo2DvrzOtZbAgHaE8&pid=Api&P=0&h=180" alt="College Classroom" />
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Our College. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default About;
