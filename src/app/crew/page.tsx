'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const crewMembers = [
  {
    name: "Douglas Hurley",
    role: "Commander",
    image: "/assets/crew/image-douglas-hurley.png",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    image: "/assets/crew/image-mark-shuttleworth.png",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    name: "Victor Glover",
    role: "Pilot",
    image: "/assets/crew/image-victor-glover.png",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    image: "/assets/crew/image-anousheh-ansari.png",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
];

export default function CrewPage() {
  const [selectedCrew, setSelectedCrew] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentCrew = crewMembers[selectedCrew];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background Images - Responsive */}
      <div className="absolute inset-0">
        <div 
          className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/crew/background-crew-desktop.jpg')"
          }}
        />
        <div 
          className="hidden md:block lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/crew/background-crew-tablet.jpg')"
          }}
        />
        <div 
          className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/crew/background-crew-mobile.jpg')"
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
                  <span className="font-barlow-condensed mr-2">00</span> Home
                </Link>
              </li>
              <li>
                <Link href="/destination" className="hover:border-b-2 hover:border-white hover:border-opacity-50 pb-8 transition-all">
                  <span className="font-barlow-condensed mr-2">01</span> Destination
                </Link>
              </li>
              <li>
                <Link href="/crew" className="border-b-2 border-white pb-8 transition-all">
                  <span className="font-barlow-condensed mr-2">02</span> Crew
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:border-b-2 hover:border-white hover:border-opacity-50 pb-8 transition-all">
                  <span className="font-barlow-condensed mr-2">03</span> Technology
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
                  <span className="font-barlow-condensed mr-3">00</span> Home
                </Link>
              </li>
              <li>
                <Link href="/destination" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-barlow-condensed mr-3">01</span> Destination
                </Link>
              </li>
              <li>
                <Link href="/crew" className="block text-white border-r-2 border-white pr-4" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-barlow-condensed mr-3">02</span> Crew
                </Link>
              </li>
              <li>
                <Link href="/technology" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-barlow-condensed mr-3">03</span> Technology
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Main Content */}
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
          {/* Page Title */}
          <h1 className="text-base md:text-xl lg:text-2xl uppercase tracking-widest mb-8 md:mb-12 lg:mb-16 text-center lg:text-left">
            <span className="font-barlow-condensed text-gray-500 mr-4">02</span>
            Meet your crew
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
            {/* Left Content - Crew Info */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
              {/* Role */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bellefair uppercase text-gray-400">
                {currentCrew.role}
              </h3>

              {/* Name */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bellefair uppercase">
                {currentCrew.name}
              </h2>

              {/* Bio */}
              <p className="text-blue-100 text-base font-Barlow md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                {currentCrew.bio}
              </p>

              {/* Dot Navigation */}
              <div className="flex justify-center lg:justify-start space-x-4 pt-8 lg:pt-16">
                {crewMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCrew(index)}
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all ${
                      selectedCrew === index
                        ? 'bg-white'
                        : 'bg-gray-600 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Content - Crew Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[500px] xl:w-[450px] xl:h-[600px]">
                <img 
                  src={currentCrew.image}
                  alt={currentCrew.name}
                  className="w-full h-full object-contain object-bottom"
                />
                {/* Gradient fade at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}