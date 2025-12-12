import React, { useState, useRef } from 'react';

const Footer: React.FC = () => {
  const successMessageRef = useRef<HTMLDivElement>(null);
  // 1. STATE: Added 'businessName' and 'website'
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [websiteError, setWebsiteError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  // 2. FUNCTION: Simple formatting for links (no strict validation)
  const formatLinks = (links: string): string => {
    return links.trim(); // Just return trimmed input - accept any links
  };

  // 3. FUNCTION: Sends data to n8n
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset all errors
    setNameError('');
    setEmailError('');
    setDescriptionError('');
    setWebsiteError('');

    // Custom validation
    let hasError = false;

    if (!name.trim()) {
      setNameError('Please enter your name');
      hasError = true;
    }

    if (!email.trim()) {
      setEmailError('Please enter your email');
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      hasError = true;
    }

    if (!description.trim()) {
      setDescriptionError('Please describe your manual process');
      hasError = true;
    }

    // No validation needed for links - it's optional and accepts any text

    if (hasError) return;

    setStatus('loading');

    // Format links (just trim)
    const formattedLinks = formatLinks(website);

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
            website: formattedLinks,
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

      // Scroll success message into view on mobile
      setTimeout(() => {
        successMessageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);

      // Reset to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');

      // Reset to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
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

            <form className="flex flex-col gap-4 max-w-lg mx-auto" onSubmit={handleSubmit} aria-label="AI Roadmap Request Form" noValidate>

                {/* Success/Error Messages */}
                {status === 'success' && (
                    <div
                        ref={successMessageRef}
                        className="bg-green-500/10 border-2 border-green-500/30 text-green-400 px-6 py-5 font-sans text-sm md:text-base font-medium rounded-sm animate-pulse-once text-left"
                        role="alert"
                    >
                        <span className="text-lg mr-2">✓</span> Roadmap request sent successfully! Check your email.
                    </div>
                )}
                {status === 'error' && (
                    <div
                        ref={successMessageRef}
                        className="bg-red-500/10 border-2 border-red-500/30 text-red-400 px-6 py-5 font-sans text-sm md:text-base font-medium rounded-sm text-left"
                        role="alert"
                    >
                        <span className="text-lg mr-2">✗</span> Something went wrong. Please try again or contact us directly.
                    </div>
                )}

                {/* ROW 1: Name & Business Name */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setNameError('');
                            }}
                            aria-label="Your full name"
                            aria-invalid={nameError ? 'true' : 'false'}
                            className={`w-full bg-white/5 border ${nameError ? 'border-red-500/50' : 'border-white/10'} text-white px-6 py-4 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all placeholder:text-gray-600 font-sans`}
                        />
                        {nameError && (
                            <p className="text-red-400 text-xs mt-1.5 font-sans text-left" role="alert">
                                {nameError}
                            </p>
                        )}
                    </div>
                    <input
                        type="text"
                        placeholder="Business Name (Optional)"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        aria-label="Your business name (optional)"
                        className="flex-1 bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all placeholder:text-gray-600 font-sans"
                    />
                </div>

                {/* ROW 2: Links (Optional) */}
                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Links - Optional (e.g., website, LinkedIn, Instagram)"
                        value={website}
                        onChange={(e) => {
                            setWebsite(e.target.value);
                            setWebsiteError(''); // Clear error when user types
                        }}
                        aria-label="Any links you'd like to share (optional)"
                        aria-invalid={websiteError ? 'true' : 'false'}
                        className={`w-full bg-white/5 border ${websiteError ? 'border-red-500/50' : 'border-white/10'} text-white px-6 py-4 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all placeholder:text-gray-600 font-sans`}
                    />
                    {websiteError && (
                        <p className="text-red-400 text-xs mt-1.5 font-sans text-left" role="alert">
                            {websiteError}
                        </p>
                    )}
                </div>

                {/* ROW 3: Description */}
                <div className="w-full">
                    <textarea
                        placeholder="Describe a manual process (e.g., 'I spend 2 hours a day copying leads from Instagram to Excel')..."
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                            setDescriptionError('');
                        }}
                        rows={4}
                        aria-label="Describe your manual process that you want to automate"
                        aria-invalid={descriptionError ? 'true' : 'false'}
                        className={`w-full bg-white/5 border ${descriptionError ? 'border-red-500/50' : 'border-white/10'} text-white px-6 py-4 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all placeholder:text-gray-600 font-sans resize-none`}
                    />
                    {descriptionError && (
                        <p className="text-red-400 text-xs mt-1.5 font-sans text-left" role="alert">
                            {descriptionError}
                        </p>
                    )}
                </div>

                {/* ROW 4: Email & Submit */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <input
                            type="email"
                            placeholder="Enter your email..."
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError('');
                            }}
                            aria-label="Your email address"
                            aria-invalid={emailError ? 'true' : 'false'}
                            className={`w-full bg-white/5 border ${emailError ? 'border-red-500/50' : 'border-white/10'} text-white px-6 py-4 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all placeholder:text-gray-600 font-sans`}
                        />
                        {emailError && (
                            <p className="text-red-400 text-xs mt-1.5 font-sans text-left" role="alert">
                                {emailError}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        aria-label="Submit roadmap request"
                        className="bg-white text-black font-display font-bold uppercase tracking-widest px-8 py-4 hover:bg-gray-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'loading' ? 'Analyzing...' : 'Get Roadmap'}
                    </button>
                </div>
            </form>
        </div>
        
        {/* Back to Top Button */}
        <div className="flex justify-center mb-12">
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 px-8 py-4 transition-all duration-500 hover:bg-white/10"
                aria-label="Scroll to top"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="relative flex items-center gap-3">
                    <span className="font-display font-bold text-xs uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">Back to Top</span>
                    <svg
                        className="w-4 h-4 text-white/70 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </div>
            </button>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-sans tracking-widest uppercase pt-12 border-t border-white/5">
            <p>&copy; 2025 BUILD444. All Rights Reserved.</p>
            <div className="flex flex-col md:flex-row gap-6 mt-4 md:mt-0 items-center">
                <a href="tel:+4561712425" className="hover:text-white transition-colors" aria-label="Call us at +45 61 71 24 25">+45 61 71 24 25</a>
                <a href="mailto:daniel@build444.com" className="hover:text-white transition-colors" aria-label="Email us">Contact</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;