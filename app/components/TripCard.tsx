'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconStar, IconClock, IconUsers, IconPlane } from '@tabler/icons-react';

interface TripCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  groupSize?: string;
  price: string;
  rating: number;
  badge: string;
  badgeColor: string;
  totalSets?: number;
  occupiedSets?: number;
  linkHref?: string;
  buttonText?: string;
  variant?: 'default' | 'mobile';
  departureAirport?: string;
  arrivalAirport?: string;
  numberOfDays?: number;
}

const TripCard: React.FC<TripCardProps> = ({
  id,
  title,
  description,
  image,
  duration,
  groupSize,
  price,
  rating,
  badge,
  badgeColor,
  totalSets,
  occupiedSets,
  linkHref = `/trip/${id}`,
  buttonText = 'View More',
  variant = 'default',
  departureAirport,
  arrivalAirport,
}) => {
  const cardClasses =
    variant === 'mobile'
      ? 'group relative rounded-2xl border border-gray-200 transition-all duration-300 overflow-hidden transform hover:-translate-y-2 h-full'
      : 'group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2';

  const badgePosition =
    variant === 'mobile' ? 'bottom-4 left-4' : 'top-4 right-4';

  return (
    <div className={cardClasses}>
      <div className='relative h-64 overflow-hidden'>
        <Image
          src={image}
          alt={`${title} Destination`}
          fill
          className='object-cover group-hover:scale-110 transition-transform duration-300'
        />

        <div className={`absolute ${badgePosition}`}>
          <span
            className={`${badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}
          >
            {badge}
          </span>
        </div>
      </div>

      <div className='p-4 sm:p-6'>
        <div className='flex items-center justify-between mb-3'>
          <h3 className='text-lg sm:text-xl font-bold text-gray-900'>
            {title}
          </h3>
          <div className='flex items-center space-x-1'>
            <IconStar className='w-4 h-4 text-yellow-400 fill-current' />
            <span className='text-sm font-semibold text-gray-700'>
              {rating}
            </span>
          </div>
        </div>

        <p className='text-sm sm:text-base text-gray-600 mb-4 line-clamp-2'>
          {description}
        </p>

        <div className='flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3'>
          <div className='flex items-center space-x-1'>
            <IconClock className='w-3 h-3 sm:w-4 sm:h-4' />
            <span>{duration}</span>
          </div>
          <div className='flex items-center space-x-1'>
            {totalSets && occupiedSets ? (
              <div className='flex items-center space-x-1'>
                <span>
                  Sets left: {totalSets} / {occupiedSets + totalSets}
                </span>
                <IconUsers className='w-3 h-3 sm:w-4 sm:h-4' />
              </div>
            ) : groupSize ? (
              <div className='flex items-center space-x-1'>
                <IconUsers className='w-3 h-3 sm:w-4 sm:h-4' />
                <span>{groupSize}</span>
              </div>
            ) : null}
          </div>
        </div>

        {/* Flight Route Information */}
        {departureAirport && arrivalAirport && (
          <div className='mb-3 p-2 bg-orange-50 rounded-lg border border-orange-200'>
            <div className='flex items-center space-x-2 text-xs sm:text-sm text-orange-700'>
              <IconPlane className='w-3 h-3 sm:w-4 sm:h-4 text-orange-600' />
              <div className='flex-1'>
                <div className='font-medium text-orange-800'>Flight Route:</div>
                <div className='text-orange-600'>
                  {departureAirport.split(',')[0]} →{' '}
                  {arrivalAirport.split(',')[0]}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className='flex flex-col   gap-3'>
          <div>
            <span className='text-xl sm:text-2xl font-bold text-gray-900'>
              {price}
            </span>
            <span className='text-xs sm:text-sm text-gray-500 ml-1'>
              per person
            </span>
          </div>

          <div className='flex items-center space-x-2'>
            <div className='text-sm sm:text-base font-semibold text-orange-500 whitespace-nowrap border border-orange-500 rounded-full px-4 sm:px-6 py-2'>
              Call Now
            </div>
            <Link
              href={linkHref}
              className='bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors w-full  text-center'
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
