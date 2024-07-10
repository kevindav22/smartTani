import React from 'react';

const FeatureCard = ({ icon, title, description, linkText }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-lg shadow-md">
      <div className="p-4 bg-green-200 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href="#" className="text-green-600 font-semibold">
        {linkText} &rarr;
      </a>
    </div>
  );
};

export default FeatureCard;
