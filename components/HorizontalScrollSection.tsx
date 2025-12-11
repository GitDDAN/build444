import React, { useRef } from 'react';
import { motion, useTransform, useScroll, useInView } from 'framer-motion';

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
    title: "WE BUILD YOUR\nBRAND.",
    description: "Professional websites and brand identity that positions you as the obvious choice in your market.",
    imgUrl: "/images/section1.jpeg"
  },
  {
    id: "02",
    sub: "AUTOMATION",
    title: "WE HANDLE\nTHE BOOKINGS.",
    description: "Stop answering the phone 24/7. Our systems book appointments and reply to customers for you.",
    imgUrl: "/images/section2.png"
  },
  {
    id: "03",
    sub: "GROWTH",
    title: "WE BRING THE\nCUSTOMERS.",
    description: "Proven systems for reviews, leads, and sales. We build it, optimize it, and hand you the keys.",
    imgUrl: "/images/section3.png"
  }
];

const HorizontalScrollSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map vertical scroll progress to horizontal movement (desktop only)
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative bg-background md:h-[350vh]">
      {/* Mobile: Normal vertical scroll */}
      <div className="md:hidden py-16 px-6">
        {/* Intro Text */}
        <div className="mb-12">
          <h2 className="font-display font-bold text-4xl mb-4 leading-none">
            THE<br/>PROCESS
          </h2>
          <p className="font-sans text-gray-400 max-w-sm">
            Scroll to see exactly how we transform your business in three steps.
          </p>
        </div>

        {/* Cards stacked vertically */}
        <div className="flex flex-col gap-8">
          {cards.map((card) => {
            const cardRef = useRef(null);
            const isInView = useInView(cardRef, { amount: 0.5 });
            const [isPressed, setIsPressed] = React.useState(false);

            return (
              <motion.div
                key={card.id}
                ref={cardRef}
                className="relative h-[60vh] w-full overflow-hidden bg-surface border border-white/10"
                animate={{
                  borderColor: isInView ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'
                }}
                transition={{ duration: 0.5 }}
                onTouchStart={() => setIsPressed(true)}
                onTouchEnd={() => setIsPressed(false)}
                onTouchCancel={() => setIsPressed(false)}
              >
                {/* Background Image */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: isInView ? 1.05 : 1
                  }}
                  transition={{ duration: 0.7 }}
                >
                  <motion.img
                    src={card.imgUrl}
                    alt={card.title}
                    className="h-full w-full object-cover"
                    animate={{
                      opacity: isInView ? 0.8 : 0.5,
                      filter: isInView ? 'grayscale(0%)' : 'grayscale(50%)'
                    }}
                    transition={{ duration: 0.7 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
                    animate={{
                      opacity: isInView ? 0.3 : 0.6
                    }}
                    transition={{ duration: 0.7 }}
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-6"
                  animate={{
                    opacity: isPressed ? 0 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-auto flex justify-between items-start w-full border-b border-white/20 pb-3">
                    <span className="font-mono text-3xl text-white/20 font-bold">{card.id}</span>
                    <span className="font-sans text-[10px] uppercase tracking-widest bg-white text-black px-2 py-1">{card.sub}</span>
                  </div>

                  <div className="mt-4">
                    <motion.h3
                      className="font-display font-bold text-[1.65rem] leading-tight mb-3 uppercase whitespace-pre-line"
                      animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : 20
                      }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      className="font-sans text-gray-300 text-[0.8rem] leading-relaxed"
                      animate={{
                        opacity: isInView ? 1 : 0.7,
                        y: isInView ? 0 : 10
                      }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      {card.description}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Desktop: Horizontal scroll */}
      <div className="hidden md:block sticky top-0 h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-24 h-full items-center">
          
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
              className="group relative h-[70vh] w-[60vw] lg:w-[45vw] flex-shrink-0 overflow-hidden bg-surface border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-all duration-500 group-hover:scale-105">
                <img
                  src={card.imgUrl}
                  alt={card.title}
                  className="h-full w-full object-cover opacity-60 grayscale-[0.5] group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:via-black/5 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-12">
                <div className="mb-auto flex justify-between items-start w-full border-b border-white/20 pb-4">
                     <span className="font-mono text-6xl text-white/20 font-bold group-hover:text-white/30 transition-colors duration-500">{card.id}</span>
                     <span className="font-sans text-xs uppercase tracking-widest bg-white text-black px-2 py-1">{card.sub}</span>
                </div>

                <div className="transform transition-all duration-500 group-hover:translate-y-0">
                    <h3 className="font-display font-bold text-5xl lg:text-6xl leading-tight mb-6 uppercase">
                    {card.title}
                    </h3>
                    <p className="font-sans text-gray-300 text-lg max-w-md leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-500">
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