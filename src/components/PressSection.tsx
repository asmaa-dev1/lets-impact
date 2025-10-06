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
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <p className="text-xl md:text-2xl text-gray-400 mb-6 font-light">
          Industry leaders and professionals agree:
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12">
          <span className="text-saas-orange">Let's Impact</span>{' '}
          <span className="text-white">redefines the way</span>
          <br />
          <span className="text-white">businesses grow.</span>
        </h2>
        
        {/* SUPER SPECIAL BUTTON 🔥 */}
        <div className="relative inline-block">
          {/* Sparkle effects around button */}
          <Star className="absolute -top-4 -left-4 w-6 h-6 text-yellow-400 animate-ping" />
          <Star className="absolute -top-2 -right-6 w-4 h-4 text-orange-400 animate-pulse" style={{animationDelay: '0.3s'}} />
          <Zap className="absolute -bottom-3 -left-6 w-5 h-5 text-amber-400 animate-bounce" style={{animationDelay: '0.5s'}} />
          <Sparkles className="absolute -bottom-4 -right-4 w-6 h-6 text-yellow-300 animate-pulse" style={{animationDelay: '0.7s'}} />
          
          {/* Outer glow ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-full blur-xl opacity-60 animate-pulse scale-110"></div>
          
          {/* Main button */}
          <button
            onClick={handleBookingClick}
            className="relative group px-10 py-6 text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 rounded-full shadow-2xl hover:shadow-orange-500/80 transition-all duration-300 hover:scale-110 flex items-center gap-4"
          >
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-600 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </div>
            
            {/* Button content */}
            <Calendar className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
            <span className="relative z-10">Book Your Free Consultation</span>
            <Sparkles className="w-6 h-6 group-hover:scale-125 transition-transform duration-300 relative z-10" />
            
            {/* Pulsing border */}
            <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PressSection;
