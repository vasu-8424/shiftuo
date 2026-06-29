import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMetrics from './components/TrustMetrics';
import HiringPartners from './components/HiringPartners';
import WhyShiftUp from './components/WhyShiftUp';
import PremiumCourses from './components/PremiumCourses';
import LearningEnvironment from './components/LearningEnvironment';
import LiveProjects from './components/LiveProjects';
import CertificatePreview from './components/CertificatePreview';
import StudentReviews from './components/StudentReviews';
import DemoForm from './components/DemoForm';
import DashboardConsole from './components/DashboardConsole';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { Lead } from './types';
import { MessageSquare, PhoneCall, ArrowUpRight, GraduationCap } from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  
  // Dynamic user-submitted leads state to tie form submission to CRM dashboard live
  const [submittedLeads, setSubmittedLeads] = useState<Lead[]>([]);

  const handleNavigate = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnrollClick = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    handleNavigate('demo-form');
  };

  const handleOpenSuccessStories = () => {
    // Scroll to success stories
    handleNavigate('certificates');
    setTimeout(() => {
      const element = document.getElementById('certificates');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleLeadSubmit = (leadData: Omit<Lead, 'id' | 'timestamp' | 'status' | 'assignedCounselor'>) => {
    const newLead: Lead = {
      ...leadData,
      id: `lead_${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'New',
      assignedCounselor: 'Dr. Srinivasa Rao'
    };
    setSubmittedLeads(prev => [newLead, ...prev]);
  };

  const handleDeleteLead = (id: string) => {
    setSubmittedLeads(prev => prev.filter(lead => lead.id !== id));
  };

  const handleUpdateLeadStatus = (id: string, status: Lead['status']) => {
    setSubmittedLeads(prev => prev.map(lead => lead.id === id ? { ...lead, status } : lead));
  };

  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* Premium background noise texture overlay for organic feeling */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] bg-repeat dot-grid z-50" />

      {/* Navbar header */}
      <Navbar 
        onNavigate={handleNavigate} 
        currentSection={currentSection}
        isConsoleOpen={isConsoleOpen}
        onToggleConsole={setIsConsoleOpen}
      />

      {/* Main Container viewport */}
      <main className="relative">
        {isConsoleOpen ? (
          /* Live LMS & Admin CRM simulator console workspace */
          <div className="animate-fadeIn">
            <DashboardConsole 
              submittedLeads={submittedLeads}
              onDeleteLead={handleDeleteLead}
              onUpdateLeadStatus={handleUpdateLeadStatus}
            />
          </div>
        ) : (
          /* High-fidelity primary academy landing experience */
          <div className="animate-fadeIn">
            
            {/* Hero Entry section */}
            <div id="hero" className="scroll-mt-24">
              <Hero 
                onNavigate={handleNavigate} 
                onOpenSuccessStories={handleOpenSuccessStories}
              />
            </div>

            {/* Credibility / Trust Counters */}
            <TrustMetrics />

            {/* Infinite Log Marquee */}
            <HiringPartners />

            {/* Bento features grid */}
            <WhyShiftUp />

            {/* Courses listing section */}
            <PremiumCourses onEnrollClick={handleEnrollClick} />

            {/* Virtual developer workspace simulator */}
            <LearningEnvironment />

            {/* Deployed microservices architectures */}
            <LiveProjects />

            {/* Verifiable digital credential generator */}
            <CertificatePreview />

            {/* Student Reviews deck and simulated video player */}
            <StudentReviews />

            {/* Secure intake demo registration form */}
            <DemoForm 
              onLeadSubmit={handleLeadSubmit}
              selectedCourseFromProps={selectedCourse}
            />

            {/* Smooth transition FAQs */}
            <FAQ />

          </div>
        )}
      </main>

      {/* Premium footer, connectivity badges, sticky CTA bars */}
      <Footer 
        onNavigate={handleNavigate}
        onToggleConsole={setIsConsoleOpen}
      />

      {/* DEKTOP FLOATING CONNECTIVITY WIDGETS */}
      <div className="hidden lg:flex flex-col gap-3 fixed bottom-6 right-6 z-40">
        {/* Call admissions direct */}
        <a 
          href="tel:6303612645"
          className="flex items-center justify-center p-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative cursor-pointer"
          title="Direct Call Admissions Desk"
        >
          <PhoneCall className="h-5.5 w-5.5" />
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
            Call +91 6303612645
          </span>
        </a>

        {/* WhatsApp admissions chat direct */}
        <a 
          href="https://wa.me/916303612645?text=Hi+ShiftUP+Academy,+I+want+to+book+a+free+demo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative cursor-pointer"
          title="Direct WhatsApp Inquiries"
        >
          <MessageSquare className="h-5.5 w-5.5 fill-current" />
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
            WhatsApp Admissions
          </span>
        </a>
      </div>

    </div>
  );
}
