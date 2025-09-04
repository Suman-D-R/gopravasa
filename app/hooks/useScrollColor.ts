'use client';

import { useState, useEffect } from 'react';

export const useScrollColor = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {

    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const screenHeight = window.innerHeight - 200;
      
      // Change color when scrolled more than screen height
      setIsScrolled(scrollHeight > screenHeight);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrolled;
};
