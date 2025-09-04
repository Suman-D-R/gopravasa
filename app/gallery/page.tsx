'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconMapPin,
  IconX,
  IconZoomIn,
  IconSearch,
  IconFilter,
  IconArrowLeft,
  IconHeart,
  IconShare,
  IconDownload,
} from '@tabler/icons-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Extended gallery data structure with more photos
const galleryImages = [
  {
    id: 'gallery-1',
    src: '/images/banner/Thailand.webp',
    alt: 'Beautiful beach in Thailand',
    title: 'Thailand Beach Paradise',
    location: 'Phuket, Thailand',
    category: 'Beach',
    likes: 124,
    date: '2024-01-15',
  },
  {
    id: 'gallery-2',
    src: '/images/banner/Thailand2.webp',
    alt: 'Traditional Thai temple',
    title: 'Ancient Temple',
    location: 'Bangkok, Thailand',
    category: 'Culture',
    likes: 89,
    date: '2024-01-20',
  },
  {
    id: 'gallery-3',
    src: '/images/banner/Thailand.webp',
    alt: 'Street food market',
    title: 'Local Street Food',
    location: 'Chiang Mai, Thailand',
    category: 'Food',
    likes: 156,
    date: '2024-02-01',
  },
  {
    id: 'gallery-4',
    src: '/images/banner/Thailand2.webp',
    alt: 'Mountain landscape',
    title: 'Mountain Adventure',
    location: 'Northern Thailand',
    category: 'Adventure',
    likes: 203,
    date: '2024-02-10',
  },
  {
    id: 'gallery-5',
    src: '/images/banner/Thailand.webp',
    alt: 'Sunset over water',
    title: 'Golden Sunset',
    location: 'Krabi, Thailand',
    category: 'Nature',
    likes: 178,
    date: '2024-02-15',
  },
  {
    id: 'gallery-6',
    src: '/images/banner/Thailand2.webp',
    alt: 'Floating market',
    title: 'Floating Market',
    location: 'Damnoen Saduak, Thailand',
    category: 'Culture',
    likes: 145,
    date: '2024-02-20',
  },
  {
    id: 'gallery-7',
    src: '/images/banner/Thailand.webp',
    alt: 'Elephant sanctuary',
    title: 'Elephant Sanctuary',
    location: 'Chiang Mai, Thailand',
    category: 'Wildlife',
    likes: 267,
    date: '2024-03-01',
  },
  {
    id: 'gallery-8',
    src: '/images/banner/Thailand2.webp',
    alt: 'Island hopping',
    title: 'Island Hopping',
    location: 'Phi Phi Islands, Thailand',
    category: 'Adventure',
    likes: 189,
    date: '2024-03-05',
  },
  {
    id: 'gallery-9',
    src: '/images/banner/Thailand.webp',
    alt: 'Traditional Thai dance',
    title: 'Cultural Dance Performance',
    location: 'Bangkok, Thailand',
    category: 'Culture',
    likes: 134,
    date: '2024-03-10',
  },
  {
    id: 'gallery-10',
    src: '/images/banner/Thailand2.webp',
    alt: 'Tropical rainforest',
    title: 'Rainforest Trek',
    location: 'Khao Sok, Thailand',
    category: 'Nature',
    likes: 198,
    date: '2024-03-15',
  },
  {
    id: 'gallery-11',
    src: '/images/banner/Thailand.webp',
    alt: 'Thai massage',
    title: 'Traditional Thai Massage',
    location: 'Chiang Mai, Thailand',
    category: 'Wellness',
    likes: 112,
    date: '2024-03-20',
  },
  {
    id: 'gallery-12',
    src: '/images/banner/Thailand2.webp',
    alt: 'Night market',
    title: 'Vibrant Night Market',
    location: 'Bangkok, Thailand',
    category: 'Food',
    likes: 167,
    date: '2024-03-25',
  },
  {
    id: 'gallery-13',
    src: '/images/banner/Thailand.webp',
    alt: 'Buddhist monk',
    title: 'Monk Blessing Ceremony',
    location: 'Wat Pho, Thailand',
    category: 'Culture',
    likes: 223,
    date: '2024-04-01',
  },
  {
    id: 'gallery-14',
    src: '/images/banner/Thailand2.webp',
    alt: 'Rock climbing',
    title: 'Rock Climbing Adventure',
    location: 'Railay Beach, Thailand',
    category: 'Adventure',
    likes: 145,
    date: '2024-04-05',
  },
  {
    id: 'gallery-15',
    src: '/images/banner/Thailand.webp',
    alt: 'Coral reef',
    title: 'Underwater Paradise',
    location: 'Similan Islands, Thailand',
    category: 'Nature',
    likes: 289,
    date: '2024-04-10',
  },
  {
    id: 'gallery-16',
    src: '/images/banner/Thailand2.webp',
    alt: 'Thai cooking class',
    title: 'Cooking Class Experience',
    location: 'Chiang Mai, Thailand',
    category: 'Food',
    likes: 156,
    date: '2024-04-15',
  },
];

const categories = [
  'All',
  'Beach',
  'Culture',
  'Food',
  'Adventure',
  'Nature',
  'Wildlife',
  'Wellness',
];
const sortOptions = ['Newest', 'Oldest', 'Most Liked', 'Alphabetical'];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('Newest');
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
        case 'Newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'Oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'Most Liked':
          return b.likes - a.likes;
        case 'Alphabetical':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  return (
    <div className='w-full min-h-screen relative'>
      <Header />

      {/* Hero Section */}
      <div className='relative bg-gradient-to-br from-orange-500 to-orange-600 py-16 sm:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center text-white'>
            <Link
              href='/'
              className='inline-flex items-center text-white hover:text-orange-200 transition-colors mb-6'
            >
              <IconArrowLeft className='w-5 h-5 mr-2' />
              Back to Home
            </Link>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4'>
              Travel Gallery
            </h1>
            <p className='text-lg sm:text-xl max-w-2xl mx-auto opacity-90'>
              Discover the beauty of our destinations through stunning photos
              from our amazing travelers
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className='py-8 bg-white border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row gap-4 items-center justify-between'>
            {/* Search Bar */}
            <div className='relative flex-1 max-w-md'>
              <input
                type='text'
                placeholder='Search photos...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
              />
              <IconSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className='flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors'
            >
              <IconFilter className='w-5 h-5' />
              Filters
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className='mt-6 p-6 bg-gray-50 rounded-lg'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Category Filter */}
                <div>
                  <h3 className='text-sm font-semibold text-gray-700 mb-3'>
                    Category
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                          selectedCategory === category
                            ? 'bg-orange-500 text-white'
                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort Options */}
                <div>
                  <h3 className='text-sm font-semibold text-gray-700 mb-3'>
                    Sort By
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSortBy(option)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                          sortBy === option
                            ? 'bg-orange-500 text-white'
                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className='py-12 sm:py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='mb-8'>
            <p className='text-gray-600'>
              Showing {filteredImages.length} of {galleryImages.length} photos
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className='group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer'
                onClick={() => setSelectedImage(image)}
              >
                <div className='aspect-square relative'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className='object-cover transition-transform duration-300 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center'>
                    <IconZoomIn className='w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  </div>

                  {/* Like Button */}
                  <button className='absolute top-3 right-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200'>
                    <IconHeart className='w-5 h-5 text-white' />
                  </button>
                </div>

                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4'>
                  <h3 className='text-white font-semibold text-sm sm:text-base mb-1'>
                    {image.title}
                  </h3>
                  <p className='text-gray-200 text-xs sm:text-sm flex items-center mb-2'>
                    <IconMapPin className='w-3 h-3 sm:w-4 sm:h-4 mr-1' />
                    {image.location}
                  </p>
                  <div className='flex items-center justify-between'>
                    <span className='inline-block bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium'>
                      {image.category}
                    </span>
                    <span className='text-gray-200 text-xs flex items-center'>
                      <IconHeart className='w-3 h-3 mr-1' />
                      {image.likes}
                    </span>
                  </div>
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

      {/* Image Modal */}
      {selectedImage && (
        <div className='fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4'>
          <div className='relative max-w-6xl max-h-full w-full'>
            <button
              onClick={() => setSelectedImage(null)}
              className='absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200'
            >
              <IconX className='w-6 h-6 text-white' />
            </button>

            <div className='relative'>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className='rounded-lg shadow-2xl w-full h-auto max-h-[80vh] object-contain'
              />

              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg'>
                <div className='flex items-start justify-between mb-4'>
                  <div>
                    <h3 className='text-white text-2xl sm:text-3xl font-bold mb-2'>
                      {selectedImage.title}
                    </h3>
                    <p className='text-gray-200 text-base sm:text-lg flex items-center mb-2'>
                      <IconMapPin className='w-4 h-4 mr-2' />
                      {selectedImage.location}
                    </p>
                    <div className='flex items-center gap-4'>
                      <span className='inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium'>
                        {selectedImage.category}
                      </span>
                      <span className='text-gray-200 text-sm flex items-center'>
                        <IconHeart className='w-4 h-4 mr-1' />
                        {selectedImage.likes} likes
                      </span>
                    </div>
                  </div>

                  <div className='flex gap-2'>
                    <button className='bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200'>
                      <IconShare className='w-5 h-5 text-white' />
                    </button>
                    <button className='bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200'>
                      <IconDownload className='w-5 h-5 text-white' />
                    </button>
                    <button className='bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200'>
                      <IconHeart className='w-5 h-5 text-white' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
