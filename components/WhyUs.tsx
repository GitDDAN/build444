import React from 'react';
import { motion } from 'framer-motion';

const WhyUs: React.FC = () => {
  return (
    <section className="bg-background py-16 md:py-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-8xl leading-[0.9] tracking-tighter mb-16 text-center md:text-left">
            <span className="text-gray-400">MOST AGENCIES GIVE YOU A TOOL.</span>
            <br />
            <span className="text-white">WE GIVE YOU A SOLUTION.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-start border-t border-white/10 pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 relative border border-white/10 bg-white/5 p-8 md:p-10"
            >
                <div className="absolute top-0 left-8 w-12 h-1 bg-white/30"></div>
                <p className="font-sans text-lg md:text-xl text-gray-300 leading-relaxed">
                    No coding required. No team to manage. We build, automate, and maintain everything for you.
                </p>
            </motion.div>
            <div className="flex-1 flex flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group relative border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                    <div className="absolute top-6 left-0 w-1 h-8 bg-white/30 group-hover:bg-white transition-all duration-300"></div>
                    <p className="font-display text-sm md:text-base uppercase tracking-widest text-gray-300 group-hover:text-white transition-colors duration-300">Custom Design & Development</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group relative border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                    <div className="absolute top-6 left-0 w-1 h-8 bg-white/30 group-hover:bg-white transition-all duration-300"></div>
                    <p className="font-display text-sm md:text-base uppercase tracking-widest text-gray-300 group-hover:text-white transition-colors duration-300">AI-Powered Automation</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="group relative border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                    <div className="absolute top-6 left-0 w-1 h-8 bg-white/30 group-hover:bg-white transition-all duration-300"></div>
                    <p className="font-display text-sm md:text-base uppercase tracking-widest text-gray-300 group-hover:text-white transition-colors duration-300">Ongoing Support & Optimization</p>
                </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;