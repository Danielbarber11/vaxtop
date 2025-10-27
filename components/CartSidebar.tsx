
import React from 'react';
import type { CartItem } from '../types';
import { TrashIcon } from './IconComponents';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (cartId: string, newQuantity: number) => void;
  onCheckout: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onRemoveItem, onUpdateQuantity, onCheckout }) => {
  const subtotal = items.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[₪,]/g, ''));
    return acc + (isNaN(price) ? 0 : price * item.quantity);
  }, 0);

  const FREE_SHIPPING_THRESHOLD = 500;
  const remainingForFreeShipping = FREE_SHIPPING_THRESHOLD - subtotal;
  const shippingProgress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-heading"
      >
        <div className="flex flex-col h-full">
          <header className="p-4 border-b flex justify-between items-center bg-gray-50 rounded-t-lg">
            <h2 id="cart-heading" className="text-xl font-bold">עגלת קניות</h2>
            <button onClick={onClose} className="text-3xl font-light hover:text-red-600 transition-colors" aria-label="סגור עגלה">&times;</button>
          </header>
          
          <main className="flex-1 overflow-y-auto bg-secondary">
            {items.length === 0 ? (
              <div className="text-center text-gray-500 h-full flex flex-col items-center justify-center gap-4 p-4">
                 <svg className="w-24 h-24 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700">העגלה שלך ריקה</h3>
                <p className="text-sm max-w-xs">נראה שעדיין לא הוספת מוצרים. בוא נתחיל למלא אותה!</p>
                <button onClick={onClose} className="mt-4 bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-accent hover:text-primary transition-colors">
                    המשך בקניה
                </button>
              </div>
            ) : (
              <ul className="p-4 space-y-4">
                {items.map((item) => {
                  const itemPrice = parseFloat(item.price.replace(/[₪,]/g, ''));
                  const totalItemPrice = isNaN(itemPrice) ? 0 : itemPrice * item.quantity;
                  return (
                    <li key={item.cartId} className="flex items-start gap-4 p-3 bg-white rounded-lg shadow-sm border">
                      <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-contain rounded border flex-shrink-0" />
                      <div className="flex-grow space-y-1.5">
                        <h3 className="font-semibold text-sm leading-tight text-gray-800">{item.name}</h3>
                        <div className="text-xs text-gray-600 space-y-1">
                          {item.selectedColor && <span>צבע: {item.selectedColor}</span>}
                          {item.selectedStorage && <span>, אחסון: {item.selectedStorage}</span>}
                          {item.selectedSize && <span>, גודל: {item.selectedSize}</span>}
                          {item.selectedConnectivity && <span>, קישוריות: {item.selectedConnectivity}</span>}
                        </div>
                         <div className="flex items-center gap-2 text-sm">
                            <span className="font-semibold">כמות:</span>
                            <div className="flex items-center border rounded">
                                <button onClick={() => onUpdateQuantity(item.cartId, item.quantity - 1)} className="px-2 py-0.5 text-lg hover:bg-gray-100">-</button>
                                <span className="px-3 py-0.5 border-x">{item.quantity}</span>
                                <button onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)} className="px-2 py-0.5 text-lg hover:bg-gray-100">+</button>
                            </div>
                         </div>
                      </div>
                      <div className="flex flex-col items-end justify-between h-full">
                        <p className="text-primary font-bold text-md">₪{totalItemPrice.toLocaleString()}</p>
                        <button onClick={() => onRemoveItem(item.cartId)} className="text-gray-400 hover:text-red-600" aria-label={`הסר ${item.name}`}>
                            <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </main>
          
          {items.length > 0 && (
            <footer className="p-4 border-t bg-white space-y-3">
               <div>
                {remainingForFreeShipping > 0 ? (
                  <p className="text-center text-sm text-gray-700">
                    הוסיפו עוד <span className="font-bold">₪{remainingForFreeShipping.toLocaleString()}</span> וקבלו משלוח חינם!
                  </p>
                ) : (
                  <p className="text-center text-sm font-bold text-green-600">
                    🎉 זכאים למשלוח חינם! 🎉
                  </p>
                )}
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-green-500 h-2 rounded-full transition-all duration-500" style={{ width: `${shippingProgress}%` }}></div>
                </div>
              </div>

              <div className="flex justify-between items-center font-bold text-lg pt-2">
                <span>סך הכל:</span>
                <span>₪{subtotal.toLocaleString()}</span>
              </div>
              <button onClick={onCheckout} className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-accent hover:text-primary transition-colors disabled:bg-gray-300">
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