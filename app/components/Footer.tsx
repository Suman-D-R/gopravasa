'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandLinkedin,
} from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer className='bg-orange-50 text-gray-600'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='space-y-6'>
            <div className='flex items-center space-x-3'>
              <Image
                src='/images/logo/logo.webp'
                alt='GoPravasa Logo'
                width={100}
                height={100}
              />
            </div>
            <p className='text-gray-600 leading-relaxed'>
              Go Pravasa, a brand of Puspaka Vimana Travels and Tours Private
              Limited, is a Bengaluru-based tour operator specializing in
              International and Domestic Group Tours, Customised tours and
              adventure Treks!
            </p>
            <div className='flex space-x-4 text-white'>
              <a
                href='#'
                className='bg-orange-400 hover:bg-orange-500 p-2 rounded-full transition-colors'
              >
                <IconBrandFacebook className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='bg-orange-400 hover:bg-orange-500 p-2 rounded-full transition-colors'
              >
                <IconBrandInstagram className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='bg-orange-400 hover:bg-orange-500 p-2 rounded-full transition-colors'
              >
                <IconBrandTwitter className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='bg-orange-400 hover:bg-orange-500 p-2 rounded-full transition-colors'
              >
                <IconBrandYoutube className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='bg-orange-400 hover:bg-orange-500 p-2 rounded-full transition-colors'
              >
                <IconBrandLinkedin className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-6'>
            <h3 className='text-xl font-bold text-orange-500'>Quick Links</h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/'
                  className='text-gray-600 hover:text-orange-400 transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-600 hover:text-orange-400 transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/destinations'
                  className='text-gray-600 hover:text-orange-400 transition-colors'
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href='/gallery'
                  className='text-gray-600 hover:text-orange-400 transition-colors'
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-gray-600 hover:text-orange-400 transition-colors'
                >
                  Travel Blog
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-600 hover:text-orange-400 transition-colors'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className='space-y-6'>
            <h3 className='text-xl font-bold text-orange-500'>
              Popular Destinations
            </h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/trip/thailand-adventure'
                  className='text-gray-600 hover:text-orange-400 transition-colors'
                >
                  Thailand Adventure
                </Link>
              </li>
              <li>
                <Link
                  href='/trip/bhutan-mystical'
                  className='text-gray-600 hover:text-orange-400 transition-colors'
                >
                  Bhutan Mystical
                </Link>
              </li>
              <li>
                <Link
                  href='/trip/dubai-abu-dhabi-discovery'
                  className='text-gray-600 hover:text-orange-400 transition-colors'
                >
                  Dubai & Abu Dhabi
                </Link>
              </li>
              <li>
                <Link
                  href='/trip/andaman-islands-paradise'
                  className='text-gray-600 hover:text-orange-400 transition-colors'
                >
                  Andaman Islands
                </Link>
              </li>
              <li>
                <Link
                  href='/trip/odisha-cultural-heritage'
                  className='text-gray-600 hover:text-orange-400 transition-colors'
                >
                  Odisha Heritage
                </Link>
              </li>
              <li>
                <Link
                  href='/destinations'
                  className='text-gray-600 hover:text-orange-400 transition-colors'
                >
                  View All Destinations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-6'>
            <h3 className='text-xl font-bold text-orange-500'>Contact Info</h3>
            <div className='space-y-4'>
              <div className='flex items-start space-x-3'>
                <IconMapPin className='w-5 h-5 text-orange-500 mt-1 flex-shrink-0' />
                <div>
                  <p className='text-gray-600'>
                    867/79, 4th Cross Rd, Govindaraja Nagar Ward,
                    <br />
                    MC Layout, Vijayanagar, Bengaluru,
                    <br />
                    Karnataka 560040
                  </p>
                </div>
              </div>
              <div className='flex items-center space-x-3'>
                <IconPhone className='w-5 h-5 text-orange-500 flex-shrink-0' />
                <div>
                  <p className='text-gray-600'>(+91) 99011 01912</p>
                </div>
              </div>
              <div className='flex items-center space-x-3'>
                <IconMail className='w-5 h-5 text-orange-500 flex-shrink-0' />
                <div>
                  <p className='text-gray-600'>info@gopravasa.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className='border-t border-gray-300'>
        <div className='max-w-7xl mx-auto px-4 py-8'>
          <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
            <div className='text-center md:text-left'>
              <h3 className='text-xl font-bold text-orange-500 mb-2'>
                Stay Updated
              </h3>
              <p className='text-gray-600'>
                Subscribe to our newsletter for travel tips and exclusive offers
              </p>
            </div>
            <div className='flex w-full md:w-auto space-x-2'>
              <input
                type='email'
                placeholder='Enter your email'
                className='px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-orange-500 w-full md:w-64'
              />
              <button className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-300'>
        <div className='max-w-7xl mx-auto px-4 py-6'>
          <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
            <div className='text-center md:text-left'>
              <p className='text-gray-500 text-sm'>
                © 2024 GoPravasa. All rights reserved. | Licensed Travel Agency
              </p>
            </div>
            <div className='flex items-center space-x-4 text-sm text-gray-500'>
              <span>Licensed Travel Agency</span>
              <span>•</span>
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
