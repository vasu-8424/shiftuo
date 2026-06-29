import React from 'react';
import { Sparkles } from 'lucide-react';
import AnimatedGridBackground from './AnimatedGridBackground';

const partners = [
  { name: 'Google', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg' },
  { name: 'Microsoft', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoft/microsoft-original.svg' },
  { name: 'Amazon', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Oracle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg' },
  { name: 'Deloitte', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg' }, // Substituting with premium high-quality devicons or stylized logo cards
  { name: 'IBM', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg' },
  { name: 'Infosys', logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&h=80&fit=crop' }, // Dynamic abstract representations of premium tech companies
  { name: 'TCS', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=80&h=80&fit=crop' },
  { name: 'Accenture', logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=80&h=80&fit=crop' },
  { name: 'Cognizant', logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&h=80&fit=crop' }
];

export default function HiringPartners() {
  return (
    <section className="py-16 bg-black relative overflow-hidden border-b border-neutral-900 text-white">
      {/* 4K Background Image and Animated Grid */}
      <AnimatedGridBackground 
        imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=3840" 
        overlayClassName="bg-black/94"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <p className="text-xs font-extrabold uppercase tracking-widest text-neutral-400 mb-6 flex items-center justify-center gap-2">
          <Sparkles className="h-3 w-3 text-black animate-pulse" />
          OUR ALUMNI ARE RECRUITED BY INDUSTRY TITANS
        </p>

        {/* Infinite marquee block row 1 (moving left) */}
        <div className="relative w-full overflow-hidden mb-6 flex items-center">
          <div className="flex gap-6 animate-marquee shrink-0 hover:[animation-play-state:paused] cursor-pointer">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div 
                key={`${partner.name}-r1-${index}`}
                className="flex items-center gap-3 bg-[#0a0a0a]/80 border border-neutral-800 px-6 py-3.5 rounded-none shadow-sm hover:border-neutral-700 transition-all duration-300 min-w-[170px]"
              >
                {partner.logo.startsWith('http') && partner.logo.includes('devicon') ? (
                  <img src={partner.logo} alt={partner.name} className="h-6 w-6 object-contain invert opacity-60" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-6 h-6 rounded-none bg-neutral-900 flex items-center justify-center text-[10px] font-black text-neutral-400">
                    {partner.name[0]}
                  </div>
                )}
                <span className="font-display font-extrabold text-sm text-neutral-300 tracking-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Infinite marquee block row 2 (moving right - reverse) */}
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="flex gap-6 animate-marquee-reverse shrink-0 hover:[animation-play-state:paused] cursor-pointer">
            {[...partners, ...partners, ...partners].reverse().map((partner, index) => (
              <div 
                key={`${partner.name}-r2-${index}`}
                className="flex items-center gap-3 bg-[#0a0a0a]/80 border border-neutral-800 px-6 py-3.5 rounded-none shadow-sm hover:border-neutral-700 transition-all duration-300 min-w-[170px]"
              >
                {partner.logo.startsWith('http') && partner.logo.includes('devicon') ? (
                  <img src={partner.logo} alt={partner.name} className="h-6 w-6 object-contain invert opacity-60" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-6 h-6 rounded-none bg-neutral-900 flex items-center justify-center text-[10px] font-black text-neutral-400">
                    {partner.name[0]}
                  </div>
                )}
                <span className="font-display font-extrabold text-sm text-neutral-300 tracking-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs font-semibold text-neutral-500 mt-6">
          And 180+ more product companies and tech agencies across India.
        </p>
      </div>
    </section>
  );
}
