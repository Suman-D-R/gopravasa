'use client';

import React, { useState, useMemo, useEffect, useRef, Suspense } from 'react';
import Footer from '../components/Footer';
import TripCard from '../components/TripCard';
import { trips } from '../data';
import { IconSearch, IconFilter } from '@tabler/icons-react';
import { useSearchParams } from 'next/navigation';

// Define compact filter categories - only the most relevant ones
const FILTER_CATEGORIES = [
  { id: 'all', label: 'All', value: 'all' },
  { id: 'thailand', label: 'Thailand', value: 'thailand' },
  { id: 'bhutan', label: 'Bhutan', value: 'bhutan' },
  { id: 'dubai', label: 'Dubai', value: 'dubai' },
  { id: 'adventure', label: 'Adventure', value: 'adventure' },
  { id: 'culture', label: 'Culture', value: 'culture' },
];

function DestinationsContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();

  // Handle search query from URL parameters
  useEffect(() => {
    const searchParam = searchParams.get('search');
    if (searchParam) {
      setSearchQuery(decodeURIComponent(searchParam));
      // Auto-focus the search input when coming from main page
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 100);
    }
  }, [searchParams]);

  // Filter trips based on search query and active filter
  const filteredTrips = useMemo(() => {
    let filtered = trips;

    // Filter by category/region
    if (activeFilter !== 'all') {
      filtered = filtered.filter((trip) => {
        const title = trip.title.toLowerCase();
        const description = trip.description.toLowerCase();
        const filterValue = activeFilter.toLowerCase();

        // Check if trip matches the filter
        if (filterValue === 'adventure') {
          return (
            title.includes('adventure') ||
            description.includes('adventure') ||
            description.includes('explore') ||
            description.includes('discover')
          );
        }
        if (filterValue === 'culture') {
          return (
            title.includes('culture') ||
            description.includes('culture') ||
            description.includes('temple') ||
            description.includes('monastery') ||
            description.includes('traditional') ||
            description.includes('ancient')
          );
        }
        if (filterValue === 'beach') {
          return (
            title.includes('beach') ||
            description.includes('beach') ||
            description.includes('coastal') ||
            description.includes('island')
          );
        }
        if (filterValue === 'nature') {
          return (
            description.includes('nature') ||
            description.includes('landscape') ||
            description.includes('mountain') ||
            description.includes('forest') ||
            description.includes('wildlife') ||
            description.includes('scenic')
          );
        }

        // Region-based filtering
        return title.includes(filterValue) || description.includes(filterValue);
      });
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((trip) => {
        return (
          trip.title.toLowerCase().includes(query) ||
          trip.description.toLowerCase().includes(query) ||
          trip.duration.toLowerCase().includes(query) ||
          trip.price.toLowerCase().includes(query)
        );
      });
    }

    return filtered;
  }, [searchQuery, activeFilter]);
  return (
    <div className='w-full min-h-screen'>
      {/* Hero Section */}
      <div className='relative pt-16 sm:pt-26    bg-gradient-to-br from-orange-50 to-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6'>
              Explore <span className='text-orange-500'>Destinations</span>
            </h1>
            <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4'>
              Discover amazing places around the world with our curated
              selection of top destinations
            </p>

            {/* Search Bar */}
            <div className='max-w-2xl mx-auto px-4'>
              <div className='relative'>
                <input
                  ref={searchInputRef}
                  type='text'
                  placeholder='Search destinations...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='w-full px-4 sm:px-6 py-3 sm:py-4 pl-10 sm:pl-12 pr-20 sm:pr-24 rounded-full text-gray-800 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-200'
                />
                <IconSearch className='absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 sm:w-6 sm:h-6' />
                <button
                  onClick={() => setSearchQuery('')}
                  className='absolute right-2 sm:right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-semibold transition-colors'
                >
                  {searchQuery ? 'Clear' : 'Search'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Filters Section */}
      <div className='py-4 bg-white border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-center gap-2'>
            <IconFilter className='w-4 h-4 text-gray-600' />
            <span className='text-sm font-medium text-gray-700 mr-2'>
              Filter:
            </span>
            <div className='flex flex-wrap gap-1.5'>
              {FILTER_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.value)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    activeFilter === category.value
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className='py-6 sm:py-16 lg:py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Compact Results Counter */}
          <div className='mb-4'>
            <p className='text-gray-600 text-sm text-center'>
              {filteredTrips.length === trips.length
                ? `${trips.length} destinations`
                : `${filteredTrips.length} of ${trips.length} destinations`}
              {searchQuery && ` • "${searchQuery}"`}
              {activeFilter !== 'all' &&
                ` • ${
                  FILTER_CATEGORIES.find((c) => c.value === activeFilter)?.label
                }`}
            </p>
          </div>

          {filteredTrips.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
              {filteredTrips.map((trip) => (
                <TripCard
                  key={trip.id}
                  id={trip.id}
                  title={trip.title}
                  description={trip.description}
                  image={trip.image}
                  duration={trip.duration}
                  groupSize={trip.groupSize}
                  price={trip.price}
                  rating={trip.rating}
                  badge={trip.badge}
                  badgeColor={trip.badgeColor}
                  buttonText='View Details'
                  variant='default'
                />
              ))}
            </div>
          ) : (
            <div className='text-center py-12 sm:py-16'>
              <div className='max-w-md mx-auto'>
                <IconSearch className='w-16 h-16 text-gray-300 mx-auto mb-4' />
                <h3 className='text-lg sm:text-xl font-semibold text-gray-900 mb-2'>
                  No destinations found
                </h3>
                <p className='text-gray-600 mb-6'>
                  Try adjusting your search or filter criteria to find more
                  destinations.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilter('all');
                  }}
                  className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors'
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className='py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-500 to-orange-600'>
        <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6'>
            Can&apos;t Find Your Dream Destination?
          </h2>
          <p className='text-lg sm:text-xl text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto'>
            We offer custom travel packages to any destination you desire
          </p>
          <button className='bg-white text-orange-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors'>
            Request Custom Package
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function DestinationsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DestinationsContent />
    </Suspense>
  );
}
