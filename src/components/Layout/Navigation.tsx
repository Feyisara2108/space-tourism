// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const Navigation: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const pathname = usePathname();

//   const navItems = [
//     { href: '/', label: 'Home', number: '00' },
//     { href: '/destination', label: 'Destination', number: '01' },
//     { href: '/crew', label: 'Crew', number: '02' },
//     { href: '/technology', label: 'Technology', number: '03' },
//   ];

//   const isActive = (href: string) => pathname === href;

//   return (
//     <>
//       {/* Main Navigation */}
//       <nav className="flex items-center justify-between p-6 md:p-8 lg:pl-12 lg:pr-0 lg:pt-8 relative z-30">
//         {/* Logo */}
//         <Link href="/" className="w-10 h-10 md:w-12 md:h-12">
//           <img 
//             src="/assets/shared/logo.svg" 
//             alt="Space Tourism Logo" 
//             className="w-full h-full"
//           />
//         </Link>
        
//         {/* Desktop Line */}
//         <div className="hidden xl:block flex-1 h-px bg-white bg-opacity-25 mx-16 relative z-20" />
        
//         {/* Mobile Menu Button */}
//         <button 
//           className="md:hidden w-6 h-6 z-50 relative"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? (
//             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <img 
//               src="/assets/shared/icon-hamburger.svg" 
//               alt="Menu" 
//               className="w-full h-full"
//             />
//           )}
//         </button>
        
//         {/* Desktop Navigation */}
//         <div className="hidden md:flex bg-white bg-opacity-5 backdrop-blur-2xl px-8 lg:px-16 py-8 lg:py-10">
//           <ul className="flex space-x-8 lg:space-x-12 text-sm lg:text-base uppercase tracking-wider">
//             {navItems.map((item) => (
//               <li key={item.href}>
//                 <Link 
//                   href={item.href} 
//                   className={`pb-8 transition-all ${
//                     isActive(item.href)
//                       ? 'border-b-2 border-white'
//                       : 'hover:border-b-2 hover:border-white hover:border-opacity-50'
//                   }`}
//                 >
//                   <span className="font-bold mr-2">{item.number}</span> {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 backdrop-blur-lg z-40">
//           <div className="flex justify-end p-6">
//             <button 
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="w-6 h-6 text-white"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//           <ul className="flex flex-col space-y-8 px-8 mt-16 text-lg uppercase tracking-wider">
//             {navItems.map((item) => (
//               <li key={item.href}>
//                 <Link 
//                   href={item.href} 
//                   className={`block ${
//                     isActive(item.href) 
//                       ? 'text-white border-r-2 border-white pr-4' 
//                       : 'text-blue-300'
//                   }`}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   <span className="font-bold mr-3">{item.number}</span> {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navigation;























'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationItem } from '@/types';

const navigationItems: NavigationItem[] = [
  { name: 'HOME', href: '/' },
  { name: 'DESTINATION', href: '/destination' },
  { name: 'CREW', href: '/crew' },
  { name: 'TECHNOLOGY', href: '/technology' }
];

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-gray-800 relative">
              <div className="absolute inset-1 bg-gray-800 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block bg-white/5 backdrop-blur-md px-16 py-8">
          <div className="flex space-x-12">
            {navigationItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white hover:text-gray-300 transition-colors text-sm font-barlow-condensed tracking-wider border-b-2 pb-8 ${
                  pathname === item.href
                    ? 'border-white'
                    : 'border-transparent hover:border-gray-400'
                }`}
              >
                <span className="font-bold mr-2">{String(index).padStart(2, '0')}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Tablet Navigation */}
        <div className="hidden md:block lg:hidden bg-white/5 backdrop-blur-md px-8 py-6">
          <div className="flex space-x-8">
            {navigationItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white hover:text-gray-300 transition-colors text-sm font-barlow-condensed tracking-wider border-b-2 pb-6 ${
                  pathname === item.href
                    ? 'border-white'
                    : 'border-transparent hover:border-gray-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col justify-center items-start pl-8 z-40">
            {navigationItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white text-xl font-barlow-condensed tracking-wider mb-8 hover:text-gray-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-bold mr-4">{String(index).padStart(2, '0')}</span>
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};