'use client';

import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  IconCalendar,
  IconUser,
  IconArrowRight,
  IconSearch,
  IconTag,
  IconClock,
} from '@tabler/icons-react';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: '10 Must-Visit Temples in Thailand',
      excerpt:
        'Discover the most beautiful and sacred temples that Thailand has to offer, from the iconic Wat Arun to hidden gems.',
      image: '/images/banner/Thailand.webp',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Thailand',
      featured: true,
    },
    {
      id: 2,
      title: 'Bhutan Travel Guide: Everything You Need to Know',
      excerpt:
        'Complete guide to visiting the mystical kingdom of Bhutan, including visa requirements, best time to visit, and must-see attractions.',
      image: '/images/banner/Thailand2.webp',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '8 min read',
      category: 'Bhutan',
      featured: false,
    },
    {
      id: 3,
      title: 'Budget Travel Tips for Southeast Asia',
      excerpt:
        'Learn how to explore Southeast Asia on a budget without compromising on experiences and comfort.',
      image: '/images/banner/Thailand.webp',
      author: 'Priya Sharma',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Travel Tips',
      featured: false,
    },
    {
      id: 4,
      title: 'Best Time to Visit Japan: Seasonal Guide',
      excerpt:
        'Discover the perfect time to visit Japan based on weather, festivals, and seasonal attractions.',
      image: '/images/banner/Thailand2.webp',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Japan',
      featured: false,
    },
    {
      id: 5,
      title: 'Solo Travel Safety Tips for Women',
      excerpt:
        'Essential safety tips and advice for women traveling solo, including destination recommendations and safety measures.',
      image: '/images/banner/Thailand.webp',
      author: 'Emma Wilson',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Travel Tips',
      featured: false,
    },
    {
      id: 6,
      title: 'Bali Hidden Gems: Off the Beaten Path',
      excerpt:
        'Explore the lesser-known but equally beautiful spots in Bali that most tourists miss.',
      image: '/images/banner/Thailand2.webp',
      author: 'Alex Rodriguez',
      date: '2024-01-03',
      readTime: '6 min read',
      category: 'Bali',
      featured: false,
    },
  ];

  const categories = [
    'All',
    'Thailand',
    'Bhutan',
    'Japan',
    'Bali',
    'Travel Tips',
  ];

  return (
    <div className='w-full min-h-screen'>
      <Header />

      {/* Hero Section */}
      <div className='relative pt-20 pb-16 bg-gradient-to-br from-orange-50 to-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              Travel <span className='text-orange-500'>Blog</span>
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8'>
              Get inspired by our travel stories, tips, and guides from around
              the world
            </p>

            {/* Search Bar */}
            <div className='max-w-2xl mx-auto'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Search blog posts...'
                  className='w-full px-6 py-4 pl-12 pr-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-200'
                />
                <IconSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Featured Article
            </h2>
            <div className='w-20 h-1 bg-orange-500 rounded-full'></div>
          </div>

          <div className='bg-gray-50 rounded-2xl overflow-hidden shadow-lg'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
              <div className='relative h-80 lg:h-auto'>
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='p-8 lg:p-12 flex flex-col justify-center'>
                <div className='flex items-center space-x-4 mb-4'>
                  <span className='bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                    {blogPosts[0].category}
                  </span>
                  <span className='text-orange-500 font-semibold'>
                    Featured
                  </span>
                </div>
                <h3 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-4'>
                  {blogPosts[0].title}
                </h3>
                <p className='text-gray-600 mb-6 leading-relaxed'>
                  {blogPosts[0].excerpt}
                </p>
                <div className='flex items-center justify-between mb-6'>
                  <div className='flex items-center space-x-4 text-sm text-gray-500'>
                    <div className='flex items-center space-x-1'>
                      <IconUser className='w-4 h-4' />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <IconCalendar className='w-4 h-4' />
                      <span>
                        {new Date(blogPosts[0].date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <IconClock className='w-4 h-4' />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
                <button className='inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-colors w-fit'>
                  <span>Read More</span>
                  <IconArrowRight className='w-4 h-4' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories & Blog Posts */}
      <div className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4'>
          {/* Categories */}
          <div className='flex flex-wrap items-center justify-center gap-4 mb-12'>
            <span className='font-semibold text-gray-900'>Categories:</span>
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  category === 'All'
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
              >
                <div className='relative h-48'>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <div className='flex items-center space-x-2 mb-3'>
                    <IconTag className='w-4 h-4 text-orange-500' />
                    <span className='text-orange-500 font-semibold text-sm'>
                      {post.category}
                    </span>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3 line-clamp-2'>
                    {post.title}
                  </h3>
                  <p className='text-gray-600 mb-4 line-clamp-3'>
                    {post.excerpt}
                  </p>
                  <div className='flex items-center justify-between text-sm text-gray-500 mb-4'>
                    <div className='flex items-center space-x-1'>
                      <IconUser className='w-4 h-4' />
                      <span>{post.author}</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <IconCalendar className='w-4 h-4' />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <button className='inline-flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors'>
                    <span>Read More</span>
                    <IconArrowRight className='w-4 h-4' />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className='text-center mt-12'>
            <button className='bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-colors'>
              Load More Articles
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className='py-20 bg-gradient-to-r from-orange-500 to-orange-600'>
        <div className='max-w-4xl mx-auto text-center px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Stay Updated with Travel Tips
          </h2>
          <p className='text-xl text-orange-100 mb-8'>
            Subscribe to our newsletter and get the latest travel guides, tips,
            and exclusive offers delivered to your inbox
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto'>
            <input
              type='email'
              placeholder='Enter your email'
              className='px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white flex-1'
            />
            <button className='bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
