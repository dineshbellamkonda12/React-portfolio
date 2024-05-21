import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

export const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
           <img className="into-img" src={IntroImg} alt="intro" /> 
        </div>
        <div className="content">
            <h1>Full Stack Web Developer</h1>
            <p style={{ fontSize: '18px'}}>I'm Sai Dinesh Bellamkonda, a goal-oriented Full Stack Developer. I specialize in crafting exceptional web solutions, leveraging technologies such as HTML5, CSS3, Tailwind CSS, JavaScript, TypeScript, React, Redux, Python, Django, and My SQL. I thrive in dynamic environments, utilizing AWS for deployments and Agile methodologies for efficient project management. Explore my portfolio to see my latest work, and feel free to connect with me for potential collaborations. Thank you for visiting!</p>
            <br/><br/>
          <div>
              <Link to="/Project" className="btn">Projects</Link>
              <Link to="/Contact" className="btn btn-light">Contact</Link>
          </div>
        </div>
    </div>
  )
}


export default HeroImg;