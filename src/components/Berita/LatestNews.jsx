import React, { useState } from 'react';
import NewsCard from './NewsCard';
import tani1 from '../../assets/tani1.jpg';
import tani2 from '../../assets/tani2.jpg';  
import tani3 from '../../assets/tani3.jpg';

const LatestNews = () => {
  const [visibleNewsCount, setVisibleNewsCount] = useState(4);

  const newsItems = [
    {
      image: `${tani1}`,
      title: 'Pemprov Sumsel Siapkan Bantuan Benih bagi Petani yang Terdampak Banjir',
      description: 'detikSumbagsel – Pemerintah Provinsi Sumatera Selatan akan memberikan bantuan benih bagi para petani di wilayahnya yang terdampak banjir. Hal itu dilakukan setelah adanya....',
    },
    {
      image: `${tani2}`,
      title: 'Kehadiran Listrik PLN Genjot Produktivitas Pertanian di Ponorogo',
      description: 'detikSumbagsel- Program Electrifying Agriculture (EA) besutan PT PLN (Persero) terus memberikan dampak positif bagi pertanian di Tanah Air....',
    },
    {
      image: `${tani3}`,
      title: 'Pakai Pupuk Asal Indonesia, Produktivitas Padi di Timor Leste Melesat 2 Kali Lipat',
      description: 'Liputan6.COM - Petrokimia Gresik sukses meningkatkan produktivitas padi di Timor Leste menjadi 7,5 ton per hektar....',
    },
    {
      image: `${tani1}`,
      title: 'Bank Dunia: Perubahan Sistem Pertanian Pangan dapat Tekan Emisi Global',
      description: 'Bisnis.COM - Bank Dunia menyatakan perubahan sistem pertanian pangan global menghadirkan peluang besar untuk mengurangi emisi....',
    },
    {
      image: `${tani1}`,
      title: 'Bank Dunia: Perubahan Sistem Pertanian Pangan dapat Tekan Emisi Global',
      description: 'Bisnis.COM - Bank Dunia menyatakan perubahan sistem pertanian pangan global menghadirkan peluang besar untuk mengurangi emisi....',
    },
  ];

  const handleLoadMore = () => {
    setVisibleNewsCount(prevCount => prevCount + 3);
  };

  return (
    <div className="py-12 bg-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Berita Terkini</h2>
        <p className="text-center text-gray-700 mb-12">Dapatkan Informasi terkini seputar Pertanian</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {/* Kolom Berita Besar */}
          <div>
            <NewsCard
              image={newsItems[0].image}
              title={newsItems[0].title}
              description={newsItems[0].description}
              isLarge={true}
            />
          </div>
          {/* Kolom Berita Kecil */}
          <div className="lg:col-span-2">
            {newsItems.slice(1, visibleNewsCount).map((newsItem, index) => (
              <NewsCard
                key={index}
                image={newsItem.image}
                title={newsItem.title}
                description={newsItem.description}
                isLarge={false}
              />
            ))}
          </div>
        </div>
        {/* Tombol Lihat Lebih Banyak */}
        {visibleNewsCount < newsItems.length && (
          <div className="text-center mt-8">
            <button onClick={handleLoadMore} className="text-green-600 font-semibold">
              Lihat lainnya...
            </button>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default LatestNews;
