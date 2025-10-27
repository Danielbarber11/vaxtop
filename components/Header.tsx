import React, { useState } from 'react';
import { SearchIcon } from './IconComponents';
import PayPalCartButton from './PayPalCartButton';

interface HeaderProps {
  onAdminCheck: (term: string) => void;
  onSearchSubmit: (term: string) => void;
  onSearchIconClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAdminCheck, onSearchSubmit, onSearchIconClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onAdminCheck(term);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearchSubmit(searchTerm.trim());
    }
  };

  return (
    <header className="bg-primary shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Right Section: Logo */}
          <div className="flex items-center">
            <a href="#" className="text-3xl font-bold text-accent">
              vaxtop
            </a>
          </div>

          {/* Center Section: Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 mx-8 items-center">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                placeholder="חפשו מוצר או מספר קטלוגי..."
                className="w-full py-2 pl-4 pr-10 text-white bg-white/10 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-gray-300"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button type="submit" className="absolute inset-y-0 left-0 flex items-center justify-center w-12 text-gray-300 hover:text-accent" aria-label="חפש">
                <SearchIcon className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Left Section: Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button onClick={onSearchIconClick} className="md:hidden p-2 text-gray-200 hover:text-accent transition-colors" aria-label="פתח חיפוש">
                <SearchIcon className="w-6 h-6" />
            </button>
            <div className="text-gray-200 hover:text-accent transition-colors">
                <PayPalCartButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);