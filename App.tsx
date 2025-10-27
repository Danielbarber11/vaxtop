
import React, { useState, Suspense, lazy, useMemo } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import ProductGrid from './components/ProductGrid';
import BrandShowcase from './components/BrandShowcase';
import Footer from './components/Footer';
import CategoryNav from './components/CategoryNav';
import Promotions from './components/Promotions';
import CartSidebar from './components/CartSidebar';
import { heroSlides, categories, popularProducts, electricalProducts, homeProducts, brands, promotions, phoneProducts, smartwatchProducts } from './constants';
import type { Product, PhoneProduct, CartItem } from './types';
import AccessibilityMenu from './components/AccessibilityMenu';

const PhonesPage = lazy(() => import('./pages/PhonesPage'));
const SmartwatchesPage = lazy(() => import('./pages/SmartwatchesPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const BrandProductsPage = lazy(() => import('./pages/BrandProductsPage'));
const CheckoutModal = lazy(() => import('./components/CheckoutModal'));
const AdminModal = lazy(() => import('./components/AdminModal'));
const LegalModal = lazy(() => import('./components/LegalModal'));
const SearchModal = lazy(() => import('./components/SearchModal'));
const SearchResultsPage = lazy(() => import('./pages/SearchResultsPage'));


type View = 'home' | 'phonesList' | 'productDetail' | 'smartwatchesList' | 'brandPage' | 'search';

const legalTexts = {
  terms: {
    title: 'תקנון האתר',
    content: `
      <h3 class="font-bold text-lg mb-2">1. כללי</h3>
      <p class="mb-4">ברוכים הבאים לאתר vaxtop. השימוש באתר ובכלל זה בתכנים הכלולים בו ובשירותים השונים הפועלים בו מעיד על הסכמתך לתנאים אלה, ולכן הנך מתבקש לקרוא אותם בקפידה. תקנון זה מהווה הסכם משפטי מחייב בינך לבין הנהלת האתר.</p>
      <h3 class="font-bold text-lg mb-2">2. קניין רוחני</h3>
      <p class="mb-4">כל זכויות הקניין הרוחני באתר, לרבות העיצוב, הקוד, התמונות והתכנים, הינן רכושו הבלעדי של האתר ואין לעשות בהם כל שימוש ללא קבלת אישור מראש ובכתב.</p>
      <h3 class="font-bold text-lg mb-2">3. אחריות</h3>
      <p class="mb-4">הנהלת האתר לא תהא אחראית לכל נזק ישיר או עקיף, כספי או אחר, שיגרם למשתמש כתוצאה מהשימוש ו/או ההסתמכות על המידע המופיע באתר. המוצרים באתר מוצגים בתום לב, ואין בהצגתם משום המלצה ו/או הבעת דעה מצד האתר לגבי אופיים של המוצרים, תכונותיהם, טיבם וכיו"ב.</p>
    `
  },
  privacy: {
    title: 'מדיניות פרטיות',
    content: `
      <h3 class="font-bold text-lg mb-2">1. איסוף מידע</h3>
      <p class="mb-4">אנו אוספים מידע כאשר אתם מבצעים הזמנה, נרשמים לניוזלטר שלנו או ממלאים טופס. המידע הנאסף כולל את שמכם, כתובת הדוא"ל, מספר הטלפונים ופרטי ההזמנה.</p>
      <h3 class="font-bold text-lg mb-2">2. שימוש במידע</h3>
      <p class="mb-4">כל המידע שאנו אוספים עשוי לשמש לאחת או יותר מהמטרות הבאות: התאמה אישית של חווית המשתמש שלכם, שיפור האתר שלנו, שיפור שירות הלקוחות שלנו, יצירת קשר עמכם בנוגע להזמנתכם או למבצעים.</p>
      <h3 class="font-bold text-lg mb-2">3. אבטחת מידע</h3>
      <p class="mb-4">אנו מיישמים מגוון אמצעי אבטחה כדי לשמור על בטיחות המידע האישי שלכם. איננו מוכרים, סוחרים או מעבירים בכל דרך אחרת לגורמי צד שלישי את המידע המזהה האישי שלכם.</p>
    `
  },
  cancellation: {
    title: 'מדיניות ביטול עסקה והחזרת מוצרים',
    content: `
      <p class="mb-4">בהתאם לחוק הגנת הצרכן, התשמ"א-1981, ניתן לבטל עסקה לרכישת מוצר בתוך 14 ימים מיום קבלת המוצר או מיום קבלת מסמך פרטי העסקה, לפי המאוחר מביניהם.</p>
      <p class="mb-4">הודעה על ביטול יש למסור בכתב באמצעות דואר אלקטרוני לשירות הלקוחות שלנו. במקרה של ביטול עקב פגם במוצר, ההחזרה תתבצע על חשבון החברה. במקרה של ביטול שלא עקב פגם, המוצר יוחזר על חשבון הלקוח באריזתו המקורית, כשהוא שלם וללא פגיעה, נזק או פגם כלשהו.</p>
    `
  },
  shipping: {
    title: 'מדיניות הובלה',
    content: `
      <p class="mb-4">אנו מציעים מספר אפשרויות משלוח לנוחיותכם: משלוח עד הבית, איסוף מנקודת חלוקה, ואיסוף עצמי מסניפי הרשת.</p>
      <p class="mb-4">זמני האספקה למשלוח עד הבית הם בדרך כלל בין 3-7 ימי עסקים. עלויות המשלוח יצוינו במפורש בעת תהליך הרכישה, לפני ביצוע התשלום.</p>
    `
  },
  accessibility: {
    title: 'הצהרת נגישות',
    content: `
      <h3 class="font-bold text-lg mb-2">כללי</h3>
      <p class="mb-4">vaxtop רואה חשיבות עליונה בהנגשת אתר האינטרנט שלה לאנשים עם מוגבלויות, על מנת לאפשר לכלל האוכלוסייה לגלוש באתר בקלות ובנוחות. האתר נבנה בהתאם להוראות הנגישות המופיעות ב-W3C's Web Content Accessibility Guidelines (WCAG) 2.1 ברמה AA.</p>
      <h3 class="font-bold text-lg mb-2">תכונות נגישות באתר</h3>
      <p class="mb-4">באתר זה מוטמע תפריט נגישות המאפשר למשתמשים להתאים את חווית הגלישה לצרכיהם. התפריט מאפשר, בין היתר, הגדלת והקטנת גופנים, מעבר למצב ניגודיות גבוהה, הדגשת קישורים ועוד.</p>
      <h3 class="font-bold text-lg mb-2">פנייה בנושאי נגישות</h3>
      <p class="mb-4">אנו ממשיכים במאמצים לשפר את נגישות האתר כחלק ממחויבותנו לאפשר שימוש בו עבור כלל האוכלוסייה, כולל אנשים עם מוגבלויות. אם נתקלתם בבעיית נגישות, נשמח לקבל משוב.</p>
    `
  }
};

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [navigationOptions, setNavigationOptions] = useState<{ validateOnLoad?: boolean }>({});
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState<CartItem[]>([]);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalModalContent, setLegalModalContent] = useState({ title: '', content: '' });
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


  const allProducts = useMemo(() => [...phoneProducts, ...smartwatchProducts, ...popularProducts, ...electricalProducts, ...homeProducts], []);

  const openLegalModal = (policy: keyof typeof legalTexts) => {
    setLegalModalContent(legalTexts[policy]);
    setIsLegalModalOpen(true);
  };

  const handleAddToCart = (product: (Product | PhoneProduct) & { selectedColor?: string; selectedStorage?: string; selectedSize?: string; selectedConnectivity?: string; }) => {
    const variantId = `${product.id}-${product.selectedColor || ''}-${product.selectedStorage || ''}-${product.selectedSize || ''}-${product.selectedConnectivity || ''}`;
    
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.cartId === variantId);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.cartId === variantId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const newCartItem: CartItem = {
          ...product,
          cartId: variantId,
          quantity: 1
        };
        return [...prevItems, newCartItem];
      }
    });
    
    setIsCartOpen(true);
  };

  const handleBuyNow = (product: (Product | PhoneProduct) & { selectedColor?: string; selectedStorage?: string; selectedSize?: string; selectedConnectivity?: string; }) => {
    const variantId = `${product.id}-${product.selectedColor || ''}-${product.selectedStorage || ''}-${product.selectedSize || ''}-${product.selectedConnectivity || ''}`;
    
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.cartId === variantId);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.cartId === variantId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const newCartItem: CartItem = {
          ...product,
          cartId: variantId,
          quantity: 1
        };
        return [...prevItems, newCartItem];
      }
    });

    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };
  
  const handleRemoveFromCart = (cartId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.cartId !== cartId));
  };

  const handleUpdateCartQuantity = (cartId: string, newQuantity: number) => {
    setCartItems(prevItems => {
      if (newQuantity <= 0) {
        return prevItems.filter(item => item.cartId !== cartId);
      }
      return prevItems.map(item =>
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };
  
  const navigateTo = (view: View, productId: number | null = null) => {
    setCurrentView(view);
    setSelectedProductId(productId);
    window.scrollTo(0, 0);
  };

  const handleNavigateAndValidate = (productId: number) => {
    setNavigationOptions({ validateOnLoad: true });
    navigateTo('productDetail', productId);
  };

  const handleViewDetails = (productId: number) => {
    setNavigationOptions({});
    navigateTo('productDetail', productId);
  };

  const handleHeroButtonClick = (productId: number) => {
    handleViewDetails(productId);
  };

  const handleBrandClick = (brandName: string) => {
    setSelectedBrand(brandName);
    navigateTo('brandPage');
  };

  const handleProceedToCheckout = () => {
    if (cartItems.length > 0) {
      setIsCartOpen(false);
      setIsCheckoutOpen(true);
    }
  };

  const handleSuccessfulPayment = () => {
    const purchased = cartItems.map(item => ({
      ...item,
      purchaseDate: new Date().toLocaleString('he-IL'),
    }));
    setPurchasedItems(prev => [...prev, ...purchased]);
    setCartItems([]);
    setIsCheckoutOpen(false);
  };

  const handleAdminCheck = (term: string) => {
    if (term === '0101') {
      setIsAdminModalOpen(true);
    }
  };

  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
    navigateTo('search');
  };
  
  const allDetailedProducts = [...phoneProducts, ...smartwatchProducts];
  const selectedProduct = selectedProductId 
    ? allDetailedProducts.find(p => p.id === selectedProductId) 
    : null;

  const renderContent = () => {
    switch (currentView) {
      case 'phonesList':
        return (
          <Suspense fallback={<div className="text-center p-10 font-semibold">טוען...</div>}>
            <PhonesPage 
              onAddToCart={handleAddToCart} 
              onViewDetails={handleViewDetails} 
              onBack={() => navigateTo('home')} 
              onAddToCartWithVariants={handleNavigateAndValidate} 
            />
          </Suspense>
        );
      case 'smartwatchesList':
        return (
          <Suspense fallback={<div className="text-center p-10 font-semibold">טוען...</div>}>
            <SmartwatchesPage
              onAddToCart={handleAddToCart}
              onViewDetails={handleViewDetails}
              onBack={() => navigateTo('home')}
              onAddToCartWithVariants={handleNavigateAndValidate}
            />
          </Suspense>
        );
      case 'brandPage':
        return (
            <Suspense fallback={<div className="text-center p-10 font-semibold">טוען...</div>}>
              <BrandProductsPage
                brandName={selectedBrand}
                onBack={() => navigateTo('home')}
                onViewDetails={handleViewDetails}
                onAddToCart={handleAddToCart}
                onAddToCartWithVariants={handleNavigateAndValidate}
              />
            </Suspense>
        );
      case 'search':
        return (
          <Suspense fallback={<div className="text-center p-10 font-semibold">טוען...</div>}>
            <SearchResultsPage
              query={searchQuery}
              products={allProducts}
              onBack={() => navigateTo('home')}
              onViewDetails={handleViewDetails}
              onAddToCart={handleAddToCart}
              onAddToCartWithVariants={handleNavigateAndValidate}
            />
          </Suspense>
        );
      case 'productDetail':
        const getBackView = (): View => {
          if (!selectedProduct) return 'home';
          if (smartwatchProducts.some(p => p.id === selectedProduct.id)) {
              return 'smartwatchesList';
          }
          return 'phonesList';
        };

        return (
           <Suspense fallback={<div className="text-center p-10 font-semibold">טוען...</div>}>
            {selectedProduct ? <ProductDetailPage 
                                  product={selectedProduct} 
                                  onAddToCart={handleAddToCart}
                                  onBuyNow={handleBuyNow} 
                                  onBack={() => navigateTo(getBackView())} 
                                  navigationOptions={navigationOptions}
                                /> : <div>מוצר לא נמצא</div>}
          </Suspense>
        );
      default:
        return (
          <>
            <HeroCarousel slides={heroSlides} onButtonClick={handleHeroButtonClick} />
            <Promotions promotions={promotions} />
            <ProductGrid title="מוצרים פופולריים מעולם צעצועים וילדים" products={popularProducts} onAddToCart={handleAddToCart} />
            <ProductGrid title="מוצרים פופולריים מעולם מוצרי חשמל" products={electricalProducts} onAddToCart={handleAddToCart} />
            <ProductGrid title="מוצרים פופולריים מעולם לבית" products={homeProducts} onAddToCart={handleAddToCart} />
            <BrandShowcase brands={brands} onBrandClick={handleBrandClick} />
          </>
        );
    }
  };

  return (
    <div className="bg-secondary min-h-screen" dir="rtl">
      <Header 
        onAdminCheck={handleAdminCheck}
        onSearchSubmit={handleSearchSubmit}
        onSearchIconClick={() => setIsSearchModalOpen(true)}
      />
      {currentView === 'home' && (
         <CategoryNav 
          categories={categories} 
          onCategoryClick={(path) => {
            if (path === 'phones') {
              navigateTo('phonesList');
            } else if (path === 'smartwatches') {
              navigateTo('smartwatchesList');
            }
          }} 
        />
      )}
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <Footer onPolicyClick={openLegalModal} />
      <AccessibilityMenu onStatementClick={() => openLegalModal('accessibility')} />
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={toggleCart} 
        items={cartItems} 
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onCheckout={handleProceedToCheckout}
      />
      <Suspense fallback={null}>
        <SearchModal
          isOpen={isSearchModalOpen}
          onClose={() => setIsSearchModalOpen(false)}
          products={allProducts}
          onViewDetails={(productId) => {
            navigateTo('productDetail', productId);
            setIsSearchModalOpen(false);
          }}
        />
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          items={cartItems}
          onSuccessfulPayment={handleSuccessfulPayment}
        />
        <AdminModal
          isOpen={isAdminModalOpen}
          onClose={() => setIsAdminModalOpen(false)}
          items={purchasedItems}
        />
        <LegalModal
          isOpen={isLegalModalOpen}
          onClose={() => setIsLegalModalOpen(false)}
          title={legalModalContent.title}
          content={legalModalContent.content}
        />
      </Suspense>
    </div>
  );
};

export default App;