import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Briefcase, GraduationCap, Trophy, ThumbsUp, Building2, Sparkles } from 'lucide-react';
import AnimatedGridBackground from './AnimatedGridBackground';

export default function TrustMetrics() {
  const metrics = [
    {
      id: 'students',
      value: '5000+',
      label: 'Students Trained',
      description: 'Transformed into engineers',
      icon: <Users className="h-6 w-6 text-white" />,
      color: 'bg-neutral-900 border-neutral-800'
    },
    {
      id: 'placements',
      value: '1000+',
      label: 'Placements Secured',
      description: 'Landed at global agencies',
      icon: <Briefcase className="h-6 w-6 text-white" />,
      color: 'bg-neutral-900 border-neutral-800'
    },
    {
      id: 'trainers',
      value: '50+',
      label: 'Industry Trainers',
      description: 'Working tech professionals',
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      color: 'bg-neutral-900 border-neutral-800'
    },
    {
      id: 'courses',
      value: '30+',
      label: 'Specialized Courses',
      description: 'Targeted tech curricula',
      icon: <Trophy className="h-6 w-6 text-white" />,
      color: 'bg-neutral-900 border-neutral-800'
    },
    {
      id: 'success',
      value: '95%',
      label: 'Success Rate',
      description: 'Placement qualification',
      icon: <ThumbsUp className="h-6 w-6 text-white" />,
      color: 'bg-neutral-900 border-neutral-800'
    },
    {
      id: 'companies',
      value: '200+',
      label: 'Hiring Companies',
      description: 'Active recruiting network',
      icon: <Building2 className="h-6 w-6 text-white" />,
      color: 'bg-neutral-900 border-neutral-800'
    }
  ];

  return (
    <section className="py-16 bg-black border-y border-neutral-900 relative overflow-hidden text-white">
      {/* 4K Background Image and Animated Grid */}
      <AnimatedGridBackground 
        imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=3840" 
        overlayClassName="bg-black/92"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-white bg-white/10 border border-white/10 px-3 py-1 rounded-none flex items-center gap-1.5 w-fit mx-auto">
            <Sparkles className="h-3 w-3 text-black" />
            VALIDATED TRACK RECORD
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-3.5">
            Empowered by Numbers, Chosen by Tech Leaders
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-[#0a0a0a]/80 border border-neutral-800 p-5 rounded-none shadow-sm hover:border-neutral-700 transition-all duration-300 relative group"
            >
              <div className={`w-12 h-12 rounded-none bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 transition-transform group-hover:scale-105 duration-300`}>
                {metric.icon}
              </div>
              
              <div className="flex flex-col">
                <span className="font-display font-black text-3xl sm:text-4xl text-white leading-none">
                  {metric.value}
                </span>
                <span className="font-bold text-neutral-200 text-xs sm:text-sm mt-1.5 leading-tight">
                  {metric.label}
                </span>
                <span className="text-[10px] text-neutral-500 font-medium mt-1">
                  {metric.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
