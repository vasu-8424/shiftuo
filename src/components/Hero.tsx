import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play, Sparkles, CheckCircle2, Cpu, Code2, GraduationCap, Laptop, Database, Briefcase, Globe } from 'lucide-react';
import AnimatedGridBackground from './AnimatedGridBackground';

interface HeroProps {
  onNavigate: (section: string) => void;
  onOpenSuccessStories: () => void;
}

const backgroundVisuals = [
  {
    title: 'Modern Coding Environment',
    subtitle: 'Production React & TypeScript',
    icon: <Code2 className="h-5 w-5 text-blue-500" />,
    code: `import React, { useState } from 'react';\n\nexport function AcademyEngine() {\n  const [ready, setReady] = useState(true);\n  return (\n    <div className="industry-ready-node">\n      <Mentorship status="Elite" />\n      <ProjectScope scale="Production" />\n    </div>\n  );\n}`
  },
  {
    title: 'Cloud Native & DevOps',
    subtitle: 'Containerized CI/CD Workflows',
    icon: <Cpu className="h-5 w-5 text-cyan-500" />,
    code: `FROM node:20-alpine\nWORKDIR /usr/src/app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nEXPOSE 3000\nCMD ["node", "dist/server.js"]`
  },
  {
    title: 'Data Science & Databases',
    subtitle: 'Scalable Schemas & Real-time Feeds',
    icon: <Database className="h-5 w-5 text-purple-500" />,
    code: `const userSchema = new Schema({\n  name: { type: String, required: true },\n  skills: [String],\n  placementEligible: Boolean,\n  careerPath: { type: String, default: 'MERN FullStack' }\n});`
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
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-black text-white">
      {/* 4K Background Image and Animated Grid */}
      <AnimatedGridBackground 
        imageUrl="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=3840" 
        overlayClassName="bg-black/90"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/15 text-xs font-bold text-white tracking-wider uppercase"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <Sparkles className="h-3.5 w-3.5 animate-spin text-emerald-400" />
            Vijayawada's #1 Industry-Ready Tech Ecosystem
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-white leading-[1.05] sm:leading-[0.95] tracking-tight"
          >
            Become <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">Industry Ready.</span> <br />
            <span className="opacity-30 text-white">Not Just Degree Ready.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-neutral-400 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-light"
          >
            Master production-level engineering stacks with real-world projects, expert corporate mentorship, intensive mock pipelines, and guaranteed placement training. <strong className="text-white font-semibold">Bridging the gap between academic foundation and industry reality.</strong>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 w-full pt-2"
          >
            <button
              onClick={() => onNavigate('demo-form')}
              className="px-8 py-4 bg-white hover:bg-neutral-200 text-black rounded-xl text-sm font-bold uppercase tracking-wider shadow-2xl transition-all duration-300 flex items-center gap-2 cursor-pointer"
              id="hero-btn-demo"
            >
              Start Free Demo
              <ArrowRight className="h-4.5 w-4.5" />
            </button>

            <button
              onClick={() => onNavigate('courses')}
              className="px-7 py-4 bg-transparent hover:bg-white/10 text-white border border-white/20 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
              id="hero-btn-courses"
            >
              Explore Courses
            </button>

            <button
              onClick={onOpenSuccessStories}
              className="inline-flex items-center gap-2 px-4 py-3 text-neutral-400 hover:text-white transition-colors font-bold text-sm tracking-wide cursor-pointer"
              id="hero-btn-success"
            >
              <span className="flex h-10 w-10 items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white shadow-sm transition-colors">
                <Play className="h-4 w-4 fill-current ml-0.5 text-white" />
              </span>
              Success Stories
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 pt-4 border-t border-neutral-800 w-full max-w-lg"
          >
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">100% Placement</h4>
                <p className="text-xs text-neutral-500">Preparation Support</p>
              </div>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">Live Production</h4>
                <p className="text-xs text-neutral-500">Portfolio Projects</p>
              </div>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">Corporate Lab</h4>
                <p className="text-xs text-neutral-500">Vijayawada Center</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Right Visuals Dashboard */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
          <div className="relative w-full max-w-[480px]">
            {/* Visual Glass Frame Wrapper */}
            <div className="bg-[#0a0a0a]/80 backdrop-blur-xl p-4 sm:p-5 rounded-3xl shadow-2xl relative border border-neutral-800 overflow-hidden text-white">
              
              {/* Internal Dashboard Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-neutral-800 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 bg-neutral-700 rounded-full block" />
                    <span className="w-3 h-3 bg-neutral-600 rounded-full block" />
                    <span className="w-3 h-3 bg-neutral-400 rounded-full block" />
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-400 ml-2">shiftup_dev_terminal</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-neutral-200 bg-white/10 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                  LIVE RUNTIME
                </div>
              </div>

              {/* Live typing visual code window */}
              <div className="bg-black rounded-2xl p-4 font-mono text-[11px] text-neutral-300 leading-relaxed min-h-[170px] shadow-inner border border-neutral-800 relative">
                <div className="absolute top-2 right-3 text-[10px] text-neutral-500 flex items-center gap-1 select-none">
                  <Laptop className="h-3.5 w-3.5" />
                  VS Code v1.9
                </div>
                <div className="flex items-center gap-2 text-white border-b border-neutral-900 pb-2 mb-2 select-none">
                  {backgroundVisuals[activeVisualIndex].icon}
                  <span className="font-semibold text-[11px]">{backgroundVisuals[activeVisualIndex].title}</span>
                  <span className="text-neutral-700">|</span>
                  <span className="text-neutral-500 text-[10px]">{backgroundVisuals[activeVisualIndex].subtitle}</span>
                </div>
                <pre className="overflow-x-auto text-neutral-200">
                  <code>{backgroundVisuals[activeVisualIndex].code}</code>
                </pre>
              </div>

              {/* Dynamic Metrics Widgets Area */}
              <div className="grid grid-cols-2 gap-3.5 mt-4">
                {/* Placement Widget */}
                <div className="bg-[#0f0f0f] border border-neutral-800 p-3.5 rounded-2xl shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-1 bg-white/10 text-white rounded-bl-xl">
                    <Briefcase className="h-3.5 w-3.5" />
                  </div>
                  <h5 className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest leading-none mb-1">
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
                        className="flex items-center gap-2"
                      >
                        <img 
                          src={placementFeeds[activePlacementIndex].avatar} 
                          alt={placementFeeds[activePlacementIndex].name}
                          className="w-8 h-8 rounded-full border border-neutral-800 object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="leading-tight">
                          <p className="text-[11px] font-extrabold text-white truncate max-w-[120px]">
                            {placementFeeds[activePlacementIndex].name}
                          </p>
                          <p className="text-[10px] font-semibold text-neutral-400 truncate max-w-[120px]">
                            {placementFeeds[activePlacementIndex].role}
                          </p>
                          <p className="text-[10px] font-bold text-neutral-200 mt-0.5">
                            {placementFeeds[activePlacementIndex].company} • {placementFeeds[activePlacementIndex].package}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Course Progress / Placed Tracker Widget */}
                <div className="bg-[#0f0f0f] border border-neutral-800 p-3.5 rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute -right-2 -bottom-2 opacity-5 text-white">
                    <GraduationCap className="h-16 w-16" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest">
                      SYSTEM METRICS
                    </span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="mt-2.5">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display font-black text-2xl text-white">95%</span>
                      <span className="text-[10px] font-bold text-neutral-400">Success Rate</span>
                    </div>
                    {/* Tiny animated progress indicator */}
                    <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden mt-1.5">
                      <div className="bg-white h-full rounded-full w-[95%] animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Placements Counter Banner inside Dashboard */}
              <div className="mt-3.5 bg-white/5 rounded-xl p-2.5 border border-white/5 flex items-center justify-between text-xs font-semibold text-neutral-200">
                <span className="flex items-center gap-1.5">
                  <Globe className="h-4 w-4 text-white animate-spin" />
                  Hiring Partner Portal
                </span>
                <span className="text-[10px] bg-white text-black font-extrabold px-2 py-0.5 rounded">
                  200+ RECRUITERS
                </span>
              </div>
            </div>

            {/* Extra decorative glass floating card overlay */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-6 -bottom-4 bg-black border border-neutral-800 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 max-w-[190px]"
            >
              <div className="p-2 bg-neutral-900 text-white rounded-xl">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <h6 className="text-xs font-bold text-white">Certification</h6>
                <p className="text-[10px] text-neutral-400">ISO & Industry Approved</p>
              </div>
            </motion.div>

            {/* Another float card on the top left */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -left-6 -top-4 bg-black border border-neutral-800 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 max-w-[170px]"
            >
              <div className="p-1.5 bg-neutral-900 text-white rounded-lg">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="leading-tight">
                <h6 className="text-xs font-black text-white">50+ Mentors</h6>
                <p className="text-[9px] text-neutral-400">FAANG Engineers</p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
