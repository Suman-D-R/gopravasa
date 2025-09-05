'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useScrollColor } from '../hooks/useScrollColor';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/destinations', label: 'Destinations' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const isScrolled = useScrollColor();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50  backdrop-blur-sm transition-colors duration-00 ${
        isScrolled ? ' text-gray-800' : 'bg-transparent text-white'
      }`}
      ref={menuRef}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center'>
              <Image
                priority={true}
                src={`/images/logo/${isScrolled ? 'logo' : 'logo-white'}.webp`}
                alt='Logo'
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex max-w-lg justify-between w-full'>
            {navLinks.map((link: NavLink) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-orange-400 px-3 py-2 rounded-md font-medium relative group transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {link.label}

                <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full -translate-x-1/2'></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center justify-center'>
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {!isMenuOpen ? <IconMenu2 size={24} /> : <IconX size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 max-h-[500px] overflow-visible'
            : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          {navLinks.map((link: NavLink) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-800 hover:text-black hover:bg-gray-50'
                  : 'text-white hover:text-orange-400 hover:bg-white/10'
              }`}
            >
              <div className='flex items-center justify-between'>
                {link.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
