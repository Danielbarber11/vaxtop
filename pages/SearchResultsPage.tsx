import React, { useMemo } from 'react';
import type { Product, PhoneProduct } from '../types';
import ProductCard from '../components/ProductCard';

interface SearchResultsPageProps {
  query: string;
  products: (Product | PhoneProduct)[];
  onAddToCart: (product: Product | PhoneProduct) => void;
  onViewDetails: (id: number) => void;
  onBack: () => void;
  onAddToCartWithVariants: (id: number) => void;
}

const SearchResultsPage: React.FC<SearchResultsPageProps> = ({
  query,
  products,
  onAddToCart,
  onViewDetails,
  onBack,
  onAddToCartWithVariants,
}) => {
  const filteredProducts = useMemo(() => {
    if (!query) {
      return [];
    }
    const lowercasedQuery = query.toLowerCase();
    return products.filter(product =>
      product.name.toLowerCase().includes(lowercasedQuery) ||
      ('brand' in product && (product as PhoneProduct).brand.toLowerCase().includes(lowercasedQuery))
    );
  }, [query, products]);

  return (
    <div>
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="text-primary hover:underline">
          &larr; חזרה לדף הראשי
        </button>
        <h1 className="text-3xl font-bold text-primary mr-auto">
          תוצאות חיפוש עבור: <span className="text-accent">"{query}"</span>
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
            <h3 className="text-xl font-semibold">לא נמצאו מוצרים תואמים</h3>
            <p>נסו לחפש מונח אחר.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;