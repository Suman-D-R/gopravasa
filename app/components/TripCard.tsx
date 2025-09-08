'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconStar, IconClock, IconUsers, IconPlane } from '@tabler/icons-react';
import { motion } from 'framer-motion';

// Star Rating Component
const StarRating: React.FC<{
  rating: number;
  size?: 'sm' | 'md' | 'lg' | 'responsive';
}> = ({ rating, size = 'sm' }) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    responsive: 'w-3 h-3 lg:w-5 lg:h-5',
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <IconStar
          key={i}
          className={`${sizeClasses[size]} text-yellow-400 fill-current`}
        />
      );
    }

    // Render half star if needed
    if (hasHalfStar) {
      stars.push(
        <div key='half' className='relative'>
          <IconStar className={`${sizeClasses[size]} text-gray-300`} />
          <div
            className='absolute inset-0 overflow-hidden'
            style={{ width: '50%' }}
          >
            <IconStar
              className={`${sizeClasses[size]} text-yellow-400 fill-current`}
            />
          </div>
        </div>
      );
    }

    // Render empty stars to complete 5 stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <IconStar
          key={`empty-${i}`}
          className={`${sizeClasses[size]} text-gray-300`}
        />
      );
    }

    return stars;
  };

  return (
    <div className='flex items-center space-x-1'>
      {renderStars()}
      <span className='text-sm font-semibold text-gray-700 ml-1'>{rating}</span>
    </div>
  );
};

interface Trip {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  groupSize?: string;
  price: string;
  originalPrice?: string;
  discountedPrice?: string;
  rating: number;
  badge: string;
  badgeColor: string;
  totalSets?: number;
  occupiedSets?: number;
  buttonText?: string;
  variant?: 'default' | 'mobile';
  linkHref?: string;
  departureAirport?: string;
  arrivalAirport?: string;
  numberOfDays?: number;
  countdownTo?: string; // ISO date string for countdown target
}
interface TripCardProps {
  trip: Trip;
}

// Real Countdown Timer Component
const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsExpired(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsExpired(true);
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isExpired) {
    return (
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className='text-red-500 font-semibold'
      >
        Expired
      </motion.span>
    );
  }

  return (
    <div className='flex items-center space-x-1 text-sm sm:text-base'>
      {timeLeft.days > 0 && (
        <motion.div
          key={`days-${timeLeft.days}`}
          initial={{ opacity: 0, y: -10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className='flex items-center space-x-1'
        >
          <span className='font-bold text-orange-600'>{timeLeft.days}</span>
          <span className='text-gray-500'>d</span>
        </motion.div>
      )}

      <motion.div
        key={`hours-${timeLeft.hours}`}
        initial={{ opacity: 0, y: -10, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className='flex items-center space-x-1'
      >
        <span className='font-bold text-orange-600'>
          {timeLeft.hours.toString().padStart(2, '0')}
        </span>
        <span className='text-gray-500'>h</span>
      </motion.div>

      <motion.div
        key={`minutes-${timeLeft.minutes}`}
        initial={{ opacity: 0, y: -10, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className='flex items-center space-x-1'
      >
        <span className='font-bold text-orange-600'>
          {timeLeft.minutes.toString().padStart(2, '0')}
        </span>
        <span className='text-gray-500'>m</span>
      </motion.div>

      <motion.div
        key={`seconds-${timeLeft.seconds}`}
        initial={{ opacity: 0, y: -10, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className='flex items-center space-x-1'
      >
        <span className='font-bold text-orange-600'>
          {timeLeft.seconds.toString().padStart(2, '0')}
        </span>
        <span className='text-gray-500'>s</span>
      </motion.div>
    </div>
  );
};

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  const {
    id,
    title,
    description,
    image,
    duration,
    groupSize,
    price,
    originalPrice,
    discountedPrice,
    rating,
    badge,
    badgeColor,
    totalSets,
    occupiedSets,
    linkHref = `/trip/${id}`,
    variant = 'default',
    departureAirport,
    arrivalAirport,
    countdownTo,
  } = trip;

  const badgePosition =
    variant === 'mobile' ? 'bottom-4 left-4' : 'top-4 right-4';

  const handleCallClick = () => {
    const phoneNumber = '+919901101912';
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <div className='group relative rounded-2xl border border-gray-200 transition-all duration-300 transform hover:-translate-y-2 h-full'>
      <div className='relative h-64 overflow-hidden rounded-t-2xl'>
        <Image
          src={image}
          alt={`${title} Destination`}
          fill
          priority={true}
          className='object-cover group-hover:scale-110 transition-transform duration-300'
        />
        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4'>
          <p className='text-sm sm:text-base line-clamp-2 *:text-white font-medium'>
            {description}
          </p>
        </div>
      </div>
      <div
        className='ribbon'
        style={{ '--c': badgeColor } as React.CSSProperties}
      >
        {badge}
      </div>
      <div className='p-4 sm:p-6'>
        <div className='flex lg:flex-col gap-2 lg:items-start items-center justify-between mb-3'>
          <h3 className='text-lg sm:text-xl font-bold text-gray-900'>
            {title}
          </h3>
          <StarRating rating={rating} size='responsive' />
        </div>
        <div className='flex items-center space-x-2 flex-wrap'>
          {/* Discounted Price - Main Price */}
          {discountedPrice && (
            <>
              <span className='text-2xl sm:text-3xl font-bold text-green-600'>
                {discountedPrice}
              </span>
              <span className='text-sm font-semibold line-through text-red-500'>
                {originalPrice}
              </span>
              <span className='text-xs sm:text-sm text-gray-500'>
                per person
              </span>
            </>
          )}

          {/* Fallback to regular price if no discount */}
          {!discountedPrice && (
            <>
              <span className='text-xl sm:text-2xl font-bold text-gray-900'>
                {price}
              </span>
              <span className='text-xs sm:text-sm text-gray-500'>
                per person
              </span>
            </>
          )}
        </div>
        <div className='flex items-center justify-between text-sm sm:text-base text-gray-500 my-2'>
          <div className='flex items-center space-x-1'>
            {totalSets && occupiedSets ? (
              <div className='flex items-center space-x-1'>
                <IconUsers className='w-3 h-3 sm:w-4 sm:h-4' size={2} />
                <span>
                  Sets left:{' '}
                  <span className='text-green-600 font-semibold'>
                    {totalSets}
                  </span>{' '}
                  / {occupiedSets + totalSets}
                </span>
              </div>
            ) : groupSize ? (
              <div className='flex items-center space-x-1'>
                <span>{groupSize}</span>
              </div>
            ) : null}
          </div>
          <div className='flex items-center space-x-1'>
            <IconClock className='w-3 h-3 sm:w-4 sm:h-4' />
            {countdownTo ? (
              <CountdownTimer targetDate={countdownTo} />
            ) : (
              <span>{duration}</span>
            )}
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          {/* Flight Route Information */}
          {departureAirport && arrivalAirport && (
            <div className='mb-3 p-2 bg-orange-50 rounded-lg border border-orange-200'>
              <div className='flex items-center space-x-2 text-xs sm:text-sm text-orange-700'>
                <IconPlane className='w-3 h-3 sm:w-4 sm:h-4 text-orange-600' />
                <div className='flex-1'>
                  <div className='font-medium text-orange-800'>
                    Flight Route:
                  </div>
                  <div className='text-orange-600'>
                    {departureAirport.split(',')[0]} →{' '}
                    {arrivalAirport.split(',')[0]}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className='flex items-center space-x-2'>
            <div
              onClick={handleCallClick}
              className='text-sm sm:text-base font-semibold text-orange-500 whitespace-nowrap border border-orange-500 rounded-full px-4 sm:px-6 py-2'
            >
              Call Now
            </div>
            <Link
              href={linkHref}
              className='bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors w-full text-center'
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
