import React from 'react';
import { CartIcon } from './IconComponents';

interface FloatingCartButtonProps {
  cartCount: number;
  onCartClick: () => void;
}

const FloatingCartButton: React.FC<FloatingCartButtonProps> = ({ cartCount, onCartClick }) => {
  return (
    <button
      onClick={onCartClick}
      className="fixed bottom-6 left-6 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 z-50"
      aria-label={`עגלת קניות, ${cartCount} פריטים`}
    >
      <CartIcon className="w-8 h-8" />
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-blue-600">
          {cartCount}
        </span>
      )}
    </button>
  );
};

export default FloatingCartButton;