import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Quote, Play, CheckCircle2, ChevronLeft, ChevronRight, X, 
  Sparkles, ExternalLink, Volume2, Maximize, PlayCircle, Monitor 
} from 'lucide-react';
import { SuccessStory } from '../types';
import AnimatedGridBackground from './AnimatedGridBackground';

const reviewsData: SuccessStory[] = [
  {
    id: 'pranay',
    name: 'K. Pranay Kumar',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150',
    role: 'Associate Software Engineer',
    company: 'Amazon',
    salary: '₹14.2 LPA',
    increase: '340% Salary Hike',
    review: 'ShiftUP changed my entire career trajectory. In college, we only learned basic C and Java definitions. Here, we designed a multi-instance Docker cluster and synchronized PostgreSQL replication logs. The mock interviews were exactly like Amazon\'s technical rounds.',
    linkedin: 'https://linkedin.com/in/shiftup-pranay',
    videoUrl: 'pranay-amazon-testimonial'
  },
  {
    id: 'haritha',
    name: 'M. Haritha',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    role: 'React Frontend Specialist',
    company: 'Deloitte',
    salary: '₹7.5 LPA',
    increase: 'Fresher Placement',
    review: 'The structured learning journey is incredible. I had zero backend experience, but by week 16, I was configuring JWT middleware handlers and deploying AWS S3 file upload routes. The continuous doubt support from corporate trainers is unmatched.',
    linkedin: 'https://linkedin.com/in/shiftup-haritha',
    videoUrl: 'haritha-deloitte-testimonial'
  },
  {
    id: 'sai',
    name: 'Ch. Sai Teja',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    role: 'DevOps & Cloud Engineer',
    company: 'Cognizant',
    salary: '₹6.8 LPA',
    increase: 'Non-CS to Tech Shift',
    review: 'Coming from a Civil Engineering background, I was highly skeptical. But ShiftUP\'s step-by-step foundation curriculum built my confidence. The local labs in Gandhinagar feel like an authentic high-end corporate office workspace.',
    linkedin: 'https://linkedin.com/in/shiftup-saiteja',
    videoUrl: 'saiteja-cognizant-testimonial'
  },
  {
    id: 'ananya',
    name: 'Y. Ananya Sree',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    role: 'UI/UX Designer',
    company: 'Microsoft',
    salary: '₹11.8 LPA',
    increase: 'Elite Placement',
    review: 'ShiftUP\'s design track is world-class. From wireframing on real briefs to establishing production design systems and working with React devs on CSS transitions. They prepared my portfolio to stand out to senior design managers.',
    linkedin: 'https://linkedin.com/in/shiftup-ananya',
    videoUrl: 'ananya-microsoft-testimonial'
  }
];

export default function StudentReviews() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeVideoReview, setActiveVideoReview] = useState<SuccessStory | null>(null);
  const [isPlayingTestimonial, setIsPlayingTestimonial] = useState(false);
  const [playbackTime, setPlaybackTime] = useState(0);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const handlePlayVideo = (story: SuccessStory) => {
    setActiveVideoReview(story);
    setIsPlayingTestimonial(true);
    setPlaybackTime(0);

    // Simulate playback tick
    const timer = setInterval(() => {
      setPlaybackTime((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 1000);
  };

  const closeVideoPlayer = () => {
    setIsPlayingTestimonial(false);
    setActiveVideoReview(null);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden border-b border-neutral-900 text-white">
      {/* 4K Background Image and Animated Grid */}
      <AnimatedGridBackground 
        imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=3840" 
        overlayClassName="bg-black/92"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-white bg-white/10 px-3 py-1.5 rounded-none inline-flex items-center gap-1.5 border border-white/10">
            <Sparkles className="h-3.5 w-3.5 text-black" />
            STUDENT TALENT POOL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mt-4 tracking-tight leading-tight">
            Success Stories That Inspire
          </h2>
          <p className="text-neutral-400 mt-3 text-base sm:text-lg font-light">
            Read how aspiring students from Andhra Pradesh transformed into high-paid software engineers through ShiftUP academy.
          </p>
        </div>

        {/* Carousel / Deck */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden p-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-[#0a0a0a]/80 p-6 sm:p-10 rounded-none shadow-lg border border-neutral-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                {/* Student Avatar Column */}
                <div className="md:col-span-4 flex flex-col items-center text-center">
                  <div className="relative">
                    <img 
                      src={reviewsData[activeSlide].avatar} 
                      alt={reviewsData[activeSlide].name}
                      className="w-28 h-28 sm:w-36 sm:h-36 rounded-none object-cover border-4 border-neutral-800 shadow-md grayscale hover:grayscale-0 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-2 right-2 bg-black text-white p-1.5 rounded-none shadow-md">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                  </div>
                  
                  <h4 className="font-display font-extrabold text-white text-lg mt-4 leading-tight">
                    {reviewsData[activeSlide].name}
                  </h4>
                  <p className="text-xs text-neutral-400 font-bold mt-0.5 uppercase tracking-wide">
                    {reviewsData[activeSlide].role}
                  </p>

                  {/* Hire Badge */}
                  <div className="mt-4 bg-neutral-950 border border-neutral-800 rounded-none px-4 py-2.5 leading-tight w-full">
                    <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest block">HIRED BY</span>
                    <strong className="text-white font-display font-black text-base">{reviewsData[activeSlide].company}</strong>
                    <div className="text-xs font-bold text-neutral-400 mt-0.5">{reviewsData[activeSlide].salary}</div>
                  </div>
                </div>

                {/* Review details column */}
                <div className="md:col-span-8 flex flex-col justify-between h-full space-y-4">
                  <div className="relative">
                    <Quote className="h-10 w-10 text-white/5 absolute -top-5 -left-4 select-none" />
                    <span className="text-xs font-extrabold text-black bg-white px-2.5 py-1 rounded-none mb-3.5 inline-block">
                      {reviewsData[activeSlide].increase}
                    </span>
                    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light italic relative z-10">
                      "{reviewsData[activeSlide].review}"
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-900">
                    <button
                      onClick={() => handlePlayVideo(reviewsData[activeSlide])}
                      className="px-5 py-2.5 bg-white text-black hover:bg-neutral-200 rounded-none text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-md cursor-pointer"
                      id={`btn-play-${reviewsData[activeSlide].id}`}
                    >
                      <Play className="h-3.5 w-3.5 fill-current" />
                      Stream Video Testimonial
                    </button>

                    <a 
                      href={reviewsData[activeSlide].linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      LinkedIn Profile
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 bg-[#0a0a0a] hover:bg-neutral-900 border border-neutral-800 rounded-none shadow-sm text-white transition-all cursor-pointer"
              id="rev-btn-prev"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-[#0a0a0a] hover:bg-neutral-900 border border-neutral-800 rounded-none shadow-sm text-white transition-all cursor-pointer"
              id="rev-btn-next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Simulated Player Modal Overlay */}
        <AnimatePresence>
          {isPlayingTestimonial && activeVideoReview && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div 
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-[#0a0a0a] border border-neutral-800 rounded-none shadow-2xl max-w-2xl w-full overflow-hidden text-white"
              >
                {/* Simulated Player Top Bar */}
                <div className="bg-black px-5 py-3.5 border-b border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-none bg-black animate-pulse" />
                    <span className="text-xs font-mono font-bold text-neutral-400">testifier_stream_h264_live.mp4</span>
                  </div>
                  <button 
                    onClick={closeVideoPlayer}
                    className="p-1.5 hover:bg-neutral-950 text-neutral-400 hover:text-white rounded-none transition-colors cursor-pointer"
                    id="btn-close-video"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Simulated Video Canvas area */}
                <div className="aspect-video bg-black relative flex flex-col justify-between p-6 overflow-hidden">
                  
                  {/* Subtle video ambient grid */}
                  <div className="absolute inset-0 bg-radial-gradient /10  opacity-50 pointer-events-none" />

                  {/* Top corner watermark */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-2.5 py-1 rounded-none text-[9px] font-black tracking-widest text-white flex items-center gap-1.5 border border-white/10">
                    <Monitor className="h-3 w-3 text-black animate-pulse" />
                    SHIFTUP PLACEMENT LEDGER
                  </div>

                  {/* Student Card overlay inside video */}
                  <div className="mt-auto relative z-10 flex items-center gap-4 bg-black/80 backdrop-blur border border-white/10 p-4 rounded-none max-w-md">
                    <img 
                      src={activeVideoReview.avatar} 
                      alt={activeVideoReview.name}
                      className="w-12 h-12 rounded-none border border-neutral-800 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="leading-tight">
                      <h4 className="text-sm font-bold text-white">{activeVideoReview.name}</h4>
                      <p className="text-[10px] text-neutral-400 font-bold">{activeVideoReview.role} at {activeVideoReview.company}</p>
                      <p className="text-[10px] text-white font-extrabold mt-1">Package: {activeVideoReview.salary} • {activeVideoReview.increase}</p>
                    </div>
                  </div>

                  {/* Live Stream Transcript Text running overlay */}
                  <div className="mt-4 bg-black/80 p-3 rounded-none border border-white/5 relative z-10">
                    <p className="text-xs text-neutral-500 font-mono select-none uppercase tracking-widest text-[8px]">TRANSCRIPT FEED</p>
                    <p className="text-xs text-white leading-relaxed font-medium mt-1 font-mono italic">
                      {playbackTime < 30 ? `"...so when I joined ShiftUP, we jumped directly into microservices with Docker. It was intimidating but the mentor support was phenomenal..."` :
                       playbackTime < 60 ? `"...the mock interviews prepared me perfectly. I learned how to structure system architectures and speak like a production lead..."` :
                       playbackTime < 90 ? `"...highly recommend ShiftUP Software Academy to students and graduates looking to skip basic theories and land actual tech roles..."` :
                       `"...getting hired at ${activeVideoReview.company} was a dream come true. Truly bridged the gap for me. Thank you ShiftUP!"`}
                    </p>
                  </div>
                </div>

                {/* Simulated Player Controls */}
                <div className="bg-black p-4 flex items-center justify-between text-neutral-400 text-xs border-t border-neutral-800">
                  <div className="flex items-center gap-3">
                    <PlayCircle className="h-5 w-5 text-white cursor-pointer" />
                    <Volume2 className="h-4.5 w-4.5 cursor-pointer" />
                    <span>0:14 / 0:45</span>
                  </div>

                  {/* Fake Seekbar */}
                  <div className="flex-1 mx-6 h-1 bg-neutral-850 rounded-none overflow-hidden">
                    <div 
                      className="bg-white h-full rounded-none transition-all duration-1000" 
                      style={{ width: `${playbackTime}%` }}
                    />
                  </div>

                  <Maximize className="h-4.5 w-4.5 cursor-pointer" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
