import React from 'react'
import WWANavbar from '../components/WWANavbar'
import Footer from '../components/Footer'
import OurRescue from '../components/OurRescue'
import SupportUs from '../components/SupportUs'
import WWABody from '../components/WWABody'
import OurPartner from '../components/OurPartner'
import AdoptionProcessPart from '../components/AdoptionProcessPart'
function WWAHomePage() {
  const partners = [
    {
        imageUrl: './images/royalcanin.png',
        description: 'Educational Event Partner'
    },
    {
        imageUrl: './images/catfee.png',
        description: 'Organic Cat Litter Sponsor'
    },
    {
        imageUrl: './images/Tito.png',
        description: 'Beverage & Rescue Partner'
    },
    {
        imageUrl: './images/Vemedin.png',
        description: 'Dog & Cat Medicine Sponsor'
    },
    {
        imageUrl: './images/Keos.png',
        description: 'Shelter Support Partner'
    },
    {
        imageUrl: './images/Insta360.png',
        description: 'Pet Action Camera Sponsor'
    },
    {
        imageUrl: './images/Kingpet.png',
        description: 'Fresh Cat Pate Sponsor'
    },
    {
        imageUrl: './images/Levoit.png',
        description: 'Pet Air Filters Sponsor'
    },
    {
        imageUrl: './images/GFBPharma.png',
        description: 'Cat & Dog Medicine Partner'
    },
    {
        imageUrl: './images/Roborock.png',
        description: 'Pet Cleaning Appliances Sponsor'
    },
];
  return (
    <div>
        <WWANavbar></WWANavbar>
        <WWABody></WWABody>
        <OurRescue color='#AF1E3C'></OurRescue>
        <AdoptionProcessPart></AdoptionProcessPart>
        <OurPartner color='#AF1E3C' partners={partners}></OurPartner>
        <SupportUs color='#AF1E3C' bg="url('./images/image 4.webp')"></SupportUs>
        <Footer color='#AF1E3C' logo='./images/Group.webp'></Footer>
    </div>
  )
}

export default WWAHomePage