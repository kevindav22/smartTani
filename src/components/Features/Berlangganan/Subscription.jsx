import React from 'react';

const plans = [
  {
    title: 'Free',
    description: 'Akses informasi terkini seputar Pertanian',
    price: 'Rp. 0',
    features: ['Informasi Terkini'],
    buttonLabel: 'Signup for free',
    bgColor: 'bg-light-green',
    textColor: 'text-dark-green',
    buttonColor: 'bg-dark-green text-white',
    ulBgColor: 'bg-white',
  },
  {
    title: 'Premium',
    description: 'dapatkan akses penuh ke semua fitur SmartTani.',
    price: 'Rp. 50.000',
    note: 'Save Rp. 40.000 pertahun',
    features: ['informasi terbaru', 'Forum diskusi', 'Pasar Panen', 'Berbagi Pengalaman'],
    buttonLabel: 'Go to pro',
    bgColor: 'bg-dark-green',
    textColor: 'text-white',
    buttonColor: 'bg-white text-dark-green',
    ulBgColor: 'bg-gray-800',
  },
  {
    title: 'Stars',
    description: 'Nantikan pilihan berlangganan lainya',
    price: '?',
    features: ['Coming Soon'],
    buttonLabel: 'Comingsoon',
    bgColor: 'bg-light-green',
    textColor: 'text-dark-green',
    buttonColor: 'bg-dark-green text-white',
    ulBgColor: 'bg-white',
  }
];

const SubscriptionCard = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      <h1 className="text-2xl font-bold mt-8 mb-2 text-center">Berlangganan SmartTani untuk Keberhasilan Petani Desa</h1>
      <p className="text-center text-gray-500 mb-8">Sesuaikan kebutuhan anda dan nikmati semua fiturnya!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {plans.map((plan, index) => (
          <div key={index} className={`${plan.bgColor} rounded-lg shadow-md flex flex-col p-6 h-full text-center ${plan.textColor}`}>
            <div>
              <h2 className="text-xl font-bold mb-2">{plan.title}</h2>
              <p className={`mb-4 ${plan.textColor === 'text-white' ? 'text-gray-200' : 'text-gray-700'}`}>{plan.description}</p>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              {plan.note && <p className="mb-4">{plan.note}</p>}
            </div>
            <div className={`${plan.ulBgColor} rounded-lg p-4 flex-grow mb-4`}>
              <ul className="space-y-2 text-left pb-16">
                {plan.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
            </div>
            <button className={`w-full ${plan.buttonColor} rounded-lg py-2 mt-auto`}>{plan.buttonLabel}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCard;
