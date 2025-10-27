
import React from 'react';
import type { Brand } from '../types';

interface BrandShowcaseProps {
    brands: Brand[];
    onBrandClick: (brandName: string) => void;
}

const BrandShowcase: React.FC<BrandShowcaseProps> = ({ brands, onBrandClick }) => {
    return (
        <section className="my-12 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">בקרו בחנויות המותג</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                {brands.map((brand) => (
                    <button 
                        key={brand.id} 
                        onClick={() => onBrandClick(brand.name)}
                        className="flex justify-center h-12 items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                        aria-label={`עבור לחנות המותג ${brand.name}`}
                    >
                        {brand.logoUrl ? (
                            <img 
                                src={brand.logoUrl} 
                                alt={brand.name} 
                                loading="lazy"
                                decoding="async"
                                className="h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                            />
                        ) : (
                             <span className="text-2xl font-bold text-black transition-transform duration-300 hover:scale-105">
                                {brand.name}
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default BrandShowcase;