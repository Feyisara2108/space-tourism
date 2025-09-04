'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden font-Barlow">
      {/* Background Images - Responsive */}
      <div className="absolute inset-0">
        {/* Desktop Background */}
        <div 
          className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/home/background-home-desktop.jpg')"
          }}
        />
        {/* Tablet Background */}
        <div 
          className="hidden md:block lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/home/background-home-tablet.jpg')"
          }}
        />
        {/* Mobile Background */}
        <div 
          className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/home/background-home-mobile.jpg')"
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-white">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6 md:p-8 lg:pl-12 lg:pr-0 lg:pt-8">
          {/* Logo */}
          <div className="w-10 h-10 md:w-12 md:h-12">
            <img 
              src="/assets/shared/logo.svg" 
              alt="Space Tourism Logo" 
              className="w-full h-full"
            />
          </div>
          
          {/* Desktop Line */}
          <div className="hidden xl:block flex-1 h-px bg-white bg-opacity-25 mx-16 relative z-20" />
          
          {/* Mobile Menu Button */}
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
          
          {/* Desktop Navigation */}
           <div className="hidden md:flex bg-black bg-opacity-5 backdrop-blur-2xl px-8 lg:px-16 py-8 lg:py-10">
           <ul className="flex space-x-8 lg:space-x-12 text-sm lg:text-base uppercase tracking-wider">
              <li>
                <Link href="/" className="border-b-2 border-white pb-8 transition-all">
                  <span className="font-bold mr-2">00</span> Home
                </Link>
              </li>
              <li>
                <Link href="/destination" className="hover:border-b-2 hover:border-white hover:border-opacity-50 pb-8 transition-all">
                  <span className="font-bold mr-2">01</span> Destination
                </Link>
              </li>
              <li>
                <Link href="/crew" className="hover:border-b-2 hover:border-white hover:border-opacity-50 pb-8 transition-all">
                  <span className="font-bold mr-2">02</span> Crew
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:border-b-2 hover:border-white hover:border-opacity-50 pb-8 transition-all">
                  <span className="font-bold mr-2">03</span> Technology
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
            <ul className="flex flex-col space-y-8 px-8 mt-16 text-lg uppercase tracking-widest font-BarlowCondensed text-white">
              <li>
                <Link href="/" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-bold mr-3">00</span> Home
                </Link>
              </li>
              <li>
                <Link href="/destination" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-bold mr-3">01</span> Destination
                </Link>
              </li>
              <li>
                <Link href="/crew" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-bold mr-3">02</span> Crew
                </Link>
              </li>
              <li>
                <Link href="/technology" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-bold mr-3">03</span> Technology
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Main Content */}
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[70vh] lg:min-h-[75vh]">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left">
              <p className="text-blue-300 text-base md:text-lg lg:text-xl xl:text-2xl uppercase tracking-[0.2em] font-BarlowCondensed">
                So, you want to travel to
              </p>
              
              <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[150px] font-Bellefair uppercase leading-none">
                Space
              </h1>
              
              <p className="text-blue-100 text-base md:text-lg lg:text-xl leading-relaxed max-w-md mx-auto lg:mx-0 font-Barlow">
                Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly out of this world experience!
              </p>
            </div>

            {/* Right Content - Explore Button */}
            <div className="flex justify-center lg:justify-end items-center">
              <Link href="/destination">
                <button className="group relative w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
                 {/* Hover Ring */}
                 <div className="absolute inset-0 rounded-full bg-white bg-opacity-0 group-hover:bg-opacity-10 transform scale-100 group-hover:scale-150 transition-all duration-500 ease-out" />
                  
                {/* Main Button */}
                 <div className="relative w-full h-full bg-white text-black rounded-full flex items-center justify-center text-lg md:text-xl lg:text-2xl xl:text-3xl font-Bellefair uppercase tracking-wider transform group-hover:scale-105 transition-all duration-300">
                   Explore
               </div>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





































// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';

// export default function HomePage() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen text-white relative overflow-hidden">
//       {/* Background Images - Responsive */}
//       <div className="absolute inset-0">
//         {/* Desktop Background */}
//         <div 
//           className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url('/assets/home/background-home-desktop.jpg')"
//           }}
//         />
//         {/* Tablet Background */}
//         <div 
//           className="hidden md:block lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url('/assets/home/background-home-tablet.jpg')"
//           }}
//         />
//         {/* Mobile Background */}
//         <div 
//           className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url('/assets/home/background-home-mobile.jpg')"
//           }}
//         />
//       </div>
      
//       {/* Content */}
//       <div className="relative z-10">
//         {/* Navigation */}
//         <nav className="flex items-center justify-between p-6 md:p-8 lg:pl-12 lg:pr-0 lg:pt-8">
//           {/* Logo */}
//           <div className="w-10 h-10 md:w-12 md:h-12">
//             <img 
//               src="/assets/shared/logo.svg" 
//               alt="Space Tourism Logo" 
//               className="w-full h-full"
//             />
//           </div>
          
//           {/* Desktop Line */}
//           <div className="hidden xl:block flex-1 h-px bg-white bg-opacity-25 mx-16 relative z-20" />
          
//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden w-6 h-6"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <img 
//               src="/assets/shared/icon-hamburger.svg" 
//               alt="Menu" 
//               className="w-full h-full"
//             />
//           </button>
          
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex bg-white bg-opacity-5 backdrop-blur-2xl px-8 lg:px-16 py-8 lg:py-10">
//             <ul className="flex space-x-8 lg:space-x-12 text-sm lg:text-base uppercase tracking-wider">
//               <li>
//                 <Link href="/" className="border-b-2 border-white pb-8 transition-all">
//                   <span className="font-bold mr-2">00</span> Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/destination" className="hover:border-b-2 hover:border-white hover:border-opacity-50 pb-8 transition-all">
//                   <span className="font-bold mr-2">01</span> Destination
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/crew" className="hover:border-b-2 hover:border-white hover:border-opacity-50 pb-8 transition-all">
//                   <span className="font-bold mr-2">02</span> Crew
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/technology" className="hover:border-b-2 hover:border-white hover:border-opacity-50 pb-8 transition-all">
//                   <span className="font-bold mr-2">03</span> Technology
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 backdrop-blur-lg z-50">
//             <div className="flex justify-end p-6">
//               <button onClick={() => setIsMobileMenuOpen(false)}>
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//             <ul className="flex flex-col space-y-8 px-8 mt-16 text-lg uppercase tracking-wider">
//               <li>
//                 <Link href="/" className="block" onClick={() => setIsMobileMenuOpen(false)}>
//                   <span className="font-bold mr-3">00</span> Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/destination" className="block" onClick={() => setIsMobileMenuOpen(false)}>
//                   <span className="font-bold mr-3">01</span> Destination
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/crew" className="block" onClick={() => setIsMobileMenuOpen(false)}>
//                   <span className="font-bold mr-3">02</span> Crew
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/technology" className="block" onClick={() => setIsMobileMenuOpen(false)}>
//                   <span className="font-bold mr-3">03</span> Technology
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         )}

//         {/* Main Content */}
//         <div className="container mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-16 lg:py-24">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[70vh] lg:min-h-[75vh]">
//             {/* Left Content */}
//             <div className="space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left">
//               <p className="text-blue-300 text-base md:text-lg lg:text-xl xl:text-2xl uppercase tracking-widest font-Barlow Condensed">
//                 So, you want to travel to
//               </p>
              
//               <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[150px] font-serif uppercase leading-none">
//                 Space
//               </h1>
              
//               <p className="text-blue-100 text-base md:text-lg lg:text-xl leading-relaxed max-w-md mx-auto lg:mx-0">
//                 Let's face it; if you want to go to space, you might as well genuinely go to 
//                 outer space and not hover kind of on the edge of it. Well sit back, and relax 
//                 because we'll give you a truly out of this world experience!
//               </p>
//             </div>

//             {/* Right Content - Explore Button */}
//             <div className="flex justify-center lg:justify-end items-center">
//               <Link href="/destination">
//                 <button className="group relative w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
//                   {/* Hover Ring */}
//                   <div className="absolute inset-0 rounded-full bg-white bg-opacity-0 group-hover:bg-opacity-10 transform scale-100 group-hover:scale-150 transition-all duration-500 ease-out" />
                  
//                   {/* Main Button */}
//                   <div className="relative w-full h-full bg-white text-black rounded-full flex items-center justify-center text-lg md:text-xl lg:text-2xl xl:text-3xl font-serif uppercase tracking-wider transform group-hover:scale-105 transition-all duration-300">
//                     Explore
//                   </div>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }