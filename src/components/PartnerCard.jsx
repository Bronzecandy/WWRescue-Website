import React from 'react';

const PartnerCard = ({ imageUrl, description }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <img src={imageUrl} alt="Description" className="w-64 h-64 object-contain mb-4" />
      <p className="text-center text-lg font-semibold text-[#EF3927]">{description}</p>
    </div>
  );
};

export default PartnerCard;