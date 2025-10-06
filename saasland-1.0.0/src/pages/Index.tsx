import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LogoCarousel from '@/components/LogoCarousel';
import ClientShowcaseCarousel from '@/components/ClientShowcase';
// import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Logos qui défilent */}
        <LogoCarousel />
        
        {/* <FeaturesSection /> */}
        
        {/* Section "Ils témoignent" avec carousel */}
        <ClientShowcaseCarousel />
        
        {/* <TestimonialsSection /> */}
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;