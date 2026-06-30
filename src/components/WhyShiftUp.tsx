import React from 'react';
import { motion } from 'motion/react';
import { 
  Laptop, Code2, Users, FileSpreadsheet, 
  Award, Calendar, MessageSquare, Sparkles 
} from 'lucide-react';
import AnimatedGridBackground from './AnimatedGridBackground';

export default function WhyShiftUp() {
  const points = [
    {
      title: 'Industry-Level Curriculum',
      desc: 'No outdated syllabi. We teach the exact modern production tech stacks that elite product companies actively hire for, updated quarterly.',
      icon: <Code2 className="h-6 w-6 text-[#2C241B]" />,
      tag: 'FAANG Standards',
      size: 'col-span-1 md:col-span-2'
    },
    {
      title: 'Production Projects',
      desc: 'Build real-world E-Commerce, CRM, and cloud-deployed microservices. Learn Docker, AWS, and Git collaborative workflows.',
      icon: <Laptop className="h-6 w-6 text-[#2C241B]" />,
      tag: 'Not Mock Projects',
      size: 'col-span-1'
    },
    {
      title: 'Mock Placement Pipelines',
      desc: 'Rigorous mock interviews and real-world system design questions modeled directly after top enterprise hiring evaluations.',
      icon: <Users className="h-6 w-6 text-[#2C241B]" />,
      tag: '95% Pass Rate',
      size: 'col-span-1'
    },
    {
      title: 'Elite Resume Crafting & LinkedIn',
      desc: 'Personalized branding workshops to construct powerful, keyword-optimized resumes and professional digital profiles that grab recruiter attention.',
      icon: <FileSpreadsheet className="h-6 w-6 text-[#2C241B]" />,
      tag: 'Recruiter Bait',
      size: 'col-span-1 md:col-span-2'
    },
    {
      title: 'Secure Internship Certification',
      desc: 'Complete an in-house real project internship. Receive recognized physical & verifiable digital certification with lifetime validation and QR verification.',
      icon: <Award className="h-6 w-6 text-[#2C241B]" />,
      tag: 'Verifiable',
      size: 'col-span-1'
    },
    {
      title: 'Flexible Live & Weekend Batches',
      desc: 'Specifically designed schedules for both college students and working professionals looking for direct technical upskilling.',
      icon: <Calendar className="h-6 w-6 text-[#2C241B]" />,
      tag: 'Hybrid Format',
      size: 'col-span-1'
    },
    {
      title: 'Recorded LMS & 24/7 Support',
      desc: 'Unlock lifetime access to our custom Student Portal (LMS). Track syllabus, watch live recordings, complete assignments, and seek round-the-clock developer doubt support.',
      icon: <MessageSquare className="h-6 w-6 text-[#2C241B]" />,
      tag: 'Always Open',
      size: 'col-span-1 md:col-span-2'
    }
  ];

  return (
    <section id="why-shiftup" className="py-24 bg-[#FDFBF7] relative overflow-hidden text-[#2C241B] border-b border-neutral-900">
      {/* 4K Background Image and Animated Grid */}
      <AnimatedGridBackground 
        imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=3840" 
        overlayClassName="bg-[#FDFBF7]/92"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#2C241B] bg-[#2C241B]/10 border border-[#2C241B]/10 px-3 py-1.5 rounded-none inline-flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-[#FDFBF7] animate-pulse" />
            THE SHIFTUP ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#2C241B] mt-4 tracking-tight leading-tight">
            Designed to Bridge the Gap. <br />
            Built for High-Velocity Careers.
          </h2>
          <p className="text-[#7A6C5D] mt-4 text-base sm:text-lg font-light">
            Traditional degrees teach history; we prepare you for the production-ready future. Compare our intensive industry training features.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, idx) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className={`bg-[#F5F2EB]/80 border border-[#E8E0D5] p-6 sm:p-8 rounded-none shadow-sm hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group ${point.size}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-none bg-[#EAE4D9] border border-[#E8E0D5] flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                    {point.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#7A6C5D] bg-[#EAE4D9] border border-[#E8E0D5] px-2.5 py-1 rounded-none">
                    {point.tag}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-display font-black text-[#2C241B] transition-colors">
                  {point.title}
                </h3>
                
                <p className="text-[#7A6C5D] text-xs sm:text-sm mt-3 leading-relaxed font-light">
                  {point.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#2C241B] hover:gap-2.5 transition-all">
                Learn more
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
