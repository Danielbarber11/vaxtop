
import React, { useState, useMemo } from 'react';
import { smartwatchProducts } from '../constants';
import type { PhoneProduct } from '../types';
import ProductCard from '../components/ProductCard';
import { SearchIcon } from '../components/IconComponents';

interface SmartwatchesPageProps {
  onAddToCart: (product: PhoneProduct) => void;
  onViewDetails: (id: number) => void;
  onBack: () => void;
  onAddToCartWithVariants: (id: number) => void;
}

const allBrands = ['הכל', ...new Set(smartwatchProducts.map(p => p.brand))];

const SmartwatchesPage: React.FC<SmartwatchesPageProps> = ({ onAddToCart, onViewDetails, onBack, onAddToCartWithVariants }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('הכל');

  const filteredProducts = useMemo(() => {
    return smartwatchProducts.filter(product => {
      if (selectedBrand !== 'הכל' && product.brand !== selectedBrand) {
        return false;
      }
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      return true;
    });
  }, [searchTerm, selectedBrand]);

  return (
    <div>
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="text-primary hover:underline">
          &larr; חזרה לדף הראשי
        </button>
        <h1 className="text-4xl font-bold text-primary mr-auto">שעונים חכמים</h1>
      </div>
      
      <div className="flex justify-center flex-wrap gap-3 mb-8 bg-white p-4 rounded-lg shadow-sm border">
        {allBrands.map(brand => (
          <button
            key={brand}
            onClick={() => setSelectedBrand(brand)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ease-in-out transform hover:scale-105
              ${selectedBrand === brand
                ? 'bg-primary text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }
            `}
          >
            {brand}
          </button>
        ))}
      </div>

      <div className="relative mb-8">
        <input
          type="text"
          placeholder="חיפוש שעון..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 pl-4 pr-10 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <div className="absolute inset-y-0 left-0 flex items-center justify-center w-12 text-gray-500">
          <SearchIcon className="w-5 h-5" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
              onAddToCartWithVariants={onAddToCartWithVariants}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg py-16">
            <h3 className="text-xl font-semibold">לא נמצאו מוצרים</h3>
            <p>נסו לשנות את אפשרויות הסינון.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartwatchesPage;