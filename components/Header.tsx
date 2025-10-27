import React, { useState } from 'react';
import { SearchIcon, CartIcon } from './IconComponents';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onSearchTermChange: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick, onSearchTermChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearchTermChange(term);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Right Section: Logo */}
          <div className="flex items-center">
            <a href="#" className="text-3xl font-bold text-blue-600">
              ShopZone
            </a>
          </div>

          {/* Center Section: Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="חפשו מוצר או מספר קטלוגי..."
                className="w-full py-2 pl-4 pr-10 text-gray-700 bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="absolute inset-y-0 left-0 flex items-center justify-center w-12 text-gray-500 hover:text-blue-600">
                <SearchIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Left Section: Icons */}
          <div className="flex items-center space-x-6">
            <button onClick={onCartClick} className="text-gray-600 hover:text-blue-600 transition-colors">
                <div className="relative flex items-center gap-2">
                    <CartIcon className="w-7 h-7" />
                    <span className="hidden md:inline">עגלת קניות</span>
                    {cartCount > 0 && (
                      <span className="absolute top-0 right-[-10px] md:right-auto md:left-[-10px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);