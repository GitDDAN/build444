import React, { useState } from 'react';

const Footer: React.FC = () => {
  // 1. STATE: Added 'businessName' and 'website'
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [websiteError, setWebsiteError] = useState('');

  // 2. FUNCTION: Validates and formats website URL
  const validateAndFormatWebsite = (url: string): string | null => {
    const trimmed = url.trim();
    if (!trimmed) return ''; // Empty is okay (optional field)

    // Remove protocol if present for validation
    const withoutProtocol = trimmed.replace(/^https?:\/\//i, '');

    // Check if it has a valid domain ending (TLD)
    // Matches common TLDs: .com, .net, .org, .io, .co, .uk, etc.
    const domainPattern = /^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

    if (!domainPattern.test(withoutProtocol)) {
      return null; // Invalid domain
    }

    // Valid domain - add https:// if not present
    return trimmed.match(/^https?:\/\//i) ? trimmed : 'https://' + trimmed;
  };

  // 3. FUNCTION: Sends data to n8n
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !description || !name) return;

    // Validate website if provided
    if (website.trim()) {
      const formattedWebsite = validateAndFormatWebsite(website);
      if (formattedWebsite === null) {
        setWebsiteError('Please enter a valid domain (e.g., example.com)');
        return;
      }
      setWebsiteError('');
    }

    setStatus('loading');

    // Format website URL
    const formattedWebsite = validateAndFormatWebsite(website) || '';

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
            website: formattedWebsite,
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

            <form className="flex flex-col gap-4 max-w-lg mx-auto" onSubmit={handleSubmit} aria-label="AI Roadmap Request Form">

                {/* Success/Error Messages */}
                {status === 'success' && (
                    <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-6 py-4 font-sans text-sm" role="alert">
                        ✓ Roadmap request sent successfully! Check your email.
                    </div>
                )}
                {status === 'error' && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-6 py-4 font-sans text-sm" role="alert">
                        ✗ Something went wrong. Please try again or contact us directly.
                    </div>
                )}

                {/* ROW 1: Name & Business Name */}
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-label="Your full name"
                        className="flex-1 bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all placeholder:text-gray-600 font-sans"
                    />
                    <input
                        type="text"
                        placeholder="Business Name"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        aria-label="Your business name (optional)"
                        className="flex-1 bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all placeholder:text-gray-600 font-sans"
                    />
                </div>

                {/* ROW 2: Website URL */}
                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Website (e.g. yoursite.com)"
                        value={website}
                        onChange={(e) => {
                            setWebsite(e.target.value);
                            setWebsiteError(''); // Clear error when user types
                        }}
                        aria-label="Your website URL (optional)"
                        aria-invalid={websiteError ? 'true' : 'false'}
                        className={`w-full bg-white/5 border ${websiteError ? 'border-red-500/50' : 'border-white/10'} text-white px-6 py-4 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all placeholder:text-gray-600 font-sans`}
                    />
                    {websiteError && (
                        <p className="text-red-400 text-xs mt-2 font-sans" role="alert">
                            {websiteError}
                        </p>
                    )}
                </div>

                {/* ROW 3: Description */}
                <textarea
                    placeholder="Describe a manual process (e.g., 'I spend 2 hours a day copying leads from Instagram to Excel')..."
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    aria-label="Describe your manual process that you want to automate"
                    className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all placeholder:text-gray-600 font-sans resize-none"
                />

                {/* ROW 4: Email & Submit */}
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email..."
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="Your email address"
                        className="flex-1 bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all placeholder:text-gray-600 font-sans"
                    />
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