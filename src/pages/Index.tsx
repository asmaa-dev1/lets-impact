import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PressSection from '@/components/PressSection';
import LogoCarousel from '@/components/LogoCarousel';
import ClientShowcaseCarousel from '@/components/ClientShowcase';
import CalendlySection from '@/components/CalendlySection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />
      <main>
        {/* Section 1: Home/Hero */}
        <section id="home">
          <HeroSection />
        </section>
        
        {/* Section 2: About */}
        <section id="about">
          <LogoCarousel />
        </section>
        
        
        {/* Section 4: Testimonials */}
        <section id="testimonials">
          <ClientShowcaseCarousel />
        </section>
        
        {/* Section 5: Contact/Calendly */}
        <section id="contact">
          <CalendlySection />
        </section>
        
        {/* Section 6: FAQ */}
        <section id="faq">
          <FaqSection />
        </section>

        {/* Section 7: CTA Final */}
        <section id="Blogs">
          <CtaSection />
        </section>
        
        
        
      </main>
      <Footer />
    </div>
  );
};

export default Index;