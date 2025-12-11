import React, { useEffect } from 'react';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import HorizontalScrollSection from './components/HorizontalScrollSection';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  // specialized cursor effect logic could go here, strictly using css/simple js for reliability
  useEffect(() => {
    // Smooth scroll behavior for anchor links if any
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-background text-white min-h-screen selection:bg-white selection:text-black">
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center text-white">
        <div className="flex items-center gap-3 mix-blend-difference">
          <img src="/images/build444_white_logo.png" alt="BUILD444 Logo" className="h-10 w-10 object-contain mix-blend-normal" />
          <span className="font-display font-bold text-xl tracking-tighter">BUILD444</span>
        </div>
        <a href="tel:+4561712425" className="hidden md:block text-sm font-sans tracking-widest hover:opacity-70 transition-opacity mix-blend-difference">+45 61 71 24 25</a>
      </nav>

      <main>
        <Hero />
        <TrustBar />
        <HorizontalScrollSection />
        <WhyUs />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;