import React, { useMemo } from 'react';
import { phoneProducts, smartwatchProducts } from '../constants';
import type { PhoneProduct } from '../types';
import ProductCard from '../components/ProductCard';

interface BrandProductsPageProps {
  brandName: string | null;
  onAddToCart: (product: PhoneProduct) => void;
  onViewDetails: (id: number) => void;
  onBack: () => void;
  onAddToCartWithVariants: (id: number) => void;
}

const allBrandedProducts: PhoneProduct[] = [...phoneProducts, ...smartwatchProducts];

const BrandProductsPage: React.FC<BrandProductsPageProps> = ({ 
  brandName, 
  onAddToCart, 
  onViewDetails, 
  onBack, 
  onAddToCartWithVariants 
}) => {

  const filteredProducts = useMemo(() => {
    if (!brandName) {
      return [];
    }
    return allBrandedProducts.filter(product => product.brand === brandName);
  }, [brandName]);

  return (
    <div>
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="text-primary hover:underline">
          &larr; חזרה לדף הראשי
        </button>
        <h1 className="text-4xl font-bold text-primary mr-auto">
          מוצרים של <span className="text-accent">{brandName}</span>
        </h1>
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
            <h3 className="text-xl font-semibold">לא נמצאו מוצרים למותג זה</h3>
            <p>נראה שאין לנו כרגע מוצרים של {brandName}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandProductsPage;