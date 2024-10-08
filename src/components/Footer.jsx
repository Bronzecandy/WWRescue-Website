// Footer.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#991B1E] text-[#F9EDD2] py-8 px-4">
      <div className="max-w-[98rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col mb-6 md:mb-0">
          <img
            src="./images/Logo-big.png"
            alt="WAG WEL RESCUE Logo"
            className=" w-32 md:w-72 h-auto" // Adjust width and height as needed
          />
        </div>

        {/* Social Media & Contact Section */}
        <div className="flex flex-col md:col-span-3">
          <div className="grid  grid-cols-1  md:grid-cols-3 gap-8">
            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Social media</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/WagWelRescue/" target='_blank' className="hover:text-[#991B1E] hover:bg-[#F9EDD2] border-2 border-current rounded-full p-2">
                  <FaFacebookF size={24} />
                </a>
                <a href="https://www.instagram.com/wagwelrescue" target='_blank' className="hover:text-[#991B1E] hover:bg-[#F9EDD2] border-2 border-current rounded-full p-2">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.tiktok.com/@wagwelfeline" target='_blank' className="hover:text-[#991B1E] hover:bg-[#F9EDD2] border-2 border-current rounded-full p-2">
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
