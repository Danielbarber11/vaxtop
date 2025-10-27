
import React from 'react';
import type { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onRemoveItem, onCheckout }) => {
  const subtotal = items.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[₪,]/g, ''));
    return acc + (isNaN(price) ? 0 : price);
  }, 0);

  const colorNameToHex: { [key: string]: string } = {
    'שחור': '#1f2022', 'ורוד': '#fdd8e1', 'לבן': '#faf7f2', 'תכלת': '#a7cde3', 'ירוק': '#cce2d6',
    'טיטניום טבעי': '#8B8580', 'טיטניום כחול': '#2E3A4B', 'טיטניום לבן': '#F5F5F7', 'טיטניום שחור': '#424245',
    'טיטניום אפור': '#8E8E8E', 'טיטניום סגול': '#7E7B9A', 'טיטניום צהוב': '#E0D8B0', 'obsidian': '#1E2124',
    'porcelain': '#F9F6F1', 'bay': '#7E868C', 'שחור קוסמי': '#2C2C2C', 'שחור מט': '#333333',
    'frost': '#E0E5E7', 'indigo': '#4B0082', 'lemongrass': '#D2D98D',
    'מנטה': '#A2E4B8',
    'כסף': '#E3E4E6',
    'כסוף': '#E3E4E6',
    'Space Black': '#343539',
    'כחול שמיים': '#87CEEB',
    'זהב בהיר': '#F0E68C',
  };

  const getBackgroundColor = (colorName: string): string => {
    const normalizedColorName = colorName.toLowerCase();
    if (colorNameToHex[colorName]) return colorNameToHex[colorName];
    if (colorNameToHex[normalizedColorName]) return colorNameToHex[normalizedColorName];
    for (const key in colorNameToHex) {
      if (normalizedColorName.includes(key.toLowerCase()) || key.toLowerCase().includes(normalizedColorName)) {
        return colorNameToHex[key];
      }
    }
    const genericColors: { [key: string]: string } = { 'כחול': '#3374A6' };
    if(genericColors[colorName]) return genericColors[colorName];
    return '#cccccc';
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div 
        className={`fixed top-0 left-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-heading"
      >
        <div className="flex flex-col h-full">
          <header className="p-4 border-b flex justify-between items-center bg-gray-50 rounded-t-lg">
            <h2 id="cart-heading" className="text-xl font-bold">עגלת קניות</h2>
            <button onClick={onClose} className="text-3xl font-light hover:text-red-600 transition-colors" aria-label="סגור עגלה">&times;</button>
          </header>
          
          <main className="flex-1 p-4 overflow-y-auto bg-gray-100">
            {items.length === 0 ? (
              <div className="text-center text-gray-500 mt-10 flex flex-col items-center gap-4">
                 <svg className="w-16 h-16 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-lg font-semibold">העגלה שלך ריקה</h3>
                <p className="text-sm max-w-xs">נראה שעדיין לא הוספת מוצרים. בוא נתחיל למלא אותה!</p>
                <button onClick={onClose} className="mt-4 bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                    המשך בקניה
                </button>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.cartId} className="flex items-start gap-4 p-2 bg-white rounded-lg shadow-sm">
                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-contain rounded border" />
                    <div className="flex-grow space-y-1">
                      <h3 className="font-semibold text-sm leading-tight">{item.name}</h3>
                       <div className="text-xs text-gray-600 space-y-1">
                          {item.selectedColor && (
                              <div className="flex items-center gap-1.5">
                                  <span>צבע:</span>
                                  <span
                                      title={item.selectedColor}
                                      className="w-4 h-4 rounded-full border border-gray-300"
                                      style={{ backgroundColor: getBackgroundColor(item.selectedColor) }}
                                  ></span>
                              </div>
                          )}
                          {item.selectedStorage && (
                              <div className="flex items-center gap-1.5">
                                  <span>אחסון:</span>
                                  <span className="font-medium text-gray-800">{item.selectedStorage}</span>
                              </div>
                          )}
                           {item.selectedSize && (
                              <div className="flex items-center gap-1.5">
                                  <span>גודל:</span>
                                  <span className="font-medium text-gray-800">{item.selectedSize}</span>
                              </div>
                          )}
                          {item.selectedConnectivity && (
                              <div className="flex items-center gap-1.5">
                                  <span>קישוריות:</span>
                                  <span className="font-medium text-gray-800">{item.selectedConnectivity}</span>
                              </div>
                          )}
                      </div>
                      <p className="text-gray-700 font-bold">{item.price}</p>
                    </div>
                    <button onClick={() => onRemoveItem(item.cartId)} className="text-red-500 hover:text-red-700 font-semibold text-xs py-1 px-2 rounded hover:bg-red-50 transition-colors self-center">הסר</button>
                  </li>
                ))}
              </ul>
            )}
          </main>
          
          {items.length > 0 && (
            <footer className="p-4 border-t bg-white">
              <div className="flex justify-between items-center font-bold text-lg mb-4">
                <span>סך הכל:</span>
                <span>₪{subtotal.toLocaleString()}</span>
              </div>
              <button onClick={onCheckout} className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300">
                מעבר לתשלום
              </button>
            </footer>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;