import React from 'react';
import { Sparkles } from 'lucide-react';
import { FaGoogle, FaMicrosoft, FaAmazon } from 'react-icons/fa';
import { SiAccenture, SiInfosys, SiTata } from 'react-icons/si';
import AnimatedGridBackground from './AnimatedGridBackground';

const partners = [
  { name: 'Google', Icon: FaGoogle },
  { name: 'Microsoft', Icon: FaMicrosoft },
  { name: 'Amazon', Icon: FaAmazon },
  { name: 'Oracle', Icon: null },
  { name: 'Deloitte', Icon: null }, 
  { name: 'IBM', Icon: null },
  { name: 'Infosys', Icon: SiInfosys }, 
  { name: 'TCS', Icon: SiTata },
  { name: 'Accenture', Icon: SiAccenture },
  { name: 'Cognizant', Icon: null }
];

export default function HiringPartners() {
  return (
    <section className="py-16 bg-[#FDFBF7] relative overflow-hidden border-b border-[#E8E0D5] text-[#2C241B]">
      {/* 4K Background Image and Animated Grid */}
      <AnimatedGridBackground 
        imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=3840" 
        overlayClassName="bg-[#FDFBF7]/94"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <p className="text-xs font-extrabold uppercase tracking-widest text-[#7A6C5D] mb-6 flex items-center justify-center gap-2">
          <Sparkles className="h-3 w-3 text-[#2C241B] animate-pulse" />
          OUR ALUMNI ARE RECRUITED BY INDUSTRY TITANS
        </p>

        {/* Partner grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {partners.map((partner, index) => {
            const IconComponent = partner.Icon;
            return (
            <div 
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 bg-[#F5F2EB]/80 border border-[#E8E0D5] px-6 py-3.5 rounded-none shadow-sm hover:border-neutral-700 transition-all duration-300 min-w-[170px]"
            >
              {IconComponent ? (
                <IconComponent className="h-6 w-6 text-[#4A3F35]" />
              ) : (
                <div className="w-6 h-6 rounded-none bg-[#EAE4D9] flex items-center justify-center text-[10px] font-black text-[#7A6C5D]">
                  {partner.name[0]}
                </div>
              )}
              <span className="font-display font-extrabold text-sm text-[#635547] tracking-tight">
                {partner.name}
              </span>
            </div>
          )})}

        </div>

        <p className="text-xs font-semibold text-[#8C7A6B] mt-6">
          And 180+ more product companies and tech agencies across India.
        </p>
      </div>
    </section>
  );
}
