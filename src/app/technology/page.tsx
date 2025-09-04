'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const technologies = [
  {
    name: "Launch vehicle",
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    images: {
      portrait: "/assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "/assets/technology/image-launch-vehicle-landscape.jpg"
    }
  },
  {
    name: "Spaceport",
    description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
    images: {
      portrait: "/assets/technology/image-spaceport-portrait.jpg",
      landscape: "/assets/technology/image-spaceport-landscape.jpg"
    }
  },
  {
    name: "Space capsule",
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry vehicle designed to return from space to Earth's surface or that of another celestial body. Our capsule is where you'll spend your time during the flight. It includes a luxury window, space toilet, and of course the specially-designed seats that accommodate space suits.",
    images: {
      portrait: "/assets/technology/image-space-capsule-portrait.jpg",
      landscape: "/assets/technology/image-space-capsule-landscape.jpg"
    }
  }
];

export default function TechnologyPage() {
  const [selectedTech, setSelectedTech] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentTech = technologies[selectedTech];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background Images - Responsive */}
      <div className="absolute inset-0">
        <div 
          className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/technology/background-technology-desktop.jpg')"
          }}
        />
        <div 
          className="hidden md:block lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/technology/background-technology-tablet.jpg')"
          }}
        />
        <div 
          className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/technology/background-technology-mobile.jpg')"
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
                <Link href="/crew" className="hover:border-b-2 hover:border-white hover:border-opacity-50 pb-8 transition-all">
                  <span className="font-barlow-condensed mr-2">02</span> Crew
                </Link>
              </li>
              <li>
                <Link href="/technology" className="border-b-2 border-white pb-8 transition-all">
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
                <Link href="/crew" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-barlow-condensed mr-3">02</span> Crew
                </Link>
              </li>
              <li>
                <Link href="/technology" className="block text-white border-r-2 border-white pr-4" onClick={() => setIsMobileMenuOpen(false)}>
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
            <span className="font-barlow-condensed text-gray-500 mr-4">03</span>
            Space launch 101
          </h1>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content - Tech Info and Navigation */}
            <div className="lg:col-span-7 space-y-8 lg:space-y-12 order-2 lg:order-1">
              <div className="flex lg:flex-col items-center lg:items-start">
                {/* Number Navigation */}
                <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-6 mb-8 lg:mb-12 lg:mr-12">
                  {technologies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTech(index)}
                      className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-2 text-lg md:text-xl lg:text-2xl font-serif transition-all ${
                        selectedTech === index
                          ? 'bg-white text-black border-white'
                          : 'bg-transparent text-white border-gray-600 hover:border-white'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                {/* Tech Info */}
                <div className="text-center lg:text-left space-y-4 lg:space-y-6">
                  <p className="text-blue-300 font-Bellefair text-sm md:text-base uppercase tracking-wider">
                    The terminology...
                  </p>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-ellefair uppercase">
                    {currentTech.name}
                  </h2>
                  
                  <p className="text-blue-100 text-base font-barlow md:text-lg leading-relaxed max-w-md lg:max-w-lg mx-auto lg:mx-0">
                    {currentTech.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Tech Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-md lg:max-w-none">
                {/* Desktop Portrait Image */}
                <img 
                  src={currentTech.images.portrait}
                  alt={currentTech.name}
                  className="hidden lg:block w-full h-auto object-cover"
                />
                {/* Mobile/Tablet Landscape Image */}
                <img 
                  src={currentTech.images.landscape}
                  alt={currentTech.name}
                  className="lg:hidden w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}