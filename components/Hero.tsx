
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
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </div>

        <div className="relative z-10 flex items-center justify-start w-full h-full px-6 md:pl-16 lg:pl-24">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white tracking-tighter mb-8"
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
              className="font-sans text-lg md:text-xl font-light text-white/70 tracking-wide"
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
            className="w-full h-full object-cover opacity-60 grayscale contrast-125"
          />
           <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display font-bold text-5xl md:text-8xl lg:text-[9rem] leading-none text-white tracking-tighter mb-10"
          >
            GROW WHILE
            <br />
            YOU SLEEP.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-sans text-lg md:text-xl font-light text-white/70 tracking-wide mb-12 max-w-2xl"
          >
            Beat the competition without hiring a team.
          </motion.p>

          <motion.button 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4, duration: 0.5 }}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-white text-black font-display font-bold text-sm md:text-base px-10 py-5 uppercase tracking-widest hover:bg-gray-200 transition-colors"
          >
            Get My Custom Roadmap
          </motion.button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
