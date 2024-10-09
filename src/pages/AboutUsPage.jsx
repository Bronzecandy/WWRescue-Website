import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutUsBody from '../components/AboutUsBody'
function AboutUsPage() {
  return (
    <div>
        <Navbar/>
        <img src='./images/Group 126.png' className='h-full w-full object-cover'></img>
        <AboutUsBody/>
        <Footer/>
    </div>
  )
}

export default AboutUsPage