import React from 'react';

const NewsCard = ({ image, title, description, isLarge }) => {
  return (
    <div className={`flex ${isLarge ? 'flex-col' : 'flex-row'} items-start p-4 bg-white rounded-lg shadow-md mb-4`}>
      <img src={image} alt={title} className={`w-full ${isLarge ? 'mb-4' : 'sm:w-1/3 sm:mr-4'} h-auto rounded-lg`} />
      <div className="flex flex-col">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
