
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    // The Main Wrapper (Must allow scrolling, no overflow-hidden)
    <section className="relative w-full">

      {/* --------------------------------------------------
          LAYER 1: The Hook (Sticky)
          Logic: sticky top-0 means it stays fixed in the viewport
          until the next element pushes it or covers it.
      -------------------------------------------------- */}
      <div className="sticky top-0 h-screen w-full z-0 flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero1-.png"
            alt="Vibrant Future City"
            className="w-full h-full object-cover opacity-80 object-[75%_center] md:object-center"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </div>

        <div className="relative z-10 flex items-end md:items-center justify-start w-full h-full px-6 pb-[calc(19%+6rem)] md:pb-0 md:pl-16 lg:pl-24">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-[2.55rem] sm:text-[3.06rem] md:text-[4.08rem] lg:text-[5.1rem] leading-[0.9] text-white tracking-tighter mb-8"
            >
              AUTOMATE
              <br />
              GROWTH.
              <br />
              ZERO STRESS.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-sans text-[0.97rem] md:text-[1.06rem] font-light text-white/70 tracking-wide"
            >
              We use AI to scale your business without you lifting a finger.
            </motion.p>
          </div>
        </div>

        {/* Subtle Scroll Hint */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mix-blend-difference z-20"
        >
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">Scroll</span>
            <div className="w-[1px] h-8 bg-white/50"></div>
        </motion.div>
      </div>

      {/* --------------------------------------------------
          LAYER 2: The Promise (The Curtain)
          Logic: relative z-10 means it sits naturally below Layer 1
          in the DOM, but has a higher Z-index.
          CRITICAL: It MUST have a solid background color (e.g., bg-[#0f0f0f])
          to physically hide Layer 1 as it scrolls up.
      -------------------------------------------------- */}
      <div className="relative h-screen w-full z-10 flex items-center justify-center border-t border-white/10 bg-[#0f0f0f]">
        <div className="absolute inset-0 z-0">
           <video
            src="/images/Whisk_ugmyqwm1mtm0qty50cm2etotygm4qtl2ctn10cz.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 grayscale contrast-125 object-[center_35%] md:object-center"
          />
           <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center h-full">
          <div className="flex flex-col items-center justify-start md:justify-center h-full pt-32 md:pt-0">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display font-bold text-4xl md:text-8xl lg:text-[9rem] leading-none text-white tracking-tighter mb-4"
            >
              <span className="block md:inline whitespace-nowrap">BUILD WHILE</span>
              <br className="hidden md:block" />
              <span className="block md:inline whitespace-nowrap">YOU SLEEP.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative font-sans text-xs md:text-lg font-light text-white tracking-wide mb-12 md:mb-12 max-w-2xl px-6 py-2 overflow-hidden whitespace-nowrap"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></span>
              <span className="relative z-10">Beat the competition without hiring a team.</span>
            </motion.p>

            <style>{`
              @keyframes shimmer {
                0% {
                  background-position: -200% 0;
                }
                100% {
                  background-position: 200% 0;
                }
              }

              .animate-shimmer {
                animation: shimmer 8s ease-in-out infinite;
              }
            `}</style>
          </div>

          <div className="absolute bottom-[18%] inset-x-0 flex justify-center md:relative md:bottom-auto md:inset-x-auto">
            <motion.button
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4, duration: 0.5 }}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => {
                 const footer = document.querySelector('footer');
                 footer?.scrollIntoView({ behavior: 'smooth', block: 'start' });
               }}
               className="w-[250px] bg-white text-black font-display font-bold text-sm md:text-base px-10 py-5 uppercase tracking-widest hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Get My Custom Roadmap
            </motion.button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
