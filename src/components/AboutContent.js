import './AboutContentStyles.css'
import { Link } from 'react-router-dom'

import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
           <h1>My Skills</h1> <br /> <br />
           <div className='ta'>
                <table>
                    <tr>
                        <th>Frontend</th>
                        <th>Backend</th>
                        <th>Content Management System</th>
                        <th>Software Methadology</th>
                        <th>Project Management</th>
                        <th>Version Control</th>
                        <th>IDE</th>
                        <th>Operating Systems</th>
                        <th>Additional Skills</th>
                    </tr>
                    <tr>
                        <td>Object Oriented Programming, HTML 5, CSS 3, Bootstrap, JavaScript (ES 6), TypeScript, JQuery, React JS</td>
                        <td>PHP, MySQL</td>
                        <td>WordPress</td>
                        <td>Agile Scrum</td>
                        <td>Jira Service Desk, HP Service Manager</td>
                        <td>Git Hub, Bit Bucket</td>
                        <td>SQL Developer, Visual Studio Code, Atom, Sublime Text, Eclipse, PyCharm</td>
                        <td>Windows, Linux, Unix</td>
                        <td>MuleSoft Anypoint Studio, MuleSoft Anypoint platform, MuleSoft Cloudhub, JSON, XML and REST API´s</td>
                    </tr>
                </table>
            </div>
            <br /> <br /> <br /> <br /> 
            <h1>Work Experience</h1> <br /> <br /> 

            <div className='ex'>
                <table>
                    <tr>
                        <th>FRONT END WEB DEVELOPER | CloudFirst Technologies (Chelmsford, England) Sep 2021 to Sep 2022</th>
                        <th>FRONT END WEB DEVELOPER | Mphasis, India Aug 2018 to Jan 2021</th>
                    </tr>
                    <tr>
                        <td>
                            <ul>
                                <li>Developed and maintained WordPress websites, utilizing HTML5, CSS3, and JavaScript (TypeScript) to create visually appealing and responsive user interfaces.</li><br />
                                <li>Developed REST APIs using MuleSoft and Anypoint Studio, and successfully integrated them with frontend applications.</li><br />
                                <li>Implemented rigorous unit testing practices as a front-end developer to ensure the reliability and robustness of web applications.</li><br />
                                <li>Utilized React JS to build interactive and reusable components, improving frontend functionality.</li><br />
                                <li>Worked closely with cross-functional teams, including designers and back-end developers, to ensure a smooth integration of design and functionality.</li><br />
                                <li>Effectively communicated with clients to understand project requirements and deliver high-quality solutions within deadlines.</li><br />
                            </ul>
                        </td>

                        <td>
                            <ul>
                                <li>Developed responsive web pages using HTML5, CSS3, and Bootstrap, ensuring cross-browser compatibility and accessibility.</li> <br />
                                <li>Utilized JavaScript ES6 and React JS to build interactive components and implement dynamic functionality.</li><br />
                                <li>Integrated front-end interfaces with back-end APIs using PHP, ensuring seamless data flow and user experience.</li><br />
                                <li>Utilized React JS to build interactive and reusable components, improving frontend functionality.</li><br />
                                <li>Conducted code reviews and performed debugging and optimization for improved performance.</li><br />
                                <li>Implemented version control and collaborated with the team using Git and GitHub.</li><br />
                                <li>Actively participated in Agile/Scrum meetings, contributing to sprint planning and delivering features within deadlines.</li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>

            <br /> <br />
            <br /> <br /> 
            <h1>Education</h1> <br /> <br />

            <div className='ed'>
                <table>
                    <tr>
                        <th>MSc in Data Science & Analytics (Hatfield, England) Feb 2021 to Feb 2023</th>
                    </tr>
                </table>
            </div>

            <br /> <br /> 
            <br /> <br />
            <h1>Projects Worked</h1> <br /> <br />

            <div className='pw'>
                <table>
                    <tr>
                        <th>Clickappporter</th>
                        <th>PROOF CENTRAL</th>
                    </tr>

                    <tr>
                        <td>Clickappporter is a dynamic e-commerce application that revolutionizes access to 
                            Europe and the US´s largest catalogs. With Clickappporter, users gain the convenience of selecting from tens of millions of items, 
                            all of which can be conveniently delivered anywhere in Morocco.</td>
                        <td>Utilizing the Proof Central online interface tools, You can efficiently apply corrections, 
                            comments, and change requests to proofs, and seamlessly submit them for direct correction.</td>
                    </tr>
                </table>
            </div>

            <br /> <br /> 
            <br /> <br />
            <h1>Certifications</h1> <br /> <br />

            <div className='ce'>
                <table>
                    <tr>
                        <th>MuleSoft Certified Developer – Level 1 (Mule 4)</th>
                    </tr>
                </table>
            </div>
           
        </div>
        <br /> <br /> <br /> <br />

        

        <div>
            <Link to="/contact">
                    <button className='btn'>Please Contact Me For more information</button>
            </Link>
        </div>
    </div>
  )
}

export default AboutContent