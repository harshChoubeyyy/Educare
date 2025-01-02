import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/Programs/Programs'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonial from './Component/Testimonial/Testimonial'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import VideoPlayer from './Component/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState,setplayState]=useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our Program' title='What we Offer.'/>
      <Programs/>
      <About setplayState={setplayState}/>
      <Title subtitle='Gallery' title='Campus Photo'/>
      <Campus/>
      <Title subtitle='Testemonials' title='What Students say'/>
      <Testimonial/>
      <Title subtitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
    <VideoPlayer playState={playState} setplayState={setplayState} />
    </div>
  )
}

export default App

