import React from 'react'
import WWCNavbar from '../components/WWCNavbar'
import Footer from '../components/Footer'
import SupportUs from '../components/SupportUs'
import OurPartner from '../components/OurPartner'
import OurRescue from '../components/OurRescue'
function WWCHomepage() {
  return (
    <div>
        <WWCNavbar></WWCNavbar>
        <OurRescue color='#F08122'/>
        <OurPartner color='#F08122' />
        <SupportUs color='#F08122' bg="url('./images/WWCSupport.webp')"/>
        <Footer color='#F08122' logo='./images/WWCFLogo.webp'></Footer>
    </div>
  )
}

export default WWCHomepage