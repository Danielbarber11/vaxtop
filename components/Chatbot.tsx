import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import type { PhoneProduct } from '../types';

interface ChatbotProps {
  product: PhoneProduct;
  onClose: () => void;
}

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ product, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      
      const productInfo = `
        Product Name: ${product.name}
        Brand: ${product.brand}
        Price: ${product.price}
        Description: ${product.description}
        Main Specifications: ${JSON.stringify(product.specs)}
        Water Resistance: ${product.waterResistance || 'Not specified'}
        Screen Size (Main): ${product.screenSizeInches ? `${product.screenSizeInches} inches` : 'Not specified'}
        Available Colors: ${product.colors.join(', ')}
        Storage Options: ${product.storageOptions.map(o => o.size).join(', ')}
        Full Technical Specifications: ${JSON.stringify(product.detailedSpecs, null, 2)}
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `User question: "${input}"`,
        config: {
          systemInstruction: `You are 'vaxtop Bot', a helpful and knowledgeable virtual assistant for an e-commerce store. Your goal is to answer questions about the "${product.name}".

First, use the specific information provided below as your primary source of truth. This is the official data for the model we sell.
--- OFFICIAL STORE DATA START ---
${productInfo}
--- OFFICIAL STORE DATA END ---

If the user's question cannot be answered from the "OFFICIAL STORE DATA", you may use your general knowledge about the "${product.name}" to provide a helpful answer. 
When you use your general knowledge, you MUST start your response with a phrase like "Based on general information about this model..." or "While our site doesn't list this detail...".

IMPORTANT RULES:
- Stay focused on the "${product.name}". If the user asks about anything else (other products, store policies, etc.), politely state that you can only provide information about this specific product.
- Do NOT provide any URLs, links, or suggestions to buy from other stores.
- Be helpful, friendly, and concise.`
        },
      });

      const botMessage: Message = { sender: 'bot', text: response.text };
      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error("Gemini API error:", error);
      const errorMessage: Message = { sender: 'bot', text: 'מצטער, אירעה שגיאה. אנא נסה שוב מאוחר יותר.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg h-[80vh] flex flex-col">
        <header className="p-4 border-b flex justify-between items-center bg-gray-50 rounded-t-lg">
          <div className="w-6" aria-hidden="true"></div>
          <h2 className="font-bold text-lg text-gray-800">הבוט אייבן</h2>
          <button onClick={onClose} className="text-2xl font-light text-black w-6">&times;</button>
        </header>
        
        <main className="flex-1 p-4 overflow-y-auto bg-gray-100">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs md:max-w-md p-3 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  <p style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                  <div className="p-3 rounded-lg bg-gray-200 text-gray-500">
                      מקליד...
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </main>
        
        <footer className="p-4 border-t bg-white rounded-b-lg">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="כתוב את שאלתך כאן..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button onClick={handleSend} disabled={isLoading} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-300">
              שלח
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Chatbot;