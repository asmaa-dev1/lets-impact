import React from 'react';
import { Calendar, Sparkles, Zap, Star } from 'lucide-react';

const PressSection = () => {
  const handleBookingClick = () => {
    document.getElementById('rendez-vous')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="py-20 px-6 bg-saas-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-saas-orange opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-500 opacity-20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      

    </section>
  );
};

export default PressSection;
