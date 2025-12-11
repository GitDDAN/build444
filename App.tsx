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

  // Cal.com embed initialization - inline script method
  useEffect(() => {
    // @ts-ignore
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.eu/embed/embed.js", "init");

    // @ts-ignore
    Cal("init", "30min", { origin: "https://app.cal.eu" });
    // @ts-ignore
    Cal.ns["30min"]("ui", {
      hideEventTypeDetails: false,
      layout: "week_view"
    });
  }, []);

  return (
    <div className="bg-background text-white min-h-screen selection:bg-white selection:text-black">
      <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4 md:py-6 flex justify-between items-center text-white bg-black/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
        <div className="flex items-center gap-2 md:gap-3 md:mix-blend-difference">
          <img src="/images/build444_white_logo.png" alt="BUILD444 Logo" className="h-7 w-7 md:h-10 md:w-10 object-contain mix-blend-normal" />
          <span className="font-display font-bold text-base md:text-xl tracking-tighter">BUILD444</span>
        </div>
        <button
          data-cal-namespace="30min"
          data-cal-link="build444/30min"
          data-cal-config='{"layout":"week_view"}'
          className="bg-white text-black font-display font-bold text-[9px] md:text-xs px-3 md:px-6 py-1.5 md:py-3 uppercase tracking-widest hover:bg-gray-200 transition-colors cursor-pointer"
          aria-label="Book a 30-minute consultation call"
        >
          Book a Call
        </button>
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