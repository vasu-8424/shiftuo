import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, CheckCircle2, User, Phone, Mail, Calendar, 
  MapPin, Send, MessageSquare 
} from 'lucide-react';
import { Lead } from '../types';
import AnimatedGridBackground from './AnimatedGridBackground';

interface DemoFormProps {
  onLeadSubmit: (lead: Omit<Lead, 'id' | 'timestamp' | 'status' | 'assignedCounselor'>) => void;
  selectedCourseFromProps?: string;
}


export default function DemoForm({ onLeadSubmit, selectedCourseFromProps }: DemoFormProps) {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formCourse, setFormCourse] = useState(selectedCourseFromProps || 'MERN Stack Developer');
  const [formExperience, setFormExperience] = useState<'Student' | 'Fresher' | 'Working Professional' | 'Other'>('Student');
  const [formMode, setFormMode] = useState<'Online Live' | 'Offline Vijayawada'>('Offline Vijayawada');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync state if selection from course list occurs
  React.useEffect(() => {
    if (selectedCourseFromProps) {
      setFormCourse(selectedCourseFromProps);
    }
  }, [selectedCourseFromProps]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formName.trim() || !formPhone.trim() || !formEmail.trim()) {
      setErrorMessage('Please fill out all contact fields to proceed.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {

      // Submit up
      onLeadSubmit({
        name: formName,
        phone: formPhone,
        email: formEmail,
        course: formCourse,
        experience: formExperience,
        preferredMode: formMode
      });

      setIsSubmitting(false);
      setIsSuccess(true);

      // Redirect to WhatsApp
      const message = `Hello ShiftUP! I would like to book a Free Demo.\n\n*Name:* ${formName}\n*Phone:* ${formPhone}\n*Email:* ${formEmail}\n*Course:* ${formCourse}\n*Experience:* ${formExperience}\n*Mode:* ${formMode}`;
      window.location.href = `https://wa.me/917989624119?text=${encodeURIComponent(message)}`;
    }, 1200);
  };

  const handleReset = () => {
    setFormName('');
    setFormPhone('');
    setFormEmail('');
    setErrorMessage(null);
    setIsSuccess(false);
  };

  return (
    <section id="demo-form" className="py-24 bg-[#FDFBF7] text-[#2C241B] relative scroll-mt-10 overflow-hidden border-b border-neutral-900">
      {/* 4K Background Image and Animated Grid */}
      <AnimatedGridBackground 
        imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=3840" 
        overlayClassName="bg-[#FDFBF7]/93"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Form Left Content */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#2C241B] bg-[#2C241B]/10 px-3.5 py-1.5 rounded-none inline-flex items-center gap-1.5 border border-[#2C241B]/10">
              <Sparkles className="h-4 w-4 animate-spin text-[#2C241B]" />
              SECURE SEAT BOOKING
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight leading-tight">
              Begin Your Premium Demo. <br />
              <span className="text-[#2C241B] underline decoration-neutral-800 decoration-4 underline-offset-8">Free of Cost.</span>
            </h2>

            <p className="text-[#7A6C5D] text-sm sm:text-base leading-relaxed font-light">
              Book a personalized career roadmap session and live batch trial. No commitment required. Speak directly with corporate practitioners in Vijayawada or attend online live.
            </p>

            <div className="space-y-4 pt-6 border-t border-neutral-900">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#EAE4D9] text-[#2C241B] rounded-none border border-[#E8E0D5]">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2C241B]">Live 2-Hour Practical Session</h4>
                  <p className="text-xs text-[#8C7A6B] mt-0.5 font-light">Participate in live building alongside actual batches.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#EAE4D9] text-[#2C241B] rounded-none border border-[#E8E0D5]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2C241B]">Corporate Lab Access (Benz Circle Center)</h4>
                  <p className="text-xs text-[#8C7A6B] mt-0.5 font-light">Visit our high-end offline labs to evaluate the student workspace.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card Grid Column */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[540px] bg-[#FDFBF7]/95 border border-[#E8E0D5] rounded-none p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3.5 border-b border-neutral-900 mb-2">
                    <span className="text-xs font-mono font-bold text-[#8C7A6B]">counseling_inquiry_ledger</span>
                    <span className="h-2 w-2 rounded-none bg-[#FDFBF7] animate-pulse" />
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-[#FDFBF7]/40 border border-[#FDFBF7] rounded-none text-xs text-[#FDFBF7] font-medium">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#7A6C5D] uppercase tracking-widest">
                      Full Student Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#8C7A6B]" />
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Challa Rama Rao"
                        className="w-full pl-10 pr-4 py-3 bg-[#FDFBF7] border border-[#E8E0D5] rounded-none text-sm font-semibold text-[#2C241B] focus:outline-none focus:border-[#2C241B] transition-colors placeholder:text-[#8C7A6B]"
                        id="form-input-name"
                      />
                    </div>
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#7A6C5D] uppercase tracking-widest">
                        WhatsApp Contact
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#8C7A6B]" />
                        <input
                          type="tel"
                          required
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          placeholder="e.g. 6303612645"
                          className="w-full pl-10 pr-4 py-3 bg-[#FDFBF7] border border-[#E8E0D5] rounded-none text-sm font-semibold text-[#2C241B] focus:outline-none focus:border-[#2C241B] transition-colors placeholder:text-[#8C7A6B]"
                          id="form-input-phone"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#7A6C5D] uppercase tracking-widest">
                        Academic Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#8C7A6B]" />
                        <input
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="e.g. ramarao@gmail.com"
                          className="w-full pl-10 pr-4 py-3 bg-[#FDFBF7] border border-[#E8E0D5] rounded-none text-sm font-semibold text-[#2C241B] focus:outline-none focus:border-[#2C241B] transition-colors placeholder:text-[#8C7A6B]"
                          id="form-input-email"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Selectors Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#7A6C5D] uppercase tracking-widest">
                        Select Academy Course
                      </label>
                      <select
                        value={formCourse}
                        onChange={(e) => setFormCourse(e.target.value)}
                        className="w-full px-3.5 py-3 bg-[#FDFBF7] border border-[#E8E0D5] rounded-none text-sm font-semibold text-[#2C241B] focus:outline-none focus:border-[#2C241B] transition-colors cursor-pointer"
                        id="form-select-course"
                      >
                        <option value="MERN Stack Developer">MERN Stack Developer</option>
                        <option value="Java Full Stack Academy">Java Full Stack Academy</option>
                        <option value="Python Full Stack Suite">Python Full Stack Suite</option>
                        <option value="AI & Machine Learning">AI & Machine Learning</option>
                        <option value="Cloud Computing & DevOps">Cloud Computing & DevOps</option>
                        <option value="UI/UX Design Specialist">UI/UX Design Specialist</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#7A6C5D] uppercase tracking-widest">
                        Educational Experience
                      </label>
                      <select
                        value={formExperience}
                        onChange={(e) => setFormExperience(e.target.value as any)}
                        className="w-full px-3.5 py-3 bg-[#FDFBF7] border border-[#E8E0D5] rounded-none text-sm font-semibold text-[#2C241B] focus:outline-none focus:border-[#2C241B] transition-colors cursor-pointer"
                        id="form-select-experience"
                      >
                        <option value="Student">College Student</option>
                        <option value="Fresher">Unemployed Graduate / Fresher</option>
                        <option value="Working Professional">Working Professional</option>
                        <option value="Other">Other Category</option>
                      </select>
                    </div>
                  </div>

                  {/* Mode select */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#7A6C5D] uppercase tracking-widest">
                      Preferred Batch Learning Mode
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormMode('Offline Vijayawada')}
                        className={`py-3 px-4 rounded-none border text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          formMode === 'Offline Vijayawada' 
                            ? 'bg-[#2C241B] text-[#FDFBF7] border-[#2C241B] shadow-md' 
                            : 'bg-[#FDFBF7] border-[#E8E0D5] text-[#7A6C5D] hover:text-[#2C241B]'
                        }`}
                        id="btn-mode-offline"
                      >
                        <MapPin className="h-4 w-4" />
                        Benz Circle Center
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormMode('Online Live')}
                        className={`py-3 px-4 rounded-none border text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          formMode === 'Online Live' 
                            ? 'bg-[#2C241B] text-[#FDFBF7] border-[#2C241B] shadow-md' 
                            : 'bg-[#FDFBF7] border-[#E8E0D5] text-[#7A6C5D] hover:text-[#2C241B]'
                        }`}
                        id="btn-mode-online"
                      >
                        <Calendar className="h-4 w-4" />
                        Online Live Batches
                      </button>
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#2C241B] hover:bg-[#4A3F35] text-[#FDFBF7] font-extrabold uppercase tracking-widest text-xs rounded-none shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    id="form-btn-submit"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? 'Registering Ingress Pipeline...' : 'Secure Free Seat Demo'}
                  </button>
                </form>
              ) : (
                /* Success Advisor Assignment Mode */
                <div className="text-center space-y-6 py-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-none bg-[#2C241B]/10 border-2 border-[#2C241B] flex items-center justify-center mx-auto text-[#2C241B]">
                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-display font-extrabold text-2xl text-[#2C241B]">
                      Registration Confirmed!
                    </h3>
                    <p className="text-xs text-[#8C7A6B] font-mono">
                      Secure Ledger Entry: SU-{Math.floor(1000 + Math.random() * 9000)}-OK
                    </p>
                  </div>

                  <p className="text-[#635547] text-sm max-w-sm mx-auto leading-relaxed font-light">
                    Hello <strong className="text-[#2C241B]">{formName}</strong>, your inquiry for the <strong className="text-[#2C241B]">{formCourse}</strong> program is securely registered. We will contact you shortly!
                  </p>

                  {/* WhatsApp/Call triggers */}
                  <div className="flex flex-col gap-2 pt-2 max-w-sm mx-auto">
                    <a 
                      href={`https://wa.me/917989624119?text=Hi+ShiftUP+Academy,+I+just+registered+for+the+free+demo`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 bg-[#EAE4D9] hover:bg-[#D2C4B1] text-[#2C241B] text-xs font-bold uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-2 shadow-md border border-[#E8E0D5]"
                      id="btn-whatsapp-counselor"
                    >
                      <MessageSquare className="h-4.5 w-4.5" />
                      Chat with Expert
                    </a>

                    <button
                      onClick={handleReset}
                      className="text-xs text-[#8C7A6B] hover:text-[#7A6C5D] font-semibold cursor-pointer"
                      id="btn-reset-form"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
