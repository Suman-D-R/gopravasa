'use client';

import React from 'react';
import Image from 'next/image';
import { IconStar, IconClock } from '@tabler/icons-react';

interface ReviewCardProps {
  name: string;
  initials: string;
  title: string;
  rating: number;
  review: string;
  travelDate: string;
  gradientFrom: string;
  gradientTo: string;
  image?: string;
  href?: string;
  variant?: 'default' | 'mobile';
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  initials,
  title,
  review,
  travelDate,
  gradientFrom,
  gradientTo,
  image,
  href,
  variant = 'default',
}) => {
  const cardClasses =
    variant === 'mobile'
      ? 'bg-white rounded-2xl border border-gray-200 transition-all duration-300 p-6 sm:p-8 transform hover:-translate-y-2 h-full'
      : 'bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 transform hover:-translate-y-2';

  return (
    <div
      onClick={() => window.open(href, '_blank')}
      className={`${cardClasses} cursor-pointer`}
    >
      <div className='flex items-center mb-4 sm:mb-6'>
        {image ? (
          <div className='w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mr-3 sm:mr-4'>
            <Image
              src={image}
              alt={`${name} profile picture`}
              width={64}
              height={64}
              className='w-full h-full object-cover'
            />
          </div>
        ) : (
          <div
            className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-3 sm:mr-4`}
          >
            {initials}
          </div>
        )}
        <div>
          <h4 className='text-base sm:text-lg font-bold text-gray-900 hover:underline cursor-pointer'>
            {name}
          </h4>
          <p className='text-sm sm:text-base text-gray-600'>{title}</p>
        </div>
      </div>

      <div className='flex items-center mb-3 sm:mb-4'>
        {[...Array(5)].map((_, i) => (
          <IconStar
            key={i}
            className='w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current'
          />
        ))}
      </div>

      <p className='text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4'>
        &ldquo;{review}&rdquo;
      </p>

      <div className='text-xs sm:text-sm text-gray-500'>
        <IconClock className='w-3 h-3 sm:w-4 sm:h-4 inline mr-1' />
        Traveled in {travelDate}
      </div>
    </div>
  );
};

export default ReviewCard;
