import React from 'react';
import type { Category } from '../types';

interface CategoryNavProps {
  categories: Category[];
  onCategoryClick: (path: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ categories, onCategoryClick }) => {
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, category: Category) => {
    if (category.path) {
      e.preventDefault();
      onCategoryClick(category.path);
    }
  };
  
  const categoriesWithImages = categories.filter(c => c.imageUrl);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-end overflow-x-auto whitespace-nowrap scrollbar-hide space-x-2 md:space-x-4">
          {categoriesWithImages.map((category) => (
            <button
              key={category.name}
              onClick={(e) => handleClick(e, category)}
              className="py-3 text-center transition-colors duration-200 group flex-shrink-0 focus:outline-none"
              aria-label={`קטגוריה: ${category.name}`}
            >
              <div className="flex flex-col items-center w-24">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-16 h-16 rounded-full object-contain mb-2 border-2 border-gray-200 group-hover:border-accent transition-all"
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-sm font-semibold text-gray-700 group-hover:text-accent">
                  {category.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;