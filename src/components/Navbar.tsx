import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, GraduationCap, LayoutDashboard, PhoneCall, Sparkles } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
  currentSection: string;
  isConsoleOpen: boolean;
  onToggleConsole: (open: boolean) => void;
}

export default function Navbar({ onNavigate, currentSection, isConsoleOpen, onToggleConsole }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Courses', id: 'courses' },
    { label: 'Why ShiftUP', id: 'why-shiftup' },
    { label: 'Learning Journey', id: 'journey' },
    { label: 'Real-Time Workspace', id: 'workspace' },
    { label: 'Live Projects', id: 'projects' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'FAQs', id: 'faq' }
  ];

  const handleNavClick = (id: string) => {
    onToggleConsole(false);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      onNavigate(id);
    }, 50);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isConsoleOpen
        ? 'py-3.5 bg-white/60 backdrop-blur-[20px] shadow-sm border-b border-slate-200/40'
        : 'py-5 bg-white/40 backdrop-blur-[20px] border-b border-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-2.5 cursor-pointer group"
            id="nav-logo"
          >
            <div className="relative w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="h-5.5 w-5.5 text-white" />
              <div className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center animate-pulse">
                <Sparkles className="h-2 w-2 text-white" />
              </div>
            </div>
            <div>
              <div className="font-display font-extrabold text-xl tracking-tight text-[#0F172A] flex items-center gap-0.5">
                ShiftUP<span className="text-[#2563EB] font-black text-2xl leading-none">.</span>
              </div>
              <p className="text-[9px] font-bold tracking-widest text-slate-400 uppercase leading-none">
                SOFTWARE ACADEMY
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs font-bold uppercase tracking-widest hover:text-[#2563EB] transition-colors cursor-pointer relative py-1 ${
                  currentSection === item.id && !isConsoleOpen
                    ? 'text-[#2563EB]'
                    : 'text-slate-600'
                }`}
                id={`nav-item-${item.id}`}
              >
                {item.label}
                {currentSection === item.id && !isConsoleOpen && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full animate-fadeIn" />
                )}
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onToggleConsole(!isConsoleOpen)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                isConsoleOpen
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800 hover:shadow-sm'
              }`}
              id="btn-console-toggle"
            >
              <LayoutDashboard className="h-4 w-4" />
              {isConsoleOpen ? 'Back to Academy' : 'Open LMS Console'}
            </button>

            <button
              onClick={() => handleNavClick('demo-form')}
              className="relative overflow-hidden px-6 py-2.5 bg-[#0F172A] text-white rounded-full text-xs font-bold tracking-wider shadow-xl hover:shadow-[#0F172A]/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer"
              id="btn-nav-demo"
            >
              Start Free Demo
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggler */}
          <div className="flex lg:hidden items-center gap-2.5">
            <button
              onClick={() => onToggleConsole(!isConsoleOpen)}
              className="p-2 bg-slate-100 text-slate-800 rounded-xl flex items-center justify-center"
              title="Toggle Dashboard Console"
            >
              <LayoutDashboard className="h-5 w-5" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
              id="btn-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 py-6 px-4 animate-fadeIn flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-3 px-4 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                  currentSection === item.id && !isConsoleOpen
                    ? 'bg-blue-50 text-blue-600 font-bold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
                id={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="h-px bg-slate-100 my-2" />

          <div className="flex flex-col gap-3 px-2">
            <button
              onClick={() => {
                onToggleConsole(!isConsoleOpen);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
              id="mobile-btn-console"
            >
              <LayoutDashboard className="h-4.5 w-4.5" />
              {isConsoleOpen ? 'Back to Academy Website' : 'Open LMS Console'}
            </button>

            <button
              onClick={() => handleNavClick('demo-form')}
              className="w-full py-3 bg-slate-900 text-white text-center rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
              id="mobile-btn-demo"
            >
              Start Free Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
