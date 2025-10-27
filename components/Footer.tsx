
import React from 'react';

interface FooterProps {
  onPolicyClick: (policy: 'cancellation' | 'privacy' | 'shipping' | 'terms') => void;
}


const Footer: React.FC<FooterProps> = ({ onPolicyClick }) => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About & Newsletter */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-accent">vaxtop</h3>
            <p className="text-gray-300 mb-4">
              חשוב לנו שתישארו מעודכנים! מבצעים, קופונים ומתנות מפנקות, הרשמו לניוזלטר שלנו ונהיה בקשר.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="כתובת המייל שלכם"
                className="w-full rounded-r-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent hover:opacity-90 text-primary font-bold py-2 px-4 rounded-l-md">
                הרשמה
              </button>
            </form>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">מידע ותנאי שירות</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => onPolicyClick('cancellation')} className="hover:text-accent text-right text-sm">ביטול עסקה</button></li>
              <li><button onClick={() => onPolicyClick('privacy')} className="hover:text-accent text-right text-sm">מדיניות פרטיות</button></li>
              <li><button onClick={() => onPolicyClick('shipping')} className="hover:text-accent text-right text-sm">מדיניות הובלה</button></li>
              <li><a href="#" className="hover:text-accent text-sm">רשימת סניפים</a></li>
              <li><button onClick={() => onPolicyClick('terms')} className="hover:text-accent text-right text-sm">תקנון</button></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold text-lg mb-4">שירות לקוחות</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-accent text-sm">סטטוס הזמנה</a></li>
              <li><a href="#" className="hover:text-accent text-sm">החזרת מוצר</a></li>
              <li><a href="#" className="hover:text-accent text-sm">שירות ותמיכה</a></li>
              <li><a href="#" className="hover:text-accent text-sm">פניה בכל נושא</a></li>
            </ul>
          </div>
          
          {/* About Us */}
          <div>
            <h4 className="font-bold text-lg mb-4">אודות</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-accent text-sm">דרושים</a></li>
              <li><a href="#" className="hover:text-accent text-sm">החשבון שלי</a></li>
              <li><a href="#" className="hover:text-accent text-sm">כל המבצעים</a></li>
              <li><a href="#" className="hover:text-accent text-sm">תוכנית שותפים</a></li>
            </ul>
          </div>

        </div>
        <div className="mt-12 border-t border-gray-600 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} vaxtop. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;