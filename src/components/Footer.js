import "./FooterStyles.css";
import { Link } from 'react-router-dom';

import React from 'react'
import {FaHome, FaMailBulk, FaPhone} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white", marginRight: "2rem" }} />
                    <div>
                        <p style={{color:"white"}}>110A Burges Road, London</p>
                        <p style={{color:"white"}}>United Kingdom</p>
                    </div>
                </div>
                <div className="phone">
                    <h4 style={{color:"white"}}><FaPhone size={20} style={{color:"white", marginRight: "2rem" }} /> 
                +44 7747736635 </h4>
                </div>
                <div className="email">
                    <h4 style={{color:"white"}}><FaMailBulk size={20} style={{color:"white", marginRight: "2rem" }} /> 
                dineshbellamkonda@icloud.com </h4>
                </div>
            </div>
            <div className="right">
                <br/> <br/>
                <Link to="/Contact" className="btn btn-light">Contact Me</Link>
            </div>
        </div>
    </div>
    
  )
}

export default Footer