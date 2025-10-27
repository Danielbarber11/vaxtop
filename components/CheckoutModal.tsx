import React, { useState } from 'react';
import type { CartItem } from '../types';
import { ApplePayIcon, GooglePayIcon, PayPalIcon, SamsungPayIcon } from './PaymentIcons';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onSuccessfulPayment: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, items, onSuccessfulPayment }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState(false);

  const subtotal = items.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[₪,]/g, ''));
    return acc + (isNaN(price) ? 0 : price);
  }, 0);

  const handlePaymentSimulation = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        onSuccessfulPayment();
        setIsSuccess(false);
      }, 2000);
    }, 2000);
  };

  const handleCardPaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    if (!form.checkValidity()) {
        setFormErrors(true);
        return;
    }
    setFormErrors(false);
    handlePaymentSimulation();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4" aria-modal="true" role="dialog">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md">
        <header className="p-4 border-b flex justify-between items-center">
          <h2 className="font-bold text-lg text-gray-800">{isSuccess ? 'תשלום הושלם בהצלחה' : 'תשלום'}</h2>
          {!isSuccess && !isProcessing && <button onClick={onClose} className="text-2xl font-light text-gray-600 hover:text-black">&times;</button>}
        </header>
        
        <main className="p-6">
          {isSuccess ? (
            <div className="text-center flex flex-col items-center gap-4 py-8">
              <svg className="w-20 h-20 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xl font-semibold text-gray-700">תודה על רכישתך!</p>
              <p className="text-gray-500">העגלה שלך התרוקנה.</p>
            </div>
          ) : isProcessing ? (
            <div className="text-center flex flex-col items-center gap-4 py-8">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
              <p className="text-lg font-semibold text-gray-700">מעבד תשלום...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button onClick={handlePaymentSimulation} aria-label="שלם עם Apple Pay" className="w-full bg-black text-white h-12 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
                  <ApplePayIcon />
                </button>
                <button onClick={handlePaymentSimulation} aria-label="שלם עם Google Pay" className="w-full bg-white border border-gray-300 h-12 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <GooglePayIcon />
                </button>
                 <button onClick={handlePaymentSimulation} aria-label="שלם עם Samsung Pay" className="w-full bg-[#1428a0] h-12 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
                    <SamsungPayIcon />
                </button>
                <button onClick={handlePaymentSimulation} aria-label="שלם עם PayPal" className="w-full bg-[#ffc439] h-12 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
                    <PayPalIcon />
                </button>
              </div>

              <div className="flex items-center my-6">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="px-4 text-gray-500 text-sm">או השתמש בכרטיס אשראי</span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>

              <form onSubmit={handleCardPaymentSubmit} noValidate>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">שם בעל הכרטיס</label>
                    <input type="text" id="cardName" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">מספר כרטיס</label>
                    <input type="text" id="cardNumber" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength={19} placeholder="xxxx xxxx xxxx xxxx" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">תוקף</label>
                      <input type="text" id="expiryDate" placeholder="MM / YY" required pattern="(0[1-9]|1[0-2])\s*\/\s*([0-9]{2})" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                      <input type="text" id="cvv" inputMode="numeric" pattern="\d{3,4}" maxLength={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                  </div>
                </div>
                {formErrors && <p className="text-red-500 text-sm mt-2">אנא מלא את כל השדות כראוי.</p>}
                <div className="mt-6">
                  <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                    שלם ₪{subtotal.toLocaleString()}
                  </button>
                </div>
              </form>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default CheckoutModal;