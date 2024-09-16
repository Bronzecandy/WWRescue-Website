import React, { useState } from 'react';
import { WWRIcon, WWAIcon, WWFIcon, WWCIcon } from './Icon';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icon từ react-icons
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [activeLink, setActiveLink] = useState('HOME');
  const [menuOpen, setMenuOpen] = useState(false); // Trạng thái của menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-[#991B1E] fixed w-full z-20">
        <div className="flex items-center justify-between p-4">
          {/* Logo Section */}
          <div className="flex">
            <img src="/images/Group 98.png" alt="Wagwell Rescue" className="h-14" />
          </div>

          {/* Navigation Links - Ẩn trên tablet */}
          <nav className="hidden md:flex gap-6 text-xs lg:text-base">
            <Link
              to="/"
              className={`text-[#F9EDD2] ${activeLink === 'HOME' ? 'font-bold' : 'transition-all hover:font-bold'}`}
              onClick={() => setActiveLink('HOME')}
            >
              HOME
            </Link>
            <Link
              to="/Coming"
              className={`text-[#F9EDD2] ${activeLink === 'ABOUT US' ? 'font-bold' : 'transition-all hover:font-bold'}`}
              onClick={() => setActiveLink('ABOUT US')}
            >
              ABOUT US
            </Link>
            <Link
              to="/Coming"
              className={`text-[#F9EDD2] ${activeLink === 'SUPPORT SUSTAINABLE RESCUE' ? 'font-bold' : 'transition-all hover:font-bold'}`}
              onClick={() => setActiveLink('SUPPORT SUSTAINABLE RESCUE')}
            >
              SUPPORT SUSTAINABLE RESCUE
            </Link>
          </nav>

          {/* Icons Section - Ẩn trên tablet */}
          <div className="hidden md:flex gap-4">
            <WWRIcon />
            <WWAIcon />
            <WWFIcon />
            <WWCIcon />
          </div>

          {/* Menu Icon cho tablet (Hiển thị dưới md) */}
          <div className="md:hidden">
            <FaBars className="text-[#F9EDD2] text-2xl cursor-pointer" onClick={toggleMenu} />
          </div>
        </div>

        {/* Overlay mờ khi menu mở */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={toggleMenu} // Đóng menu khi click vào overlay
          ></div>
        )}

        {/* Slide-in Menu từ bên phải (hiện khi nhấn vào icon menu) */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-[#EF3927] text-[#F9EDD2] p-4 transform transition-transform duration-300 z-20 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end items-center">
            <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
          </div>
          <nav className="mt-4">
            <a
              href="#"
              className={`block py-2 ${activeLink === 'HOME' ? 'font-bold' : 'transition-all hover:font-bold'}`}
              onClick={() => {
                setActiveLink('HOME');
                toggleMenu();
              }}
            >
              HOME
            </a>
            <a
              href="#"
              className={`block py-2 ${activeLink === 'ABOUT US' ? 'font-bold' : 'transition-all hover:font-bold'}`}
              onClick={() => {
                setActiveLink('ABOUT US');
                toggleMenu();
              }}
            >
              ABOUT US
            </a>
            <a
              href="#"
              className={`block py-2 ${activeLink === 'SUPPORT SUSTAINABLE RESCUE' ? 'font-bold' : 'transition-all hover:font-bold'}`}
              onClick={() => {
                setActiveLink('SUPPORT SUSTAINABLE RESCUE');
                toggleMenu();
              }}
            >
              SUPPORT SUSTAINABLE RESCUE
            </a>
            <div className="flex gap-4 pt-4">
              <WWRIcon />
              <WWAIcon />
              <WWFIcon />
              <WWCIcon />
            </div>
          </nav>
        </div>
      </header>

      {/* Padding to prevent content from being hidden behind the navbar */}
      <div className="h-16 md:h-0"></div>
    </>
  );
};

export default Navbar;
