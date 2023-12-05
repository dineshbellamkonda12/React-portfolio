import './AboutContentStyles.css'
import { Link } from 'react-router-dom'
import htmllogo from '../assets/htmllogo.png'
import css3 from '../assets/icons8-css-logo-96.png'
import bootstrap1 from '../assets/icons8-bootstrap-logo-96.png'
import JS1 from '../assets/icons8-javascript-96.png'
import jquery1 from '../assets/icons8-jquery-50.png'
import reactlogo from '../assets/icons8-react-96.png'
import typescriptlogo from '../assets/icons8-typescript-96.png'
import javalogo from '../assets/icons8-java-logo-96.png'
import pythonlogo from '../assets/icons8-python-96.png'
import djangologo from '../assets/icons8-django-96.png'
import restapilogo from '../assets/icons8-rest-api-96.png'
import mysqllogo from '../assets/icons8-my-sql-96.png'
import azurelogo from '../assets/icons8-azure-96.png'
import githublogo from '../assets/icons8-github-96.png'
import bitbucklogo from '../assets/icons8-bitbucket-96.png'

import React from 'react'

const AboutContent = () => {

  return (
    <div className='about'>
        <div className='left'>
           <h1>My Skills</h1> <br /> <br />
        <div className='ta'>
             <div class="item">
                <img src={htmllogo} alt='htmllogo'/>
                <div class="tooltiptext">HTML 5</div>
             </div>
            <div class="item">
                <img src={css3} alt='csslogo'/>
                <div class="tooltiptext">CSS 3</div>
            </div>
            <div class="item">
                <img src={bootstrap1} alt='bootstraplogo'/>
                <div class="tooltiptext">Bootstrap</div>
            </div>
            <div class="item">
                <img src={JS1} alt='javascriptlogo'/>
                <div class="tooltiptext">JavaScript(ES6)</div>
            </div>
            <div class="item">
                <img src={jquery1} alt='jquery1' />
                <div class="tooltiptext">JQuery</div>
            </div>
            <div class="item">
                <img src={reactlogo} alt='reactlogo'/>
                <div class="tooltiptext">React JS</div>
            </div>
            <div class="item">
                <img src={typescriptlogo} alt='typescriptlogo'/>
                <div class="tooltiptext">TypeScript</div>
            </div>
            <div class="item">
                <img src={javalogo} alt='javalogo'/>
                <div class="tooltiptext">Java</div>
            </div>
            <div class="item">
                <img src={pythonlogo} alt='pythonlogo'/>
                <div class="tooltiptext">Python</div>
            </div>
            <div class="item">
                <img src={djangologo} alt='djangologo'/>
                <div class="tooltiptext">Django</div>
            </div>
            <div class="item">
                <img src={restapilogo} alt='restapilogo'/>
                <div class="tooltiptext">Django Rest API</div>
            </div>
            <div class="item">
                <img src={mysqllogo} alt='mysqllogo'/>
                <div class="tooltiptext">My SQL</div>
            </div>
            <div class="item">
                <img src={azurelogo} alt='azurelogo'/>
                <div class="tooltiptext">Azure Devops</div>
            </div>
            <div class="item">
                <img src={githublogo} alt='githublogo'/>
                <div class="tooltiptext">GitHub</div>
            </div>
            <div class="item">
                <img src={bitbucklogo} alt='bitbucklogo'/>
                <div class="tooltiptext">Bit Bucket</div>
            </div>
        </div>
            <br /> <br /> <br /> <br /> 
            <h1>Work Experience</h1> <br /> <br /> 

            <div className='ex'>
                <table>
                    <tr>
                        <th>FULL STACK WEB DEVELOPER | CloudFirst Technologies (Chelmsford, England) May 2022 to Present</th>
                        <th>FULL STACK WEB DEVELOPER | Mphasis (Chennai, India) Aug 2018 to Jan 2021</th>
                    </tr>
                    <tr>
                        <td>
                            <ul>
                                <li>Applied a deep understanding of HTML5, CSS3, and JavaScript (ES 6) to create and maintain modern, responsive websites.</li><br />

                                <li>Utilised React to build interactive and reusable components, improving front-end functionality.</li><br />

                                <li>Developed REST APIs using MuleSoft and Django REST Framework, and successfully integrated them with frontend applications.</li><br />

                                <li>Successfully managed database migrations in Django projects, ensuring smooth transitions and data integrity during development and deployment stages.</li><br />

                                <li>Successfully deployed a web application to Azure DevOps, utilising CI/CD pipelines integrated with GitHub.</li><br />

                                <li>Implemented thorough unit testing practices to ensure the reliability and robustness of web applications.</li><br />

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
                        <td>MSc in Data Science & Analytics (Hatfield, England) Feb 2021 to Feb 2023</td>
                    </tr>
                </table>
            </div>

            <br /> <br /> 
            <br /> <br />
            <h1>Projects Worked</h1> <br /> <br />

            <div className='pw'>
                <table>
                    <tr>
                        <th>CloudFirst Technologies: Clickappporter (Business Domain: Retail) </th>
                        <th>Mphasis: PROOF CENTRAL (Business Domain: Publishing) </th>
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
                        <th>React: Using TypeScript <a style={{color: 'yellow'}} href='https://www.linkedin.com/learning/certificates/8f6b272a2df36d8a55cce59eb3cd910e2ef24b5c4c85625fd79861c6c3e1b05e' target='_blank' rel="noreferrer" > (Credential)</a></th>
                        <th>Python <a style={{color: 'yellow'}} href='https://www.udemy.com/certificate/UC-44208a8f-6b9b-447b-9706-e92cde604124/' target='_blank' rel="noreferrer" > (Credential)</a></th>
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

            <h1>References</h1> <br /> <br />
            <div className='ab'>
                <table>
                    <tr>
                        <td>Available Upon Request</td>
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