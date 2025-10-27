
import React from 'react';
import type { Promotion } from '../types';

interface PromotionCardProps {
  promotion: Promotion;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ promotion }) => {
  return (
    <a href="#" className="block relative rounded-lg overflow-hidden shadow-lg group transform hover:-translate-y-1 transition-all duration-300 h-64">
      <img src={promotion.imageUrl} alt={promotion.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <h3 className="text-2xl font-bold mb-2">{promotion.title}</h3>
        <p className="text-sm mb-4 opacity-90">{promotion.description}</p>
        <div className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg self-start group-hover:bg-gray-200 transition-colors text-sm">
          {promotion.buttonText}
        </div>
      </div>
    </a>
  );
};


interface PromotionsProps {
    promotions: Promotion[];
}

const Promotions: React.FC<PromotionsProps> = ({ promotions }) => {
    return (
        <section className="my-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-500">מבצעים ודילים חמים</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {promotions.map((promo) => (
                    <PromotionCard key={promo.id} promotion={promo} />
                ))}
            </div>
        </section>
    );
};

export default Promotions;