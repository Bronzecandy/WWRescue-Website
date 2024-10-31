import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WWANavbar from '../components/WWANavbar'
import WWCNavbar from '../components/WWCNavbar'
import WWFNavbar from '../components/WWFNavbar'
export default function ComingsoonPages({color}) {
    const logo = color === '#991B1E' ? '/images/Logo-big.png' : color === '#AF1E3C' ? '/images/Group.webp' : color === '#F08122' ? '/images/WWCFLogo.webp' : '/images/WWFFLogo.webp';
    return (
        <>
             {color === '#991B1E' ? <Navbar /> : color === '#AF1E3C' ? <WWANavbar /> :  color === '#F08122' ? <WWCNavbar/> : <WWFNavbar/>}
            <div className="bg-[#F9EDD2] flex items-center justify-center h-screen">
                <h1 className="text-4xl font-bold" style={{
                    color:color,
                }}>Coming Soon</h1>
            </div>
            <Footer color={color} logo={logo}/>
        </>
    )
}
