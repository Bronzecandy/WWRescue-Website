import React from 'react'

function AdoptionProcessPart() {
    return (
        <div>
            <div className='bg-[#AF1E3C] py-8 px-4 sm:px-8 lg:px-16 flex flex-col items-center gap-8'>
                <h1 className='text-[#F9EDD2] text-3xl md:text-5xl'>OUR ADOPTION PROCESS</h1>
                <div className='grid max-[767px]:grid-rows-2 md:grid-cols-2 bg-[#F9EDD2] rounded-xl px-4 md:px-8 w-full gap-8 group'>
                    <div className='flex items-end justify-center reletive'>
                        <img src="/images/AdoptionIcon.webp" alt="Adoption Icon" className='absolute w-[20%] origin-bottom group-hover:scale-[3.9] md:group-hover:scale-[1.9] transition-all duration-300' />
                        <img src="/images/Dogandcat.webp" alt="Dog and Cat" className='z-10 w-full'/>
                    </div>
                    <div className='flex flex-col text-[#EB2E51] text-3xl xl:text-5xl justify-center py-8 md:py-12 2xl:py-20 gap-8 lg:gap-16 min-[1900px]:gap-32 min-[1900px]:py-40'>
                        <h1><span className='text-5xl xl:text-7xl'>1.</span> Adoption applications</h1>
                        <h1><span className='text-5xl xl:text-7xl'>2.</span> Fill out the application form</h1>
                        <h1><span className='text-5xl xl:text-7xl'>3.</span> Confirm Adoption & Support More Rescues!</h1>
                        <button className="bg-[#F9EDD2] hover:bg-[#AF1E3C] text-base hover:text-[#F9EDD2] text-[#AF1E3C] border-[#AF1E3C] border-2 border-solid py-2 px-6 rounded-full transition">MORE DETAIL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdoptionProcessPart