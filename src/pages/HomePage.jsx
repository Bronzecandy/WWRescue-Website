import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Caroutsel'
import Footer from '../components/Footer'
import SupportUs from '../components/SupportUs'
import OurRescue from '../components/OurRescue'
export default function HomePage() {
    return (
        <>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <img src='./images/WWR.gif' ></img>
            <div className='2xl:text-lg lg:text-base text-[10px]'>
                <div className="bg-[#EF3927] px-2 md:px-20 py-5 ">
                    <h1 className=" text-3xl md:text-5xl uppercase text-center m-4 text-[#F9EDD2]">Our Brands</h1>
                    <div className="text-white bg-[#F9EDD2] flex flex-row flex-nowrap group rounded-xl md:px-0 px-3">
                        <div className="basis-5/12 md:basis-3/12 my-8 flex justify-center items-center" >
                            <img src="./images/Group.png" alt="Person with tablet" className="w-7/12 h-auto object-cover" />
                        </div>
                        <div className="basis-7/12 md:basis-5/12 text-[#991B1E] flex items-start justify-center flex-col  my-5">
                            <p className='mb-3'> WagWel - we redefine rescue.</p>
                            <p className='mb-3'> Established in 2019 in Vietnam, we are a social enterprise dedicated to the rescue and rehabilitation of stray dogs and cats.</p>
                            <p className='mb-3'> We redefine rescue through an innovative model that brings accessibility, positivity, and sustainability to animal rescue.</p>
                            <p> Our rescue cafes, adoption agency, and unique rescue brand are creating a more compassionate and secure future for companion animals in the communities we serve.</p>

                        </div>
                        <div className=" hidden md:basis-4/12 md:flex justify-center items-end">
                            <img src="./images/Rectangle 148.png" alt="Person with tablet" className="group-hover:w-10/12 w-3/4 h-auto object-cover  transition-all duration-300" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#AF1E3C] px-2 md:px-20 py-5  ">
                    <div className="text-white bg-[#F9EDD2] flex flex-row flex-nowrap group rounded-xl md:px-0 px-3">
                        <div className=" hidden md:basis-4/12 md:flex justify-center items-end">
                            <img src="./images/Rectangle 150.png" alt="Person with tablet" className=" group-hover:w-10/12 w-3/4 h-auto object-cover  transition-all duration-300" />
                        </div>

                        <div className=" basis-7/12 md:basis-5/12 text-[#991B1E] flex items-start justify-center flex-col my-5">
                            <p className='mb-3'> Visit - Meet - Apply - Match!
                            </p>
                            <p className='mb-3'> We facilitate authentic adoptions and lifetime matches for stray dogs and cats in Vietnam.
                            </p>
                            <p className='mb-3'>With ever-present challenges of the dog and cat meat trade, kidnapping, resale and abuse, we are highly focused on quality adoptions from qualified adopters.
                            </p>
                            <p className='mb-3'> Our adoption process is robust, intentional, and structured, prioritizing safety for the rescues and sustainability for the rescue ecosystem.
                            </p>
                            <p>Since 2019 we have confirmed nearly 200 adoptions in partnership with local rescue shelters in Vietnam.
                            </p>

                        </div>
                        <div className=" basis-5/12 md:basis-3/12 my-8 flex justify-center items-center" >
                            <img src="./images/Group 80.png" alt="Person with tablet" className="w-7/12 h-auto object-cover" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#B84626] px-2 md:px-20 py-5  ">
                    <div className="text-white bg-[#F9EDD2] flex flex-row flex-nowrap group rounded-xl md:px-0 px-3">
                        <div className="basis-5/12 md:basis-3/12 my-8 flex justify-center items-center" >
                            <img src="./images/logo cho web-89 1.png" alt="Person with tablet" className="w-7/12 h-auto object-cover" />
                        </div>
                        <div className="  basis-7/12 md:basis-5/12 text-[#991B1E] flex items-start justify-center flex-col  my-5">
                            <p className='mb-3'> Our flagship rescue cafe - home of the community rescue experience!
                            </p>
                            <p className='mb-3'> Located in a diverse and international neighborhood of Saigon, our 550 square meter space operates as a rescue dog cafe, educational center, community events space and of leash dog park - welcoming over 40,000 guests per year and more than 2,000 of our community’s beloved dogs.
                            </p>
                            <p className='mb-3'> A dog lover’s paradise, WagWel Canine is a foster home to up to 20 rescue dogs who are available for adoption. Meet and fall in love with our rescues in the most welcoming environment - cage free, off-leash, and open for guests of all ages - both 2 and 4-legged!
                            </p>
                            <p> We are proud to provide a uniquely positive rescue experience that stands out for all fo the right reasons.
                            </p>

                        </div>
                        <div className=" hidden md:basis-4/12 md:flex justify-end items-end">
                            <img src="./images/Rectangle 152.png" alt="Person with tablet" className=" group-hover:w-11/12 w-10/12 h-auto object-cover  transition-all duration-300" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#BA6127] px-2 md:px-20 py-5  ">
                    <div className="text-white bg-[#F9EDD2] flex flex-row flex-nowrap group rounded-xl md:px-0 px-3">
                        <div className=" hidden md:basis-4/12 md:flex justify-start items-end">
                            <img src="./images/Rectangle 151.png" alt="Person with tablet" className=" group-hover:w-10/12 w-3/4 h-auto object-cover  transition-all duration-300" />
                        </div>

                        <div className=" basis-7/12 md:basis-5/12 text-[#991B1E] flex items-start justify-center flex-col  my-5">
                            <p className='mb-3'>Our sister brand of rescue cafes - a cat lover’s paradise!
                            </p>
                            <p className='mb-3'> A foster home to up to 25 rescue cats who are up for adoption, WagWel Feline is the perfect place to enjoy a snack and drink in the company of friendly felines!

                            </p>
                            <p className='mb-3'>Located in one of Saigon’s prominent university districts, WagWel Feline is youth- and student-centric, operating as an inclusive and welcoming collab space.
                            </p>
                            <p> Hosting student clubs and educational events, we are increasing accesibility and awareness of animal rescue among Saigon’s young and young at heart!
                            </p>

                        </div>
                        <div className=" basis-5/12 md:basis-3/12 my-8 flex justify-center items-center" >
                            <img src="./images/logo cho web-88 1.png" alt="Person with tablet" className="w-7/12 h-auto object-cover" />
                        </div>
                    </div>
                </div>
            </div>
            <OurRescue></OurRescue>
            <SupportUs></SupportUs>
            <Footer></Footer>
        </>
    )
}
