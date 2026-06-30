import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, ShieldCheck, RefreshCw, Sparkles } from 'lucide-react';
import AnimatedGridBackground from './AnimatedGridBackground';

export default function CertificatePreview() {
  const [recipientName, setRecipientName] = useState('Your Name Here');
  const [selectedCourse, setSelectedCourse] = useState('MERN Stack Developer');
  const [isGenerating, setIsGenerating] = useState(false);
  const [serialNo, setSerialNo] = useState('SU-9082-F82B');

  const courses = [
    'MERN Stack Developer',
    'Java Full Stack Academy',
    'Python Full Stack Suite',
    'AI & Machine Learning',
    'Cloud Computing & DevOps',
    'UI/UX Design Specialist'
  ];

  const triggerGenerate = () => {
    setIsGenerating(true);
    // Generate a new random serial number for realistic effect
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let newSerial = 'SU-';
    for (let i = 0; i < 4; i++) newSerial += chars.charAt(Math.floor(Math.random() * chars.length));
    newSerial += '-';
    for (let i = 0; i < 4; i++) newSerial += chars.charAt(Math.floor(Math.random() * chars.length));

    setTimeout(() => {
      setSerialNo(newSerial);
      setIsGenerating(false);
    }, 1200);
  };

  return (
    <section id="certificates" className="py-24 bg-[#FDFBF7] relative scroll-mt-10 border-b border-neutral-900 text-[#2C241B]">
      {/* 4K Background Image and Animated Grid */}
      <AnimatedGridBackground 
        imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=3840" 
        overlayClassName="bg-[#FDFBF7]/92"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#2C241B] bg-[#2C241B]/10 px-3 py-1.5 rounded-none inline-flex items-center gap-1.5 border border-[#2C241B]/10">
            <ShieldCheck className="h-4 w-4 text-[#FDFBF7]" />
            ISO & NASSCOM COMPLIANT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#2C241B] mt-4 tracking-tight leading-tight">
            Verifiable Global Certifications
          </h2>
          <p className="text-[#7A6C5D] mt-3 text-base sm:text-lg font-light">
            Earn elite physical & digital credentials recognized by global hiring partners. Customize your preview certificate live below.
          </p>
        </div>

        {/* Certificate Customizer block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Settings Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#FDFBF7]/95 border border-[#E8E0D5] p-6 sm:p-7 rounded-none space-y-5">
              <h4 className="text-sm font-black text-[#2C241B] uppercase tracking-wider border-b border-neutral-950 pb-2.5 flex items-center gap-2">
                <Sparkles className="h-4.5 w-4.5 text-[#2C241B] animate-spin" />
                CUSTOMIZE PREVIEW
              </h4>

              {/* Name Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#7A6C5D] uppercase tracking-wider">
                  Recipient Name
                </label>
                <input
                  type="text"
                  maxLength={24}
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="Enter full name"
                  className="w-full px-4 py-3 bg-[#FDFBF7] border border-neutral-850 rounded-none text-sm font-semibold text-[#2C241B] focus:outline-none focus:border-[#2C241B] transition-colors"
                  id="cert-input-name"
                />
              </div>

              {/* Course Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#7A6C5D] uppercase tracking-wider">
                  Academy Program
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FDFBF7] border border-neutral-850 rounded-none text-sm font-semibold text-[#2C241B] focus:outline-none focus:border-[#2C241B] transition-colors cursor-pointer"
                  id="cert-select-course"
                >
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={triggerGenerate}
                disabled={isGenerating}
                className="w-full py-3.5 bg-[#2C241B] text-[#FDFBF7] hover:bg-[#4A3F35] disabled:bg-[#D2C4B1] text-xs font-bold uppercase tracking-wider rounded-none transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                id="btn-cert-generate"
              >
                <RefreshCw className={`h-4 w-4 ${isGenerating ? 'animate-spin' : ''}`} />
                {isGenerating ? 'Regenerating Signature Hash...' : 'Update Certificate'}
              </button>
            </div>

            {/* Validation Checkpoints */}
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 text-xs leading-relaxed text-[#7A6C5D]">
                <CheckCircle2 className="h-5 w-5 text-[#FDFBF7] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2C241B] font-bold">Secure QR Validation:</strong> Scan the integrated QR block to verify certification legitimacy instantly on the ShiftUP portal.
                </div>
              </div>
              <div className="flex items-start gap-3 text-xs leading-relaxed text-[#7A6C5D]">
                <CheckCircle2 className="h-5 w-5 text-[#FDFBF7] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2C241B] font-bold">Lifetime Digital Access:</strong> Stored securely inside our blockchain ledger database with permanent query access.
                </div>
              </div>
              <div className="flex items-start gap-3 text-xs leading-relaxed text-[#7A6C5D]">
                <CheckCircle2 className="h-5 w-5 text-[#FDFBF7] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2C241B] font-bold">NASSCOM & NSDC Endorsement:</strong> Aligned directly under the National Skills Qualification Framework metrics.
                </div>
              </div>
            </div>
          </div>

          {/* Canvas Certificate Column */}
          <div className="lg:col-span-8 flex justify-center">
            <div className="relative w-full max-w-[640px] aspect-[1.414/1] bg-[#FDFBF7] border-[12px] border-double border-[#E8E0D5] p-6 sm:p-10 shadow-2xl flex flex-col justify-between overflow-hidden rounded-none select-none">
              
              {/* Gold / White flourish corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-neutral-700" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-neutral-700" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-neutral-700" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-neutral-700" />

              {/* Watermark in background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                <Award className="w-[280px] h-[280px] text-[#2C241B]" />
              </div>

              {/* Header block */}
              <div className="text-center space-y-1 sm:space-y-2">
                <p className="text-[10px] font-extrabold tracking-widest text-[#2C241B] uppercase">
                  SHIFTUP SOFTWARE ACADEMY
                </p>
                <h3 className="font-display text-base sm:text-2xl font-extrabold text-[#2C241B] uppercase tracking-tight">
                  Certificate of Achievement
                </h3>
                <div className="w-24 h-0.5 bg-[#D2C4B1] mx-auto" />
              </div>

              {/* Recipient body */}
              <div className="text-center space-y-2 sm:space-y-4 my-2 text-[#2C241B]">
                <p className="text-[#7A6C5D] italic text-[11px] sm:text-xs">
                  This secure credential certifies that
                </p>
                <h4 className="font-display text-xl sm:text-3xl font-extrabold text-[#2C241B] tracking-tight text-glow py-1 border-b border-dashed border-[#E8E0D5] w-fit mx-auto px-6">
                  {recipientName}
                </h4>
                <p className="text-[#635547] text-[10px] sm:text-xs leading-relaxed max-w-md mx-auto">
                  has successfully completed the production-level technical curriculum and project pipelines for the program
                </p>
                <h5 className="font-display text-sm sm:text-lg font-black text-[#4A3F35] italic">
                  {selectedCourse}
                </h5>
              </div>

              {/* Cert Footer row */}
              <div className="grid grid-cols-3 items-end pt-4 border-t border-neutral-900">
                {/* Serial Code */}
                <div className="text-left font-mono text-[9px] sm:text-[10px] text-[#8C7A6B]">
                  <p className="font-bold text-[#7A6C5D]">ID: {serialNo}</p>
                  <p>ISO Verified</p>
                </div>

                {/* Secure Hologram Stamp */}
                <div className="flex justify-center relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-none bg-[#FDFBF7]    p-0.5 shadow-md flex items-center justify-center text-[#2C241B] relative border border-[#E8E0D5]">
                    <Award className="h-6 w-6 sm:h-8 sm:s-8 animate-pulse text-[#2C241B]/40" />
                    <span className="absolute text-[6px] sm:text-[8px] font-extrabold tracking-widest text-[#7A6C5D] select-none">
                      SHIFTUP
                    </span>
                  </div>
                </div>

                {/* Signatures */}
                <div className="text-right flex flex-col items-end">
                  <div className="font-serif italic text-xs text-[#4A3F35] leading-none h-4 sm:h-6 select-none font-bold">
                    Devendra Prasad
                  </div>
                  <div className="w-20 sm:w-28 h-px bg-[#D2C4B1] my-1" />
                  <p className="text-[8px] sm:text-[9px] font-bold text-[#8C7A6B] uppercase tracking-wider">
                    DIRECTOR OF ACADEMICS
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
