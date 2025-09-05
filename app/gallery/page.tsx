'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconMapPin,
  IconSearch,
  IconFilter,
  IconArrowLeft,
} from '@tabler/icons-react';
import { galleryImages } from '../data';

const categories = [
  'All',
  'Beach',
  'Culture',
  'Food',
  'Adventure',
  'Nature',
  'Wildlife',
];
const sortOptions = ['Alphabetical', 'Location'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('Alphabetical');
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Filter and sort images
  const filteredImages = galleryImages
    .filter((image) => {
      const matchesCategory =
        selectedCategory === 'All' || image.category === selectedCategory;
      const matchesSearch =
        image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.location.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'Alphabetical':
          return a.title.localeCompare(b.title);
        case 'Location':
          return a.location.localeCompare(b.location);
        default:
          return 0;
      }
    });

  return (
    <div className='w-full min-h-screen relative'>
      {/* Hero Section */}
      <div className='relative bg-gradient-to-br from-orange-50 to-white py-16 sm:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center text-gray-800'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-800'>
              Travel Gallery
            </h1>
            <p className='text-lg sm:text-xl max-w-2xl mx-auto opacity-90 text-gray-800'>
              Discover the beauty of our destinations through stunning photos
              from our amazing travelers
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className='pb-12 sm:py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'>
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className='group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
              >
                <div className='aspect-square relative'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className='object-cover transition-transform duration-300 group-hover:scale-110'
                    sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw'
                  />
                </div>

                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4'>
                  <h3 className='text-white font-semibold text-sm sm:text-base mb-1'>
                    {image.title}
                  </h3>
                  <p className='text-white/80 text-xs sm:text-sm flex items-center mb-2'>
                    <IconMapPin className='w-3 h-3 sm:w-4 sm:h-4 mr-1' />
                    {image.location}
                  </p>
                  <span className='inline-block bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium'>
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className='text-center py-12'>
              <p className='text-gray-500 text-lg'>
                No photos found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
