import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[70] p-4" aria-modal="true" role="dialog" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl h-[80vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <header className="p-4 border-b flex justify-between items-center bg-gray-50 sticky top-0">
          <h2 className="font-bold text-lg text-gray-800">{title}</h2>
          <button onClick={onClose} className="text-2xl font-light text-gray-600 hover:text-black">&times;</button>
        </header>
        <main className="flex-1 p-6 overflow-y-auto" dangerouslySetInnerHTML={{ __html: content }} />
         <footer className="p-3 border-t bg-gray-50 text-right">
            <button onClick={onClose} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors">
                סגור
            </button>
        </footer>
      </div>
    </div>
  );
};

export default LegalModal;
