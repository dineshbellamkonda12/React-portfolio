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
                        <th>UI/UX Design</th>
                        <th>Content Management System</th>
                        <th>Software Methadology</th>
                        <th>Project Management</th>
                        <th>Version Control</th>
                        <th>IDE</th>
                        <th>Operating Systems</th>
                        <th>Additional Skills</th>
                    </tr>
                    <tr>
                        <td>Object Oriented Programming, HTML 5, CSS 3, Bootstrap, JavaScript (ES6), TypeScript, jQuery, React JS</td>
                        <td>Python, Django, Django migrations, Django REST Framework and MySQL</td>
                        <td>Figma</td>
                        <td>Wordpress</td>
                        <td>Agile (Scrum)</td>
                        <td>Jira Service Desk, HP Service Manager</td>
                        <td>Git Hub, Bit Bucket</td>
                        <td>SQL Developer, Visual Studio Code, Atom, Sublime Text, Eclipse, PyCharm</td>
                        <td>Windows, Linux, Unix</td>
                        <td>MuleSoft Anypoint Studio, MuleSoft Anypoint platform, MuleSoft Cloudhub, JSON and REST APIs</td>
                    </tr>
                </table>
            </div>
            <br /> <br /> <br /> <br /> 
            <h1>Work Experience</h1> <br /> <br /> 

            <div className='ex'>
                <table>
                    <tr>
                        <th>FRONT END WEB DEVELOPER | CloudFirst Technologies (Chelmsford, England) Sep 2021 to Sep 2022</th>
                        <th>FULL STACK WEB DEVELOPER | Mphasis (Chennai, India) Aug 2018 to Jan 2021</th>
                    </tr>
                    <tr>
                        <td>
                            <ul>
                                <li>Applied a deep understanding of HTML5, CSS3, and JavaScript (ES 6) to create and maintain modern, responsive websites.</li><br />

                                <li>Designed user experience (UX) components using Figma, a powerful design tool.</li><br />

                                <li>Developed REST APIs using MuleSoft and Anypoint Studio, and successfully integrated them with frontend applications.</li><br />

                                <li>Successfully deployed a web application to Azure DevOps, utilising CI/CD pipelines integrated with GitHub</li><br />

                                <li>Implemented thorough unit testing practices as a front-end developer to ensure the reliability and robustness of web applications.</li><br />

                                <li>Utilised React JS to build interactive and reusable components, improving front-end functionality.</li><br />

                                <li>Utilised version control systems, such as Git, for efficient collaboration, code management, and tracking changes.</li><br />

                                <li>Worked closely with cross-functional teams, including designers and back-end developers, to ensure a smooth integration of design and functionality</li><br />

                                <li>Actively participated in Agile/Scrum meetings, contributing to sprint planning, and delivering features within deadlines</li><br />

                                <li>Communicated with clients to grasp project requirements and deliver high-quality solutions on time.</li>
                            </ul>
                        </td>

                        <td>
                            <ul>
                                <li>Expertly Utilised HTML5, CSS3, and JavaScript (ES6), TypeScript and React JS to develop and maintain modern, responsive websites</li> <br />

                                <li>Integrated Python, Django, and MySQL to create interactive web pages featuring dynamic content and database functionality</li><br />

                                <li>Successfully managed database migrations in Django projects, ensuring smooth transitions and data integrity during development and deployment stages</li><br />

                                <li>Successfully deployed a web application to Amazon EC2, utilising CI/CD pipelines integrated with GitHub</li><br />

                                <li>Developed RESTful APIs using Django REST Framework to enable seamless communication between the frontend and backend systems</li><br />

                                <li>Utilised Scikit-learn package in Django framework to predict data for front-end applications </li><br />

                                <li>Utilised JavaScript libraries and frameworks, including jQuery, to create interactive and dynamic web elements</li><br />

                                <li>Utilised version control systems, such as Git, for efficient collaboration, code management, and tracking changes</li><br />

                                <li>Collaborated with cross-functional teams to gather project requirements and provide accurate estimates for front-end development tasks</li><br />

                                <li>Actively participated in Agile/Scrum meetings, contributing to sprint planning, and delivering features within deadlines</li><br />
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
                        <th>Mphasis: Clickappporter (Business Domain: Retail)</th>
                        <th>CloudFirst Technologies: PROOF CENTRAL (Business Domain: Publishing) </th>
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
                        <th>Building React and Django Apps <a style={{color: 'yellow'}} href='https://www.linkedin.com/learning/certificates/da6b3b9c101e54a0085f968c608a1ea9e7e43e8993448efc3fd7b4158e0862e9' target='_blank' rel="noreferrer" >  (Credential)</a></th>
                        <th>React JS Essential Training <a style={{color: 'yellow'}} href='https://www.linkedin.com/learning/certificates/2e7cbc6dd4f8ce3004a88d3932b64afdc60739b6bcfa3a80c2c0978ae8cdca8e' target='_blank' rel="noreferrer" > (Credential)</a></th>
                        <th>MuleSoft Certified Developer: Level 1 (Mule 4)</th>
                    </tr>
                </table>
            </div>

            <br /> <br />
            <br /> <br />
            <h1>Awards</h1> <br /> <br />

            <div className='ce'>
                <table>
                    <tr>
                        <th>The Summit Individual Award (Issued by Mphasis) </th>
                    </tr>

                    <tr>
                        <td>Recognized for outstanding performance as a full stack web developer, working independently on diverse projects.</td>
                    </tr>
                </table>
            </div>
            <br /> <br /> <br /> <br />
           
        </div>
       

        <div>
            <Link to="/contact">
                    <button className='btn'>Please Contact Me For more information</button>
            </Link>
        </div>
    </div>
  )
}

export default AboutContent