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
    <div className="w-full bg-background border-b border-white/10 py-8 overflow-hidden">
      <div className="relative">
        {/* Animated scrolling container */}
        <div className="flex animate-scroll">
          {/* First set */}
          {industries.map((industry, i) => (
            <React.Fragment key={`first-${i}`}>
              <span className="font-display font-bold text-sm md:text-base text-white/30 tracking-wider uppercase whitespace-nowrap mx-6 md:mx-8">
                {industry}
              </span>
              <span className="text-white/20 mx-6 md:mx-8">✦</span>
            </React.Fragment>
          ))}
          {/* Duplicate set for seamless loop */}
          {industries.map((industry, i) => (
            <React.Fragment key={`second-${i}`}>
              <span className="font-display font-bold text-sm md:text-base text-white/30 tracking-wider uppercase whitespace-nowrap mx-6 md:mx-8">
                {industry}
              </span>
              <span className="text-white/20 mx-6 md:mx-8">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TrustBar;