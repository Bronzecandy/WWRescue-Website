import React from 'react'

function AboutUsBody() {
  return (
    <div>
      <div className='bg-[url(/images/Ourmission.png)] h-[41rem] 2xl:h-[48rem] min-[2000px]:h-[57rem] w-full bg-cover grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3'>
        <div className='col-start-2 2xl:col-start-3 h-full w-full p-4 xl:px-12 xl:py-24 '>
          <div className='bg-[#F9EDD2] border-[#991B1E] border-2 rounded-2xl h-full w-full shadow-[10px_10px_0px_0px_#991B1E]'>
            <div className='h-full w-full p-8 flex flex-col text-[#991B1E] justify-evenly'>
              <h1 className='text-3xl sm:text-5xl min-[2000px]:text-7xl'>Origins and Mission</h1>
              <p className='text-lg sm:text-xl min-[2000px]:text-3xl'>WagWel Rescue is a Vietnam-based social enterprise dedicated to redefining animal rescue.</p>
              <p className='text-lg sm:text-xl min-[2000px]:text-3xl'>Founded in 2019 by Geneva Marcelino, Alex Ward & Jay-Thien Nguyen as R House Saigon - a dog rescue cafe and community events venue - we focus on an innovative and community driven approach to make animal rescue more accessible, positive,
                and sustainable.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsBody
