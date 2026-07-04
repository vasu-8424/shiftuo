import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play, Sparkles, CheckCircle2, Cpu, Code2, GraduationCap, Laptop, Database, Briefcase, Globe } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
  onOpenSuccessStories: () => void;
}

const backgroundVisuals = [
  {
    title: 'Modern Ecosystem',
    subtitle: 'Industry-Grade Training',
    icon: <Database className="h-5 w-5 text-[#8C7A6B]" />
  },
  {
    title: 'Cloud Native',
    subtitle: 'Scalable Infrastructure',
    icon: <Cpu className="h-5 w-5 text-[#8C7A6B]" />
  },
  {
    title: 'Professional Environment',
    subtitle: 'Real-time Workflow',
    icon: <Briefcase className="h-5 w-5 text-[#8C7A6B]" />
  }
];

const placementFeeds = [
  { name: 'K. Pranay Kumar', role: 'Full Stack Engineer', company: 'Amazon', package: '₹14.2 LPA', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150' },
  { name: 'M. Haritha', role: 'React Developer', company: 'Deloitte', package: '₹7.5 LPA', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
  { name: 'Ch. Sai Teja', role: 'DevOps Engineer', company: 'Cognizant', package: '₹6.8 LPA', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
  { name: 'Y. Ananya Sree', role: 'UI/UX Designer', company: 'Microsoft', package: '₹11.8 LPA', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' }
];

export default function Hero({ onNavigate, onOpenSuccessStories }: HeroProps) {
  const [activeVisualIndex, setActiveVisualIndex] = useState(0);
  const [activePlacementIndex, setActivePlacementIndex] = useState(0);

  useEffect(() => {
    const visualInterval = setInterval(() => {
      setActiveVisualIndex((prev) => (prev + 1) % backgroundVisuals.length);
    }, 8000);

    const placementInterval = setInterval(() => {
      setActivePlacementIndex((prev) => (prev + 1) % placementFeeds.length);
    }, 4500);

    return () => {
      clearInterval(visualInterval);
      clearInterval(placementInterval);
    };
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-[#FDFBF7] text-[#2C241B] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=3840&sat=-100')` }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-[#FDFBF7]/80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#2C241B]/10 rounded-none border border-[#2C241B]/15 text-xs font-bold text-[#2C241B] tracking-wider uppercase"
          >
            <span className="flex h-2 w-2 rounded-none bg-[#FDFBF7] animate-pulse"></span>
            <Sparkles className="h-3.5 w-3.5 animate-spin text-[#FDFBF7]" />
            Vijayawada's #1 Industry-Ready Tech Ecosystem
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-[#2C241B] leading-[1.05] sm:leading-[0.95] tracking-tight"
          >
            Become <span className="text-[#2C241B] font-sans font-normal">Industry Ready.</span> <br />
            <span className="opacity-40 text-[#2C241B] font-sans font-normal">Not Just Degree Ready.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#7A6C5D] text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-light"
          >
            Master production-level engineering stacks with real-world projects, expert corporate mentorship, intensive mock pipelines, and guaranteed placement training. <strong className="text-[#2C241B] font-semibold">Bridging the gap between academic foundation and industry reality.</strong>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 w-full pt-2"
          >
            <button
              onClick={() => onNavigate('demo-form')}
              className="px-8 py-4 bg-[#2C241B] hover:bg-[#4A3F35] text-[#FDFBF7] rounded-none text-sm font-bold uppercase tracking-wider shadow-2xl transition-all duration-300 flex items-center gap-2 cursor-pointer"
              id="hero-btn-demo"
            >
              Start Free Demo
              <ArrowRight className="h-4.5 w-4.5" />
            </button>

            <button
              onClick={() => onNavigate('courses')}
              className="px-7 py-4 bg-transparent hover:bg-[#2C241B]/10 text-[#2C241B] border border-[#2C241B]/20 rounded-none text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
              id="hero-btn-courses"
            >
              Explore Courses
            </button>

            <button
              onClick={onOpenSuccessStories}
              className="inline-flex items-center gap-2 px-4 py-3 text-[#7A6C5D] hover:text-[#2C241B] transition-colors font-bold text-sm tracking-wide cursor-pointer"
              id="hero-btn-success"
            >
              <span className="flex h-10 w-10 items-center justify-center bg-[#2C241B]/10 hover:bg-[#2C241B]/20 rounded-none text-[#2C241B] shadow-sm transition-colors">
                <Play className="h-4 w-4 fill-current ml-0.5 text-[#2C241B]" />
              </span>
              Success Stories
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 pt-4 border-t border-[#E8E0D5] w-full max-w-lg"
          >
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="h-5 w-5 text-[#FDFBF7] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#2C241B]">100% Placement</h4>
                <p className="text-xs text-[#8C7A6B]">Preparation Support</p>
              </div>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="h-5 w-5 text-[#FDFBF7] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#2C241B]">Live Production</h4>
                <p className="text-xs text-[#8C7A6B]">Portfolio Projects</p>
              </div>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="h-5 w-5 text-[#FDFBF7] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#2C241B]">Corporate Lab</h4>
                <p className="text-xs text-[#8C7A6B]">Vijayawada Center</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Right Visuals Dashboard */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
          <div className="relative w-full max-w-[480px]">
            {/* Visual Glass Frame Wrapper */}
            <div className="bg-[#F5F2EB]/80 backdrop-blur-xl p-4 sm:p-5 rounded-none shadow-2xl relative border border-[#E8E0D5] overflow-hidden text-[#2C241B]">
              
              {/* Internal Dashboard Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#E8E0D5] mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 bg-neutral-700 rounded-none block" />
                    <span className="w-3 h-3 bg-neutral-600 rounded-none block" />
                    <span className="w-3 h-3 bg-neutral-400 rounded-none block" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#7A6C5D] ml-2">shiftup_dev_terminal</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#4A3F35] bg-[#2C241B]/10 px-2.5 py-0.5 rounded-none">
                  <span className="w-1.5 h-1.5 bg-[#2C241B] rounded-none animate-ping" />
                  LIVE RUNTIME
                </div>
              </div>

              {/* Animated visual representation instead of code */}
              <div className="bg-[#FDFBF7] rounded-none p-6 flex flex-col justify-center items-center min-h-[170px] shadow-inner border border-[#E8E0D5] relative">
                <div className="flex items-center gap-3 text-[#2C241B]">
                  {backgroundVisuals[activeVisualIndex].icon}
                  <span className="font-semibold text-lg">{backgroundVisuals[activeVisualIndex].title}</span>
                </div>
                <span className="text-[#8C7A6B] text-sm mt-2">{backgroundVisuals[activeVisualIndex].subtitle}</span>
              </div>

              {/* Dynamic Metrics Widgets Area */}
              <div className="grid grid-cols-2 gap-3.5 mt-4">
                {/* Placement Widget */}
                <div className="bg-[#F5F2EB] border border-[#E8E0D5] p-3.5 rounded-none shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-1 bg-[#2C241B]/10 text-[#2C241B] rounded-none">
                    <Briefcase className="h-3.5 w-3.5" />
                  </div>
                  <h5 className="text-[10px] font-extrabold text-[#7A6C5D] uppercase tracking-widest leading-none mb-1">
                    LIVE PLACEMENTS
                  </h5>
                  
                  <div className="relative h-12 overflow-hidden mt-1.5">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activePlacementIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col justify-center"
                      >
                        <div className="leading-tight">
                          <p className="text-[11px] font-extrabold text-[#2C241B] truncate max-w-[140px]">
                            {placementFeeds[activePlacementIndex].name}
                          </p>
                          <p className="text-[10px] font-semibold text-[#7A6C5D] truncate max-w-[140px]">
                            {placementFeeds[activePlacementIndex].role}
                          </p>
                          <p className="text-[10px] font-bold text-[#4A3F35] mt-0.5">
                            {placementFeeds[activePlacementIndex].company} • {placementFeeds[activePlacementIndex].package}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Course Progress / Placed Tracker Widget */}
                <div className="bg-[#F5F2EB] border border-[#E8E0D5] p-3.5 rounded-none shadow-sm flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute -right-2 -bottom-2 opacity-5 text-[#2C241B]">
                    <GraduationCap className="h-16 w-16" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-[#7A6C5D] uppercase tracking-widest">
                      SYSTEM METRICS
                    </span>
                    <span className="h-2 w-2 rounded-none bg-[#FDFBF7] animate-pulse" />
                  </div>
                  <div className="mt-2.5">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display font-black text-2xl text-[#2C241B]">95%</span>
                      <span className="text-[10px] font-bold text-[#7A6C5D]">Success Rate</span>
                    </div>
                    {/* Tiny animated progress indicator */}
                    <div className="w-full bg-[#D2C4B1] h-1.5 rounded-none overflow-hidden mt-1.5">
                      <div className="bg-[#2C241B] h-full rounded-none w-[95%] animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Placements Counter Banner inside Dashboard */}
              <div className="mt-3.5 bg-[#2C241B]/5 rounded-none p-2.5 border border-[#2C241B]/5 flex items-center justify-between text-xs font-semibold text-[#4A3F35]">
                <span className="flex items-center gap-1.5">
                  <Globe className="h-4 w-4 text-[#2C241B] animate-spin" />
                  Hiring Partner Portal
                </span>
                <span className="text-[10px] bg-[#2C241B] text-[#FDFBF7] font-extrabold px-2 py-0.5 rounded">
                  200+ RECRUITERS
                </span>
              </div>
            </div>

            {/* Extra decorative glass floating card overlay */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="hidden sm:flex absolute -right-6 -bottom-4 bg-[#FDFBF7] border border-[#E8E0D5] px-4 py-3 rounded-none shadow-xl items-center gap-3 max-w-[190px]"
            >
              <div className="p-2 bg-[#EAE4D9] text-[#2C241B] rounded-none">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <h6 className="text-xs font-bold text-[#2C241B]">Certification</h6>
                <p className="text-[10px] text-[#7A6C5D]">ISO & Industry Approved</p>
              </div>
            </motion.div>

            {/* Another float card on the top left */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="hidden sm:flex absolute -left-6 -top-4 bg-[#FDFBF7] border border-[#E8E0D5] px-4 py-2.5 rounded-none shadow-xl items-center gap-2.5 max-w-[170px]"
            >
              <div className="p-1.5 bg-[#EAE4D9] text-[#2C241B] rounded-none">
                <Sparkles className="h-4 w-4 text-[#2C241B]" />
              </div>
              <div className="leading-tight">
                <h6 className="text-xs font-black text-[#2C241B]">50+ Mentors</h6>
                <p className="text-[9px] text-[#7A6C5D]">FAANG Engineers</p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
