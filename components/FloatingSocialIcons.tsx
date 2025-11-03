"use client";

import { MessageCircle, Facebook, Instagram, Phone } from 'lucide-react';

export default function FloatingSocialIcons() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "916230335333";
    const message = "Greetings! 👋 \nWhat would you like to order from Manali Mart?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://facebook.com/manalimart', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/manalimart', '_blank');
  };

  const handlePhoneClick = () => {
    const phoneNumber = "+91 62303 37333";
    window.open(`tel:${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed right-1 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out"
        aria-label="Contact on WhatsApp"
        title="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Contact on WhatsApp
          <div className="absolute top-1/2 left-full transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>

      {/* Facebook */}
      <button
        onClick={handleFacebookClick}
        className="group relative w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out"
        aria-label="Visit Facebook Page"
        title="Visit Facebook Page"
      >
        <Facebook className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Visit Facebook Page
          <div className="absolute top-1/2 left-full transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>

      {/* Instagram */}
      <button
        onClick={handleInstagramClick}
        className="group relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out"
        aria-label="Visit Instagram Page"
        title="Visit Instagram Page"
      >
        <Instagram className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Visit Instagram Page
          <div className="absolute top-1/2 left-full transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>

        {/* Phone */}
        <button
        onClick={handlePhoneClick}
        className="group relative w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out"
        aria-label="Call Us"
        title="Call Us"
      >
        <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Call Us
          <div className="absolute top-1/2 left-full transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>
    </div>
  );
}