import React from 'react'

function AboutUsBody() {
  return (
    <div>
      <div className='bg-[url(./images/Ourmission.png)] h-[41rem] 2xl:h-[48rem] min-[2000px]:h-[57rem] w-full bg-cover grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-3 py-8 px-4 lg:px-12 lg:py-16'>
        <div className='col-start-2 col-span-2 xl:col-start-4 2xl:col-start-3 2xl:col-span-1 h-full w-full'>
          <div className='bg-[#F9EDD2] border-[#991B1E] border-2 rounded-2xl h-full w-full shadow-[10px_10px_0px_0px_#991B1E]'>
            <div className='h-full w-full p-4 xl:p-8 flex flex-col text-[#991B1E] justify-evenly'>
              <h1 className='text-3xl sm:text-5xl min-[2000px]:text-7xl'>Origins and Mission</h1>
              <p className='text-lg sm:text-xl min-[2000px]:text-3xl'>WagWel Rescue is a Vietnam-based social enterprise dedicated to redefining animal rescue.</p>
              <p className='text-lg sm:text-xl min-[2000px]:text-3xl'>Founded in 2019 by Geneva Marcelino, Alex Ward & Jay-Thien Nguyen as R House Saigon - a dog rescue cafe and community events venue - we focus on an innovative and community driven approach to make animal rescue more accessible, positive,
                and sustainable.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#F9EDD2] h-[70rem] md:h-[42rem] 2xl:h-[48rem] min-[2000px]:h-[68rem] w-full bg-cover grid grid-rows-2 md:grid-rows-none md:grid-cols-3 xl:grid-cols-2 group py-8 px-4 lg:px-12 lg:py-16 gap-8 '>
        <div className='col-start-1  md:col-span-2 xl:col-span-1 h-full w-full relative'>
          <div className='bg-[#F9EDD2] border-[#991B1E] border-2 rounded-2xl h-full w-full shadow-[10px_10px_0px_0px_#991B1E] '>
            <div className='h-full w-full p-4 xl:p-8 flex flex-col text-[#991B1E] justify-start gap-4 2xl:gap-12'>
              <h1 className='text-3xl sm:text-5xl min-[2000px]:text-7xl'>Growth and Impact</h1>
              <p className='text-lg sm:text-xl min-[2000px]:text-3xl'>Directed by a passion for animal welfare, R House partnered with Pawfect Match SGN and local shelters to develop a comprehensive program for rescuing, rehabilitating, and rehoming 100,000 dogs & cats. </p>
              <p className='text-lg sm:text-xl min-[2000px]:text-3xl'>Since 2019, we have successfully adopted out nearly 200 animals and welcomed nearly 100 thousand visitors across our 3 rescue cafes in Vietnam.</p>
            </div>
          </div>
          <img src='./images/Group 127.png' alt="Group127" className='absolute w-1/3 bottom-[-1.5rem] lg:bottom-[-2.5rem] left-20'></img>
        </div>
        <div className='relative items-center '>
          <div className='w-full h-full absolute flex flex-col justify-center items-center group-hover:opacity-0 opacity-100 transition-all'>
            <img src="./images/Group 141.png" alt="Group141" className='w-10/12 ' />
            <p className='text-xl text-[#991B1E]'>We have saved many animals...</p>
          </div>
          <div className='w-full h-full absolute flex flex-col justify-center items-center group-hover:opacity-100 opacity-0 transition-all'>
            <img src="./images/Group 142.png" alt="Group141" className='w-10/12 ' />
            <p className='text-xl text-[#991B1E]'>...and helped them to get adopted.</p>
          </div>
        </div>
      </div>
      <div className='bg-[url(./images/About1.png)] h-[41rem] 2xl:h-[48rem] min-[2000px]:h-[57rem] w-full bg-cover grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-3 py-8 px-4 lg:px-12 lg:py-16'>
        <div className='col-start-2 col-span-2 xl:col-start-4 2xl:col-start-3 2xl:col-span-1 h-full w-full '>
          <div className='bg-[#F9EDD2] border-[#991B1E] border-2 rounded-2xl h-full w-full shadow-[10px_10px_0px_0px_#991B1E]'>
            <div className='h-full w-full p-4 xl:p-8 flex flex-col text-[#991B1E] justify-evenly'>
              <h1 className='text-3xl sm:text-5xl min-[2000px]:text-7xl'>Unification And Future Goals</h1>
              <p className='text-lg sm:text-xl min-[2000px]:text-3xl'>In September 2024, WagWel Rescue was created to consolidate and strengthen the shared rescue impact of R House, Meow House and Pawfect Match.</p>
              <p className='text-lg sm:text-xl min-[2000px]:text-3xl'>Under the leadership of original co-founder and owner Alex Ward, the organization aims to become a global leader in animal rescue, recognized for its professionalism, impact, and commitment to compassionate care.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#F9EDD2] max-[376px]:h-[80rem] h-[70rem] md:h-[48rem] min-[2000px]:h-[68rem] w-full bg-cover grid grid-rows-[1fr_auto] md:grid-rows-none md:grid-cols-3 xl:grid-cols-2 group py-8 px-4 lg:px-12 lg:py-16 gap-8'>
        <div className='relative items-center '>
          <div className='w-full h-full absolute flex flex-col justify-center items-center group-hover:opacity-0 opacity-100 transition-all'>
            <img src="./images/Group 141.png" alt="Group141" className='w-10/12 ' />
            <p className='text-xl text-[#991B1E]'>We have saved many animals...</p>
          </div>
          <div className='w-full h-full absolute flex flex-col justify-center items-center group-hover:opacity-100 opacity-0 transition-all'>
            <img src="./images/Group 142.png" alt="Group141" className='w-10/12 ' />
            <p className='text-xl text-[#991B1E]'>...and helped them to get adopted.</p>
          </div>
        </div>
        <div className='md:col-span-2 xl:col-span-1 h-full w-full  '>
          <div className='bg-[#F9EDD2] border-[#991B1E] border-2 rounded-2xl h-full w-full shadow-[10px_10px_0px_0px_#991B1E] '>
            <div className='h-full w-full p-4 xl:p-8 flex flex-col text-[#991B1E] justify-start gap-4'>
              <h1 className='text-3xl sm:text-5xl min-[2000px]:text-7xl'>Theory of Change</h1>
              <p className='text-lg sm:text-xl min-[2000px]:text-3xl'><span className='font-bold'>Building a trusted brand and spaces for animal welfare.</span> <br />We raise awareness through our professional rescue brand and trust through our community-first model.</p>
              <p className='text-lg sm:text-xl min-[2000px]:text-3xl'><span className='font-bold'>Strengthening animal welfare collaborations.</span> <br />We work with local leaders, community organizations, pet businesses and government agencies to achieve animal welfare impact.</p>
              <p className='text-lg sm:text-xl min-[2000px]:text-3xl'><span className='font-bold'>Increasing animal welfare standards.</span> <br />We set the standard for organized and sustainable rescue, providing essential education, resources and care to animal welfare stakeholders.</p>
              <p className='text-lg sm:text-xl min-[2000px]:text-3xl'><span className='font-bold'>Community-based solutions.</span> <br />We empower local communities to get positively involved in animal welfare issues, engaging them to be an important part of the rescue solution.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsBody
