import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImgp from '../components/HeroImgp';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';


const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImgp heading="PROJECTS." text="I am a passionate front-end developer dedicated to crafting stunning and user-friendly websites and applications. 
      With my expertise in front-end development, I strive to create exceptional digital experiences that leave a lasting impression on your audience."/>
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project