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

const counselors = [
  { name: 'Dr. Srinivasa Rao', role: 'Chief Technical Counselor', phone: '6303612645', email: 'srinivasa@shiftup.in', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150' },
  { name: 'Mrs. Srilatha Prasad', role: 'Senior Admissions Lead', phone: '6303612645', email: 'srilatha@shiftup.in', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150' }
];

export default function DemoForm({ onLeadSubmit, selectedCourseFromProps }: DemoFormProps) {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formCourse, setFormCourse] = useState(selectedCourseFromProps || 'MERN Stack Developer');
  const [formExperience, setFormExperience] = useState<'Student' | 'Fresher' | 'Working Professional' | 'Other'>('Student');
  const [formMode, setFormMode] = useState<'Online Live' | 'Offline Vijayawada'>('Offline Vijayawada');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [assignedAdvisor, setAssignedAdvisor] = useState<typeof counselors[0] | null>(null);
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
      // Choose advisor
      const chosen = counselors[Math.floor(Math.random() * counselors.length)];
      setAssignedAdvisor(chosen);

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
    }, 1200);
  };

  const handleReset = () => {
    setFormName('');
    setFormPhone('');
    setFormEmail('');
    setErrorMessage(null);
    setIsSuccess(false);
    setAssignedAdvisor(null);
  };

  return (
    <section id="demo-form" className="py-24 bg-black text-white relative scroll-mt-10 overflow-hidden border-b border-neutral-900">
      {/* 4K Background Image and Animated Grid */}
      <AnimatedGridBackground 
        imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=3840" 
        overlayClassName="bg-black/93"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Form Left Content */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-white bg-white/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-white/10">
              <Sparkles className="h-4 w-4 animate-spin text-white" />
              SECURE SEAT BOOKING
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight leading-tight">
              Begin Your Premium Demo. <br />
              <span className="text-white underline decoration-neutral-800 decoration-4 underline-offset-8">Free of Cost.</span>
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
              Book a personalized career roadmap session and live batch trial. No commitment required. Speak directly with corporate practitioners in Vijayawada or attend online live.
            </p>

            <div className="space-y-4 pt-6 border-t border-neutral-900">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-neutral-900 text-white rounded-xl border border-neutral-800">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Live 2-Hour Practical Session</h4>
                  <p className="text-xs text-neutral-500 mt-0.5 font-light">Participate in live building alongside actual batches.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-neutral-900 text-white rounded-xl border border-neutral-800">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Corporate Lab Access (Gandhinagar Center)</h4>
                  <p className="text-xs text-neutral-500 mt-0.5 font-light">Visit our high-end offline labs to evaluate the student workspace.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card Grid Column */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[540px] bg-[#050505]/95 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3.5 border-b border-neutral-900 mb-2">
                    <span className="text-xs font-mono font-bold text-neutral-500">counseling_inquiry_ledger</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-red-950/40 border border-red-900 rounded-xl text-xs text-red-400 font-medium">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                      Full Student Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-neutral-500" />
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Challa Rama Rao"
                        className="w-full pl-10 pr-4 py-3 bg-black border border-neutral-805 rounded-xl text-sm font-semibold focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700 text-slate-200"
                        id="form-input-name"
                      />
                    </div>
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                        WhatsApp Contact
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-neutral-500" />
                        <input
                          type="tel"
                          required
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          placeholder="e.g. 6303612645"
                          className="w-full pl-10 pr-4 py-3 bg-black border border-neutral-805 rounded-xl text-sm font-semibold focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700 text-slate-200"
                          id="form-input-phone"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                        Academic Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-neutral-500" />
                        <input
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="e.g. ramarao@gmail.com"
                          className="w-full pl-10 pr-4 py-3 bg-black border border-neutral-805 rounded-xl text-sm font-semibold focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700 text-slate-200"
                          id="form-input-email"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Selectors Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                        Select Academy Course
                      </label>
                      <select
                        value={formCourse}
                        onChange={(e) => setFormCourse(e.target.value)}
                        className="w-full px-3.5 py-3 bg-black border border-neutral-805 rounded-xl text-sm font-semibold focus:outline-none focus:border-white transition-colors text-slate-300 cursor-pointer"
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
                      <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                        Educational Experience
                      </label>
                      <select
                        value={formExperience}
                        onChange={(e) => setFormExperience(e.target.value as any)}
                        className="w-full px-3.5 py-3 bg-black border border-neutral-805 rounded-xl text-sm font-semibold focus:outline-none focus:border-white transition-colors text-slate-300 cursor-pointer"
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
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                      Preferred Batch Learning Mode
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormMode('Offline Vijayawada')}
                        className={`py-3 px-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          formMode === 'Offline Vijayawada' 
                            ? 'bg-white text-black border-white shadow-md' 
                            : 'bg-black border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                        id="btn-mode-offline"
                      >
                        <MapPin className="h-4 w-4" />
                        Gandhinagar Center
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormMode('Online Live')}
                        className={`py-3 px-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          formMode === 'Online Live' 
                            ? 'bg-white text-black border-white shadow-md' 
                            : 'bg-black border-neutral-800 text-neutral-400 hover:text-white'
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
                    className="w-full py-4 bg-white hover:bg-neutral-200 text-black font-extrabold uppercase tracking-widest text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    id="form-btn-submit"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? 'Registering Ingress Pipeline...' : 'Secure Free Seat Demo'}
                  </button>
                </form>
              ) : (
                /* Success Advisor Assignment Mode */
                <div className="text-center space-y-6 py-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white flex items-center justify-center mx-auto text-white">
                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-display font-extrabold text-2xl text-white">
                      Registration Confirmed!
                    </h3>
                    <p className="text-xs text-neutral-500 font-mono">
                      Secure Ledger Entry: SU-{Math.floor(1000 + Math.random() * 9000)}-OK
                    </p>
                  </div>

                  <p className="text-neutral-300 text-sm max-w-sm mx-auto leading-relaxed font-light">
                    Hello <strong className="text-white">{formName}</strong>, your inquiry for the <strong className="text-white">{formCourse}</strong> program is securely registered. Let's see your assigned counselor.
                  </p>

                  {/* Assigned Counselor Widget */}
                  {assignedAdvisor && (
                    <div className="bg-black border border-neutral-800 rounded-2xl p-4 max-w-sm mx-auto flex items-center gap-3.5 text-left">
                      <img 
                        src={assignedAdvisor.avatar} 
                        alt={assignedAdvisor.name}
                        className="w-12 h-12 rounded-full border border-neutral-800 object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <span className="text-[9px] font-black tracking-widest text-neutral-400 uppercase">ASSIGNED CAREER ADVISOR</span>
                        <h4 className="text-sm font-bold text-white">{assignedAdvisor.name}</h4>
                        <p className="text-[11px] text-neutral-500 font-medium">{assignedAdvisor.role}</p>
                        <p className="text-[10px] text-neutral-400 mt-0.5">{assignedAdvisor.email}</p>
                      </div>
                    </div>
                  )}

                  {/* WhatsApp/Call triggers */}
                  <div className="flex flex-col gap-2 pt-2 max-w-sm mx-auto">
                    <a 
                      href={`https://wa.me/91${formPhone}?text=Hi+ShiftUP+Academy,+I+just+registered+for+the+free+demo`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-md border border-neutral-800"
                      id="btn-whatsapp-counselor"
                    >
                      <MessageSquare className="h-4.5 w-4.5" />
                      Chat with Advisor on WhatsApp
                    </a>

                    <button
                      onClick={handleReset}
                      className="text-xs text-neutral-500 hover:text-neutral-400 font-semibold cursor-pointer"
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
