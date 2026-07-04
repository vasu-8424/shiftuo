import React from 'react';
import { 
  GraduationCap, Phone, Mail, MapPin, Clock, Instagram, Facebook, 
  Linkedin, ArrowUp, MessageSquare, Sparkles 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactCards = [
    {
      title: 'Telephone Direct',
      value: '+91 6303612645',
      desc: 'Call our admissions desk',
      icon: <Phone className="h-5 w-5 text-[#FDFBF7]" />,
      href: 'tel:6303612645'
    },
    {
      title: 'Official Email',
      value: 'arunkumarmoturi744@gmail.com',
      desc: 'Corporate queries & candidate onboarding',
      icon: <Mail className="h-5 w-5 text-[#FDFBF7]" />,
      href: 'mailto:arunkumarmoturi744@gmail.com'
    },
    {
      title: 'Academy Location',
      value: 'Benz Circle, House No 40',
      desc: 'Vijayawada, AP - Pin 520010',
      icon: <MapPin className="h-5 w-5 text-[#FDFBF7]" />,
      href: 'https://maps.google.com/?q=Benz+Circle,Vijayawada'
    }
  ];

  return (
    <footer className="bg-slate-950 text-[#2C241B] pt-20 pb-24 border-t border-slate-900 relative overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FDFBF7]/10 rounded-none blur-3xl pointer-events-none" />

      {/* Contact Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactCards.map((card, idx) => (
          <a
            key={idx}
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel-dark p-6 rounded-none border border-slate-900 hover:border-slate-800 shadow-lg transition-all duration-300 block group"
          >
            <div className="w-10 h-10 rounded-none bg-slate-900 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              {card.icon}
            </div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none mb-1.5">
              {card.title}
            </h4>
            <p className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-[#FDFBF7] transition-colors">
              {card.value}
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              {card.desc}
            </p>
          </a>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
        
        {/* Brand & Newsletter (5 cols) */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="flex items-center gap-2">
            <div className="p-2.5 bg-[#FDFBF7]   rounded-none text-[#2C241B] shadow-md">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <div className="font-display font-black text-xl tracking-tight text-[#2C241B] flex items-center gap-0.5">
                ShiftUP<span className="text-[#000000] font-black text-2xl leading-none">.</span>
              </div>
              <p className="text-[8px] font-bold tracking-widest text-slate-500 uppercase leading-none">
                SOFTWARE ACADEMY
              </p>
            </div>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
            Bridging the gap between traditional academic foundations and active software industry reality. Vijayawada's premiere corporate-led software training ecosystem.
          </p>


        </div>

        {/* Links Area (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          
          {/* Column 1 */}
          <div className="space-y-4 text-left">
            <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Our Academy
            </h5>
            <div className="flex flex-col gap-2.5 text-xs text-slate-400">
              <button onClick={() => { onNavigate('courses'); }} className="hover:text-[#FDFBF7] transition-colors text-left">
                Premium Courses
              </button>
              <button onClick={() => { onNavigate('why-shiftup'); }} className="hover:text-[#FDFBF7] transition-colors text-left">
                Why ShiftUP?
              </button>
              <button onClick={() => { onNavigate('journey'); }} className="hover:text-[#FDFBF7] transition-colors text-left">
                Learning Journey
              </button>
              <button onClick={() => { onNavigate('demo-form'); }} className="hover:text-[#FDFBF7] transition-colors text-left">
                Demo Form
              </button>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4 text-left">
            <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Direct Contact
            </h5>
            <div className="flex flex-col gap-2.5 text-xs text-slate-400 leading-tight">
              <p>Admissions Desk:</p>
              <a href="tel:6303612645" className="font-bold text-slate-200 hover:text-[#FDFBF7]">
                +91 6303612645
              </a>
              <p className="pt-2">Operating Hours:</p>
              <p className="text-[10px] text-slate-500">Mon - Fri: 9 AM - 6 PM</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-4 text-left">
            <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Legal & Info
            </h5>
            <div className="flex flex-col gap-2.5 text-xs text-slate-400">
              <span className="cursor-pointer hover:text-[#FDFBF7] transition-colors">Privacy Policy</span>
              <span className="cursor-pointer hover:text-[#FDFBF7] transition-colors">Terms of Service</span>
              <span className="cursor-pointer hover:text-[#FDFBF7] transition-colors">Verified Audits</span>
              
              {/* Instagram link specified in details */}
              <div className="flex gap-2.5 pt-2">
                <a 
                  href="https://www.instagram.com/shiftupsoftwareacademy?igsh=MXcyNWZ0NXM3azI0bg==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1.5 bg-slate-900 hover:bg-slate-800 text-[#FDFBF7] rounded-none transition-colors"
                  title="ShiftUP Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <span className="p-1.5 bg-slate-900 hover:bg-slate-800 text-[#FDFBF7] rounded-none transition-colors cursor-pointer">
                  <Facebook className="h-4 w-4" />
                </span>
                <span className="p-1.5 bg-slate-900 hover:bg-slate-800 text-[#FDFBF7] rounded-none transition-colors cursor-pointer">
                  <Linkedin className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
        <p>© 2026 ShiftUP Software Academy. All Rights Reserved. ISO 9001:2015 Accredited.</p>
        <button
          onClick={scrollToTop}
          className="p-2.5 bg-slate-900 hover:bg-[#FDFBF7] text-slate-300 hover:text-[#2C241B] rounded-none transition-all flex items-center gap-1.5 shadow-md"
          id="btn-back-"
        >
          <ArrowUp className="h-4 w-4" />
          Back to Top
        </button>
      </div>

    </footer>
  );
}
