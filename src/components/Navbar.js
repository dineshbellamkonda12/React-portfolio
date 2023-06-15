import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from 'react-icons/fa';

import React, { useState } from 'react'

const Navbar = () => {
const[click, setClick] = useState(false);
const handleClick = () => setClick(!click);

const [color, SetColor] = useState(false);
const changeColor = () =>{
    if(window.scrollY >=100){
        SetColor(true);
    }else{
        SetColor(false);
    }
};

window.addEventListener("scroll", changeColor);

  return (
    <div className={color? "header header-bg": "header"}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li> 
                <Link to="/Project">Project</Link>
            </li>
            <li> 
                <Link to="/About">About</Link>
            </li>
            <li> 
                <Link to="/Contact">Contact</Link>
            </li>
        
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? ( <FaBars size={20} style={{color: "#fff"}}/>) : ( <FaTimes size={20} style={{color: "#fff"}}/> )}
        </div>
    </div>
  )
}

export default Navbar