import React from 'react';
import type { Product, PhoneProduct } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  title: string;
  products: (Product | PhoneProduct)[];
  onAddToCart: (product: Product | PhoneProduct) => void;
  onViewDetails?: (id: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, products, onAddToCart, onViewDetails }) => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-500">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onViewDetails={onViewDetails}/>
        ))}
      </div>
    </section>
  );
};

export default React.memo(ProductGrid);
