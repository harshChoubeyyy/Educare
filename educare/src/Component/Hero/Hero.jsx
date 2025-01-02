import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' name="hero">
      <div className="hero-text">
        <h1>We Ensure Better Educationn For  the Better World</h1>
        <p>Our cutting-edge curriculam is designed to empower students with the knowledge,skills and 
          experience needed to excel in the dynamic field of education</p>
         <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
