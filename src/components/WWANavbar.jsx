import React, { useState, useEffect } from 'react';
import { WWAIcon, WWFIcon, WWCIcon,WWRIcon } from './Icon';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icon từ react-icons
import { Link, useLocation } from 'react-router-dom';
const WWANavbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('HOME');
  const [menuOpen, setMenuOpen] = useState(false); // Trạng thái của menu

  useEffect(() => {
    if (location.pathname === '/WWAHome') {
      setActiveLink('HOME');
    } else if (location.pathname === '/WWAHome/About') {
      // Giả sử đường dẫn này dành cho About Us và Support Sustainable Rescue
      setActiveLink('ABOUT US');
    } else if (location.pathname === '/WWAHome/Support') {
      setActiveLink('SUPPORT SUSTAINABLE RESCUE');
    }
  }, [location]);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header className="bg-[#AF1E3C] fixed w-full z-20 border-b border-[#F9EDD2]">
        <div className="flex items-center justify-between p-4">
          {/* Logo Section */}
          <Link to="/WWAhome" className="flex">
            <img src="/images/Group 154.webp" alt="Wagwell Rescue" className="h-14" />
          </Link>

          {/* Navigation Links - Ẩn trên tablet */}
          <nav className="hidden lg:flex gap-6 text-xs lg:text-base">
            <Link
              to="/WWAHome"
              className={`text-[#F9EDD2] ${activeLink === 'HOME' ? 'font-bold' : 'transition-all hover:font-bold'}`}
            >
              HOME
            </Link>
            <Link
              to="/WWAHome/About"
              className={`text-[#F9EDD2] ${activeLink === 'ABOUT US' ? 'font-bold' : 'transition-all hover:font-bold'}`}
            >
              ABOUT US
            </Link>
            <Link
              to="/WWAHome/Support"
              className={`text-[#F9EDD2] ${activeLink === 'SUPPORT SUSTAINABLE RESCUE' ? 'font-bold' : 'transition-all hover:font-bold'}`}
            >
              SUPPORT SUSTAINABLE RESCUE
            </Link>
          </nav>

          {/* Icons Section - Ẩn trên tablet */}
          <div className="hidden lg:flex gap-4">
            <Link to='/'>
              <WWRIcon />
            </Link>
            <a href="https://www.facebook.com/WagWelSaigonFeline/" target='_blank'>
              <WWFIcon />
            </a>
            <a href="https://www.facebook.com/WagWelSaigonCanine/" target='_blank'>
              <WWCIcon />
            </a>
          </div>

          {/* Menu Icon cho tablet (Hiển thị dưới md) */}
          <div className="lg:hidden">
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
          className={`fixed top-0 right-0 w-64 h-full bg-[#AF1E3C] text-[#F9EDD2] p-4 transform transition-transform duration-300 z-20 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex justify-end items-center">
            <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
          </div>
          <nav className="mt-4">
            <Link
              to="/WWAHome"
              className={`block py-2 ${activeLink === 'HOME' ? 'font-bold' : 'transition-all hover:font-bold'}`}
              onClick={() => {
                toggleMenu();
              }}
            >
              HOME
            </Link>
            <Link
              to="/WWAHome/About"
              className={`block py-2 ${activeLink === 'ABOUT US' ? 'font-bold' : 'transition-all hover:font-bold'}`}
              onClick={() => {
                toggleMenu();
              }}
            >
              ABOUT US
            </Link>
            <Link
              to="/WWAHome/Support"
              className={`block py-2 ${activeLink === 'SUPPORT SUSTAINABLE RESCUE' ? 'font-bold' : 'transition-all hover:font-bold'}`}
              onClick={() => {
                toggleMenu();
              }}
            >
              SUPPORT SUSTAINABLE RESCUE
            </Link>
            <div className="flex gap-4 pt-4">
              <Link to='/'>
                <WWRIcon />
              </Link>
              <a href="https://www.facebook.com/WagWelSaigonFeline/" target='_blank'>
                <WWFIcon />
              </a>
              <a href="https://www.facebook.com/WagWelSaigonCanine/" target='_blank'>
                <WWCIcon />
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Padding to prevent content from being hidden behind the WWANavbar */}
      <div className="h-16 md:h-0"></div>
    </>
  );
};

export default WWANavbar;
