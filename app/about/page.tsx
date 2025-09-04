'use client';

import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  IconUsers,
  IconAward,
  IconHeart,
  IconMapPin,
  IconPlane,
  IconStar,
} from '@tabler/icons-react';

export default function AboutPage() {
  return (
    <div className='w-full min-h-screen'>
      <Header />

      {/* Hero Section */}
      <div className='relative pt-20 pb-16 bg-gradient-to-br from-orange-50 to-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              About <span className='text-orange-500'>GoPravasa</span>
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              We are passionate travel enthusiasts dedicated to making your
              dream destinations accessible, affordable, and unforgettable.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                Our Story
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Founded in 2020, GoPravasa began as a small team of travel
                enthusiasts who believed that everyone deserves to explore the
                world. What started as a passion project has grown into a
                trusted travel companion for thousands of adventurers.
              </p>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                We specialize in creating personalized travel experiences that
                combine the perfect blend of adventure, culture, and comfort.
                Our team of experienced travel experts works tirelessly to
                ensure every journey is memorable and hassle-free.
              </p>
              <div className='flex items-center space-x-4'>
                <div className='bg-orange-100 p-3 rounded-full'>
                  <IconHeart className='w-6 h-6 text-orange-500' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900'>
                    Passion-Driven
                  </h3>
                  <p className='text-gray-600'>We love what we do</p>
                </div>
              </div>
            </div>
            <div className='relative'>
              <Image
                src='/images/banner/Thailand.webp'
                alt='Our Team'
                width={600}
                height={400}
                className='rounded-2xl shadow-xl'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='py-20 bg-gradient-to-r from-orange-500 to-orange-600'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
            <div className='text-white'>
              <div className='bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <IconUsers className='w-8 h-8' />
              </div>
              <h3 className='text-3xl font-bold mb-2'>10,000+</h3>
              <p className='text-orange-100'>Happy Travelers</p>
            </div>
            <div className='text-white'>
              <div className='bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <IconMapPin className='w-8 h-8' />
              </div>
              <h3 className='text-3xl font-bold mb-2'>50+</h3>
              <p className='text-orange-100'>Destinations</p>
            </div>
            <div className='text-white'>
              <div className='bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <IconPlane className='w-8 h-8' />
              </div>
              <h3 className='text-3xl font-bold mb-2'>500+</h3>
              <p className='text-orange-100'>Tours Completed</p>
            </div>
            <div className='text-white'>
              <div className='bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <IconStar className='w-8 h-8' />
              </div>
              <h3 className='text-3xl font-bold mb-2'>4.9</h3>
              <p className='text-orange-100'>Average Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='bg-white p-8 rounded-2xl shadow-lg'>
              <div className='bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6'>
                <IconAward className='w-8 h-8 text-orange-500' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Our Mission
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                To make travel accessible to everyone by providing affordable,
                high-quality travel experiences that create lasting memories and
                broaden horizons. We believe that travel has the power to
                transform lives and connect cultures.
              </p>
            </div>
            <div className='bg-white p-8 rounded-2xl shadow-lg'>
              <div className='bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6'>
                <IconHeart className='w-8 h-8 text-orange-500' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Our Vision
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                To become the leading travel platform that inspires and enables
                people to explore the world responsibly. We envision a future
                where travel is not just a luxury but a way of life that
                enriches the soul and builds bridges between communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Meet Our Team
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Our passionate team of travel experts is here to make your journey
              unforgettable
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4'></div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Sarah Johnson
              </h3>
              <p className='text-orange-500 font-semibold mb-2'>
                CEO & Founder
              </p>
              <p className='text-gray-600'>
                Travel enthusiast with 15+ years of experience in the industry
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4'></div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Michael Chen
              </h3>
              <p className='text-orange-500 font-semibold mb-2'>
                Head of Operations
              </p>
              <p className='text-gray-600'>
                Expert in logistics and ensuring smooth travel experiences
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4'></div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Priya Sharma
              </h3>
              <p className='text-orange-500 font-semibold mb-2'>
                Customer Experience
              </p>
              <p className='text-gray-600'>
                Dedicated to making every customer's journey exceptional
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='py-20 bg-gradient-to-r from-orange-500 to-orange-600'>
        <div className='max-w-4xl mx-auto text-center px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Ready to Start Your Journey?
          </h2>
          <p className='text-xl text-orange-100 mb-8'>
            Join thousands of satisfied travelers who have discovered the world
            with GoPravasa
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-white text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors'>
              Explore Destinations
            </button>
            <button className='border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition-colors'>
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
