import React, { useState, useMemo, useEffect, useRef } from 'react';
import type { Product, PhoneProduct } from '../types';
import { SearchIcon } from './IconComponents';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: (Product | PhoneProduct)[];
  onViewDetails: (id: number) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, products, onViewDetails }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Auto-focus the input when the modal opens
      setTimeout(() => inputRef.current?.focus(), 100);
      setSearchTerm(''); // Clear search on open
    }
  }, [isOpen]);

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) {
      return [];
    }
    const lowercasedTerm = searchTerm.toLowerCase();
    return products.filter(product =>
      product.name.toLowerCase().includes(lowercasedTerm) ||
      ('brand' in product && (product as PhoneProduct).brand.toLowerCase().includes(lowercasedTerm))
    ).slice(0, 20); // Limit results for performance
  }, [searchTerm, products]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-secondary z-[70] flex flex-col" role="dialog" aria-modal="true">
      <header className="flex-shrink-0 bg-white shadow-md p-3">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="חפשו מוצר, מותג..."
            className="w-full py-3 pl-4 pr-12 text-lg text-gray-900 bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <div className="absolute inset-y-0 left-0 flex items-center justify-center w-14 text-gray-500">
            <SearchIcon className="w-6 h-6" />
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        {searchTerm && filteredProducts.length > 0 && (
          <ul className="space-y-3">
            {filteredProducts.map(product => (
              <li key={product.id}>
                <button
                  onClick={() => onViewDetails(product.id)}
                  className="w-full text-right flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-all"
                >
                  <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-contain rounded-md bg-white border" />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-primary">{product.name}</h3>
                    <p className="text-md font-bold text-gray-800">{product.price}</p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
        {searchTerm && filteredProducts.length === 0 && (
          <div className="text-center text-gray-500 pt-16">
            <p className="text-lg">לא נמצאו תוצאות עבור "{searchTerm}"</p>
          </div>
        )}
        {!searchTerm && (
           <div className="text-center text-gray-400 pt-16">
            <p className="text-lg">התחילו להקליד כדי לחפש...</p>
          </div>
        )}
      </main>
      <footer className="p-3 text-center border-t bg-white">
        <button onClick={onClose} className="bg-gray-200 text-gray-800 px-8 py-2 rounded-full text-md font-semibold hover:bg-gray-300 transition-colors">
          סגירה
        </button>
      </footer>
    </div>
  );
};

export default SearchModal;
