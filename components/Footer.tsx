import React, { useState } from 'react';

const Footer: React.FC = () => {
  // 1. STATE: Added 'businessName' and 'website'
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // 2. FUNCTION: Sends data to n8n
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !description || !name) return;

    setStatus('loading');

    try {
      // YOUR n8n URL
      const webhookUrl = 'https://build8.app.n8n.cloud/webhook/967ff9b1-5a6a-4475-8305-b16d2c1225f9';

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // 3. PAYLOAD: Sending all 5 fields now
        body: JSON.stringify({ 
            name,
            businessName,
            website,
            email, 
            description, 
            date: new Date().toISOString() 
        }),
      });

      setStatus('success');
      // Clear all fields
      setName('');
      setBusinessName('');
      setWebsite('');
      setEmail(''); 
      setDescription('');
      alert("Roadmap request sent! Check your email."); 
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setStatus('idle');
    }
  };

  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-16">
            <h2 className="font-display font-bold text-5xl md:text-7xl mb-6 tracking-tighter">
                READY TO<br/>SCALE UP?
            </h2>
            <p className="font-sans text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                Tell us about your manual process, and we'll generate a custom AI roadmap for you.
            </p>

            <form className="flex flex-col gap-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
                
                {/* ROW 1: Name & Business Name */}
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flex-1 bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-gray-600 font-sans"
                    />
                    <input
                        type="text"
                        placeholder="Business Name"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="flex-1 bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-gray-600 font-sans"
                    />
                </div>

                {/* ROW 2: Website URL */}
                <input
                    type="url"
                    placeholder="Website URL (e.g. https://yoursite.com)"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-gray-600 font-sans"
                />

                {/* ROW 3: Description */}
                <textarea
                    placeholder="Describe a manual process (e.g., 'I spend 2 hours a day copying leads from Instagram to Excel')..."
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-gray-600 font-sans resize-none"
                />

                {/* ROW 4: Email & Submit */}
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email..."
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-gray-600 font-sans"
                    />
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="bg-white text-black font-display font-bold uppercase tracking-widest px-8 py-4 hover:bg-gray-200 transition-colors whitespace-nowrap"
                    >
                        {status === 'loading' ? 'Analyzing...' : 'Get Roadmap'}
                    </button>
                </div>
            </form>
        </div>
        
        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-sans tracking-widest uppercase pt-12 border-t border-white/5">
            <p>&copy; 2025 BUILD444. All Rights Reserved.</p>
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