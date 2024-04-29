import React from 'react';

const Mechanical = () => {
    document.title = "Mechanical Engineering";
    return (
        <>
            <div className="container">
                <h1 className='my-4 h1-ubuntu h1-border'>Mechanical Engineering Department</h1>
                <p className='text-indent'>Mechanical Engineering is a high-level diploma program focusing on various aspects of mechanical engineering. The duration of this course is 1 year, typically offered on a part-time basis by various institutes. It covers fundamental principles of mechanical engineering and related activities, preparing candidates for careers in this field.</p>
                <h2 className='my-3 h2-ubuntu'>Mechanical Engineering Department Job Zone:</h2>
                <ul className='mx-2'>
                    <li>Mechanical Engineer</li>
                    <li>Machine Design Engineer</li>
                    <li>Manufacturing Engineer</li>
                    <li>Thermal Engineer</li>
                    <li>Product Development Engineer</li>
                    <li>Automotive Engineer</li>
                    <li>Aerospace Engineer</li>
                    <li>Energy Engineer</li>
                </ul>
                <h2 className='my-3 h2-ubuntu'>Details:</h2>
                <table className="h3-ubuntu table table-hover table-striped table-bordered text-center">
                    <tbody className='table-primary'>
                        <tr>
                            <td><i className="far fa-clock"></i> Duration</td>
                            <td>4 year</td>
                        </tr>
                        <tr>
                            <td><i className="fas fa-redo"></i> Type</td>
                            <td>B.E</td>
                        </tr>
                        <tr>
                            <td><i className="far fa-check-square"></i> Eligibility</td>
                            <td>12th</td>
                        </tr>
                    </tbody>
                </table>
                {/* Information */}
                <div className="goi">
                    
                    

                    <img className='rounded mb-3 mx-auto d-block img-fluid' src='Images/Courses/diesel-img.png' alt="Mechanical Engineering" />
                    <h5 className='text-center'>SECTOR – ENGINEERING</h5>
                </div>
                <h3 className='text-center h3-border mb-4'>Course Information:</h3>
                <p className='text-indent'>During the one-year duration of the Mechanical Engineering course, candidates are trained in professional skills and knowledge related to mechanical engineering. The course covers engineering drawing, workshop calculations, and science, along with employability skills necessary for the job role. Candidates undertake project work and extracurricular activities to enhance their skills and confidence.</p>
                <p className='text-indent'>The course curriculum includes safety procedures, identification of tools & equipment, raw materials, basic fastening and fitting operations, basics of electricity, maintenance procedures, welding techniques, hydraulic and pneumatic systems, vehicle components, dismantling and overhauling of engines, and troubleshooting procedures.</p>
                <h3 className='h2-ubuntu'>CAREER PROGRESSION PATHWAYS:</h3>
                <ul className='mx-2'>
                    <li>Mechanical Engineer</li>
                    <li>Senior Mechanical Engineer</li>
                    <li>Engineering Manager</li>
                    <li>Project Manager</li>
                    <li>Design Engineer</li>
                    <li>Manufacturing Manager</li>
                    <li>Quality Assurance Engineer</li>
                    <li>Research and Development Engineer</li>
                </ul>
                
               
                
                <h3 className='text-center h2-ubuntu'>PASS REGULATION</h3>
                <p className='text-indent'>For the purposes of determining the overall result, weightage of 100% is applied for six months and one year duration courses, and 50% weightage is applied to each examination for two years courses. The minimum pass percent for Trade Practical and Formative assessment is 60%, and for all other subjects is 33%. There will be no grace marks.</p>
                <h3 className='h2-ubuntu'>Brief Description of Job Roles:</h3>
                <p className='text-indent'>Mechanical Engineers design, develop, build, and test mechanical and thermal devices, including tools, engines, and machines. They oversee installation, operation, maintenance, and repair of equipment such as centralized heat, gas, water, and steam systems.</p>
                <p className='text-indent'>Mechanical Engineers may work in various industries including automotive, aerospace, manufacturing, energy, and more. They need to plan and organize their work, communicate effectively, and demonstrate problem-solving skills. Continuous learning and adaptation to new technologies are essential in this field.</p>
                <h2 className="text-center my-4 h2-ubuntu">MECHANICAL ENGINEERING: Subjects of Study</h2>
                <table className='h3-ubuntu table-hover table table-bordered text-center table-striped'>
                    <tbody className='table-primary'>
                        <tr className='table-dark'>
                            <th>Paper Code</th>
                            <th>Subject Name</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Professional Skill (Trade Practical)</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Professional Knowledge (Trade Theory)</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Workshop Calculation & Science</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Trade Engineering Drawing</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Employability Skills</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Mechanical;
