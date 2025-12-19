import { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';

export default function WhatsAppNoticeBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-3 flex-1">
            <MessageCircle className="h-5 w-5 flex-shrink-0 animate-pulse" />
            <p className="text-sm sm:text-base font-medium">
              <span className="hidden sm:inline">📱 Orders are currently accepted via <span className='text-yellow-400 font-bold'>WhatsApp</span> only. </span>
              <span className="sm:hidden">📱 WhatsApp orders only. </span>
              <a 
                href="https://wa.me/916230335333?text=Hello%20%F0%9F%91%8B%0AI%20would%20like%20to%20place%20an%20order%20%F0%9F%9B%8D%EF%B8%8F%0APlease%20assist%20%F0%9F%99%8F"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                Click here to order
              </a>
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors flex-shrink-0"
            aria-label="Close banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}