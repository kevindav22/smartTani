import React from 'react';
import sponsor1 from '../assets/sponsor1.png';
import sponsor2 from '../assets/sponsor2.png';
import sponsor3 from '../assets/sponsor3.png';
import sponsor4 from '../assets/sponsor4.png';

const LogoBar = () => {
  return (
    <div className="bg-white py-4 flex justify-around items-center absolute inset-x-0 top-3/3 transform  z-10 shadow-md">
      <img src={sponsor1} alt="sponsor BULOG" className="h-12" />
      <img src={sponsor2} alt="sponsor Pupuk Indonesia" className="h-12" />
      <img src={sponsor3} alt="sponsor Universitas Amikom" className="h-12" />
      <img src={sponsor4} alt="sponsor Kementerian Pertanian" className="h-12" />
    </div>
  );
};

export default LogoBar;
