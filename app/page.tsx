'use client';

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  Fragment,
} from 'react';
import Image from 'next/image';
import {
  IconMapPin,
  IconStar,
  IconShield,
  IconAward,
  IconHeadset,
  IconCreditCard,
  IconWorld,
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react';
import TripCard from './components/TripCard';
import ReviewCard from './components/ReviewCard';
import { useAnimatedCounter } from './hooks/useAnimatedCounter';
import { useRouter } from 'next/navigation';
import { trips, reviews, galleryImages } from './data';

// Animated Stat Component
const AnimatedStat = ({
  end,
  suffix = '',
  label,
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}) => {
  const { count, ref } = useAnimatedCounter({
    end,
    suffix,
    duration,
  });

  return (
    <div ref={ref}>
      <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-2'>
        {count}
      </div>
      <p className='text-sm sm:text-base text-gray-600 font-semibold'>
        {label}
      </p>
    </div>
  );
};

function Page() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const reviewsScrollRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const router = useRouter();

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Handle search redirect when debounced query changes
  useEffect(() => {
    // Only redirect if there's actual search content
    if (debouncedSearchQuery.trim()) {
      router.push(
        `/destinations?search=${encodeURIComponent(
          debouncedSearchQuery.trim()
        )}`
      );
    }
    // Don't redirect if search is empty - let user stay on home page
  }, [debouncedSearchQuery, router]);

  // Clear search when user navigates back to home page
  useEffect(() => {
    const handlePopState = () => {
      // If we're on the home page, clear the search to prevent auto-redirect
      if (window.location.pathname === '/') {
        setSearchQuery('');
        setDebouncedSearchQuery('');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle search input change
  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  // Handle Enter key press - immediate search
  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (searchQuery.trim()) {
          router.push(
            `/destinations?search=${encodeURIComponent(searchQuery.trim())}`
          );
        }
        // Don't redirect if search is empty
      }
    },
    [searchQuery, router]
  );

  // Update current card index when scrolling manually
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const cards = scrollRef.current.querySelectorAll('.snap-center');
        if (cards.length === 0) return;

        const firstCard = cards[0] as HTMLElement;
        const cardWidth = firstCard.offsetWidth;
        const gap = 16;
        const cardSpacing = cardWidth + gap;
        const currentScrollLeft = scrollRef.current.scrollLeft;
        const calculatedIndex = Math.round(currentScrollLeft / cardSpacing);

        setCurrentCardIndex(
          Math.max(0, Math.min(calculatedIndex, cards.length - 1))
        );
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Update current review index when scrolling manually
  useEffect(() => {
    const handleReviewsScroll = () => {
      if (reviewsScrollRef.current) {
        const cards = reviewsScrollRef.current.querySelectorAll('.snap-center');
        if (cards.length === 0) return;

        const firstCard = cards[0] as HTMLElement;
        const cardWidth = firstCard.offsetWidth;
        const gap = 16;
        const cardSpacing = cardWidth + gap;
        const currentScrollLeft = reviewsScrollRef.current.scrollLeft;
        const calculatedIndex = Math.round(currentScrollLeft / cardSpacing);

        setCurrentReviewIndex(
          Math.max(0, Math.min(calculatedIndex, cards.length - 1))
        );
      }
    };

    const scrollContainer = reviewsScrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleReviewsScroll);
      return () =>
        scrollContainer.removeEventListener('scroll', handleReviewsScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cards = scrollRef.current.querySelectorAll('.snap-center');
      if (cards.length === 0) return;

      const firstCard = cards[0] as HTMLElement;
      const cardWidth = firstCard.offsetWidth;
      const gap = 16; // gap-4 = 16px
      const cardSpacing = cardWidth + gap;

      const currentScrollLeft = scrollRef.current.scrollLeft;

      // Calculate which card should be visible
      const calculatedIndex = Math.round(currentScrollLeft / cardSpacing);
      let targetCardIndex;

      if (direction === 'left') {
        targetCardIndex = Math.max(0, calculatedIndex - 1);
      } else {
        targetCardIndex = Math.min(cards.length - 1, calculatedIndex + 1);
      }

      // Calculate the target scroll position
      const targetScrollLeft = targetCardIndex * cardSpacing;

      // Only scroll if we're not already at the target position
      if (Math.abs(currentScrollLeft - targetScrollLeft) > 10) {
        scrollRef.current.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth',
        });
        setCurrentCardIndex(targetCardIndex);
      }
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const cards = scrollRef.current.querySelectorAll('.snap-center');
      if (cards.length === 0) return;

      const firstCard = cards[0] as HTMLElement;
      const cardWidth = firstCard.offsetWidth;
      const gap = 16;
      const cardSpacing = cardWidth + gap;

      const targetScrollLeft = index * cardSpacing;
      scrollRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
      setCurrentCardIndex(index);
    }
  };

  const scrollReviews = (direction: 'left' | 'right') => {
    if (reviewsScrollRef.current) {
      const cards = reviewsScrollRef.current.querySelectorAll('.snap-center');
      if (cards.length === 0) return;

      const firstCard = cards[0] as HTMLElement;
      const cardWidth = firstCard.offsetWidth;
      const gap = 16; // gap-4 = 16px
      const cardSpacing = cardWidth + gap;

      const currentScrollLeft = reviewsScrollRef.current.scrollLeft;

      // Calculate which card should be visible
      const calculatedIndex = Math.round(currentScrollLeft / cardSpacing);
      let targetCardIndex;

      if (direction === 'left') {
        targetCardIndex = Math.max(0, calculatedIndex - 1);
      } else {
        targetCardIndex = Math.min(cards.length - 1, calculatedIndex + 1);
      }

      // Calculate the target scroll position
      const targetScrollLeft = targetCardIndex * cardSpacing;

      // Only scroll if we're not already at the target position
      if (Math.abs(currentScrollLeft - targetScrollLeft) > 10) {
        reviewsScrollRef.current.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth',
        });
        setCurrentReviewIndex(targetCardIndex);
      }
    }
  };

  const scrollToReview = (index: number) => {
    if (reviewsScrollRef.current) {
      const cards = reviewsScrollRef.current.querySelectorAll('.snap-center');
      if (cards.length === 0) return;

      const firstCard = cards[0] as HTMLElement;
      const cardWidth = firstCard.offsetWidth;
      const gap = 16;
      const cardSpacing = cardWidth + gap;

      const targetScrollLeft = index * cardSpacing;
      reviewsScrollRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
      setCurrentReviewIndex(index);
    }
  };

  return (
    <div className='w-full min-h-screen relative'>
      {/* Hero Section */}
      <div className='relative w-full h-screen'>
        <div className='w-full h-full brightness-50'>
          <Image
            className='w-full h-full object-cover '
            src='/images/banner/Thailand2.webp'
            alt='Travel destination'
            width={1920}
            height={1080}
            priority
          />
        </div>

        {/* Hero Content */}
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto'>
            <div className='mb-4 sm:mb-6'>
              <span className='text-sm sm:text-lg font-medium tracking-wider fadeUp'>
                WELCOME TO GOPRAVASA
              </span>
            </div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl fadeUp lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight'>
              Explore More, Travel Smarter, Create Memories!
            </h1>
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl fadeUp mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2'>
              Discover stunning destinations at unbeatable value. Plan your
              journey with us and enjoy unforgettable experiences
            </p>

            {/* Central Search Bar */}
            <div className='flex fadeUp flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-4 max-w-2xl mx-auto px-2'>
              <div className='relative w-full sm:w-auto sm:flex-1 border border-gray-300 rounded-full'>
                <input
                  type='text'
                  placeholder="Search for 'Destination'"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className='w-full px-4 sm:px-6 py-3 sm:py-4 pl-10 sm:pl-12 pr-4 rounded-full text-white  text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
                <IconMapPin className='absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-white w-5 h-5 sm:w-6 sm:h-6' />
              </div>
              <button
                onClick={() => {
                  if (searchQuery.trim()) {
                    router.push(
                      `/destinations?search=${encodeURIComponent(
                        searchQuery.trim()
                      )}`
                    );
                  }
                  // Don't redirect if search is empty
                }}
                className='bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors duration-200 w-full sm:w-auto'
              >
                Search Now
              </button>
            </div>
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

      {/* Featured Destinations Section */}
      <div className='py-12 sm:py-16 md:py-20 '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Featured Destinations
            </h2>
            <p className='text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4'>
              Discover amazing places around the world with our curated
              selection of top destinations
            </p>
          </div>

          {/* Desktop Grid */}
          <div className='hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {trips.map((trip) => (
              <Fragment key={trip.id}>
                <TripCard trip={trip} />
              </Fragment>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className='relative md:hidden'>
            <div
              ref={scrollRef}
              className='flex overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth scrollbar-hide -mx-4 px-4 '
              style={{ height: '540px' }}
            >
              {trips.map((trip) => (
                <div
                  key={trip.id}
                  className='snap-center shrink-0 w-full h-full'
                >
                  <div className='h-full'>
                    <TripCard trip={trip} />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Navigation Buttons */}
            <div className='flex justify-center items-center mt-4 px-4 gap-4'>
              <button
                onClick={() => scroll('left')}
                disabled={currentCardIndex === 0}
                className='flex items-center justify-center w-12 h-12 border border-gray-200 bg-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors'
              >
                <IconChevronLeft className='w-5 h-5' />
              </button>

              {/* Dots Indicator */}
              <div className='flex justify-center items-center space-x-2'>
                {trips.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToCard(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentCardIndex
                        ? 'bg-orange-500'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to card ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => scroll('right')}
                disabled={currentCardIndex === trips.length - 1}
                className='flex items-center justify-center w-12 h-12 border border-gray-200 bg-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors'
              >
                <IconChevronRight className='w-5 h-5' />
              </button>
            </div>
          </div>

          {/* View All Button */}
          <div className='text-center mt-8 sm:mt-12'>
            <button
              onClick={() => router.push('/destinations')}
              className='bg-gradient-to-r max-w-[300px] sm:max-w-md mx-auto from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto'
            >
              View All Destinations
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Why Choose GoPravasa?
            </h2>
            <p className='text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4'>
              We&apos;re committed to making your travel dreams come true with
              exceptional service, unbeatable value, and unforgettable
              experiences
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16'>
            {/* Feature 1 */}
            <div className='text-center group px-4'>
              <div className='bg-gray-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300'>
                <IconShield className='w-8 h-8 sm:w-10 sm:h-10 text-gray-600' />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4'>
                Trusted & Secure
              </h3>
              <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                Licensed travel agency with ISO 9001:2015 certification. Your
                safety and satisfaction are our top priorities with 24/7
                support.
              </p>
            </div>

            {/* Feature 2 */}
            <div className='text-center group px-4'>
              <div className='bg-gray-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300'>
                <IconAward className='w-8 h-8 sm:w-10 sm:h-10 text-gray-600' />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4'>
                Best Value Guarantee
              </h3>
              <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                Unbeatable prices with no hidden costs. We guarantee the best
                value for your money or we&apos;ll match any better offer you
                find.
              </p>
            </div>

            {/* Feature 3 */}
            <div className='text-center group px-4'>
              <div className='bg-gray-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300'>
                <IconHeadset className='w-8 h-8 sm:w-10 sm:h-10 text-gray-600' />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4'>
                24/7 Customer Support
              </h3>
              <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                Round-the-clock assistance before, during, and after your trip.
                Our dedicated team is always ready to help make your journey
                perfect.
              </p>
            </div>

            {/* Feature 4 */}
            <div className='text-center group px-4'>
              <div className='bg-gray-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300'>
                <IconCreditCard className='w-8 h-8 sm:w-10 sm:h-10 text-gray-600' />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4'>
                Flexible Payment
              </h3>
              <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                Easy payment options with EMI facilities. Book now, pay later
                with our flexible installment plans that suit your budget.
              </p>
            </div>

            {/* Feature 5 */}
            <div className='text-center group px-4'>
              <div className='bg-gray-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300'>
                <IconWorld className='w-8 h-8 sm:w-10 sm:h-10 text-gray-600' />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4'>
                Global Destinations
              </h3>
              <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                Explore 50+ countries with our carefully curated packages. From
                exotic beaches to cultural heritage sites, we&apos;ve got it
                all.
              </p>
            </div>

            {/* Feature 6 */}
            <div className='text-center group px-4'>
              <div className='bg-gray-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300'>
                <IconCheck className='w-8 h-8 sm:w-10 sm:h-10 text-gray-600' />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4'>
                Hassle-Free Experience
              </h3>
              <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                From visa assistance to local guides, we handle everything. Just
                pack your bags and get ready for an amazing adventure!
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className=' p-6 sm:p-8 md:p-12'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center'>
              <AnimatedStat
                end={10000}
                suffix='+'
                label='Happy Travelers'
                duration={2500}
              />
              <AnimatedStat
                end={50}
                suffix='+'
                label='Destinations'
                duration={2000}
              />
              <AnimatedStat
                end={2}
                suffix='+'
                label='Years Experience'
                duration={1500}
              />
              <AnimatedStat
                end={98}
                suffix='%'
                label='Satisfaction Rate'
                duration={3000}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className='py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white to-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Travel Gallery
            </h2>
            <p className='text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4'>
              Explore our collection of stunning travel moments and get inspired
              for your next adventure
            </p>
          </div>

          {/* Gallery Grid */}
          <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'>
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className='group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
              >
                <div className='aspect-square relative'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className='object-cover group-hover:scale-110 transition-transform duration-300'
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw'
                  />
                </div>
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4'>
                  <h3 className='text-white font-semibold text-sm sm:text-base mb-1'>
                    {image.title}
                  </h3>
                  <p className='text-white/80 text-xs sm:text-sm'>
                    {image.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View Gallery Button */}
          <div className='text-center mt-8 sm:mt-12'>
            <button
              onClick={() => router.push('/gallery')}
              className='bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
            >
              View Full Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className='py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white to-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              What Our Travelers Say
            </h2>
            <p className='text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4'>
              Don&apos;t just take our word for it - hear from our satisfied
              customers who have experienced amazing journeys with us
            </p>
          </div>

          {/* Desktop Grid */}
          <div className='hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                initials={review.initials}
                title={review.title}
                rating={review.rating}
                review={review.review}
                travelDate={review.travelDate}
                gradientFrom={review.gradientFrom}
                gradientTo={review.gradientTo}
                image={review.image}
                href={review.href}
                variant='default'
              />
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className='relative md:hidden'>
            <div
              ref={reviewsScrollRef}
              className='flex overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth scrollbar-hide -mx-4 px-4'
              style={{ height: '350px' }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className='snap-center shrink-0 w-full h-full'
                >
                  <div className='h-full'>
                    <ReviewCard
                      name={review.name}
                      initials={review.initials}
                      title={review.title}
                      rating={review.rating}
                      review={review.review}
                      travelDate={review.travelDate}
                      gradientFrom={review.gradientFrom}
                      gradientTo={review.gradientTo}
                      image={review.image}
                      variant='mobile'
                      href={review.href}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Navigation Buttons */}
            <div className='flex justify-center items-center mt-4 px-4 gap-4'>
              <button
                onClick={() => scrollReviews('left')}
                disabled={currentReviewIndex === 0}
                className='flex items-center justify-center w-12 h-12 border border-gray-200 bg-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors'
              >
                <IconChevronLeft className='w-5 h-5' />
              </button>

              {/* Dots Indicator */}
              <div className='flex justify-center items-center space-x-2'>
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToReview(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentReviewIndex
                        ? 'bg-orange-500'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => scrollReviews('right')}
                disabled={currentReviewIndex === reviews.length - 1}
                className='flex items-center justify-center w-12 h-12 border border-gray-200 bg-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors'
              >
                <IconChevronRight className='w-5 h-5' />
              </button>
            </div>
          </div>

          {/* Overall Rating */}
          <div className='mt-12 sm:mt-16 text-center'>
            <div className=' p-6 sm:p-8 max-w-2xl mx-4 sm:mx-auto'>
              <div className='flex flex-col sm:flex-row items-center justify-center mb-4'>
                <div className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-2 sm:mb-0 sm:mr-4'>
                  4.9
                </div>
                <div>
                  <div className='flex items-center justify-center sm:justify-start mb-2'>
                    {[...Array(5)].map((_, i) => (
                      <IconStar
                        key={i}
                        className='w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current'
                      />
                    ))}
                  </div>
                  <div className='flex items-center justify-center sm:justify-start gap-2'>
                    <div className='flex items-center gap-1'>
                      <Image
                        src='https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp'
                        alt='Google'
                        width={16}
                        height={16}
                        className='w-4 h-4'
                      />
                      <span className='text-gray-600 text-sm font-medium'>
                        Google Based
                      </span>
                    </div>
                    <span className='text-gray-600 text-base sm:text-lg'>
                      700+ reviews
                    </span>
                  </div>
                </div>
              </div>
              <p className='text-gray-700 text-base sm:text-lg'>
                Join thousands of satisfied travelers who have experienced
                unforgettable journeys with GoPravasa
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className='py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Still have questions?
          </h2>
          <p className='text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Our support team is here to help you with any questions or issues.
          </p>
          <button
            onClick={() => router.push('/contact')}
            className='bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
