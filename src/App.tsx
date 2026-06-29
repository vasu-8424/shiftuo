import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMetrics from './components/TrustMetrics';
import HiringPartners from './components/HiringPartners';
import WhyShiftUp from './components/WhyShiftUp';
import PremiumCourses from './components/PremiumCourses';
import CertificatePreview from './components/CertificatePreview';
import StudentReviews from './components/StudentReviews';
import DemoForm from './components/DemoForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { Lead } from './types';
import { MessageSquare, PhoneCall, ArrowUpRight, GraduationCap } from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [selectedCourse, setSelectedCourse] = useState('');

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
    // console leads or submit to API
  };

  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-black selection:text-white overflow-x-hidden">
      
      {/* Premium background noise texture overlay for organic feeling */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] bg-repeat dot-grid z-50" />

      {/* Navbar header */}
      <Navbar 
        onNavigate={handleNavigate} 
        currentSection={currentSection}
      />

      {/* Main Container viewport */}
      <main className="relative">
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
      </main>

      {/* Premium footer, connectivity badges, sticky CTA bars */}
      <Footer 
        onNavigate={handleNavigate}
      />

    </div>
  );
}
