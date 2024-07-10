import React from 'react';
import FeatureCard from './FeaturesCard';
import { FiMessageCircle, FiHeart, FiShoppingCart } from 'react-icons/fi';

const Features = () => {
  const features = [
    {
      icon: <FiMessageCircle size={32} />,
      title: 'Forum Diskusi',
      description: 'Berbagi pengalaman serta cari solusi dari komunitas petani.',
      linkText: 'Mulai Sekarang',
    },
    {
      icon: <FiHeart size={32} />,
      title: 'Informasi Terkini',
      description: 'Akses ke teknik pertanian modern dan saran ahli.',
      linkText: 'Selengkapnya',
    },
    {
      icon: <FiShoppingCart size={32} />,
      title: 'Pasar Panen',
      description: 'Jual hasil panen Anda langsung ke pengelola dengan harga yang adil.',
      linkText: 'Mulai Sekarang',
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Fitur Unggulan SmartTani</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              linkText={feature.linkText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
