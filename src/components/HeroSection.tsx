import React, { useEffect, useState } from 'react';
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

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-saas-black via-[#0a0a0a] to-saas-black overflow-hidden min-h-[90vh] flex items-center">
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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 text-saas-orange px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-orange-500/30 shadow-[0_0_30px_rgba(251,146,60,0.3)] hover:shadow-[0_0_50px_rgba(251,146,60,0.5)] transition-all duration-500 animate-pulse backdrop-blur-sm">
                <Sparkles className="w-4 h-4 animate-spin" style={{animationDuration: '3s'}} />
                <span className="relative">
                  Elite Growth Consulting
                  <span className="absolute -inset-1 bg-orange-500/20 blur-lg -z-10"></span>
                </span>
                <Zap className="w-4 h-4" />
              </div>
            
            {/* Main title with CRAZY effects */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight relative">
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
            <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto relative group">
              <span className="relative z-10 hover:text-white transition-colors duration-300">
                We help leaders and brands unlock hidden opportunities, strengthen their position, and earn the income they've been missing.
              </span>
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
            </p>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                onClick={scrollToCalendly}
                className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 group overflow-hidden shadow-[0_0_30px_rgba(251,146,60,0.4)] hover:shadow-[0_0_50px_rgba(251,146,60,0.7)] hover:scale-105"
              >
                {/* Animated shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                
                {/* Button content */}
                <span className="relative flex items-center gap-2 text-lg">
                  <Sparkles className="w-5 h-5" />
                  Request an Invitation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                
                {/* Pulsing ring */}
                <span className="absolute inset-0 rounded-xl border-2 border-white/30 group-hover:scale-105 transition-transform duration-300"></span>
              </Button>
              
              <Button 
                variant="outline" 
                className="relative border-2 border-orange-500/50 text-orange-400 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 group overflow-hidden hover:border-orange-500 hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative text-lg">View Case Studies</span>
              </Button>
            </div>
            
            {/* User avatars with enhanced ring effects */}
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="flex -space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" 
                  className="w-10 h-10 rounded-full border-2 border-saas-black ring-2 ring-orange-500/60 hover:ring-orange-500 hover:scale-110 hover:z-10 transition-all duration-300 shadow-[0_0_15px_rgba(251,146,60,0.4)]" 
                  alt="User"
                />
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" 
                  className="w-10 h-10 rounded-full border-2 border-saas-black ring-2 ring-orange-500/60 hover:ring-orange-500 hover:scale-110 hover:z-10 transition-all duration-300 shadow-[0_0_15px_rgba(251,146,60,0.4)]" 
                  alt="User"
                />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64" 
                  className="w-10 h-10 rounded-full border-2 border-saas-black ring-2 ring-orange-500/60 hover:ring-orange-500 hover:scale-110 hover:z-10 transition-all duration-300 shadow-[0_0_15px_rgba(251,146,60,0.4)]" 
                  alt="User"
                />
              </div>
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-saas-orange">500+</span> businesses already using our platform
              </p>
            </div>
          </div>
          
          {/* Dashboard preview with 3D tilt effect */}
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative max-w-4xl mx-auto group">
              {/* Multiple glow layers */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 rounded-2xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute -inset-8 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 rounded-3xl blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-orange-500/30 p-3 shadow-2xl transform transition-all duration-700 hover:scale-[1.02] group-hover:border-orange-500/60 group-hover:shadow-[0_20px_80px_rgba(251,146,60,0.4)]">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/img/istockphoto-2151031508-1024x1024.jpg"
                    alt="Dashboard Preview"
                    className="rounded-xl w-full transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* CTA button on image */}
                  <div className="absolute bottom-6 left-6">
                    <Button
                      onClick={scrollToCalendly}
                      className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-[0_0_30px_rgba(251,146,60,0.5)] hover:shadow-[0_0_50px_rgba(251,146,60,0.8)] hover:scale-105 group/btn"
                    >
                      <Calendar size={22} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span className="text-lg">Book a Call</span>
                      <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced ratings section */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-10 px-4">
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 transition-all duration-300 hover:scale-110 group p-4 rounded-xl hover:bg-white/5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <span className="text-white text-xl font-bold group-hover:text-orange-400 transition-colors">5.0</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className="w-6 h-6 fill-yellow-400 text-yellow-400 group-hover:scale-125 transition-all duration-300 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" 
                      style={{transitionDelay: `${star * 50}ms`}}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">on</span>
                <img 
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                  alt="Google"
                  className="h-6 group-hover:brightness-125 transition-all"
                />
              </div>
            </a>

            <a 
              href="https://www.trustpilot.com/review/your-business" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 transition-all duration-300 hover:scale-110 group p-4 rounded-xl hover:bg-white/5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <span className="text-white text-xl font-bold group-hover:text-green-400 transition-colors">4.9</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className="w-6 h-6 fill-green-400 text-green-400 group-hover:scale-125 transition-all duration-300 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]"
                      style={{transitionDelay: `${star * 50}ms`}}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">on</span>
                <img 
                  src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-white.svg" 
                  alt="Trustpilot"
                  className="h-6 group-hover:brightness-125 transition-all"
                />
              </div>
            </a>
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