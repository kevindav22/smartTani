import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import avatar1 from '../assets/avatar1.png';

const testimonials = [
  {
    name: "Marni Saniem",
    location: "Petani, Semarang",
    text: "Sejak bergabung dengan SmartTani, saya merasa lebih percaya diri dalam menghadapi tantangan di sawah. Forum diskusinya sangat membantu, banyak solusi praktis yang bisa langsung saya terapkan.",
    image: `${avatar1}`, // ganti dengan path yang sesuai
  },
  {
    name: "Budi Sutimin",
    location: "Petani, Sragen",
    text: "Fitur Pasar Panen sangat membantu saya dalam menjual hasil panen padi. Harga yang saya dapatkan lebih adil dan transparan. Prosesnya pun mudah dan cepat.",
    image: `${avatar1}`, // ganti dengan path yang sesuai
  },
  {
    name: "Imam Prambodo",
    location: "Petani, Ponorogo",
    text: "Solusi pertanian yang diberikan sangat praktis dan efektif. Banyak masalah sebelumnya membuat saya bingung diatasi dengan mudah. Terima kasih SmartTANI!",
    image: `${avatar1}`, // ganti dengan path yang sesuai
  },
  {
    name: "Siti Maemunah",
    location: "Petani, Klaten",
    text: "Saya sangat terbantu dengan informasi yang diberikan oleh SmartTANI. Solusi dan tips yang diberikan sangat mudah diterapkan.",
    image: `${avatar1}`, // ganti dengan path yang sesuai
  },
  {
    name: "Ahmad Hidayat",
    location: "Petani, Magelang",
    text: "Platform ini sangat bermanfaat untuk kami para petani. Informasi yang diberikan sangat relevan dan up-to-date.",
    image:`${avatar1}`, // ganti dengan path yang sesuai
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - testimonialsPerPage);
    }
  };

  const handleNext = () => {
    if (currentIndex + testimonialsPerPage < testimonials.length) {
      setCurrentIndex((prevIndex) => prevIndex + testimonialsPerPage);
    }
  };

  return (
    <div className=" mx-auto py-16 px-4 sm:px-6 lg:px-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Apa Kata Mereka Tentang <span className="text-orange-500">SmartTANI</span>?
        </h2>
        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            className={`bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full p-2 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentIndex === 0}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className={`bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full p-2 ${currentIndex + testimonialsPerPage >= testimonials.length ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentIndex + testimonialsPerPage >= testimonials.length}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {testimonials.slice(currentIndex, currentIndex + testimonialsPerPage).map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center h-full"
          >
            <p className="text-gray-700 mb-4 text-center">{testimonial.text}</p>
            <div className="flex items-center mt-auto">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="text-left">
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
