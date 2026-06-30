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
    review: 'Coming from a Civil Engineering background, I was highly skeptical. But ShiftUP\'s step-by-step foundation curriculum built my confidence. The local labs in Benz Circle feel like an authentic high-end corporate office workspace.',
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
    <section className="py-24 bg-[#FDFBF7] relative overflow-hidden border-b border-neutral-900 text-[#2C241B]">
      {/* 4K Background Image and Animated Grid */}
      <AnimatedGridBackground 
        imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=3840" 
        overlayClassName="bg-[#FDFBF7]/92"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#2C241B] bg-[#2C241B]/10 px-3 py-1.5 rounded-none inline-flex items-center gap-1.5 border border-[#2C241B]/10">
            <Sparkles className="h-3.5 w-3.5 text-[#FDFBF7]" />
            STUDENT TALENT POOL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#2C241B] mt-4 tracking-tight leading-tight">
            Success Stories That Inspire
          </h2>
          <p className="text-[#7A6C5D] mt-3 text-base sm:text-lg font-light">
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
                className="bg-[#F5F2EB]/80 p-6 sm:p-10 rounded-none shadow-lg border border-[#E8E0D5] grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                {/* Student Avatar Column */}
                <div className="md:col-span-4 flex flex-col items-center text-center">

                  
                  <h4 className="font-display font-extrabold text-[#2C241B] text-lg mt-4 leading-tight">
                    {reviewsData[activeSlide].name}
                  </h4>
                  <p className="text-xs text-[#7A6C5D] font-bold mt-0.5 uppercase tracking-wide">
                    {reviewsData[activeSlide].role}
                  </p>

                  {/* Hire Badge */}
                  <div className="mt-4 bg-[#F5F2EB] border border-[#E8E0D5] rounded-none px-4 py-2.5 leading-tight w-full">
                    <span className="text-[10px] font-black text-[#8C7A6B] uppercase tracking-widest block">HIRED BY</span>
                    <strong className="text-[#2C241B] font-display font-black text-base">{reviewsData[activeSlide].company}</strong>
                    <div className="text-xs font-bold text-[#7A6C5D] mt-0.5">{reviewsData[activeSlide].salary}</div>
                  </div>
                </div>

                {/* Review details column */}
                <div className="md:col-span-8 flex flex-col justify-between h-full space-y-4">
                  <div className="relative">
                    <Quote className="h-10 w-10 text-[#2C241B]/5 absolute -top-5 -left-4 select-none" />
                    <span className="text-xs font-extrabold text-[#FDFBF7] bg-[#2C241B] px-2.5 py-1 rounded-none mb-3.5 inline-block">
                      {reviewsData[activeSlide].increase}
                    </span>
                    <p className="text-[#635547] text-sm sm:text-base leading-relaxed font-light italic relative z-10">
                      "{reviewsData[activeSlide].review}"
                    </p>
                  </div>

                  {/* Removed buttons */}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 bg-[#F5F2EB] hover:bg-[#EAE4D9] border border-[#E8E0D5] rounded-none shadow-sm text-[#2C241B] transition-all cursor-pointer"
              id="rev-btn-prev"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-[#F5F2EB] hover:bg-[#EAE4D9] border border-[#E8E0D5] rounded-none shadow-sm text-[#2C241B] transition-all cursor-pointer"
              id="rev-btn-next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal removed */}
      </div>
    </section>
  );
}
