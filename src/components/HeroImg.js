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
            <p>Sai Dinesh Bellamkonda</p>
            <h1>Front End Developer</h1>
            <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/project" className="btn btn-light">Contact</Link>
        </div>
        </div>
    </div>
  )
}


export default HeroImg;