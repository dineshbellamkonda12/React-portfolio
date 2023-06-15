import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImgp from '../components/HeroImgp';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImgp heading="ABOUT." text="I am a highly skilled and goal-oriented web developer with a proven track record of over 3 years in the field. My primary focus is on delivering outstanding web solutions and crafting intuitive user experiences. I am currently seeking an exciting opportunity within a dynamic organization where I can apply my technical expertise and creative abilities to contribute to cutting-edge web projects and propel business expansion. 
      With a strong dedication to quality and innovation, 
      I aim to make a significant impact and drive tangible results."/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About