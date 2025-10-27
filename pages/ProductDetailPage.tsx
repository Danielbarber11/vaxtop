

import React, { useState, useEffect, useMemo } from 'react';
import type { PhoneProduct, StorageOption, Variant } from '../types';
import Chatbot from '../components/Chatbot';
import { smartwatchProducts } from '../constants';


interface ProductDetailPageProps {
  product: PhoneProduct;
  onAddToCart: (product: PhoneProduct & { selectedColor?: string; selectedStorage?: string, selectedSize?: string, selectedConnectivity?: string }) => void;
  onBuyNow: (product: PhoneProduct & { selectedColor?: string; selectedStorage?: string, selectedSize?: string, selectedConnectivity?: string }) => void;
  onBack: () => void;
  navigationOptions?: { validateOnLoad?: boolean };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, onAddToCart, onBuyNow, onBack, navigationOptions }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  
  const availableSizes = useMemo(() => product.variants ? [...new Set(product.variants.map(v => v.size))] : [], [product.variants]);
  const availableConnectivities = useMemo(() => product.variants ? [...new Set(product.variants.map(v => v.connectivity))] : [], [product.variants]);
  
  const [selectedSize, setSelectedSize] = useState<string | null>(() => availableSizes[0] || null);
  const [selectedConnectivity, setSelectedConnectivity] = useState<string | null>(() => availableConnectivities[0] || null);

  const [selectedStorage, setSelectedStorage] = useState<StorageOption | null>(() => {
    return product.storageOptions.find(opt => opt.inStock !== false) || null;
  });

  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{ color?: string; storage?: string; variant?: string }>({});
  const [autoAddToCart, setAutoAddToCart] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState(product.imageUrl);
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  const [couponInput, setCouponInput] = useState("");
  const [couponError, setCouponError] = useState("");


  // Reset state when product changes
  useEffect(() => {
    setCurrentImageUrl(product.imageUrl);
    setSelectedColor(null);
    setSelectedStorage(product.storageOptions.find(opt => opt.inStock !== false) || null);
    
    const defaultSizes = product.variants ? [...new Set(product.variants.map(v => v.size))] : [];
    const defaultConnectivities = product.variants ? [...new Set(product.variants.map(v => v.connectivity))] : [];
    setSelectedSize(defaultSizes[0] || null);
    setSelectedConnectivity(defaultConnectivities[0] || null);

    setValidationErrors({});
    setAutoAddToCart(false);
  }, [product]);

  // Run validation on initial mount if navigated from "Add to Cart" button
  useEffect(() => {
    if (navigationOptions?.validateOnLoad) {
      const errors: { color?: string; storage?: string, variant?: string } = {};
      const requiresColor = product.colors && product.colors.length > 1;
      
      if (requiresColor && !selectedColor) {
        errors.color = 'לא בחרת צבע';
      }
      
      if (Object.keys(errors).length > 0) {
        setValidationErrors(errors);
        setAutoAddToCart(true); // Enable auto-add mode
      } else {
        // If there are no options to select, add to cart immediately
        handleAddToCartClick();
      }
    }
  }, [navigationOptions, product]); // Depend on product as well

  const selectedVariant = useMemo(() => {
    if (!product.variants || !selectedSize || !selectedConnectivity) return null;
    return product.variants.find(v => v.size === selectedSize && v.connectivity === selectedConnectivity) || null;
  }, [product.variants, selectedSize, selectedConnectivity]);


  // Automatically add to cart once all selections are made
  useEffect(() => {
    if (autoAddToCart) {
      const colorSelected = !(product.colors && product.colors.length > 1) || !!selectedColor;
      const storageSelected = !(product.storageOptions && product.storageOptions.length > 0) || !!selectedStorage;
      const variantSelected = !(product.variants && product.variants.length > 0) || !!selectedVariant;
      
      if (colorSelected && storageSelected && variantSelected) {
        handleAddToCartClick();
        setAutoAddToCart(false); // Reset flag
      }
    }
  }, [selectedColor, selectedStorage, selectedVariant, autoAddToCart, product]);

  const basePrice = parseFloat(product.price.replace(/[₪,]/g, ''));
  const currentPrice = selectedVariant 
    ? selectedVariant.price
    : selectedStorage 
      ? basePrice + selectedStorage.priceModifier 
      : basePrice;

  const validateSelections = () => {
    const errors: { color?: string; storage?: string, variant?: string } = {};

    if (product.colors && product.colors.length > 1 && !selectedColor) {
      errors.color = 'לא בחרת צבע';
    }
    if (product.storageOptions && product.storageOptions.length > 0 && !selectedStorage) {
      errors.storage = 'לא בחרת כמות אחסון';
    }
    if (product.variants && product.variants.length > 0 && !selectedVariant) {
        errors.variant = 'השילוב שנבחר אינו זמין. אנא בחר/י גודל וקישוריות.';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const getProductToAdd = () => ({
    ...product,
    price: `₪${currentPrice.toLocaleString()}`,
    selectedColor: selectedColor || undefined,
    selectedStorage: selectedStorage?.size || undefined,
    selectedSize: selectedSize || undefined,
    selectedConnectivity: selectedConnectivity || undefined,
  });


  const handleAddToCartClick = () => {
    if (validateSelections()) {
      onAddToCart(getProductToAdd());
    }
  };

  const handleBuyNowClick = () => {
    if (validateSelections()) {
      onBuyNow(getProductToAdd());
    }
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    if (validationErrors.color) {
      setValidationErrors(prev => ({ ...prev, color: undefined }));
    }

    let newImageUrl = product.imageUrl; // Default to the original image

    if (product.id === 101) { // Apple iPhone 16 Pro
      switch (color) {
        case 'טיטניום טבעי':
          newImageUrl = 'https://img.ksp.co.il/item/333432/b_1.jpg?v=1726475201';
          break;
        case 'טיטניום לבן':
          newImageUrl = 'https://img.ksp.co.il/item/333439/b_1.jpg?v=1726476143';
          break;
      }
    } else if (product.id === 102) { // Samsung Galaxy S25 Ultra
      switch (color) {
        case 'טיטניום שחור':
          newImageUrl = 'https://img.ksp.co.il/item/358716/b_11.jpg?v=1737298527';
          break;
        case 'טיטניום לבן':
          newImageUrl = 'https://img.ksp.co.il/item/358763/b_1.jpg?v=1737361422';
          break;
        case 'טיטניום כחול':
          newImageUrl = 'https://img.ksp.co.il/item/358746/b_21.jpg?v=1737357753';
          break;
        case 'טיטניום אפור':
          newImageUrl = 'https://img.ksp.co.il/item/358709/b_1.jpg?v=1737297502';
          break;
      }
    } else if (product.id === 106) { // Apple iPhone 15
        switch (color) {
            case 'שחור':
                newImageUrl = 'https://img.ksp.co.il/item/277502/b_1.jpg?v=1694611601';
                break;
            case 'כחול':
                newImageUrl = 'https://img.ksp.co.il/item/277494/b_1.jpg?v=1694610830';
                break;
            case 'ירוק':
                newImageUrl = 'https://img.ksp.co.il/item/277490/b_1.jpg?v=1694611899';
                break;
            case 'ורוד':
                newImageUrl = 'https://img.ksp.co.il/item/277482/b_1.jpg?v=1694611293';
                break;
        }
    } else if (product.id === 109) { // Samsung Galaxy Z Fold 7
      switch (color) {
        case 'כחול':
          newImageUrl = 'https://img.ksp.co.il/item/395513/b_9.jpg?v=1751886680';
          break;
        case 'מנטה':
          newImageUrl = 'https://img.ksp.co.il/item/401324/b_7.jpg?v=1754223527';
          break;
        case 'כסף':
          newImageUrl = 'https://img.ksp.co.il/item/395516/b_9.jpg?v=1751887078';
          break;
        case 'שחור':
          newImageUrl = 'https://img.ksp.co.il/item/395515/b_9.jpg?v=1751886996';
          break;
      }
    } else if (product.id === 110) { // Samsung Galaxy S25
      switch (color) {
        case 'כחול':
          newImageUrl = 'https://img.ksp.co.il/item/358621/b_3.jpg?v=1737280413';
          break;
        case 'ירוק':
          newImageUrl = 'https://img.ksp.co.il/item/358624/b_8.jpg?v=1737280749';
          break;
        case 'כסוף':
          newImageUrl = 'https://img.ksp.co.il/item/358626/b_6.jpg?v=1737281325';
          break;
        case 'תכלת':
          newImageUrl = 'https://img.ksp.co.il/item/358623/b_6.jpg?v=1737280512';
          break;
      }
    } else if (product.id === 111) { // Samsung Galaxy S25 Edge
      switch (color) {
        case 'שחור':
          newImageUrl = 'https://img.ksp.co.il/item/384315/b_1.jpg?v=1746703818';
          break;
        case 'כסוף':
          newImageUrl = 'https://img.ksp.co.il/item/384330/b_1.jpg?v=1746704812';
          break;
        case 'תכלת':
          newImageUrl = 'https://img.ksp.co.il/item/384328/b_1.jpg?v=1746704645';
          break;
      }
    } else if (product.id === 112) { // Apple iPhone 17
      switch (color) {
        case 'תכלת':
          newImageUrl = 'https://img.ksp.co.il/item/410164/b_1.jpg?v=1757507517';
          break;
        case 'ירוק':
          newImageUrl = 'https://img.ksp.co.il/item/410168/b_1.jpg?v=1757507677';
          break;
      }
    } else if (product.id === 113) { // Apple iPhone 17 Air
      switch (color) {
        case 'Space Black':
            newImageUrl = 'https://img.ksp.co.il/item/410693/b_1.jpg?v=1757596492';
            break;
        case 'כחול שמיים':
            newImageUrl = 'https://img.ksp.co.il/item/410697/b_1.jpg?v=1757596793';
            break;
        case 'זהב בהיר':
            newImageUrl = 'https://img.ksp.co.il/item/410696/b_1.jpg?v=1757596737';
            break;
        case 'לבן':
            newImageUrl = 'https://img.ksp.co.il/item/410695/b_1.jpg?v=1757596647';
            break;
      }
    } else if (product.id === 201) { // Samsung Galaxy Watch 8
      switch (color) {
        case 'לבן':
          newImageUrl = 'https://img.ksp.co.il/item/395555/b_6.jpg?v=1751894523';
          break;
        case 'שחור':
          newImageUrl = 'https://img.ksp.co.il/item/395544/b_6.jpg?v=1751892440';
          break;
      }
    }
    
    setCurrentImageUrl(newImageUrl);
  };

  const handleStorageSelect = (storage: StorageOption) => {
    if (storage.inStock !== false) {
      setSelectedStorage(storage);
      if (validationErrors.storage) {
        setValidationErrors(prev => ({ ...prev, storage: undefined }));
      }
    }
  };

  const colorNameToHex: { [key: string]: string } = {
    'שחור': '#1f2022',
    'ורוד': '#fdd8e1',
    'לבן': '#faf7f2',
    'תכלת': '#a7cde3',
    'ירוק': '#cce2d6',
    'טיטניום טבעי': '#8B8580',
    'טיטניום כחול': '#2E3A4B',
    'טיטניום לבן': '#F5F5F7',
    'טיטניום שחור': '#424245',
    'טיטניום אפור': '#8E8E8E',
    'טיטניום סגול': '#7E7B9A',
    'טיטניום צהוב': '#E0D8B0',
    'obsidian': '#1E2124',
    'porcelain': '#F9F6F1',
    'bay': '#7E868C',
    'שחור קוסמי': '#2C2C2C',
    'שחור מט': '#333333',
    'frost': '#E0E5E7',
    'indigo': '#4B0082',
    'lemongrass': '#D2D98D',
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
  
  const backButtonText = smartwatchProducts.some(p => p.id === product.id)
    ? 'חזרה לרשימת השעונים'
    : 'חזרה לרשימת הטלפונים';

  const handleCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponInput === '0101') {
        if (product.manufacturerUrl) {
            window.open(product.manufacturerUrl, '_blank', 'noopener,noreferrer');
        }
        setIsCouponModalOpen(false);
        setCouponInput('');
        setCouponError('');
    } else {
        setCouponError('קוד קופון לא חוקי.');
        setCouponInput('');
    }
  };

  const CouponModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[70] p-4" onClick={() => setIsCouponModalOpen(false)}>
        <div className="bg-white rounded-lg shadow-xl w-full max-w-sm p-6" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-bold mb-4 text-gray-800 text-center">הכנס קוד קופון</h3>
            <form onSubmit={handleCouponSubmit}>
                <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => {
                        setCouponInput(e.target.value);
                        if (couponError) setCouponError('');
                    }}
                    placeholder="הקוד הסודי..."
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent mb-2 text-center"
                    autoFocus
                />
                {couponError && <p className="text-red-500 text-sm text-center mb-4">{couponError}</p>}
                <div className="flex gap-3 mt-4">
                    <button type="button" onClick={() => setIsCouponModalOpen(false)} className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                        ביטול
                    </button>
                    <button type="submit" className="flex-1 bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent hover:text-primary transition-colors">
                        אישור
                    </button>
                </div>
            </form>
        </div>
    </div>
  );


  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
       {isCouponModalOpen && <CouponModal />}
      <button onClick={onBack} className="text-primary hover:underline mb-4">
        &larr; {backButtonText}
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-center h-96 md:h-[500px]">
          <img src={currentImageUrl} alt={product.name} className="max-w-full max-h-full object-contain transition-opacity duration-300" loading="eager" decoding="async" fetchPriority="high" />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-2 text-center text-gray-900">{product.name}</h1>
          <p className="text-gray-600 mb-6 text-center">{product.description}</p>
          
          {product.colors && product.colors.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold mb-2">צבע: <span className="font-normal">{selectedColor}</span></h3>
              <div className="flex gap-2">
                {product.colors.map(color => (
                  <button 
                    key={color} 
                    onClick={() => handleColorSelect(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-transform transform hover:scale-110 ${selectedColor === color ? 'border-accent ring-2 ring-offset-1 ring-accent' : 'border-gray-300'}`}
                    style={{ backgroundColor: getBackgroundColor(color) }}
                    aria-label={`בחר צבע ${color}`}
                  />
                ))}
              </div>
              {validationErrors.color && <p className="text-red-500 text-sm mt-2">{validationErrors.color}</p>}
            </div>
          )}
          
          {product.variants && product.variants.length > 0 && (
            <>
                <div className="mb-4">
                    <h3 className="font-semibold mb-2">גודל:</h3>
                    <div className="flex gap-2">
                        {availableSizes.map(size => (
                            <button 
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-4 py-2 rounded-lg border-2 transition-colors font-semibold
                                  ${selectedSize === size
                                    ? 'bg-primary text-white border-primary'
                                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                                  }
                                `}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="font-semibold mb-2">קישוריות:</h3>
                    <div className="flex gap-2">
                        {availableConnectivities.map(conn => (
                            <button 
                                key={conn}
                                onClick={() => setSelectedConnectivity(conn)}
                                className={`px-4 py-2 rounded-lg border-2 transition-colors font-semibold
                                    ${selectedConnectivity === conn
                                        ? 'bg-primary text-white border-primary'
                                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                                    }
                                `}
                            >
                                {conn}
                            </button>
                        ))}
                    </div>
                </div>
                {!selectedVariant && validationErrors.variant && <p className="text-red-500 text-sm -mt-4 mb-4">{validationErrors.variant}</p>}
            </>
          )}

          {product.storageOptions && product.storageOptions.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">אחסון:</h3>
              <div className="flex gap-2">
                {product.storageOptions.map(storage => (
                  <button 
                    key={storage.size}
                    onClick={() => handleStorageSelect(storage)}
                    disabled={storage.inStock === false}
                    className={`px-4 py-2 rounded-lg border-2 transition-colors font-semibold
                      ${storage.inStock === false
                          ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed line-through'
                          : selectedStorage?.size === storage.size
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                      }
                    `}
                  >
                    {storage.size}
                  </button>
                ))}
              </div>
              {validationErrors.storage && <p className="text-red-500 text-sm mt-2">{validationErrors.storage}</p>}
            </div>
          )}
          
          <p className="text-3xl font-bold text-primary mb-6">₪{currentPrice.toLocaleString()}</p>
          
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
                <button 
                    onClick={handleAddToCartClick}
                    className="flex-1 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-accent hover:text-primary transition-colors"
                >
                    הוספה לעגלה
                </button>
                <button 
                    onClick={handleBuyNowClick}
                    className="flex-1 bg-white border-2 border-primary text-primary font-bold py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                    קנייה מהירה
                </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
                <button 
                    onClick={() => setIsChatbotOpen(true)}
                    className="flex-1 bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
                >
                    שאל את הבוט
                </button>
                {product.manufacturerUrl && (
                    <button 
                        onClick={() => setIsCouponModalOpen(true)}
                        className="flex-1 bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                        קוד קופון
                    </button>
                )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold border-b pb-2 mb-2">תכונות עיקריות</h3>
            <ul className="space-y-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <li key={key} className="flex justify-between p-2 rounded hover:bg-gray-100">
                    <span className="font-semibold text-gray-600">{key}:</span>
                    <span className="text-gray-800 text-left">{value}</span>
                  </li>
                ))}
            </ul>
        </div>
      </div>
      
      {product.id === 102 && (
        <div className="my-10 space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                גלו עולם של אפשרויות עם Gemini AI
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                שילוב אפליקציות סמסונג עם Gemini פותח בפניכם יכולות חדשות ומרגשות, והופך כל פעולה לחכמה ואינטואיטיבית יותר.
              </p>
              <div className="max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
                <video
                  src="https://images.samsung.com/is/content/samsung/assets/il/smartphones/galaxy-s25-ultra/videos/galaxy-s25-ultra-features-highlights-galaxy-ai-a_v3.webm?imbypass=true"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  aria-label="הדגמת יכולות Galaxy AI במכשיר Samsung Galaxy S25 Ultra"
                />
              </div>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                      <video
                        src="https://images.samsung.com/il/smartphones/galaxy-s25-ultra/videos/galaxy-s25-ultra-features-audio-eraser.webm?imbypass=true"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        aria-label="הדגמת תכונת Audio Eraser"
                      />
                  </div>
                  <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-white">אולפן סאונד בקצות האצבעות</h3>
                      <p className="text-gray-300">
                       סננו רעשי רקע בלתי רצויים בסרטונים שלכם, והפכו אותם ראויים לשיתוף עם Audio Eraser. Galaxy AI מכוונת במדויק את השמע שלכם באמצעות התאמה של סוגי סאונד שונים כולל קולות, מוזיקה, רוח ועוד.
                      </p>
                  </div>
              </div>
            </div>
        </div>
      )}
      
      {product.featureSections && (
        <div className="my-10 space-y-8">
          {product.featureSections.map((section, index) => {
            if (!section.title && section.imageUrl) {
              // Render as a full-width banner image
              return (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                  <img src={section.imageUrl} alt="Feature highlight" className="w-full h-auto object-contain" />
                </div>
              );
            }
            // Render as the alternating text/media block
            return (
              <div key={index} className="bg-slate-900 rounded-lg p-8">
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`rounded-lg overflow-hidden shadow-lg ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                    {section.videoUrl ? (
                      <video
                        src={section.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        aria-label={`הדגמה של ${section.title}`}
                      />
                    ) : section.imageUrl ? (
                       <img src={section.imageUrl} alt={`הדגמה של ${section.title}`} className="w-full h-full object-cover" />
                    ) : null }
                  </div>
                  <div className={`space-y-3 ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                    <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                    <p className="text-gray-300" style={{ whiteSpace: 'pre-wrap' }}>{section.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {product.detailedSpecs && (
        <div className="mt-12 pt-8 border-t">
          <h2 className="text-3xl font-bold mb-6">מפרט טכני מלא</h2>
          {Object.entries(product.detailedSpecs).map(([section, details]) => (
            <div key={section} className="mt-6">
              <h3 className="text-xl font-semibold border-b pb-2 mb-3">{section}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {(details as string[]).map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {isChatbotOpen && (
        <Chatbot product={product} onClose={() => setIsChatbotOpen(false)} />
      )}
    </div>
  );
};

export default ProductDetailPage;
