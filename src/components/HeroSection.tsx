import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Sparkles, Zap } from 'lucide-react';
import { Calendar } from 'lucide-react';

// Function to scroll to Calendly section
const scrollToCalendly = () => {
  setTimeout(() => {
    const element = document.getElementById("rendez-vous");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 100);
};

// Function to scroll to FAQ section
const scrollToFaq = () => {
  setTimeout(() => {
    const element = document.getElementById("faq");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 100);
};

const HeroSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = () => {
    if (email) {
      console.log('Email submitted:', email);
      // Handle email submission logic here
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-saas-black via-[#0a0a0a] to-saas-black overflow-hidden min-h-[85vh] flex items-center py-2">
      {/* Animated floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/30 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500/30 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[150px] animate-pulse" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 13) % 100}%`,
              animation: `float ${4 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      <div className="section-container relative z-10 text-center">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            {/* Enhanced badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 text-saas-orange px-5 py-2.5 rounded-full text-sm font-semibold mb-3 border border-orange-500/30 shadow-[0_0_30px_rgba(251,146,60,0.3)] hover:shadow-[0_0_50px_rgba(251,146,60,0.5)] transition-all duration-500 animate-pulse backdrop-blur-sm">
              <Sparkles className="w-4 h-4 animate-spin" style={{animationDuration: '3s'}} />
              <span className="relative">
                Elite Growth Consulting
                <span className="absolute -inset-1 bg-orange-500/20 blur-lg -z-10"></span>
              </span>
              <Zap className="w-4 h-4" />
            </div>
            
            {/* Main title with CRAZY effects */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight relative">
              {/* Animated text with single layer */}
              <span className="relative inline-block">
                <span className="relative z-10 inline-block hover:scale-105 transition-transform duration-300">
                  Unlock Your Hidden Potential With Our{' '}
                </span>
              </span>
              {/* Single enhanced "Growth Strategy" */}
              <span className="relative inline-block group">
                <span className="relative z-20 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent font-extrabold animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_auto]">
                  Growth Strategy
                </span>
              </span>
            </h1>
            
            {/* Description with glow */}
            <p className="text-base md:text-lg mb-6 text-gray-300 max-w-2xl mx-auto relative group">
              <span className="relative z-10 hover:text-white transition-colors duration-300">
                We help leaders and brands unlock hidden opportunities, strengthen their position, and earn the income they've been missing.
              </span>
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
            </p>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button 
                onClick={scrollToCalendly}
                className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white font-bold py-3 px-7 rounded-xl transition-all duration-300 group overflow-hidden shadow-[0_0_30px_rgba(251,146,60,0.4)] hover:shadow-[0_0_50px_rgba(251,146,60,0.7)] hover:scale-105"
              >
                {/* Animated shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                
                {/* Button content */}
                <span className="relative flex items-center gap-2 text-base">
                  <Sparkles className="w-5 h-5" />
                  Request an Invitation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                
                {/* Pulsing ring */}
                <span className="absolute inset-0 rounded-xl border-2 border-white/30 group-hover:scale-105 transition-transform duration-300"></span>
              </Button>
              
            
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Animated decorative elements */}
      <div className="absolute bottom-12 left-12 w-20 h-20 border-2 border-orange-500/30 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
      <div className="absolute top-24 right-16 w-12 h-12 border-2 border-amber-500/30 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 left-16 w-6 h-6 bg-orange-500/40 rounded-full animate-bounce blur-sm"></div>
      <Sparkles className="absolute top-1/4 right-1/4 w-8 h-8 text-orange-400/50 animate-pulse" />
      <Zap className="absolute bottom-1/4 right-1/3 w-6 h-6 text-amber-400/50 animate-bounce" />
      
      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.5; transform: scaleX(0.8); }
          50% { opacity: 1; transform: scaleX(1); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.6; }
          50% { transform: translate(30px, -50px) rotate(180deg); opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translate(0, -100px) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;