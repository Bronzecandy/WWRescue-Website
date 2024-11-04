// Footer.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = ({ color, logo }) => {
  const buttonClass = color === '#991B1E'
    ? 'hover:text-[#991B1E] hover:bg-[#F9EDD2]'
    : color === '#AF1E3C'
      ? 'hover:text-[#AF1E3C] hover:bg-[#F9EDD2]'
      : color === '#F08122'
        ? 'hover:text-[#F08122] hover:bg-[#F9EDD2]'
        : color === '#FAA627'
          ? 'hover:text-[#FAA627] hover:bg-[#F9EDD2]'
          : 'hover:text-[#FAA627] hover:bg-[#F9EDD2]';
  const FBLink = color === '#991B1E'
    ? 'https://www.facebook.com/WagWelRescue/'
    : color === '#AF1E3C'
      ? 'https://www.facebook.com/WagWelAdoption/'
      : color === '#F08122'
        ? 'https://www.facebook.com/WagWelSaigonCanine/'
        : color === '#FAA627'
          ? 'https://www.facebook.com/WagWelSaigonFeline/'
          : 'https://www.facebook.com/WagWelRescue/';
  const IGLink = color === '#991B1E'
    ? 'https://www.instagram.com/wagwelrescue'
    : color === '#AF1E3C'
      ? 'https://www.instagram.com/wagwelrescue'
      : color === '#F08122'
        ? 'https://www.instagram.com/wagwelcanine'
        : color === '#FAA627'
          ? 'https://www.instagram.com/wagwelfeline'
          : 'https://www.instagram.com/wagwelrescue';
  const TIKTOKLink = color === '#991B1E'
    ? 'https://www.tiktok.com/@wagwelfeline'
    : color === '#AF1E3C'
      ? 'https://www.tiktok.com/@wagwelfeline'
      : color === '#F08122'
        ? 'https://www.tiktok.com/@wagwelcanine'
        : color === '#FAA627'
          ? 'https://www.tiktok.com/@wagwelfeline'
          : 'https://www.tiktok.com/@wagwelfeline';
  return (
    <footer className="text-[#F9EDD2] py-8 px-4" style={{
      backgroundColor: color,
    }}>
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col mb-6 md:mb-0">
          <img
            src={logo}
            alt="WAG WEL RESCUE Logo"
            className=" w-32 md:w-72 h-auto" // Adjust width and height as needed
          />
        </div>

        {/* Social Media & Contact Section */}
        <div className="flex flex-col md:col-span-3 xl:col-span-3">
          <div className="grid  grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-8">
            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Social media</h3>
              <div className="flex space-x-4">
                <a href={FBLink} target='_blank' className={`${buttonClass} border-2 border-[#F9EDD2] rounded-full p-2`}>
                  <FaFacebookF size={24} />
                </a>
                <a href={IGLink} target='_blank' className={`${buttonClass} border-2 border-[#F9EDD2] rounded-full p-2`}>
                  <FaInstagram size={24} />
                </a>
                <a href={TIKTOKLink} target='_blank' className={`${buttonClass} border-2 border-[#F9EDD2] rounded-full p-2`}>
                  <FaTiktok size={24} />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <a href='mailto:support@wagwelrescue.org' className="hover:text-gray-300">support@wagwelrescue.org</a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p>
                24/2 Trần Ngọc Diện, Thảo Điền,
                <br /> District 2, Ho Chi Minh City
              </p>
            </div>
            {/* Patreon */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Patreon</h3>
              <p>
                <a href="https://www.patreon.com/wagwelrescue" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                  www.patreon.com/wagwelrescue
                </a>
              </p>
            </div>


            {/* Substack */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Substack</h3>
              <p>
                <a href="https://wagwel.substack.com/" target='_blank' className="hover:text-gray-300">
                  wagwel.substack.com
                </a>
              </p>
            </div>
          </div>

          {/* Address */}

        </div>

      </div>
    </footer>
  );
};

export default Footer;
