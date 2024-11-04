import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutUsBody from '../components/AboutUsBody'
function AboutUsPage() {
  return (
    <div>
      <Navbar />
      <img src='./images/Group 126.webp' className='h-full min-[1025px]:h-[calc(100vh-5rem)] w-full object-cover' alt='AboutBanner' ></img>
      <AboutUsBody />
      <Footer color='#991B1E' logo='./images/Logo-big.png'/>
    </div>
  )
}

export default AboutUsPage