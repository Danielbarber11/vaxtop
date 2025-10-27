import React from 'react';
import type { Product, PhoneProduct } from '../types';

interface ProductCardProps {
  product: Product | PhoneProduct;
  onAddToCart: (product: Product | PhoneProduct) => void;
  onViewDetails?: (id: number) => void;
  onAddToCartWithVariants?: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails, onAddToCartWithVariants }) => {
  const isPhoneProduct = 'brand' in product;
  const hasVariants = isPhoneProduct && (
    (product as PhoneProduct).colors?.length > 1 || 
    (product as PhoneProduct).storageOptions?.length > 1 ||
    ((product as PhoneProduct).variants && (product as PhoneProduct).variants.length > 0)
  );

  const handleAddToCartClick = () => {
    if (hasVariants && onAddToCartWithVariants) {
      onAddToCartWithVariants(product.id);
    } else {
      onAddToCart(product);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden cursor-pointer flex justify-center items-center bg-white p-2" onClick={() => onViewDetails && onViewDetails(product.id)}>
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-md font-semibold text-gray-800 flex-grow mb-2 h-12 leading-tight">{product.name}</h3>
        
        <div className="mt-auto pt-2">
          <p className="text-lg font-bold text-primary text-right mb-3">
            {/* FIX: Check if 'variants' property exists on product before accessing it */}
            {'variants' in product && product.variants && product.variants.length > 0 ? 'החל מ-' : ''}{product.price}
          </p>
          <div className="flex gap-2">
             {onViewDetails && (
              <button 
                onClick={() => onViewDetails(product.id)}
                className="w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors"
              >
                פרטים
              </button>
            )}
            <button 
              onClick={handleAddToCartClick}
              className="w-full bg-primary text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-accent hover:text-primary transition-colors"
            >
              הוסף לעגלה
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);