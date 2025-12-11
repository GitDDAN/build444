import React from 'react';

const TrustBar: React.FC = () => {
  return (
    <div className="w-full bg-background border-b border-white/10 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            {['E-COMMERCE', 'PROFESSIONAL SERVICES', 'HOME SERVICES', 'HEALTHCARE'].map((industry, i) => (
                <span key={i} className="font-display font-bold text-sm md:text-base text-white/30 tracking-wider uppercase">
                    {industry}
                </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;