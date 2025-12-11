import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-4xl text-center">
        
        <div className="mb-16">
            <h2 className="font-display font-bold text-5xl md:text-7xl mb-6 tracking-tighter">
                READY TO<br/>SCALE UP?
            </h2>
            <p className="font-sans text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                Get your custom roadmap showing exactly how automation will work for your business.
            </p>

            <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                    type="email"
                    placeholder="Enter your email..."
                    className="flex-1 bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-gray-600 font-sans"
                />
                <button
                    type="submit"
                    className="bg-white text-black font-display font-bold uppercase tracking-widest px-8 py-4 hover:bg-gray-200 transition-colors whitespace-nowrap"
                >
                    Get My Roadmap
                </button>
            </form>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-sans tracking-widest uppercase pt-12 border-t border-white/5">
            <p>&copy; 2024 BUILD444. All Rights Reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;