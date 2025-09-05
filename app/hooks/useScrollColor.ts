'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useScrollColor = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    if (pathname === '/destinations' || pathname === '/blog' || pathname === '/about' || pathname === '/contact' || pathname === '/gallery') {
      setIsScrolled(true);
      return;
    }

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
  }, [pathname]);

  return isScrolled;
};
