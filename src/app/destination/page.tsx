'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const destinations = [
  {
    name: "Moon",
    image: "/assets/destination/image-moon.png",
    description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days"
  },
  {
    name: "Mars",
    image: "/assets/destination/image-mars.png",
    description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months"
  },
  {
    name: "Europa",
    image: "/assets/destination/image-europa.png",
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years"
  },
  {
    name: "Titan",
    image: "/assets/destination/image-titan.png",
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years"
  }
];

export default function DestinationPage() {
  const [selectedDestination, setSelectedDestination] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentDestination = destinations[selectedDestination];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background Images - Responsive */}
      <div className="absolute inset-0">
        <div 
          className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/destination/background-destination-desktop.jpg')"
          }}
        />
        <div 
          className="hidden md:block lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/destination/background-destination-tablet.jpg')"
          }}
        />
        <div 
          className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/destination/background-destination-mobile.jpg')"
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6 md:p-8 lg:pl-12 lg:pr-0 lg:pt-8">
          <div className="w-10 h-10 md:w-12 md:h-12">
            <img 
              src="/assets/shared/logo.svg" 
              alt="Space Tourism Logo" 
              className="w-full h-full"
            />
          </div>
          
          <div className="hidden xl:block flex-1 h-px bg-white bg-opacity-25 mx-16 relative z-20" />
          
          <button 
            className="md:hidden w-6 h-6"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img 
              src="/assets/shared/icon-hamburger.svg" 
              alt="Menu" 
              className="w-full h-full"
            />
          </button>
          
          <div className="hidden md:flex bg-black bg-opacity-5 backdrop-blur-2xl px-8 lg:px-16 py-8 lg:py-10">
            <ul className="flex space-x-8 lg:space-x-12 text-sm lg:text-base uppercase tracking-wider">
              <li>
                <Link href="/" className="hover:border-b-2 hover:border-white hover:border-opacity-50 pb-8 transition-all">
                  <span className="font-Barlow Condensed mr-2">00</span> Home
                </Link>
              </li>
              <li>
                <Link href="/destination" className="border-b-2 border-white pb-8 transition-all">
                  <span className="font-Barlow Condensed mr-2">01</span> Destination
                </Link>
              </li>
              <li>
                <Link href="/crew" className="hover:border-b-2 hover:border-white hover:border-opacity-50 pb-8 transition-all">
                  <span className="font-Barlow Condensed mr-2">02</span> Crew
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:border-b-2 hover:border-white hover:border-opacity-50 pb-8 transition-all">
                  <span className="font-Barlow Condensed mr-2">03</span> Technology
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 backdrop-blur-lg z-50">
            <div className="flex justify-end p-6">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col space-y-8 px-8 mt-16 text-lg uppercase tracking-wider">
              <li>
                <Link href="/" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-Barlow Condensed mr-3">00</span> Home
                </Link>
              </li>
              <li>
                <Link href="/destination" className="block text-white border-r-2 border-white pr-4" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-Barlow Condensed mr-3">01</span> Destination
                </Link>
              </li>
              <li>
                <Link href="/crew" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-Barlow Condensed mr-3">02</span> Crew
                </Link>
              </li>
              <li>
                <Link href="/technology" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-Barlow Condensed mr-3">03</span> Technology
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Main Content */}
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
          {/* Page Title */}
          <h1 className="text-base md:text-xl lg:text-2xl uppercase tracking-widest mb-8 md:mb-12 lg:mb-16 text-center lg:text-left">
            <span className="font-Barlow Condensed text-gray-500 mr-4">01</span>
            Pick your destination
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Content - Planet Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[480px] xl:h-[480px] relative">
                <img 
                  src={currentDestination.image}
                  alt={currentDestination.name}
                  className="w-full h-full object-contain animate-spin"
                  style={{ animationDuration: '20s' }}
                />
              </div>
            </div>

            {/* Right Content - Destination Info */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
              {/* Planet Navigation */}
              <div className="flex justify-center lg:justify-start space-x-8 lg:space-x-12">
                {destinations.map((destination, index) => (
                  <button
                    key={destination.name}
                    onClick={() => setSelectedDestination(index)}
                    className={`text-sm md:text-base lg:text-lg uppercase tracking-wider pb-2 border-b-2 transition-all ${
                      selectedDestination === index
                        ? 'border-white text-white'
                        : 'border-transparent text-blue-300 hover:border-gray-500'
                    }`}
                  >
                    {destination.name}
                  </button>
                ))}
              </div>

              {/* Planet Name */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bellefair uppercase">
                {currentDestination.name}
              </h2>

              {/* Description */}
              <p className="text-blue-100 text-base font-barlow md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                {currentDestination.description}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gray-600 my-8" />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 lg:gap-16 max-w-md mx-auto lg:mx-0">
                <div className="space-y-2">
                  <p className="text-blue-300 font-barlow-condensed text-sm uppercase tracking-wider">
                    Avg. Distance
                  </p>
                  <p className="text-xl md:text-2xl lg:text-3xl font-bellefair uppercase">
                    {currentDestination.distance}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-blue-300 font-barlow-condensed text-sm uppercase tracking-wider">
                    Est. Travel Time
                  </p>
                  <p className="text-xl md:text-2xl lg:text-3xl font-bellefair uppercase">
                    {currentDestination.travel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}