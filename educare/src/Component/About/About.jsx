import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

function About({setplayState}) {
  return (
    <div className='about' name="about">
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setplayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nuturing Tommorow's Leader Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Magnam voluptates suscipit dolore officiis? Dolorem deserunt, 
            et consequuntur repellendus iste incidunt!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Molestiae eligendi et similique hic optio animi deserunt
                 in corrupti officia? Voluptas!</p>
                 <p>Lorem ipsum dolor sit, amet 
                    consectetur adipisicing elit. Maiores, et eveniet. 
                    Mollitia eos eum officia veniam recusandae tempore 
                    aliquid minima?</p>
      </div>
    </div>
  )
}

export default About
