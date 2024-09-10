import React from 'react'
import DogCarousel from './DogCarousel'
import PartnerCarousel from './PartnerCarousel'
export default function OurRescue() {
  return (
    <div className='bg-[#F9EDD2] py-16 px-8'>
      <div>
        <div className="text-center  md:text-lg text-xs">
          <h1 className="text-3xl md:text-5xl mb-4  text-[#EF3927]">OUR RESCUES</h1>
          <h2 className="text-3xl text-[#F08122] font-semibold py-5">
            CANINE </h2>
        </div>
        <DogCarousel backgroundImage="url('./images/Rectangle 128.png')"></DogCarousel>
        <div className='flex justify-center py-4'>
          <button className="bg-[#F9EDD2] hover:bg-[#EF3927] hover:text-[#F9EDD2] md:w-52 text-[#EF3927] border-2 border-solid border-[#EF3927]  py-2 px-6 rounded-full transition">
            MORE DETAIL
          </button>
        </div>
      </div>

      <div>
        <div className="text-center py-5 md:text-lg text-xs">
          <h2 className="text-3xl text-[#FAA627] font-semibold">
            FELINE </h2>
        </div>
        <DogCarousel backgroundImage="url('./images/MBackground.png')"></DogCarousel>
        <div className='flex justify-center py-4'>
          <button className="bg-[#F9EDD2] hover:bg-[#EF3927] hover:text-[#F9EDD2] md:w-52 text-[#EF3927] border-2 border-solid border-[#EF3927]  py-2 px-6 rounded-full transition">
            MORE DETAIL
          </button>
        </div>
      </div>

      <div className='border-2 border-[#EF3927] rounded-xl'>
        <div className="text-center py-5 md:text-lg text-xs">
          <h1 className="text-5xl text-[#EF3927]">
            OUR PARTNERS </h1>
        </div>
        <PartnerCarousel backgroundImage="url('./images/MBackground.png')"></PartnerCarousel>
      </div>
    </div>
    
  )
}
