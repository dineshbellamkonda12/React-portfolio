import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImgp from '../components/HeroImgp';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImgp heading="About Me" text="Goal-oriented and extensively proficient web developer. 
      Committed to delivering exceptional web solutions and creating seamless user experiences. 
      Seeking a challenging role in a dynamic organization where I can utilize my technical expertise and creativity to contribute 
      to innovative web projects and drive business growth."/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About