import React from 'react';

const DogCard = ({ image, name, gender, description,color }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Image Section */}
      <div 
      style={{ 
        backgroundImage: "url('./images/Rectangle 128.png')",
        backgroundColor: color,
        }}>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full" 
        />
      </div>
      
      {/* Content Section */}
      <div className={`p-6 text-center border-2 border-[${color}]`}>
        {/* Name and Gender */}
        <h2 className="text-2xl font-bold mb-2">
          {name}{' '}
          <span className="inline-block text-blue-500">
            {gender === 'male' ? '♂️' : '♀️'}
          </span>
        </h2>
        
        {/* Description */}
        <p className="text-gray-700 text-base mb-4">{description}</p>
      </div>
    </div>
  );
};

export default DogCard;
