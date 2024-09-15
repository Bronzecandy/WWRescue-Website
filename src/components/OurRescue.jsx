import React from 'react'
import DogCarousel from './DogCarousel'
import PartnerCarousel from './PartnerCarousel'
export default function OurRescue() {
  const dogs = [
    {
        imageUrl: './images/dogs/An.png',
        name: 'An',
        subname: ['One fang', 'Loves treats', 'Silent ninja'],
        gender: 'male',
      },
      {
        imageUrl: './images/dogs/Beep.png',
        name: 'Beep',
        subname: ['White fur boy', 'Curious about his friends', 'Loves gentle cuddles'],
        gender: 'male',
      },
      {
        imageUrl: './images/dogs/Bunny.png',
        name: 'Bunny',
        subname: ['Hobby', 'Cautious stare', 'Loves hiding'],
        gender: 'female',
      },
      {
        imageUrl: './images/dogs/Coca.png',
        name: 'Coca',
        subname: ['Playful', "Mama Gấu's child", 'Loving and loyal'],
        gender: 'male',
      },
      {
        imageUrl: './images/dogs/Gau.png',
        name: 'Gấu',
        subname: ['Our security baby', 'Our security baby', 'Loves to play'],
        gender: 'female',
      },
      {
        imageUrl: './images/dogs/Hugo.png',
        name: 'Hugo',
        subname: ['Oppa', 'Beautiful black fur', 'Being invisible at night'],
        gender: 'male',
      },
      {
        imageUrl: './images/dogs/Jerry.png',
        name: 'Jerry',
        subname: ['The howling-cow', 'A bit Alpha', 'Laughs a lot'],
        gender: 'male',
      },
      {
        imageUrl: './images/dogs/Lulu.png',
        name: 'Lulu',
        subname: ['Island girl', 'Full chocolate fur', 'A momshie of 6 puppies'],
        gender: 'female',
      },
      {
        imageUrl: './images/dogs/MamaGau.png',
        name: 'Mama gấu',
        subname: ['Loyal and loving', 'Growly and barky', 'Snappish'],
        gender: 'female',
      },
      {
        imageUrl: './images/dogs/Muc.png',
        name: 'Mực',
        subname: ['Grey eyes', 'Shy boy', 'Introvert'],
        gender: 'male',
      },
      {
        imageUrl: './images/dogs/Pepsi.png',
        name: 'Pepsi',
        subname: ['Loves treats', "Another Mama Gấu's child", 'Loves chewing up things'],
        gender: 'male',
      },
      {
        imageUrl: './images/dogs/Soda.png',
        name: 'Soda',
        subname: ['Lovely face', "Also Mama Gấu's child", 'Loyal and cuti'],
        gender: 'male',
      },
      {
        imageUrl: './images/dogs/Milo.png',
        name: 'Milo',
        subname: ['Mailo or Meelo?', "Friendly", 'Hanging out at the couch'],
        gender: 'male',
      },
];
  return (
    <div className='bg-[#F9EDD2] py-16 px-8'>
      <div>
        <div className="text-center  md:text-lg text-xs">
          <h1 className="text-3xl md:text-5xl mb-4  text-[#EF3927]">OUR RESCUES</h1>
          <h2 className="text-3xl text-[#F08122] font-semibold py-5">
            CANINE </h2>
        </div>
        <DogCarousel backgroundImage="url('./images/Rectangle 128.png')" input={dogs}></DogCarousel>
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
        <DogCarousel backgroundImage="url('./images/MBackground.png')" input={dogs}></DogCarousel>
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
