import './AboutContentStyles.css'
import { Link } from 'react-router-dom'
import react1 from '../assets/react1.jpg'
import react2 from '../assets/react2.jpg'

import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={react1} className='img' alt='true'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={react2} className='img' alt='true'/>
                </div>
            </div>
        </div>


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
                        <td>Object Oriented Programming, HTML 5, CSS 3, Bootstrap, JavaScript (ES 6), jQuery, React JS</td>
                        <td>Python, Django, PostgreSQL, and MySQL</td>
                        <td>WordPress</td>
                        <td>Agile Scrum</td>
                        <td>Jira Service Desk, HP Service Manager</td>
                        <td>Git Hub, Bit Bucket</td>
                        <td>SQL Developer, Visual Studio Code, Atom, Sublime Text, Eclipse, PyCharm</td>
                        <td>Windows, Linux, Unix</td>
                        <td>MuleSoft Anypoint Studio, MuleSoft Anypoint platform, MuleSoft Cloudhub, JSON, XML and REST APIs</td>
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
                                <li>Applied a deep understanding of HTML5, CSS3, and JavaScript (ES 6) to create and maintain modern, responsive websites.</li><br />
                                <li>Designed user experience (UX) components using Figma, a powerful design tool.</li><br />
                                <li>Developed REST APIs using MuleSoft and Anypoint Studio, and successfully integrated them with frontend applications.</li><br />
                                <li>Implemented thorough unit testing practices as a front-end developer to ensure the reliability and robustness of web applications.</li><br />
                                <li>Utilised React JS to build interactive and reusable components, improving front-end functionality.</li><br />
                                <li>Utilised version control systems, such as Git, for efficient collaboration, code management, and tracking changes.</li><br />
                                <li>Worked closely with cross-functional teams, including designers and back-end developers, to ensure a smooth integration of design and functionality.</li><br />
                                <li>Communicated with clients to grasp project requirements and deliver high-quality solutions on time.</li><br />
                            </ul>
                        </td>

                        <td>
                            <ul>
                                <li>Expertly Utilised HTML5, CSS3, and JavaScript to develop and maintain modern, responsive websites.</li> <br />
                                <li>Implemented front-end frameworks such as React JS, utilizing reusable components to enhance user interfaces and improve development efficiency.</li><br />
                                <li>Implemented thorough unit testing practices to ensure that web applications were reliable and robust.</li><br />
                                <li>Successfully integrated multiple payment gateways, including Stripe, PayPal, Authorize.net, and Split it, into front-end web applications, enabling secure and convenient payment processing.</li><br />
                                <li>Utilised Scikit-learn package in Django framework to predict data for front-end applications and integrated the predicted results seamlessly into the front-end applications, providing valuable insights to end-users.</li><br />
                                <li>Utilised JavaScript libraries and frameworks, including jQuery, to create interactive and dynamic web elements.</li><br />
                                <li>Developed interactive web applications with dynamic content and database functionality by integrating Django and MySQL technologies.</li><br />
                                <li>Utilised version control systems, such as Git, for efficient collaboration, code management, and tracking changes.</li><br />
                                <li>Collaborated with cross-functional teams to gather project requirements and provide accurate estimates for front-end development tasks.</li><br />
                                <li>Actively participated in Agile/Scrum meetings, contributing to sprint planning, and delivering features within deadlines.</li><br />
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
                        <th>Clickappporter (Business Domain: Retail)</th>
                        <th>PROOF CENTRAL (Business Domain: Publishing) </th>
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