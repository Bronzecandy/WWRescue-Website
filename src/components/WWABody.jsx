import React from 'react'

function WWABody() {
    return (
        <div>
            <div className=" bg-cover bg-no-repeat w-full h-screen bg-center bg-top bg-[url('/images/WWABanner.webp')] relative text-[#AF1E3C]">
                <div className='w-8/12 md:w-5/12 absolute top-12 md:top-40 pl-4 sm:pl-8 flex flex-col gap-2 sm:gap-4'>
                    <h1 className='max-[376px]:text-xl text-3xl 2xl:text-6xl text-[#EB2E51]'>LET’S GIVE OUR RESCUES A FOREVER HOME</h1>
                    <p className='max-[376px]:text-sm text-base lg:text-lg 2xl:text-2xl'>Our rescues have been through a challenging past, but that does not stop them from looking ahead towards a brighter future! We can all play a part in the solution of finding them a loving and forever home.</p>
                </div>
            </div>
            <video autoPlay loop muted playsInline className='w-full'>
                <source src="./images/WWA-homepage.webm" type="video/webm" alt='WWAgif'></source>
                <source src="./images/WWA-homepage.mp4" type="video/mp4" alt='WWAgif'/>
            </video>
            <div className='w-full bg-[#AF1E3C] flex flex-col items-center'>
                <div className='text-[#F9EDD2] flex flex-col p-8 items-center gap-4 text-center'>
                    <h1 className='text-3xl md:text-5xl'>WHAT MAKES WAGWEL ADOPTION SO SPECIAL?</h1>
                    <p className='text-base sm:text-lg'>At WagWel, every visit and every purchase is purposeful and carries a meaning full of love. </p>
                    <p className='text-base sm:text-lg'>With every visit and act of support at WagWel - whether in person or online - our community is actively contributing
                    to the care and rehabilitation of rescue dogs and cats. </p>
                    <p className='text-base sm:text-lg'>Furthermore, each action further spreads our mission of supporting the entire dog and cat rescue ecosystem in Vietnam.</p>
                    <p className='text-base sm:text-lg'>By being a part of the WagWel community, you are actually taking part in life-changing work with us!</p>
                </div>
                <img src="/images/MissionFooter.webp" alt="Mission Footer" className='w-full'/>
            </div>
        </div>
    )
}

export default WWABody