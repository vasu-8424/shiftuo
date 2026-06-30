import React from 'react';
import { motion } from 'motion/react';
import { User, GraduationCap, Briefcase } from 'lucide-react';
import AnimatedGridBackground from './AnimatedGridBackground';

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-[#2C241B] relative overflow-hidden border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-none overflow-hidden border border-neutral-900 bg-neutral-100">
              <img 
                src="/founder.jpg" 
                alt="Shiva Charan Kondra" 
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 border-[8px] border-[#2C241B]/10 mix-blend-overlay pointer-events-none"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FDFBF7] z-[-1] hidden md:block"></div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FDFBF7] bg-[#FDFBF7]/5 border border-[#FDFBF7]/10 px-3 py-1.5 rounded-none inline-flex items-center gap-1.5 mb-6">
              <User className="h-3 w-3 text-[#FDFBF7]" />
              LEADERSHIP
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#FDFBF7] tracking-tight leading-tight mb-4">
              Shiva Charan Kondra
            </h2>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#8C7A6B] mb-8 pb-8 border-b border-neutral-200">
              Founder & Chief Executive Officer (CEO)
            </h3>

            <div className="space-y-6">
              <p className="text-neutral-600 text-base sm:text-lg font-light leading-relaxed">
                Shiva Charan Kondra is the Founder and Chief Executive Officer of <strong className="font-bold text-[#FDFBF7]">Pinaka Solutions</strong>. 
                With a vision to bridge the gap between traditional education and industry demands, he leads the initiative to empower the next generation of tech professionals.
              </p>
              
              <div className="bg-neutral-50 p-6 border border-neutral-200 rounded-none flex items-start gap-4">
                <div className="p-3 bg-[#2C241B] border border-neutral-200 rounded-none shrink-0">
                  <GraduationCap className="h-6 w-6 text-[#FDFBF7]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#FDFBF7] mb-1">Academic Excellence</h4>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">
                    He holds a Bachelor of Business Administration (BBA) and a Master of Science (MS) in Information Technology, 
                    combining business knowledge with technical expertise to drive innovation and operational excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-neutral-200"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#7A6C5D]">Pinaka Solutions</span>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
