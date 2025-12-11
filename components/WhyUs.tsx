import React from 'react';
import { motion } from 'framer-motion';

const WhyUs: React.FC = () => {
  return (
    <section className="bg-background py-32 md:py-48 px-6 overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-8xl leading-[0.9] tracking-tighter mb-16 text-center md:text-left">
            <span className="text-gray-600">MOST AGENCIES GIVE YOU A TOOL.</span>
            <br />
            <span className="text-white">WE GIVE YOU A SOLUTION.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-start border-t border-white/10 pt-12">
            <div className="flex-1">
                <p className="font-sans text-xl md:text-2xl text-gray-300 leading-relaxed">
                    No coding required. No team to manage. We build, automate, and maintain everything for you.
                </p>
            </div>
            <div className="flex-1 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <p className="font-display text-lg uppercase tracking-wide">Custom Design & Development</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <p className="font-display text-lg uppercase tracking-wide">AI-Powered Automation</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <p className="font-display text-lg uppercase tracking-wide">Ongoing Support & Optimization</p>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;