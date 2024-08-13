import React from 'react';

const ComputerDepartment = () => {
    document.title = "Computer Department";
    return (
        <>
            <div className="container">
                <h1 className='my-4 h1-ubuntu h1-border'>Computer Department</h1>
                <p className='text-indent'>The Computer Department offers a comprehensive diploma program focusing on various aspects of computer science and technology. This one-year course equips candidates with fundamental knowledge and practical skills required in the field of computer science.</p>
                <h2 className='my-3 h2-ubuntu'>Computer Department Job Zone:</h2>
                <ul className='mx-2'>
                    <li>Software Engineer</li>
                    <li>Web Developer</li>
                    <li>Network Administrator</li>
                    <li>Database Administrator</li>
                    <li>System Analyst</li>
                    <li>IT Support Specialist</li>
                    <li>Computer Programmer</li>
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
                <img className='rounded mb-3 mx-auto d-block img-fluid' src='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/10/computer_engineer-compare-page.jpg' alt="Mechanical Engineering" />

                <h3 className='text-center h3-border mb-4'>Course Information:</h3>
                <p className='text-indent'>The Computer Engineering course covers a wide range of topics including programming, software development, networking, and database management. Candidates are trained in professional skills and knowledge essential for a career in the computer science field.</p>
                <p className='text-indent'>The course curriculum includes programming languages, software development methodologies, database design, and network administration. Candidates also undertake projects and practical exercises to enhance their skills.</p>
                <h3 className='h2-ubuntu'>CAREER PROGRESSION PATHWAYS:</h3>
                <ul className='mx-2'>
                    <li>Software Engineer</li>
                    <li>Web Developer</li>
                    <li>Network Administrator</li>
                    <li>Database Administrator</li>
                    <li>System Analyst</li>
                    <li>IT Support Specialist</li>
                    <li>Computer Programmer</li>
                </ul>
               
                
                <h3 className='text-center h2-ubuntu'>PASS REGULATION</h3>
                <p className='text-indent'>For the purposes of determining the overall result, a weightage of 100% is applied for six months and one year duration courses, and 50% weightage is applied to each examination for two years courses. The minimum pass percentage for Trade Practical and Formative assessment is 60%, and for all other subjects is 33%. There will be no grace marks.</p>
                <h3 className='h2-ubuntu'>Brief Description of Job Roles:</h3>
                <p className='text-indent'>Computer Engineers design, develop, and maintain software applications, systems, and networks. They work in various industries including technology, finance, healthcare, and education. Computer Engineers need to be proficient in programming languages, software development methodologies, and network administration.</p>
                <p className='text-indent'>They plan and organize their work, adhere to industry standards and best practices, and collaborate effectively with team members. Continuous learning and adaptation to new technologies are essential in this field.</p>
                <h2 className="text-center my-4 h2-ubuntu">COMPUTER ENGINEERING: Subjects of Study</h2>
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

export default ComputerDepartment;
