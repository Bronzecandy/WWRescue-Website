import React from 'react';
import { MenIcon, WomenIcon } from './Icon';
const DogCard = ({ image, subnames, gender, color, backgroundImage, name }) => {
  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg bg-white transition-shadow duration-300 card w-full flex flex-col w-[350px]"
      style={{
        '--hover-color': color, // Định nghĩa biến màu trong inline style
      }}
    >
      {/* Image Section */}
      <div
        style={{
          backgroundImage: backgroundImage,
          backgroundColor: color,
          height: '300px'
        }}>
        <img
          src={image}
          alt={name}
          className="w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 text-center border-2 rounded-b-lg flex-1 bg-[#F9EDD2]"
        style={{
          borderColor: color,
          color: color,
        }}>
        {/* Name and Gender */}
        <h2 className="text-2xl font-bold mb-2 flex justify-center gap-2">
          {name}{' '}
          <span className="inline-block text-blue-500">
            {gender === 'male' ? (
              <MenIcon color={color} />
            ) : gender === 'female' ? (
              <WomenIcon color={color} />
            ) : null}
          </span>
        </h2>

        {/* Description */}
        {subnames.map((subname, index) => (
          <p key={index + 1} className="text-base mb-2" >{subname}</p>
        ))}

      </div>
    </div>
  );
};

export default DogCard;
