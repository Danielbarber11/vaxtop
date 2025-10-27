import React from 'react';
import type { CartItem } from '../types';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
}

const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose, items }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4" aria-modal="true" role="dialog">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl h-[80vh] flex flex-col">
        <header className="p-4 border-b flex justify-between items-center bg-gray-50">
          <h2 className="font-bold text-lg text-gray-800">Admin: פריטים שנרכשו</h2>
          <button onClick={onClose} className="text-2xl font-light text-gray-600 hover:text-black">&times;</button>
        </header>
        
        <main className="flex-1 p-6 overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">לא בוצעו רכישות עדיין.</p>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={`${item.cartId}-${index}`} className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg border">
                  <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-contain rounded" />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <div className="text-sm text-gray-600 flex flex-wrap gap-x-2">
                      {item.selectedColor && <span>צבע: {item.selectedColor}</span>}
                      {item.selectedStorage && <span>אחסון: {item.selectedStorage}</span>}
                      {item.selectedSize && <span>גודל: {item.selectedSize}</span>}
                      {item.selectedConnectivity && <span>קישוריות: {item.selectedConnectivity}</span>}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      תאריך רכישה: {item.purchaseDate}
                    </p>
                  </div>
                  <p className="font-bold text-gray-800">{item.price}</p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminModal;
