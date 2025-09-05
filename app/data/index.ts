// Trip data structure
export const trips = [
  {
    id: 'thailand-adventure',
    title: 'Thailand Adventure',
    description:
      'Experience the vibrant culture, stunning beaches, and delicious cuisine of Thailand',
    fullDescription:
      'Embark on an unforgettable journey through Thailand, where ancient traditions meet modern luxury. From the bustling streets of Bangkok to the pristine beaches of Phuket, this adventure offers a perfect blend of cultural immersion and tropical relaxation. Discover magnificent temples, indulge in world-class cuisine, and create memories that will last a lifetime.',
    image: '/images/banner/Thailand.webp',
    duration: '7 days',
    numberOfDays: 7,
    departureDate: '2025-10-15',
    returnDate: '2025-10-22',
    departureAirport: 'Kempegowda International Airport (BLR), Bangalore',
    arrivalAirport: 'Suvarnabhumi Airport (BKK), Bangkok',
    groupSize: '12 people',
    price: '₹74,999',
    originalPrice: '₹99,999',
    rating: 4.8,
    badge: 'Best Seller',
    badgeColor: 'bg-orange-500',
    totalSets: 20,
    occupiedSets: 8,
    countdownTo: '2025-10-31T23:59:59', // Example: Countdown to New Year 2025
    highlights: [
      'Visit the Grand Palace and Wat Pho in Bangkok',
      'Explore the floating markets of Damnoen Saduak',
      'Relax on the pristine beaches of Phuket',
      'Experience traditional Thai cooking class',
      'Enjoy a sunset cruise in Phang Nga Bay',
      'Discover the ancient city of Ayutthaya',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Bangkok',
        description:
          'Arrive at Bangkok airport, transfer to hotel, and explore the vibrant city center.',
      },
      {
        day: 2,
        title: 'Bangkok City Tour',
        description:
          'Visit the Grand Palace, Wat Pho, and enjoy a traditional Thai massage.',
      },
      {
        day: 3,
        title: 'Floating Markets & Ayutthaya',
        description:
          'Experience the famous floating markets and explore the ancient ruins of Ayutthaya.',
      },
      {
        day: 4,
        title: 'Travel to Phuket',
        description:
          'Fly to Phuket and spend the day relaxing on beautiful beaches.',
      },
      {
        day: 5,
        title: 'Phang Nga Bay Cruise',
        description:
          'Enjoy a full-day cruise through the stunning limestone karsts of Phang Nga Bay.',
      },
      {
        day: 6,
        title: 'Free Day in Phuket',
        description:
          'Explore Phuket at your own pace or enjoy optional activities.',
      },
      {
        day: 7,
        title: 'Departure',
        description: 'Transfer to airport for your departure flight.',
      },
    ],
    inclusions: [
      '6 nights accommodation in 4-star hotels',
      'All airport transfers',
      'Daily breakfast',
      'Guided city tours',
      'Entrance fees to all attractions',
      'Professional English-speaking guide',
      'Travel insurance',
    ],
    exclusions: [
      'International flights',
      'Lunch and dinner (except breakfast)',
      'Personal expenses',
      'Optional activities',
      'Visa fees',
    ],
  },
  {
    id: 'bhutan-mystical',
    title: 'Bhutan Mystical',
    description:
      'Discover the last Shangri-La, explore ancient monasteries, and experience pure happiness',
    fullDescription:
      'Journey to the mystical kingdom of Bhutan, where happiness is measured and ancient traditions thrive. From the stunning Tiger\'s Nest Monastery to the vibrant festivals of Thimphu, this spiritual adventure offers a unique glimpse into the world\'s only carbon-negative country. Immerse yourself in Buddhist culture, witness breathtaking Himalayan landscapes, and discover the secret to Bhutan\'s Gross National Happiness.',
    image: '/images/banner/bhutan.webp',
    duration: '6 days',
    numberOfDays: 6,
    departureDate: '2025-10-10',
    returnDate: '2025-10-16',
    departureAirport: 'Kempegowda International Airport (BLR), Bangalore',
    arrivalAirport: 'Paro Airport (PBH), Bhutan',
    groupSize: '10 people',
    price: '₹1,24,999',
    originalPrice: '₹1,57,999',
    rating: 4.9,
    badge: 'New',
    badgeColor: 'bg-orange-500',
    totalSets: 12,
    occupiedSets: 8,
    highlights: [
      'Hike to the iconic Tiger\'s Nest Monastery',
      'Explore the ancient capital of Punakha',
      'Witness traditional Bhutanese festivals',
      'Visit the majestic Punakha Dzong',
      'Experience authentic Bhutanese cuisine',
      'Discover the art of traditional weaving',
    ],
    countdownTo: '2025-09-15T12:00:00',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Paro',
        description:
          'Arrive at Paro airport and transfer to your hotel. Explore the charming town of Paro.',
      },
      {
        day: 2,
        title: 'Tiger\'s Nest Monastery',
        description:
          'Hike to the iconic Taktsang Monastery (Tiger\'s Nest) perched on a cliff at 3,120m.',
      },
      {
        day: 3,
        title: 'Thimphu Capital Tour',
        description:
          'Explore Thimphu, visit the National Memorial Chorten, and experience local markets.',
      },
      {
        day: 4,
        title: 'Punakha Valley',
        description:
          'Travel to Punakha, visit the magnificent Punakha Dzong, and explore the valley.',
      },
      {
        day: 5,
        title: 'Cultural Experiences',
        description:
          'Participate in traditional Bhutanese activities and visit local artisan workshops.',
      },
      {
        day: 6,
        title: 'Departure',
        description: 'Transfer to Paro airport for your departure flight.',
      },
    ],
    inclusions: [
      '5 nights accommodation in 4-star hotels',
      'All airport transfers',
      'Daily meals (breakfast, lunch, dinner)',
      'Guided cultural tours',
      'Entrance fees to all attractions',
      'Professional English-speaking guide',
      'Bhutan visa processing',
    ],
    exclusions: [
      'International flights',
      'Personal expenses',
      'Optional activities',
      'Travel insurance',
      'Alcoholic beverages',
    ],
  },
  {
    id: 'dubai-abu-dhabi-discovery',
    title: 'Dubai & Abu Dhabi Discovery',
    description:
      'Experience the luxury and grandeur of the UAE, from modern skyscrapers to cultural heritage',
    fullDescription:
      'Discover the perfect blend of modern luxury and rich cultural heritage in the United Arab Emirates. From the towering Burj Khalifa in Dubai to the magnificent Sheikh Zayed Mosque in Abu Dhabi, this journey offers an authentic glimpse into Emirati culture. Experience desert adventures, explore traditional souks, and witness the architectural marvels that define these iconic cities.',
    image: '/images/banner/dubai.webp',
    duration: '8 days',
    numberOfDays: 8,
    departureDate: '2025-10-20',
    returnDate: '2025-10-28',
    departureAirport: 'Kempegowda International Airport (BLR), Bangalore',
    arrivalAirport: 'Dubai International Airport (DXB), Dubai',
    groupSize: '15 people',
    price: '₹1,07,999',
    originalPrice: '₹1,49,999',
    rating: 4.8,
    badge: 'Popular',
    badgeColor: 'bg-green-500',
    totalSets: 25,
    occupiedSets: 18,
    countdownTo: '2025-10-15T12:00:00', // Example: Countdown to mid-January 2025
    highlights: [
      'Visit the world\'s tallest building - Burj Khalifa',
      'Explore the magnificent Sheikh Zayed Mosque',
      'Experience thrilling desert safari adventure',
      'Discover traditional souks and markets',
      'Enjoy luxury shopping at Dubai Mall',
      'Witness the beauty of Palm Jumeirah',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Dubai',
        description:
          'Arrive at Dubai International Airport and transfer to your hotel in the city center.',
      },
      {
        day: 2,
        title: 'Dubai City Tour',
        description:
          'Visit Burj Khalifa, Dubai Mall, and explore the historic Al Fahidi district.',
      },
      {
        day: 3,
        title: 'Desert Safari Adventure',
        description:
          'Experience dune bashing, camel riding, and traditional Bedouin camp dinner.',
      },
      {
        day: 4,
        title: 'Palm Jumeirah & Atlantis',
        description:
          'Explore the iconic Palm Jumeirah and visit Atlantis The Palm resort.',
      },
      {
        day: 5,
        title: 'Travel to Abu Dhabi',
        description:
          'Transfer to Abu Dhabi and visit the stunning Sheikh Zayed Mosque.',
      },
      {
        day: 6,
        title: 'Abu Dhabi Cultural Tour',
        description:
          'Explore Qasr Al Hosn, Heritage Village, and the Corniche waterfront.',
      },
      {
        day: 7,
        title: 'Louvre Abu Dhabi & Yas Island',
        description:
          'Visit the Louvre Abu Dhabi museum and explore Yas Island attractions.',
      },
      {
        day: 8,
        title: 'Departure',
        description: 'Transfer to Dubai airport for your departure flight.',
      },
    ],
    inclusions: [
      '7 nights accommodation in 4-star hotels',
      'All airport transfers',
      'Daily breakfast',
      'Desert safari with dinner',
      'Guided city tours',
      'Entrance fees to all attractions',
      'Professional English-speaking guide',
    ],
    exclusions: [
      'International flights',
      'Lunch and dinner (except desert safari dinner)',
      'Personal expenses',
      'Optional activities',
      'Visa fees',
    ],
  },
  {
    id: 'andaman-islands-paradise',
    title: 'Andaman Islands Paradise',
    description:
      'Discover pristine beaches, crystal-clear waters, and rich marine life in India\'s tropical paradise',
    fullDescription:
      'Escape to the breathtaking Andaman Islands, where turquoise waters meet pristine white sand beaches. This tropical paradise offers world-class diving, stunning coral reefs, and a perfect blend of adventure and relaxation. From the historic Cellular Jail to the untouched beauty of Havelock Island, experience the magic of India\'s most beautiful archipelago.',
    image: '/images/banner/andaman.webp',
    duration: '6 days',
    numberOfDays: 6,
    departureDate: '2025-10-15',
    returnDate: '2025-10-21',
    departureAirport: 'Kempegowda International Airport (BLR), Bangalore',
    arrivalAirport: 'Veer Savarkar International Airport (IXZ), Port Blair',
    groupSize: '12 people',
    price: '₹66,999',
    originalPrice: '₹91,999',
    rating: 4.9,
    badge: 'Tropical Paradise',
    badgeColor: 'bg-blue-500',
    countdownTo: '2025-09-15T22:00:00',
    totalSets: 15,
    occupiedSets: 6,
    highlights: [
      'Explore the historic Cellular Jail and light & sound show',
      'Snorkel in the crystal-clear waters of Elephant Beach',
      'Visit the stunning Radhanagar Beach (Asia\'s 7th best beach)',
      'Experience thrilling water sports and diving',
      'Discover the unique marine life and coral reefs',
      'Witness spectacular sunsets at Chidiya Tapu',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Port Blair',
        description:
          'Arrive at Port Blair airport, transfer to hotel, and explore the local markets.',
      },
      {
        day: 2,
        title: 'Cellular Jail & Ross Island',
        description:
          'Visit the historic Cellular Jail, attend the light & sound show, and explore Ross Island.',
      },
      {
        day: 3,
        title: 'Travel to Havelock Island',
        description:
          'Take a ferry to Havelock Island and spend the day at Radhanagar Beach.',
      },
      {
        day: 4,
        title: 'Elephant Beach & Water Sports',
        description:
          'Enjoy snorkeling at Elephant Beach and try various water sports activities.',
      },
      {
        day: 5,
        title: 'Return to Port Blair & Chidiya Tapu',
        description:
          'Return to Port Blair and visit Chidiya Tapu for a beautiful sunset experience.',
      },
      {
        day: 6,
        title: 'Departure',
        description: 'Transfer to Port Blair airport for your departure flight.',
      },
    ],
    inclusions: [
      '5 nights accommodation in 3-star hotels',
      'All airport transfers',
      'Daily breakfast',
      'Ferry transfers to Havelock Island',
      'Entrance fees to all attractions',
      'Professional English-speaking guide',
      'Snorkeling equipment',
    ],
    exclusions: [
      'Domestic flights',
      'Lunch and dinner (except breakfast)',
      'Personal expenses',
      'Optional water sports activities',
      'Travel insurance',
    ],
  },
  {
    id: 'odisha-cultural-heritage',
    title: 'Odisha Cultural Heritage',
    description:
      'Explore ancient temples, pristine beaches, and rich cultural heritage of the land of temples',
    fullDescription:
      'Discover the magnificent state of Odisha, where ancient temples meet pristine beaches and vibrant culture. From the iconic Sun Temple at Konark to the sacred Jagannath Temple in Puri, experience the spiritual essence of this culturally rich land. Explore the golden beaches of Puri, witness the traditional art of Pattachitra, and immerse yourself in the authentic Odia way of life.',
    image: '/images/banner/odisha.webp',
    duration: '5 days',
    numberOfDays: 5,
    departureDate: '2025-10-10',
    returnDate: '2025-10-15',
    departureAirport: 'Kempegowda International Airport (BLR), Bangalore',
    arrivalAirport: 'Biju Patnaik International Airport (BBI), Bhubaneswar',
    groupSize: '15 people',
    price: '₹49,999',
    originalPrice: '₹74,999',
    rating: 4.7,
    badge: 'Cultural Heritage',
    badgeColor: 'bg-purple-500',
    totalSets: 18,
    occupiedSets: 10,
    countdownTo: '2025-09-25T12:00:00',
    highlights: [
      'Visit the UNESCO World Heritage Sun Temple at Konark',
      'Explore the sacred Jagannath Temple in Puri',
      'Relax on the golden beaches of Puri',
      'Discover the ancient caves of Udayagiri and Khandagiri',
      'Experience traditional Odissi dance performance',
      'Witness the art of Pattachitra painting',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Bhubaneswar',
        description:
          'Arrive at Bhubaneswar airport, transfer to hotel, and explore the city center.',
      },
      {
        day: 2,
        title: 'Bhubaneswar Temple Tour',
        description:
          'Visit Lingaraj Temple, Mukteshwar Temple, and explore the ancient caves of Udayagiri and Khandagiri.',
      },
      {
        day: 3,
        title: 'Konark Sun Temple',
        description:
          'Travel to Konark and visit the magnificent Sun Temple, a UNESCO World Heritage site.',
      },
      {
        day: 4,
        title: 'Puri - Jagannath Temple & Beach',
        description:
          'Visit the sacred Jagannath Temple and spend time at the beautiful Puri beach.',
      },
      {
        day: 5,
        title: 'Cultural Experience & Departure',
        description:
          'Experience traditional Odissi dance and Pattachitra art, then transfer to airport for departure.',
      },
    ],
    inclusions: [
      '4 nights accommodation in 3-star hotels',
      'All airport transfers',
      'Daily breakfast',
      'Guided temple tours',
      'Entrance fees to all attractions',
      'Professional English-speaking guide',
      'Traditional cultural performances',
    ],
    exclusions: [
      'Domestic flights',
      'Lunch and dinner (except breakfast)',
      'Personal expenses',
      'Optional activities',
      'Travel insurance',
    ],
  },
];

// Reviews data structure
export const reviews = [
  {
    id: 'review-1',
    href: 'https://share.google/HySKGM5izgIcnR8WH',
    name: 'Shruthi Adarsh',
    initials: 'AS',
    title: 'Thailand Explorer',
    rating: 5,
    review:
      'A very big thank you to our amazing tour manager and photographer, Mr. Manu brother, and our wonderful guide, Bella, for making this trip truly special from beginning to end. Every moment was perfectly planned and beautifully executed, making the entire journey smooth, enjoyable, and memorable.',
    travelDate: 'July 2025',
    gradientFrom: 'from-orange-400',
    gradientTo: 'to-orange-600',
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjV1YP6hZxri7m36Y_u7C39t0DCbOAR-0xZjEnDF4vDG1Mevlzafhw=w144-h144-p-rp-mo-br100',
  },
  {
    id: 'review-2',
    href: 'https://share.google/k29DyrqdbIgGYwyZz',
    name: 'Sharath Gowda',
    initials: 'RK',
    title: 'Bali Adventure',
    rating: 5,
    review:
      'My wife and I recently embarked on a 5-day trip to Thailand with Gopravas, covering Pattaya and Bangkok, and the experience was nothing short of exceptional. From the moment we joined the tour, it felt less like a commercial trip and more like traveling with family, thanks to the strong Kannada connection that binds everyone together.',
    travelDate: 'June 2025',
    gradientFrom: 'from-blue-400',
    gradientTo: 'to-blue-600',
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjWtnhsOAnX2QTJqQNtOK9VslEhG8JxGCyJBoGJqbU-90W5mJ-PP=w144-h144-p-rp-mo-ba3-br100',
  },
  {
    id: 'review-3',
    href: 'https://share.google/Xg5o5ftF1LozLYOYS',
    name: 'Muruli Patel',
    initials: 'PM',
    title: 'Japan Discovery',
    rating: 5,
    review:
      'It was my first international trip and GO PRAVASA team made the whole experience memorable & unforgettable. The selection of hotels was excellent, offering both comfort & convenience. The package was also not overpriced, making it great value for the experience. itinery was perfect & all good.',
    travelDate: 'August 2025',
    gradientFrom: 'from-green-400',
    gradientTo: 'to-green-600',
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjW_gbIRo5Wkp80iUV-yYlIYUCairBvHbadbXflECmawSZ50KDs=w144-h144-p-rp-mo-br100',
  },
];

// Gallery data structure
export const galleryImages = [
  {
    id: 'gallery-1',
    src: '/images/gallery/thailand-beach-sunset.webp',
    alt: 'Beautiful beach sunset in Thailand',
    title: 'Dubai & Abu Dhabi Discovery',
    location: 'UAE',
    category: 'Nature',
  },
  {
    id: 'gallery-2',
    src: '/images/gallery/thailand-elephant-sanctuary.webp',
    alt: 'Elephant sanctuary in Thailand',
    title: 'Elephant Sanctuary',
    location: 'Himachal Pradesh',
    category: 'Adventure',
  },
  {
    id: 'gallery-3',
    src: '/images/gallery/thailand-floating-market.webp',
    alt: 'Floating market in Thailand',
    title: 'Beach',
    location: 'Thailand',
    category: 'Culture',
  },
  {
    id: 'gallery-4',
    src: '/images/gallery/thailand-island-paradise.webp',
    alt: 'Island paradise in Thailand',
    title: 'Island Paradise',
    location: 'Andaman Islands',
    category: 'Beach',
  },
  {
    id: 'gallery-5',
    src: '/images/gallery/thailand-mountain-trek.webp',
    alt: 'Mountain trek in Thailand',
    title: 'Mountain Trek',
    location: 'Himachal Pradesh',
    category: 'Adventure',
  },
  {
    id: 'gallery-6',
    src: '/images/gallery/thailand-street-food.webp',
    alt: 'Street food in Thailand',
    title: 'Bhutan Temple',
    location: 'Bhutan',
    category: 'Food',
  },
  {
    id: 'gallery-7',
    src: '/images/gallery/thailand-temple-golden.webp',
    alt: 'Golden temple in Thailand',
    title: 'Skyscraper',
    location: 'Dubai',
    category: 'Culture',
  },
];
