import React from 'react';
import bannerImage from '../assets/image.png';

const Banner = () => {
  return (
    <div className="bg-green-100 flex flex-col md:flex-row items-center px-12">
      <div className="text-left md:w-1/2">
        <h1 className="text-4xl font-bold text-black">
          SmartTANI
          <span className="text-orange-600"> Pendamping Terbaik Petani Desa</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Tingkatkan produktivitas dan kesejahteraan pertanian Anda dengan akses ke informasi terkini dan fitur premium
        </p>
        <button className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700">
          Daftar Sekarang
        </button>
      </div>
      <div className="mt-8 md:mt-0 md:ml-8 md:w-1/2 flex justify-center">
        <img src={bannerImage} alt="Gambar Tani" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Banner;
