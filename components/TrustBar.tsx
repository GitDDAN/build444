import React from 'react';

const TrustBar: React.FC = () => {
  const industries = [
    'E-COMMERCE',
    'PROFESSIONAL SERVICES',
    'HOME SERVICES',
    'HEALTHCARE',
    'REAL ESTATE',
    'RESTAURANTS',
    'FITNESS & WELLNESS',
    'BEAUTY & SALONS',
    'CONSULTING',
    'LEGAL',
    'AUTOMOTIVE',
    'CONSTRUCTION'
  ];

  return (
    <div className="w-full bg-background border-b border-white/10 py-8 overflow-x-auto overflow-y-hidden scrollbar-hide">
      <div className="relative">
        {/* Animated scrolling container */}
        <div className="flex animate-scroll-mobile md:animate-scroll-desktop touch-pan-x">
          {/* First set */}
          {industries.map((industry, i) => (
            <React.Fragment key={`first-${i}`}>
              <span className="font-display font-bold text-sm md:text-base text-white/30 tracking-wider uppercase whitespace-nowrap mx-4 md:mx-8">
                {industry}
              </span>
              <span className="text-white/20 mx-4 md:mx-8">✦</span>
            </React.Fragment>
          ))}
          {/* Duplicate set for seamless loop */}
          {industries.map((industry, i) => (
            <React.Fragment key={`second-${i}`}>
              <span className="font-display font-bold text-sm md:text-base text-white/30 tracking-wider uppercase whitespace-nowrap mx-4 md:mx-8">
                {industry}
              </span>
              <span className="text-white/20 mx-4 md:mx-8">✦</span>
            </React.Fragment>
          ))}
          {/* Third set for mobile smoother scrolling */}
          {industries.map((industry, i) => (
            <React.Fragment key={`third-${i}`}>
              <span className="font-display font-bold text-sm md:text-base text-white/30 tracking-wider uppercase whitespace-nowrap mx-4 md:mx-8">
                {industry}
              </span>
              <span className="text-white/20 mx-4 md:mx-8">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-mobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-66.666%);
          }
        }

        @keyframes scroll-desktop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-mobile {
          display: flex;
          animation: scroll-mobile 25s linear infinite;
        }

        .animate-scroll-desktop {
          display: flex;
          animation: scroll-desktop 40s linear infinite;
        }

        .animate-scroll-mobile:hover,
        .animate-scroll-desktop:hover {
          animation-play-state: paused;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @media (min-width: 768px) {
          .animate-scroll-mobile {
            animation: scroll-desktop 40s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default TrustBar;