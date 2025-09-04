// 'use client';

// import React from 'react';
// import { Layout } from '@/components/Layout/Layout';
// import { useActiveState } from '@/hooks/useActiveState';
// import { destinations } from '@/data/spaceData';
// import { Destination } from '@/types';

// export default function DestinationPage() {
//   const { activeItem: activeDestination, setActive } = useActiveState<Destination>(destinations[0]);

//   return (
//     <Layout backgroundImage="/assets/destination/background-destination-desktop.jpg">
//       <div className="container mx-auto px-6 py-16">
//         <div className="text-center mb-16">
//           <h1 className="text-xl md:text-2xl font-barlow-condensed tracking-wider mb-12">
//             <span className="text-gray-500 font-bold mr-4">01</span>
//             PICK YOUR DESTINATION
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
//           {/* Planet Image */}
//           <div className="flex justify-center">
//             <div className="relative w-80 h-80 md:w-96 md:h-96">
//               <img 
//                 src={activeDestination.image}
//                 alt={activeDestination.name}
//                 className="w-full h-full object-contain animate-spin-slow"
//               />
//             </div>
//           </div>

//           {/* Content */}
//           <div className="text-center lg:text-left">
//             {/* Destination Tabs */}
//             <div className="flex justify-center lg:justify-start space-x-8 mb-8">
//               {destinations.map((destination) => (
//                 <button
//                   key={destination.id}
//                   onClick={() => setActive(destination)}
//                   className={`text-sm font-barlow-condensed tracking-wider pb-2 border-b-2 transition-colors ${
//                     activeDestination.id === destination.id
//                       ? 'text-white border-white'
//                       : 'text-gray-300 border-transparent hover:border-gray-400'
//                   }`}
//                 >
//                   {destination.name.toUpperCase()}
//                 </button>
//               ))}
//             </div>

//             {/* Destination Info */}
//             <h2 className="text-6xl md:text-8xl font-bellefair mb-4">
//               {activeDestination.name.toUpperCase()}
//             </h2>
            
//             <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-md mx-auto lg:mx-0">
//               {activeDestination.description}
//             </p>

//             {/* Stats */}
//             <div className="border-t border-gray-600 pt-8">
//               <div className="grid grid-cols-2 gap-8 text-center lg:text-left">
//                 <div>
//                   <h3 className="text-gray-300 font-barlow-condensed text-sm tracking-wider mb-2">
//                     AVG. DISTANCE
//                   </h3>
//                   <p className="text-2xl font-bellefair">{activeDestination.distance}</p>
//                 </div>
//                 <div>
//                   <h3 className="text-gray-300 font-barlow-condensed text-sm tracking-wider mb-2">
//                     EST. TRAVEL TIME
//                   </h3>
//                   <p className="text-2xl font-bellefair">{activeDestination.travel}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }