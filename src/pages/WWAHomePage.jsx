import React from 'react'
import WWANavbar from '../components/WWANavbar'
import Footer from '../components/Footer'
import OurRescue from '../components/OurRescue'
import SupportUs from '../components/SupportUs'
import WWABody from '../components/WWABody'
import OurPartner from '../components/OurPartner'
import AdoptionProcessPart from '../components/AdoptionProcessPart'
function WWAHomePage() {
  return (
    <div>
        <WWANavbar></WWANavbar>
        <WWABody></WWABody>
        <OurRescue color='#AF1E3C'></OurRescue>
        <AdoptionProcessPart></AdoptionProcessPart>
        <OurPartner color='#AF1E3C'></OurPartner>
        <SupportUs color='#AF1E3C'></SupportUs>
        <Footer color='#AF1E3C' logo='./images/Group.webp'></Footer>
    </div>
  )
}

export default WWAHomePage