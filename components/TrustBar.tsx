import React from 'react';

const TrustBar: React.FC = () => {
  const tools = [
    { name: 'N8N', logo: 'https://n8n.io/favicon.ico' },
    { name: 'MAKE', logo: 'https://www.make.com/favicon.ico' },
    { name: 'ZAPIER', logo: 'https://zapier.com/favicon.ico' },
    { name: 'CLAUDE', logo: 'https://claude.ai/favicon.ico' },
    { name: 'GEMINI', logo: 'https://gemini.google.com/favicon.ico' },
    { name: 'OPENAI', logo: 'https://openai.com/favicon.ico' },
    { name: 'ANTHROPIC', logo: 'https://anthropic.com/favicon.ico' },
    { name: 'AIRTABLE', logo: 'https://airtable.com/favicon.ico' },
    { name: 'NOTION', logo: 'https://notion.so/favicon.ico' },
    { name: 'SLACK', logo: 'https://slack.com/favicon.ico' }
  ];

  return (
    <div className="w-full bg-background border-b border-white/10 py-8 overflow-x-auto overflow-y-hidden scrollbar-hide">
      <div className="relative">
        {/* Animated scrolling container */}
        <div className="flex animate-scroll-mobile md:animate-scroll-desktop touch-pan-x items-center">
          {/* First set */}
          {tools.map((tool, i) => (
            <React.Fragment key={`first-${i}`}>
              <div className="flex items-center gap-3 mx-4 md:mx-8 whitespace-nowrap">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-6 h-6 md:w-8 md:h-8 object-contain grayscale opacity-30"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="font-display font-bold text-sm md:text-base text-white/30 tracking-wider uppercase">
                  {tool.name}
                </span>
              </div>
              <span className="text-white/20 mx-4 md:mx-8">✦</span>
            </React.Fragment>
          ))}
          {/* Duplicate set for seamless loop */}
          {tools.map((tool, i) => (
            <React.Fragment key={`second-${i}`}>
              <div className="flex items-center gap-3 mx-4 md:mx-8 whitespace-nowrap">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-6 h-6 md:w-8 md:h-8 object-contain grayscale opacity-30"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="font-display font-bold text-sm md:text-base text-white/30 tracking-wider uppercase">
                  {tool.name}
                </span>
              </div>
              <span className="text-white/20 mx-4 md:mx-8">✦</span>
            </React.Fragment>
          ))}
          {/* Third set for mobile smoother scrolling */}
          {tools.map((tool, i) => (
            <React.Fragment key={`third-${i}`}>
              <div className="flex items-center gap-3 mx-4 md:mx-8 whitespace-nowrap">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-6 h-6 md:w-8 md:h-8 object-contain grayscale opacity-30"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="font-display font-bold text-sm md:text-base text-white/30 tracking-wider uppercase">
                  {tool.name}
                </span>
              </div>
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