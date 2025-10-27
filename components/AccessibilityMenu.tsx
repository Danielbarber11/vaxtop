import React, { useState, useEffect } from 'react';

// Icons
const AccessibilityIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
    </svg>
);
const ContrastIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2V4a8 8 0 000 16z"></path></svg>);
const GrayscaleIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 22a10 10 0 110-20 10 10 0 010 20zm-7.92-3.21a8 8 0 0011.84 0l-1.92-1.92a5 5 0 01-8 0l-1.92 1.92z"></path></svg>);
const HighlightIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M17.854 8.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L10.5 14.793l6.646-6.647a.5.5 0 01.708 0zM6 3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3zm12 1H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2z"></path></svg>);
const HideImageIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 1.5l21 21m-1.707-3.207A10.96 10.96 0 0112 20C5.5 20 1 14 1 12c.988-3.187 3.488-6.075 6.793-7.707M11 5.05A8.948 8.948 0 0112 4c6.5 0 11 6 11 8 0 .86-.184 1.692-.524 2.47l-1.12-1.12A3.99 3.99 0 0017.5 12a4.5 4.5 0 00-7.868-3.368L8.55 7.55A6.5 6.5 0 0111 5.05zm7.72 12.19l-1.12-1.12A8.937 8.937 0 0112 18c-3.11 0-5.89-1.5-8-4a8.98 8.98 0 012.38-3.03l-1.12-1.12A10.99 10.99 0 001 12c0 2 .5 4 1.5 5.25a10.99 10.99 0 003.22 3.49zM12 9a3 3 0 013 3c0 .5-.13.96-.34 1.37l-3.03-3.03A2.988 2.988 0 0112 9z"></path></svg>);
const InfoIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v-4h2v4h-2zm0-6V7h2v2h-2z"></path></svg>);
const ResetIcon: React.FC<{ className?: string }> = ({ className }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></svg>);

interface AccessibilityMenuProps {
  onStatementClick: () => void;
}

const AccessibilityMenu: React.FC<AccessibilityMenuProps> = ({ onStatementClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // State for each setting with localStorage persistence
  const [fontSize, setFontSize] = useState(() => parseFloat(localStorage.getItem('fontSize') || '1'));
  const [isHighContrast, setIsHighContrast] = useState(() => localStorage.getItem('isHighContrast') === 'true');
  const [isGrayscale, setIsGrayscale] = useState(() => localStorage.getItem('isGrayscale') === 'true');
  const [highlightLinks, setHighlightLinks] = useState(() => localStorage.getItem('highlightLinks') === 'true');
  const [hideImages, setHideImages] = useState(() => localStorage.getItem('hideImages') === 'true');

  // Apply settings and update localStorage on change
  useEffect(() => {
    document.documentElement.style.setProperty('--font-size-multiplier', String(fontSize));
    localStorage.setItem('fontSize', String(fontSize));
  }, [fontSize]);

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', isHighContrast);
    localStorage.setItem('isHighContrast', String(isHighContrast));
  }, [isHighContrast]);

  useEffect(() => {
    document.documentElement.classList.toggle('grayscale', isGrayscale);
    localStorage.setItem('isGrayscale', String(isGrayscale));
  }, [isGrayscale]);

  useEffect(() => {
    document.documentElement.classList.toggle('highlight-links', highlightLinks);
    localStorage.setItem('highlightLinks', String(highlightLinks));
  }, [highlightLinks]);

  useEffect(() => {
    document.documentElement.classList.toggle('hide-images', hideImages);
    localStorage.setItem('hideImages', String(hideImages));
  }, [hideImages]);
  
  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 0.1, 1.5));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 0.1, 0.8));
  
  const resetSettings = () => {
    setFontSize(1);
    setIsHighContrast(false);
    setIsGrayscale(false);
    setHighlightLinks(false);
    setHideImages(false);
  }

  const AccessibilityOption: React.FC<{icon: React.ReactNode, label: string, children: React.ReactNode}> = ({ icon, label, children }) => (
    <div className="flex justify-between items-center p-2 rounded-md hover:bg-gray-100">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-sm font-medium text-gray-700">{label}</span>
        </div>
        <div>{children}</div>
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-3 mb-2 w-64 border border-gray-200">
          <h3 className="font-bold mb-2 text-center text-gray-800">תפריט נגישות</h3>
          <div className="space-y-1">

            <AccessibilityOption icon={<svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor"><path d="M9.984 6h4.032v12H9.984V6zM6 9h4.032v9H6V9zm12 3h-4.032v6H18v-6z"/></svg>} label="גודל גופן">
                <div className="flex gap-1">
                    <button onClick={decreaseFontSize} aria-label="הקטן גופן" className="font-bold border rounded px-2 text-lg w-8 h-8 flex items-center justify-center bg-gray-50 hover:bg-gray-200">-</button>
                    <button onClick={increaseFontSize} aria-label="הגדל גופן" className="font-bold border rounded px-2 text-lg w-8 h-8 flex items-center justify-center bg-gray-50 hover:bg-gray-200">+</button>
                </div>
            </AccessibilityOption>

            <AccessibilityOption icon={<ContrastIcon className="w-5 h-5 text-gray-600"/>} label="ניגודיות גבוהה">
              <button onClick={() => setIsHighContrast(!isHighContrast)} aria-pressed={isHighContrast} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isHighContrast ? 'bg-blue-600' : 'bg-gray-300'}`}>
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isHighContrast ? 'translate-x-6' : 'translate-x-1'}`}/>
              </button>
            </AccessibilityOption>

            <AccessibilityOption icon={<GrayscaleIcon className="w-5 h-5 text-gray-600"/>} label="גווני אפור">
              <button onClick={() => setIsGrayscale(!isGrayscale)} aria-pressed={isGrayscale} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isGrayscale ? 'bg-blue-600' : 'bg-gray-300'}`}>
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isGrayscale ? 'translate-x-6' : 'translate-x-1'}`}/>
              </button>
            </AccessibilityOption>

            <AccessibilityOption icon={<HighlightIcon className="w-5 h-5 text-gray-600"/>} label="הדגשת קישורים">
              <button onClick={() => setHighlightLinks(!highlightLinks)} aria-pressed={highlightLinks} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${highlightLinks ? 'bg-blue-600' : 'bg-gray-300'}`}>
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${highlightLinks ? 'translate-x-6' : 'translate-x-1'}`}/>
              </button>
            </AccessibilityOption>

            <AccessibilityOption icon={<HideImageIcon className="w-5 h-5 text-gray-600"/>} label="הסתרת תמונות">
              <button onClick={() => setHideImages(!hideImages)} aria-pressed={hideImages} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${hideImages ? 'bg-blue-600' : 'bg-gray-300'}`}>
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${hideImages ? 'translate-x-6' : 'translate-x-1'}`}/>
              </button>
            </AccessibilityOption>

            <div className="pt-2 mt-2 border-t">
              <button onClick={onStatementClick} className="w-full flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 text-sm font-medium text-gray-700">
                <InfoIcon className="w-5 h-5 text-gray-600"/> הצהרת נגישות
              </button>
              <button onClick={resetSettings} className="w-full flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 text-sm font-medium text-gray-700">
                <ResetIcon className="w-5 h-5 text-gray-600"/> אפס הגדרות
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
        aria-label="פתח תפריט נגישות"
        aria-expanded={isOpen}
      >
        <AccessibilityIcon className="w-8 h-8" />
      </button>
    </div>
  );
};

export default AccessibilityMenu;