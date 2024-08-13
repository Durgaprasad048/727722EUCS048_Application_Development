import React from 'react';

const ElectricalDepartment = () => {
    document.title = "Electrical Department";
    return (
        <>
            <div className="container">
                <h1 className='my-4 h1-ubuntu h1-border'>Electrical Department</h1>
                <p className='text-indent'>The Electrical Department offers a comprehensive diploma program focusing on various aspects of electrical engineering. This one-year course equips candidates with fundamental knowledge and practical skills required in the field of electrical engineering.</p>
                <h2 className='my-3 h2-ubuntu'>Electrical Department Job Zone:</h2>
                <ul className='mx-2'>
                    <li>Electrical Engineer</li>
                    <li>Electrician</li>
                    <li>Electrical Technician</li>
                    <li>Electrical Maintenance Engineer</li>
                    <li>Power System Engineer</li>
                    <li>Control Engineer</li>
                    <li>Instrumentation Engineer</li>
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

                   

                <img className='rounded mb-3 mx-auto d-block img-fluid' src='https://www.aksuniversity.ac.in/sites/default/files/2024-04/btechinelectricalengineering.jpg' alt="Mechanical Engineering" />

                <h3 className='text-center h3-border mb-4'>Course Information:</h3>
                <p className='text-indent'>The Electrical Engineering course covers a wide range of topics including electrical systems, circuits, machines, and applications. Candidates are trained in professional skills and knowledge essential for a career in the electrical engineering field.</p>
                <p className='text-indent'>The course curriculum includes safety procedures, electrical components, wiring techniques, troubleshooting methods, and practical applications of electrical principles. Candidates also undertake projects and practical exercises to enhance their skills.</p>
                <h3 className='h2-ubuntu'>CAREER PROGRESSION PATHWAYS:</h3>
                <ul className='mx-2'>
                    <li>Electrical Engineer</li>
                    <li>Senior Electrical Engineer</li>
                    <li>Electrical Project Manager</li>
                    <li>Power System Engineer</li>
                    <li>Control Systems Engineer</li>
                    <li>Instrumentation Engineer</li>
                    <li>Electrical Maintenance Technician</li>
                </ul>
                
               
                
                <h3 className='text-center h2-ubuntu'>PASS REGULATION</h3>
                <p className='text-indent'>For the purposes of determining the overall result, a weightage of 100% is applied for six months and one year duration courses, and 50% weightage is applied to each examination for two years courses. The minimum pass percentage for Trade Practical and Formative assessment is 60%, and for all other subjects is 33%. There will be no grace marks.</p>
                <h3 className='h2-ubuntu'>Brief Description of Job Roles:</h3>
                <p className='text-indent'>Electrical Engineers design, develop, and maintain electrical systems, machinery, and equipment. They work in various industries including power generation, manufacturing, construction, and telecommunications. Electrical Engineers need to be proficient in electrical principles, wiring techniques, and troubleshooting methods.</p>
                <p className='text-indent'>They plan and organize their work, adhere to safety regulations, and communicate effectively with team members. Continuous learning and adaptation to new technologies are essential in this field.</p>
                <h2 className="text-center my-4 h2-ubuntu">ELECTRICAL ENGINEERING: Subjects of Study</h2>
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

export default ElectricalDepartment;
