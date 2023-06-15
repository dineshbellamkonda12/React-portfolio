import "./FooterStyles.css";

import React from 'react'
import {FaHome, FaMailBulk, FaPhone} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem" }} />
                    <div>
                        <p>110A Burges Road, London</p>
                        <p>United Kingdom</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem" }} /> 
                +44 7747736635 </h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem" }} /> 
                dineshbellamkonda@icloud.com </h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>Goal-oriented and extensively proficient
                     web developer with over 3 years of experience. 
                     Committed to delivering exceptional web solutions 
                     and creating seamless user experiences. 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer