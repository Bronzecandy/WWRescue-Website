import React from 'react'
import WWFNavbar from '../components/WWFNavbar';
import Footer from '../components/Footer';
import SupportUs from '../components/SupportUs';
import OurPartner from '../components/OurPartner';
import OurRescue from '../components/OurRescue';
function WWFHomepage() {
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
      <WWFNavbar></WWFNavbar>
      <div className="w-full h-[calc(100vh-5rem)] bg-[url('/images/WWFBanner.webp')] bg-cover bg-center bg-no-repeat relavtive flex justify-center">
        <div className='flex flex-col justify-center absolute top-[15%] items-center px-4'>
          <img src="/images/WWFHello.webp" alt="WWCHello" className='w-8/12' />
          <p className='text-[#3D71B8] text-lg md:text-2xl text-center'>Welcome to WagWel Feline! We are a cat rescue cafe.</p>
        </div>
      </div>
      <video autoPlay loop muted playsInline className='w-full'>
        <source src="./images/WWF-homepage.webm" type="video/webm" alt='WWFgif' />
        <source src="./images/WWF-homepage.mp4" type="video/mp4" alt='WWFgif'/>
      </video>
      <div className='w-full bg-[#FAA627] flex flex-col items-center'>
        <div className='text-[#F9EDD2] flex flex-col p-8 items-center gap-4 text-center'>
          <h1 className='text-3xl md:text-5xl'>OUR MISSION</h1>
          <p className='text-base sm:text-lg'>At WagWel, every visit and every purchase is purposeful and carries a meaning full of love. </p>
          <p className='text-base sm:text-lg'>With every visit and act of support at WagWel - whether in person or online - our community is actively contributing
            to the care and rehabilitation of rescue dogs and cats. </p>
          <p className='text-base sm:text-lg'>Furthermore, each action further spreads our mission of supporting the entire dog and cat rescue ecosystem in Vietnam.</p>
          <p className='text-base sm:text-lg'>By being a part of the WagWel community, you are actually taking part in life-changing work with us!</p>
        </div>
        <div className='h-20 md:h-48 xl:h-60 min-[1600px]:h-[325px] min-[1900px]:h-[370px] min-[2000px]:h-[493px] w-full relative'>
          <div className='w-full grid grid-cols-2 items-end gap-8 absolute -bottom-[18%] 2xl:-bottom-[20%]'>
            <div className='grid grid-cols-3 items-center justify-items-center'>
              <img src="/images/CATICON.webp" alt="CATICON" className='w-1/2 col-span-2 hover:scale-110 transition-all' />
            </div>
            <div className='grid grid-cols-3 w-full items-end justify-items-center'>
              <img src="/images/CAKEICON.webp" alt="CAKEICON" className='w-1/2 hover:scale-110 transition-all' />
              <img src="/images/GLASSICON.webp" alt="GLASSICON" className='w-1/2 hover:scale-110 transition-all' />
              <img src="/images/LENICON.webp" alt="LENICON" className='w-1/2 hover:scale-110 transition-all' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-16 2xl:h-24 bg-[#F9EDD2]'></div>
      <OurRescue color='#FAA627' type='cat' />
      <OurPartner color='#FAA627' partners={partners} />
      <SupportUs color='#FAA627' bg="url('./images/WWFSupport.webp')" />
      <Footer color='#FAA627' logo='./images/WWFFLogo.webp'></Footer>
    </div>
  )
}

export default WWFHomepage