'use client';

import React from 'react';
import { IconPhone, IconBrandWhatsapp } from '@tabler/icons-react';

const FloatingIcons = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919901101912';
    const message = 'Hello! I am interested in your travel packages.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      /\D/g,
      ''
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    const phoneNumber = '+919901101912';
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <div className='fixed bottom-6 right-6 z-50 flex flex-col gap-3'>
      {/* WhatsApp Icon */}
      <button
        onClick={handleWhatsAppClick}
        className='group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse'
        aria-label='Contact us on WhatsApp'
      >
        <IconBrandWhatsapp className='w-6 h-6' />

        {/* Tooltip */}
        <div className='absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none'>
          Chat on WhatsApp
          <div className='absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800'></div>
        </div>
      </button>

      {/* Call Icon */}
      <button
        onClick={handleCallClick}
        className='group relative bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110'
        aria-label='Call us'
      >
        <IconPhone className='w-6 h-6' />

        {/* Tooltip */}
        <div className='absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none'>
          Call us now
          <div className='absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800'></div>
        </div>
      </button>
    </div>
  );
};

export default FloatingIcons;
