import { useState } from "react";
import React from 'react';

export default function Navbar() {
  // State to manage the active tab, default is 'home'
  const [activeTab, setActiveTab] = useState('home');

  // Function to change the active tab on click
  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#fdf0dc]">
      {/* Icon Section */}
      <div className="flex space-x-4">
        {/* Icons: Replace src with actual icon paths */}
        <img
          src="icon1.png"
          alt="icon1"
          className="h-12 w-12 rounded-full border-4 border-[#e94d2c] p-2"
        />
        <img
          src="icon2.png"
          alt="icon2"
          className="h-12 w-12 rounded-full border-4 border-[#e94d2c] p-2"
        />
        <img
          src="icon3.png"
          alt="icon3"
          className="h-12 w-12 rounded-full border-4 border-[#f18e2e] p-2"
        />
        <img
          src="icon4.png"
          alt="icon4"
          className="h-12 w-12 rounded-full border-4 border-[#f18e2e] p-2"
        />
      </div>

      {/* Navigation Section */}
      <nav className="flex items-center space-x-4 border-2 rounded-full px-6 py-2 space-x-6 border-[#e94d2c]  ">
        <button
          className={`flex items-center ${
            activeTab === 'home' ? ' font-bold text-[#e94d2c]' : ' text-[#e94d2c]'
          }`}
          onClick={() => handleClick('home')}
        >
          <span>HOME</span>
        </button>
        <button
          className={`flex items-center  ${
            activeTab === 'about' ? ' font-bold text-[#e94d2c]' : ' text-[#e94d2c]'
          }`}
          onClick={() => handleClick('about')}
        >
          <span>ABOUT US</span>
        </button>
        <button
          className={`flex items-center  ${
            activeTab === 'support' ? 'font-bold text-[#e94d2c]' : 'text-[#e94d2c]'
          }`}
          onClick={() => handleClick('support')}
        >
          <span>SUPPORT SUSTAINABLE RESCUE</span>
        </button>
      </nav>

      {/* Logo Section */}
      <div className="flex items-center">
        <h1 className="text-[#e94d2c] font-bold text-3xl tracking-wider">
          WAGWEL <span className="text-sm block text-[#e94d2c]">RESCUE</span>
        </h1>
      </div>
    </header>
  );
}
