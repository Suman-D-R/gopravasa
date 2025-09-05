'use client';

import React from 'react';
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconBrandWhatsapp,
  IconSend,
} from '@tabler/icons-react';

export default function ContactPage() {
  return (
    <div className='w-full min-h-screen'>
      {/* Hero Section */}
      <div className='relative pt-20 pb-16 bg-gradient-to-br from-orange-50 to-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              Get in <span className='text-orange-500'>Touch</span>
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Have questions about your next adventure? We&apos;re here to help
              you plan the perfect trip
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <div className='space-y-8'>
              <div>
                <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                  Contact Information
                </h2>
                <p className='text-lg text-gray-600 mb-8'>
                  Reach out to us through any of these channels. We&apos;re
                  available 24/7 to assist you.
                </p>
              </div>

              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <div className='bg-orange-100 p-3 rounded-full'>
                    <IconMapPin className='w-6 h-6 text-orange-500' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      Office Address
                    </h3>
                    <p className='text-gray-600'>
                      123 Travel Street,
                      <br />
                      Bangalore, Karnataka 560001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='bg-orange-100 p-3 rounded-full'>
                    <IconPhone className='w-6 h-6 text-orange-500' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      Phone Numbers
                    </h3>
                    <p className='text-gray-600 mb-1'>+91 98765 43210</p>
                    <p className='text-gray-600'>+91 87654 32109</p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='bg-orange-100 p-3 rounded-full'>
                    <IconMail className='w-6 h-6 text-orange-500' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      Email Address
                    </h3>
                    <p className='text-gray-600 mb-1'>info@gopravasa.com</p>
                    <p className='text-gray-600'>support@gopravasa.com</p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='bg-orange-100 p-3 rounded-full'>
                    <IconClock className='w-6 h-6 text-orange-500' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      Business Hours
                    </h3>
                    <p className='text-gray-600 mb-1'>
                      Monday - Friday: 9:00 AM - 7:00 PM
                    </p>
                    <p className='text-gray-600'>
                      Saturday: 10:00 AM - 5:00 PM
                    </p>
                    <p className='text-gray-600'>Sunday: Closed</p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='bg-orange-100 p-3 rounded-full'>
                    <IconBrandWhatsapp className='w-6 h-6 text-orange-500' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      WhatsApp
                    </h3>
                    <p className='text-gray-600'>+91 98765 43210</p>
                    <p className='text-sm text-gray-500'>
                      Available 24/7 for instant support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='bg-gray-50 p-8 rounded-2xl'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                Send us a Message
              </h3>
              <form className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label
                      htmlFor='firstName'
                      className='block text-sm font-semibold text-gray-700 mb-2'
                    >
                      First Name
                    </label>
                    <input
                      type='text'
                      id='firstName'
                      name='firstName'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder:text-gray-500'
                      placeholder='Enter your first name'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='lastName'
                      className='block text-sm font-semibold text-gray-700 mb-2'
                    >
                      Last Name
                    </label>
                    <input
                      type='text'
                      id='lastName'
                      name='lastName'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder:text-gray-500'
                      placeholder='Enter your last name'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-semibold text-gray-700 mb-2'
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder:text-gray-500'
                    placeholder='Enter your email address'
                  />
                </div>

                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-semibold text-gray-700 mb-2'
                  >
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder:text-gray-500'
                    placeholder='Enter your phone number'
                  />
                </div>

                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-semibold text-gray-700 mb-2'
                  >
                    Subject
                  </label>
                  <select
                    id='subject'
                    name='subject'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900'
                  >
                    <option value=''>Select a subject</option>
                    <option value='general'>General Inquiry</option>
                    <option value='booking'>Booking Information</option>
                    <option value='custom'>Custom Package</option>
                    <option value='support'>Customer Support</option>
                    <option value='feedback'>Feedback</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-semibold text-gray-700 mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={5}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder:text-gray-500'
                    placeholder='Tell us about your travel plans or any questions you have...'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2'
                >
                  <IconSend className='w-5 h-5' />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className='py-20 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-xl text-gray-600'>
              Quick answers to common questions about our services
            </p>
          </div>

          <div className='space-y-6'>
            <div className='bg-white p-6 rounded-xl shadow-sm'>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                How far in advance should I book my trip?
              </h3>
              <p className='text-gray-600'>
                We recommend booking at least 30-60 days in advance for domestic
                trips and 60-90 days for international trips to get the best
                prices and availability.
              </p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-sm'>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                What is included in the tour package?
              </h3>
              <p className='text-gray-600'>
                Our packages typically include accommodation, transportation,
                guided tours, and some meals. Specific inclusions vary by
                destination and package type.
              </p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-sm'>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Do you offer custom travel packages?
              </h3>
              <p className='text-gray-600'>
                Yes! We specialize in creating personalized travel experiences.
                Contact us with your requirements and we&apos;ll design a custom
                package just for you.
              </p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-sm'>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                What is your cancellation policy?
              </h3>
              <p className='text-gray-600'>
                Our cancellation policy varies by package and timing. Generally,
                cancellations made 30+ days in advance receive a full refund,
                with decreasing refunds closer to departure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
