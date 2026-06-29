import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';
import AnimatedGridBackground from './AnimatedGridBackground';

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: 'How is ShiftUP Software Academy different from a typical college degree or training institute?',
    answer: 'Typical college degrees focus heavily on outdated history and abstract theory. ShiftUP bridges the gap by training you on the exact production-level engineering stacks that today\'s leading technology firms actively hire for. We teach Git, Docker, microservices architecture, and real cloud deployment, backed by mock placement pipelines and corporate mentorship.'
  },
  {
    question: 'Where is your physical training academy located, and what are the center timings?',
    answer: 'Our physical training center is located in Gandhinagar, Vijayawada, Andhra Pradesh. We feature ultra-premium high-end developer workstations, dedicated local labs, and interactive classrooms. We are open from Monday through Friday, 9:00 AM to 6:00 PM, with flexible weekend classes for working professionals.'
  },
  {
    question: 'Do you offer a placement assurance or recruiting assistance program?',
    answer: 'Absolutely. Every specialized program at ShiftUP includes rigorous, mandatory mock interview processes, resume parsing, LinkedIn optimization, and placement submissions. We are connected directly to over 200+ active recruiting partners and product-based tech agencies who regularly hire our trainees.'
  },
  {
    question: 'Can college students or working professionals attend weekend or evening classes?',
    answer: 'Yes! We feature flexible schedules designed explicitly to accommodate college students who are still completing their academic coursework, as well as working professionals looking to execute a high-value career pivot into elite software engineering.'
  },
  {
    question: 'Do students receive real verifiable certification or internship credits?',
    answer: 'Yes, upon successful completion of your production projects and assignments, you will receive an industry-recognized physical and digital certificate. Each credential includes a verifiable QR code linked to our database and is fully approved for college internship credits.'
  },
  {
    question: 'What if I fail a concept or miss a live class session?',
    answer: 'No trainee is left behind. Every single live lecture is recorded and published instantly to our custom Student Portal (LMS). You receive lifetime access to study materials, assignments, and round-the-clock developer doubt support on our Discord channel.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-black relative scroll-mt-10 border-b border-neutral-900 text-white">
      {/* 4K Background Image and Animated Grid */}
      <AnimatedGridBackground 
        imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=3840" 
        overlayClassName="bg-black/92"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-white bg-white/10 px-3 py-1.5 rounded-none inline-flex items-center gap-1.5 border border-white/10">
            <HelpCircle className="h-4 w-4 text-white" />
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4 tracking-tight leading-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-neutral-400 mt-3 text-sm sm:text-base font-light">
            Find immediate answers regarding admissions, batch structures, placement support, and lab details.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-[#050505]/95 border border-neutral-800 rounded-none overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-neutral-900/60 transition-colors cursor-pointer"
                  id={`faq-btn-${idx}`}
                >
                  <span className="font-display font-extrabold text-sm sm:text-base text-white tracking-tight">
                    {faq.question}
                  </span>
                  <span className="p-1 bg-neutral-900 border border-neutral-850 rounded-none text-white shrink-0">
                    {isOpen ? <ChevronUp className="h-4 w-4 text-white" /> : <ChevronDown className="h-4 w-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-[#0a0a0a]/50 border-t border-neutral-900"
                    >
                      <p className="p-5 text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
