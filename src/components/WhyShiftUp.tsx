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
      icon: <Code2 className="h-6 w-6 text-white" />,
      tag: 'FAANG Standards',
      size: 'col-span-1 md:col-span-2'
    },
    {
      title: 'Production Projects',
      desc: 'Build real-world E-Commerce, CRM, and cloud-deployed microservices. Learn Docker, AWS, and Git collaborative workflows.',
      icon: <Laptop className="h-6 w-6 text-white" />,
      tag: 'Not Mock Projects',
      size: 'col-span-1'
    },
    {
      title: 'Mock Placement Pipelines',
      desc: 'Rigorous mock interviews and real-world system design questions modeled directly after top enterprise hiring evaluations.',
      icon: <Users className="h-6 w-6 text-white" />,
      tag: '95% Pass Rate',
      size: 'col-span-1'
    },
    {
      title: 'Elite Resume Crafting & LinkedIn',
      desc: 'Personalized branding workshops to construct powerful, keyword-optimized resumes and professional digital profiles that grab recruiter attention.',
      icon: <FileSpreadsheet className="h-6 w-6 text-white" />,
      tag: 'Recruiter Bait',
      size: 'col-span-1 md:col-span-2'
    },
    {
      title: 'Secure Internship Certification',
      desc: 'Complete an in-house real project internship. Receive recognized physical & verifiable digital certification with lifetime validation and QR verification.',
      icon: <Award className="h-6 w-6 text-white" />,
      tag: 'Verifiable',
      size: 'col-span-1'
    },
    {
      title: 'Flexible Live & Weekend Batches',
      desc: 'Specifically designed schedules for both college students and working professionals looking for direct technical upskilling.',
      icon: <Calendar className="h-6 w-6 text-white" />,
      tag: 'Hybrid Format',
      size: 'col-span-1'
    },
    {
      title: 'Recorded LMS & 24/7 Support',
      desc: 'Unlock lifetime access to our custom Student Portal (LMS). Track syllabus, watch live recordings, complete assignments, and seek round-the-clock developer doubt support.',
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      tag: 'Always Open',
      size: 'col-span-1 md:col-span-2'
    }
  ];

  return (
    <section id="why-shiftup" className="py-24 bg-black relative overflow-hidden text-white border-b border-neutral-900">
      {/* 4K Background Image and Animated Grid */}
      <AnimatedGridBackground 
        imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=3840" 
        overlayClassName="bg-black/92"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-white bg-white/10 border border-white/10 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-emerald-400 animate-pulse" />
            THE SHIFTUP ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mt-4 tracking-tight leading-tight">
            Designed to Bridge the Gap. <br />
            Built for High-Velocity Careers.
          </h2>
          <p className="text-neutral-400 mt-4 text-base sm:text-lg font-light">
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
              className={`bg-[#0a0a0a]/80 border border-neutral-800 p-6 sm:p-8 rounded-3xl shadow-sm hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group ${point.size}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                    {point.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-md">
                    {point.tag}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-display font-black text-white transition-colors">
                  {point.title}
                </h3>
                
                <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed font-light">
                  {point.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-white hover:gap-2.5 transition-all">
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
