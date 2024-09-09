import React from 'react'

export default function SupportUs() {
    return (
        <div>
            <div className="bg-[#EF3927] text-center py-10 px-5 md:px-10 lg:px-20 text-[#F9EDD2] md:text-lg text-xs">
                <h1 className="text-3xl md:text-5xl mb-4">SUPPORT US</h1>
                <p>
                    Working hand-in-hand with local shelters and the rescue community in </p>
                <p> Vietnam, helping to provide a safe space and forever home to foster
                </p>
                <p>and socialize abandoned, traumatized dogs.
                </p>
            </div>
            <section className="relative w-full h-[300px] md:h-[700px] bg-cover bg-center " style={{ backgroundImage: "url('./images/image 4.png')" }}>
                {/* Overlay for darkening the image slightly */}
                <div className="absolute inset-0 bg-black opacity-30"></div>

                {/* Content Section */}
                <div className="relative flex flex-col h-full p-8">
                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl leading-tight mb-6 text-[#F9EDD2]">
                        CONTRIBUTE TO OUR COMMUNITY
                    </h1>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-6">
                        <button className="bg-[#F9EDD2] hover:bg-[#EF3927] hover:text-[#F9EDD2] text-[#EF3927] border-2 border-solid border-[#EF3927]  py-2 px-6 rounded-full hover:bg-white transition">
                            PATREON
                        </button>
                        <button className="bg-[#F9EDD2] hover:bg-[#EF3927] hover:text-[#F9EDD2] text-[#EF3927]  border-2 border-solid border-[#EF3927] py-2 px-6 rounded-full hover:bg-white transition">
                            PAYPAL
                        </button>
                        <button className="bg-[#F9EDD2] hover:bg-[#EF3927] hover:text-[#F9EDD2] text-[#EF3927]  border-2 border-solid border-[#EF3927] py-2 px-6 rounded-full hover:bg-white transition">
                            LOCALLY DONATE
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
