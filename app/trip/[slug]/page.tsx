'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import {
  IconClock,
  IconUsers,
  IconPlane,
  IconStar,
  IconCalendar,
  IconShield,
  IconAward,
} from '@tabler/icons-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { trips } from '../../data';

export default function TripPage() {
  const params = useParams();
  const slug = params.slug as string;

  const trip = trips.find((t) => t.id === slug);

  if (!trip) {
    return (
      <div className='w-full min-h-screen relative bg-gray-50'>
        <div className='py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-center min-h-[60vh]'>
              <div className='text-center bg-white rounded-3xl p-8 sm:p-12 border border-gray-100'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                  Trip Not Found
                </h1>
                <p className='text-lg text-gray-600 mb-8'>
                  The trip you&apos;re looking for doesn&apos;t exist.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className='w-full min-h-screen relative '>
      {/* Hero Section */}
      <div className='relative w-full h-screen'>
        <div className='w-full h-full brightness-50'>
          <Image
            className='w-full h-full object-cover'
            src={trip.image}
            alt={trip.title}
            width={1920}
            height={1080}
            priority
          />
        </div>

        {/* Hero Content */}
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto'>
            <div className='mb-4 sm:mb-6'>
              <span
                className={`${trip.badgeColor} text-white px-4 py-2 rounded-full text-sm font-semibold`}
              >
                {trip.badge}
              </span>
            </div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight'>
              {trip.title}
            </h1>
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2'>
              {trip.description}
            </p>

            {/* Trip Details */}
            <div className='flex flex-wrap justify-center gap-4 sm:gap-6 mb-8'>
              <div className='bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2'>
                <IconClock className='w-4 h-4' />
                <span className='text-sm sm:text-base font-medium'>
                  {trip.duration}
                </span>
              </div>
              <div className='bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2'>
                <IconUsers className='w-4 h-4' />
                <span className='text-sm sm:text-base font-medium'>
                  {trip.groupSize}
                </span>
              </div>
              <div className='bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2'>
                <IconStar className='w-4 h-4 text-yellow-400 fill-current' />
                <span className='text-sm sm:text-base font-medium'>
                  {trip.rating}
                </span>
              </div>
            </div>

            {/* Price Display */}
            <div className='mb-8'>
              <div className='text-3xl sm:text-4xl md:text-5xl font-bold  mb-2'>
                {trip.price}
              </div>
              <div className='text-lg sm:text-xl text-white/80'>per person</div>
            </div>

            {/* CTA Button */}
            <button className='bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 transform hover:scale-105'>
              Book This Trip
            </button>
          </div>
        </div>

        {/* Shape Divider */}
        <div className='custom-shape-divider-bottom-1756975864'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
              opacity='.25'
              className='shape-fill'
            ></path>
            <path
              d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
              opacity='.5'
              className='shape-fill'
            ></path>
            <path
              d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
              className='shape-fill'
            ></path>
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className='bg-white'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12'>
          {/* Trip Overview */}
          <div className='mb-12 sm:mb-16'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl sm:text-3xl font-light text-gray-900 mb-4'>
                About This Trip
              </h2>
              <div className='w-16 h-1 bg-orange-500 mx-auto'></div>
            </div>
            <div className='max-w-4xl mx-auto'>
              <p className='text-base sm:text-lg text-gray-600 leading-relaxed text-center'>
                {trip.fullDescription}
              </p>
            </div>
          </div>

          {/* Trip Details Grid */}
          <div className='mb-12 sm:mb-16'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl sm:text-3xl font-light text-gray-900 mb-4'>
                Trip Details
              </h2>
              <div className='w-16 h-1 bg-orange-500 mx-auto'></div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
              {/* Duration */}
              <div className='text-center p-4 sm:p-6 border border-gray-200 rounded-xl'>
                <div className='w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <IconClock className='w-6 h-6 sm:w-7 sm:h-7 text-orange-500' />
                </div>
                <h3 className='text-lg font-medium text-gray-900 mb-2'>
                  Duration
                </h3>
                <p className='text-xl font-light text-gray-600'>
                  {trip.duration}
                </p>
                <p className='text-sm text-gray-500 mt-1'>
                  {trip.numberOfDays} days
                </p>
              </div>

              {/* Group Size */}
              <div className='text-center p-4 sm:p-6 border border-gray-200 rounded-xl'>
                <div className='w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <IconUsers className='w-6 h-6 sm:w-7 sm:h-7 text-orange-500' />
                </div>
                <h3 className='text-lg font-medium text-gray-900 mb-2'>
                  Group Size
                </h3>
                <p className='text-xl font-light text-gray-600'>
                  {trip.groupSize}
                </p>
                <p className='text-sm text-gray-500 mt-1'>Maximum travelers</p>
              </div>

              {/* Rating */}
              <div className='text-center p-4 sm:p-6 border border-gray-200 rounded-xl sm:col-span-2 lg:col-span-1'>
                <div className='w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <IconStar className='w-6 h-6 sm:w-7 sm:h-7 text-orange-500 fill-current' />
                </div>
                <h3 className='text-lg font-medium text-gray-900 mb-2'>
                  Rating
                </h3>
                <p className='text-xl font-light text-gray-600'>
                  {trip.rating}
                </p>
                <p className='text-sm text-gray-500 mt-1'>Customer rating</p>
              </div>
            </div>
          </div>

          {/* Flight Information */}
          <div className='mb-12 sm:mb-16'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl sm:text-3xl font-light text-gray-900 mb-4'>
                Flight Information
              </h2>
              <div className='w-16 h-1 bg-orange-500 mx-auto'></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
              <div className='p-4 sm:p-6 border border-gray-200 rounded-xl'>
                <div className='flex items-center mb-4'>
                  <div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3'>
                    <IconPlane className='w-5 h-5 text-blue-500' />
                  </div>
                  <h3 className='text-lg font-medium text-gray-900'>
                    Flight Route
                  </h3>
                </div>
                <div className='space-y-3'>
                  <div className='py-2 border-b border-gray-100'>
                    <span className='text-sm text-gray-600 block mb-1'>
                      From
                    </span>
                    <span className='font-medium text-gray-900 text-sm sm:text-base break-words'>
                      {trip.departureAirport}
                    </span>
                  </div>
                  <div className='py-2 border-b border-gray-100'>
                    <span className='text-sm text-gray-600 block mb-1'>To</span>
                    <span className='font-medium text-gray-900 text-sm sm:text-base break-words'>
                      {trip.arrivalAirport}
                    </span>
                  </div>
                </div>
              </div>

              <div className='p-4 sm:p-6 border border-gray-200 rounded-xl'>
                <div className='flex items-center mb-4'>
                  <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3'>
                    <IconCalendar className='w-5 h-5 text-green-500' />
                  </div>
                  <h3 className='text-lg font-medium text-gray-900'>
                    Travel Dates
                  </h3>
                </div>
                <div className='space-y-3'>
                  <div className='py-2 border-b border-gray-100'>
                    <span className='text-sm text-gray-600 block mb-1'>
                      Departure
                    </span>
                    <span className='font-medium text-gray-900 text-sm sm:text-base'>
                      {new Date(trip.departureDate).toLocaleDateString(
                        'en-US',
                        {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        }
                      )}
                    </span>
                  </div>
                  <div className='py-2 border-b border-gray-100'>
                    <span className='text-sm text-gray-600 block mb-1'>
                      Return
                    </span>
                    <span className='font-medium text-gray-900 text-sm sm:text-base'>
                      {new Date(trip.returnDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className='mb-12 sm:mb-16'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl sm:text-3xl font-light text-gray-900 mb-4'>
                What You&apos;ll Experience
              </h2>
              <div className='w-16 h-1 bg-orange-500 mx-auto'></div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
              {trip.highlights.slice(0, 6).map((highlight, index) => (
                <div
                  key={index}
                  className='p-4 sm:p-6 border border-gray-200 rounded-xl'
                >
                  <p className='text-gray-700 leading-relaxed'>{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Itinerary */}
          <div className='mb-12 sm:mb-16'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl sm:text-3xl font-light text-gray-900 mb-4'>
                Day-by-Day Itinerary
              </h2>
              <div className='w-16 h-1 bg-orange-500 mx-auto'></div>
            </div>

            <div className='space-y-4 sm:space-y-6'>
              {trip.itinerary.map((day, index) => (
                <div
                  key={index}
                  className='flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 border border-gray-200 rounded-xl'
                >
                  <div className='w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-medium text-sm sm:text-base'>
                    {day.day}
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-lg sm:text-xl font-medium text-gray-900 mb-2'>
                      {day.title}
                    </h3>
                    <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                      {day.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div className='mb-12 sm:mb-16'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl sm:text-3xl font-light text-gray-900 mb-4'>
                What&apos;s Included
              </h2>
              <div className='w-16 h-1 bg-orange-500 mx-auto'></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
              {trip.inclusions.map((inclusion, index) => (
                <div
                  key={index}
                  className='p-4 sm:p-6 border border-gray-200 rounded-xl'
                >
                  <p className='text-gray-700 leading-relaxed'>{inclusion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Taxes & Charges */}
          <div className='mb-12 sm:mb-16'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl sm:text-3xl font-light text-gray-900 mb-4'>
                Taxes & Charges
              </h2>
              <div className='w-16 h-1 bg-orange-500 mx-auto'></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
              <div className='p-4 sm:p-6 border border-gray-200 rounded-xl'>
                <div className='flex items-center mb-4'>
                  <div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3'>
                    <IconAward className='w-5 h-5 text-blue-500' />
                  </div>
                  <h3 className='text-lg font-medium text-gray-900'>GST</h3>
                </div>
                <p className='text-gray-600 leading-relaxed'>
                  5% GST will be applicable on the total trip cost as per
                  government regulations.
                </p>
              </div>

              <div className='p-4 sm:p-6 border border-gray-200 rounded-xl'>
                <div className='flex items-center mb-4'>
                  <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3'>
                    <IconShield className='w-5 h-5 text-green-500' />
                  </div>
                  <h3 className='text-lg font-medium text-gray-900'>TCS</h3>
                </div>
                <p className='text-gray-600 leading-relaxed'>
                  5% TCS will be applicable on the total trip cost as per
                  government regulations.
                </p>
              </div>
            </div>

            <div className='mt-6 p-4 sm:p-6 border border-gray-200 rounded-xl text-center'>
              <p className='text-gray-600'>
                All applicable taxes and charges will be clearly mentioned in
                your booking confirmation.
              </p>
            </div>
          </div>

          {/* Refund Policy */}
          <div className='mb-12 sm:mb-16'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl sm:text-3xl font-light text-gray-900 mb-4'>
                Refund Policy
              </h2>
              <div className='w-16 h-1 bg-orange-500 mx-auto'></div>
            </div>

            <div className='space-y-4 sm:space-y-6'>
              <div className='p-4 sm:p-6 border border-gray-200 rounded-xl'>
                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-medium'>
                    1
                  </div>
                  <div>
                    <h4 className='font-medium text-gray-900 mb-2'>
                      30+ days before trip
                    </h4>
                    <p className='text-gray-600 leading-relaxed'>
                      If cancellations are made 30 days before the start date of
                      the trip, 50% of the trip cost will be charged as
                      cancellation fees.
                    </p>
                  </div>
                </div>
              </div>

              <div className='p-4 sm:p-6 border border-gray-200 rounded-xl'>
                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-medium'>
                    2
                  </div>
                  <div>
                    <h4 className='font-medium text-gray-900 mb-2'>
                      15-30 days before trip
                    </h4>
                    <p className='text-gray-600 leading-relaxed'>
                      If cancellations are made 15-30 days before the start date
                      of the trip, 75% of the trip cost will be charged as
                      cancellation fees.
                    </p>
                  </div>
                </div>
              </div>

              <div className='p-4 sm:p-6 border border-gray-200 rounded-xl'>
                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-medium'>
                    3
                  </div>
                  <div>
                    <h4 className='font-medium text-gray-900 mb-2'>
                      0-15 days before trip
                    </h4>
                    <p className='text-gray-600 leading-relaxed'>
                      If cancellations are made within 0-15 days before the
                      start date of the trip, 100% of the trip cost will be
                      charged as cancellation fees.
                    </p>
                  </div>
                </div>
              </div>

              <div className='p-4 sm:p-6 border border-gray-200 rounded-xl'>
                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0'>
                    <IconShield className='w-4 h-4 text-white' />
                  </div>
                  <div>
                    <h4 className='font-medium text-gray-900 mb-2'>
                      Weather & Restrictions
                    </h4>
                    <p className='text-gray-600 leading-relaxed'>
                      In the case of unforeseen weather conditions or government
                      restrictions, certain activities may be canceled and in
                      such cases, the operator will try his best to provide an
                      alternate feasible activity. However, no refund will be
                      provided for the same.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-6 p-4 sm:p-6 border border-gray-200 rounded-xl text-center'>
              <p className='text-gray-600'>
                All refunds will be processed within 7-10 business days after
                cancellation approval.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
