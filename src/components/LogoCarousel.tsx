// import React from 'react';

// // Client logos - Uncomment when ready to use
// const logos = [
//   { name: "Client 1", src: "/img/logo1.png" },
//   { name: "Client 2", src: "/img/logo2.png" },
//   { name: "Client 3", src: "/img/logo3.png" },
//   { name: "Client 4", src: "/img/logo4.png" },
//   { name: "Client 5", src: "/img/logo5.png" },
//   { name: "Client 6", src: "/img/logo6.png" },
//   { name: "Client 7", src: "/img/logo7.png" },
//   { name: "Client 8", src: "/img/logo8.png" },
//   { name: "Client 9", src: "/img/logo9.png" },
//   { name: "Client 10", src: "/img/logo10.png" },
//   { name: "Client 11", src: "/img/logo11.png" },
//   { name: "Client 12", src: "/img/logo12.png" },
//   { name: "Client 13", src: "/img/logo13.png" },
// ];

// const LogoCarousel = () => {
//   return (
//     <div className="bg-saas-black py-16 overflow-hidden border-y border-orange-500/40">
//       <div className="relative">
//         {/* Animation container */}
//         <div className="flex animate-scroll">
//           {/* First group */}
//           {logos.map((logo, index) => (
//             <div
//               key={`logo-1-${index}`}
//               className="flex-shrink-0 mx-6 md:mx-5"
//             >
//               <div className="bg-orange-500/5 backdrop-blur-sm rounded-lg p-6 border border-orange-500/30 hover:border-orange-500 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105">
//                 <img 
//                   src={logo.src}
//                   alt={logo.name}
//                   className="h-12 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
//                 />
//               </div>
//             </div>
//           ))}
          
//           {/* Second group (duplicate for infinite scroll) */}
//           {logos.map((logo, index) => (
//             <div
//               key={`logo-2-${index}`}
//               className="flex-shrink-0 mx-6 md:mx-8"
//             >
//               <div className="bg-orange-500/5 backdrop-blur-sm rounded-lg p-6 border border-orange-500/30 hover:border-orange-500 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105">
//                 <img 
//                   src={logo.src}
//                   alt={logo.name}
//                   className="h-12 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Gradient overlays */}
//         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-saas-black to-transparent pointer-events-none z-10" />
//         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-saas-black to-transparent pointer-events-none z-10" />
//       </div>
      
//       <style>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
        
//         .animate-scroll {
//           animation: scroll 35s linear infinite;
//         }
        
//         .animate-scroll:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LogoCarousel;