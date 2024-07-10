import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">SmartTani</h2>
            <p className="text-gray-700 mb-4">
              Berdedikasi untuk menjadi mitra terpercaya bagi petani padi dalam mencapai kesuksesan dan kesejahteraan yang berkelanjutan.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Akses Cepat</h3>
              <ul className="text-gray-700">
                <li className="mb-2"><a href="#home" className="hover:text-gray-900">Beranda</a></li>
                <li className="mb-2"><a href="#about" className="hover:text-gray-900">Tentang</a></li>
                <li className="mb-2"><a href="#products" className="hover:text-gray-900">Produk</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Alamat</h3>
              <p className="text-gray-700">
                Jl. Swadaya 4 No.146, Dero, Condongcatur, Kec. Depok,
                Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-gray-700 text-center">
          Copyright SmartTANI 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
