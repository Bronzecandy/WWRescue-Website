import React from 'react'
import PartnerCarousel from './PartnerCarousel'
function OurPartner({color}) {
  return (
    <div className='bg-[#F9EDD2] py-8 px-8'>
        <div className='border-2 rounded-xl' style={{
        borderColor:color,
      }}>
        <div className="text-center py-5 md:text-lg text-xs">
          <h1 className=" text-3xl md:text-5xl " style={{
            color:color,
          }}>
            OUR PARTNERS </h1>
        </div>
        <PartnerCarousel color={color}></PartnerCarousel>
      </div>
    </div>
  )
}

export default OurPartner