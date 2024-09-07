import React from 'react'
import Navbar from '../components/navbar'
import Carousel from '../components/Caroutsel'
export default function HomePage() {
    return (
        <>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <div className='md:text-base text-xs'>
                <div className="bg-[#991B1E] px-20 py-5  gap-4">
                    <h2 className="text-3xl font-bold uppercase text-center m-4 text-[#F9EDD2]">Our Brands</h2>
                    <div className="text-white bg-[#F9EDD2] flex flex-row flex-nowrap group rounded-xl">
                        <div className=" basis-3/12 my-8 flex justify-center items-center" >
                            <img src="./images/Group.png" alt="Person with tablet" className="w-7/12 h-auto object-cover" />
                        </div>
                        <p className=" basis-5/12 text-[#991B1E] flex items-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis nisl a dictum fringilla. Maecenas vitae ornare orci. Nam finibus mi in eros finibus, commodo fermentum est tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla venenatis, eros sit amet hendrerit venenatis, justo ligula egestas nibh, in sodales sem risus at lorem. Donec scelerisque tortor vitae arcu volutpat porta. Sed at tellus vestibulum, molestie ante sed, ultrices dui. Donec tempor laoreet ligula, sit amet molestie velit lobortis sed. Nulla vestibulum tincidunt odio eget elementum.
                        </p>
                        <div className=" basis-4/12 flex justify-center items-end">
                            <img src="./images/Rectangle 148.png" alt="Person with tablet" className=" group-hover:w-10/12 w-3/4 h-auto object-cover  transition-all duration-300" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#AF1E3C] px-20 py-5  gap-4">
                    <div className="text-white bg-[#F9EDD2] flex flex-row flex-nowrap group rounded-xl">
                        <div className=" basis-4/12 flex justify-center items-end">
                            <img src="./images/Rectangle 150.png" alt="Person with tablet" className=" group-hover:w-10/12 w-3/4 h-auto object-cover  transition-all duration-300" />
                        </div>
                
                        <p className=" basis-5/12 text-[#AF1E3C] flex items-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis nisl a dictum fringilla. Maecenas vitae ornare orci. Nam finibus mi in eros finibus, commodo fermentum est tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla venenatis, eros sit amet hendrerit venenatis, justo ligula egestas nibh, in sodales sem risus at lorem. Donec scelerisque tortor vitae arcu volutpat porta. Sed at tellus vestibulum, molestie ante sed, ultrices dui. Donec tempor laoreet ligula, sit amet molestie velit lobortis sed. Nulla vestibulum tincidunt odio eget elementum.
                        </p>
                        <div className=" basis-3/12 my-8 flex justify-center items-center" >
                            <img src="./images/Group 80.png" alt="Person with tablet" className="w-7/12 h-auto object-cover" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#B84626] px-20 py-5  gap-4">
                    <div className="text-white bg-[#F9EDD2] flex flex-row flex-nowrap group rounded-xl">
                        <div className=" basis-3/12 my-8 flex justify-center items-center" >
                            <img src="./images/logo cho web-89 1.png" alt="Person with tablet" className="w-7/12 h-auto object-cover" />
                        </div>
                        <p className=" basis-5/12 text-[#B84626] flex items-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis nisl a dictum fringilla. Maecenas vitae ornare orci. Nam finibus mi in eros finibus, commodo fermentum est tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla venenatis, eros sit amet hendrerit venenatis, justo ligula egestas nibh, in sodales sem risus at lorem. Donec scelerisque tortor vitae arcu volutpat porta. Sed at tellus vestibulum, molestie ante sed, ultrices dui. Donec tempor laoreet ligula, sit amet molestie velit lobortis sed. Nulla vestibulum tincidunt odio eget elementum.
                        </p>
                        <div className=" basis-4/12 flex justify-end items-end">
                            <img src="./images/Rectangle 152.png" alt="Person with tablet" className=" group-hover:w-10/12 w-3/4 h-auto object-cover  transition-all duration-300" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#BA6127] px-20 py-5  gap-4">
                    <div className="text-white bg-[#F9EDD2] flex flex-row flex-nowrap group rounded-xl">
                        <div className=" basis-4/12 flex justify-start items-end">
                            <img src="./images/Rectangle 151.png" alt="Person with tablet" className=" group-hover:w-10/12 w-3/4 h-auto object-cover  transition-all duration-300" />
                        </div>
                
                        <p className=" basis-5/12 text-[#BA6127] flex items-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis nisl a dictum fringilla. Maecenas vitae ornare orci. Nam finibus mi in eros finibus, commodo fermentum est tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla venenatis, eros sit amet hendrerit venenatis, justo ligula egestas nibh, in sodales sem risus at lorem. Donec scelerisque tortor vitae arcu volutpat porta. Sed at tellus vestibulum, molestie ante sed, ultrices dui. Donec tempor laoreet ligula, sit amet molestie velit lobortis sed. Nulla vestibulum tincidunt odio eget elementum.
                        </p>
                        <div className=" basis-3/12 my-8 flex justify-center items-center" >
                            <img src="./images/logo cho web-88 1.png" alt="Person with tablet" className="w-7/12 h-auto object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
