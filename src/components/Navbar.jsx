import React from 'react';

const Navbar = () => {
  return (
    <nav className="py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold text-black">SmartTANI</div>
        <div className="space-x-4">
          <a href="#home" className="text-black hover:text-orange-600">Beranda</a>
          <a href="#about" className="text-black hover:text-orange-600">Tentang</a>
          <a href="#products" className="text-black hover:text-orange-600">Produk</a>
        </div>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-white text-green-600 border border-green-600 rounded-lg hover:bg-green-50">Login</button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
