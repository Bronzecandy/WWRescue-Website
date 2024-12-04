import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = ({ color, logo }) => {
  // Map các thông tin theo màu
  const colorMapping = {
    '#991B1E': {
      buttonClass: 'hover:text-[#991B1E] hover:bg-[#F9EDD2]',
      FBLink: 'https://www.facebook.com/WagWelRescue/',
      IGLink: 'https://www.instagram.com/wagwelrescue',
      TIKTOKLink: 'https://www.tiktok.com/@wagwelfeline',
      contact: <a href="mailto:admin@wagwelrescue.org" className="hover:text-gray-300">admin@wagwelrescue.org</a>,
      address: (
        <p>
          24/2 Trần Ngọc Diện, Thảo Điền,
          <br /> District 2, Ho Chi Minh City
        </p>
      ),
    },
    '#AF1E3C': {
      buttonClass: 'hover:text-[#AF1E3C] hover:bg-[#F9EDD2]',
      FBLink: 'https://www.facebook.com/WagWelAdoption/',
      IGLink: 'https://www.instagram.com/wagweladoption/',
      TIKTOKLink: 'https://www.tiktok.com/@wagwelfeline',
      contact: <a href="mailto:adopt@wagwelrescue.org" className="hover:text-gray-300">adopt@wagwelrescue.org</a>,
      address: (
        <p>
          24/2 Trần Ngọc Diện, Thảo Điền,
          <br /> District 2, Ho Chi Minh City
        </p>
      ),
    },
    '#F08122': {
      buttonClass: 'hover:text-[#F08122] hover:bg-[#F9EDD2]',
      FBLink: 'https://www.facebook.com/WagWelSaigonCanine/',
      IGLink: 'https://www.instagram.com/wagwelcanine',
      TIKTOKLink: 'https://www.tiktok.com/@wagwelcanine',
      contact: (
        <div className="flex flex-col">
          <a href="mailto:canine@wagwelrescue.org" className="hover:text-gray-300">canine@wagwelrescue.org</a>
          <a href="tel:+84798107559" className="hover:text-gray-300">+84 798 107 559</a>
        </div>
      ),
      address: (
        <p>
          24/2 Trần Ngọc Diện, Thảo Điền,
          <br /> District 2, Ho Chi Minh City
        </p>
      ),
    },
    '#FAA627': {
      buttonClass: 'hover:text-[#FAA627] hover:bg-[#F9EDD2]',
      FBLink: 'https://www.facebook.com/WagWelSaigonFeline/',
      IGLink: 'https://www.instagram.com/wagwelfeline',
      TIKTOKLink: 'https://www.tiktok.com/@wagwelfeline',
      contact: (
        <div className="flex flex-col">
          <a href="mailto:feline@wagwelrescue.org" className="hover:text-gray-300">feline@wagwelrescue.org</a>
          <a href="tel:+84938174297" className="hover:text-gray-300">+84 938 174 297</a>
        </div>
      ),
      address: (
        <p>
          266 Dien Bien Phu, P.17,
          <br /> Binh Thanh, Ho Chi Minh City
        </p>
      ),
    },
  };

  // Giá trị mặc định nếu không khớp màu
  const defaultMapping = colorMapping['#FAA627'];
  const { buttonClass, FBLink, IGLink, TIKTOKLink, contact, address } =
    colorMapping[color] || defaultMapping;

  return (
    <footer
      className="text-[#F9EDD2] py-8 px-4"
      style={{ backgroundColor: color }}
    >
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col mb-6 md:mb-0">
          <img
            src={logo}
            alt="WAG WEL RESCUE Logo"
            className="w-32 md:w-72 h-auto"
          />
        </div>

        {/* Social Media & Contact Section */}
        <div className="flex flex-col md:col-span-3 xl:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Social Media</h3>
              <div className="flex space-x-4">
                <a
                  href={FBLink}
                  target="_blank"
                  className={`${buttonClass} border-2 border-[#F9EDD2] rounded-full p-2`}
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href={IGLink}
                  target="_blank"
                  className={`${buttonClass} border-2 border-[#F9EDD2] rounded-full p-2`}
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href={TIKTOKLink}
                  target="_blank"
                  className={`${buttonClass} border-2 border-[#F9EDD2] rounded-full p-2`}
                  rel="noopener noreferrer"
                >
                  <FaTiktok size={24} />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              {contact}
            </div>

            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              {address}
            </div>

            {/* Patreon */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Patreon</h3>
              <p>
                <a
                  href="https://www.patreon.com/wagwelrescue"
                  target="_blank"
                  className="hover:text-gray-300"
                  rel="noopener noreferrer"
                >
                  www.patreon.com/wagwelrescue
                </a>
              </p>
            </div>

            {/* Substack */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Substack</h3>
              <p>
                <a
                  href="https://wagwel.substack.com/"
                  target="_blank"
                  className="hover:text-gray-300"
                  rel="noopener noreferrer"
                >
                  wagwel.substack.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
