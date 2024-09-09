import React from 'react';

const DogCard = ({ image, subnames, gender,color,backgroundImage,name }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
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
      <div className="p-6 text-center border-2 rounded-b-lg" 
      style={{ 
        borderColor: color,
        }}>
        {/* Name and Gender */}
        <h2 className="text-2xl font-bold mb-2">
          {name}{' '}
          <span className="inline-block text-blue-500">
            {gender === 'male' ? '♂️' : '♀️'}
          </span>
        </h2>
        
        {/* Description */}
        {subnames.map((subname,index) => (
          <p key={index+1} className="text-gray-700 text-base mb-2">{subname}</p>
        ))}
        
      </div>
    </div>
  );
};

export default DogCard;
