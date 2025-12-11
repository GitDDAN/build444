import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  sub: string;
  imgUrl: string;
  id: string;
}

const cards: CardProps[] = [
  {
    id: "01",
    sub: "DESIGN & IDENTITY",
    title: "WE BUILD YOUR BRAND.",
    description: "Professional websites and brand identity that positions you as the obvious choice in your market.",
    imgUrl: "/images/section1.jpeg"
  },
  {
    id: "02",
    sub: "AUTOMATION",
    title: "WE HANDLE THE BOOKINGS.",
    description: "Stop answering the phone 24/7. Our systems book appointments and reply to customers for you.",
    imgUrl: "/images/section2.png"
  },
  {
    id: "03",
    sub: "GROWTH",
    title: "WE BRING THE CUSTOMERS.",
    description: "Proven systems for reviews, leads, and sales. We build it, optimize it, and hand you the keys.",
    imgUrl: "/images/section3.png"
  }
];

const HorizontalScrollSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map vertical scroll progress to horizontal movement
  // Move from 0% to -66% roughly to show 3 cards (since 1st is visible, we need to slide 2 full widths)
  // Tweaked values for better responsiveness
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[350vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 md:gap-12 px-6 md:px-24">
          
          {/* Intro Text Block before cards start */}
          <div className="flex flex-col justify-center min-w-[90vw] md:min-w-[40vw] pr-12">
             <h2 className="font-display font-bold text-5xl md:text-7xl mb-6 leading-none">
                THE<br/>PROCESS
             </h2>
             <p className="font-sans text-gray-400 max-w-sm">
                Scroll to see exactly how we transform your business in three steps.
             </p>
             <div className="mt-8 text-sm uppercase tracking-widest text-white/30">
                &mdash; Drag / Scroll Down
             </div>
          </div>

          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative h-[70vh] w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 overflow-hidden bg-surface border border-white/5 hover:border-white/20 transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-all duration-700 group-hover:scale-105">
                <img
                  src={card.imgUrl}
                  alt={card.title}
                  className="h-full w-full object-cover opacity-50 grayscale-[0.7] group-hover:opacity-60 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent group-hover:via-black/10 transition-all duration-700" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <div className="mb-auto flex justify-between items-start w-full border-b border-white/20 pb-4">
                     <span className="font-mono text-4xl md:text-6xl text-white/20 font-bold group-hover:text-white/30 transition-colors duration-500">{card.id}</span>
                     <span className="font-sans text-xs uppercase tracking-widest bg-white text-black px-2 py-1">{card.sub}</span>
                </div>

                <div className="mt-12 md:mt-0 transform transition-all duration-500 group-hover:translate-y-0">
                    <h3 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 uppercase">
                    {card.title}
                    </h3>
                    <p className="font-sans text-gray-300 text-sm md:text-lg max-w-md leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                    {card.description}
                    </p>
                </div>
              </div>
            </div>
          ))}
          
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollSection;