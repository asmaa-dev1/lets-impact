import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  // Function to scroll to Calendly section
  const scrollToCalendly = () => {
    setTimeout(() => {
      const element = document.getElementById("rendez-vous");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className="bg-saas-darkGray py-16 md:py-20">
      <div className="section-container">
        <div className="bg-gradient-to-r from-saas-orange/20 to-amber-600/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Abstract glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-saas-orange opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600 opacity-10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center gap-8 text-center">
            {/* Title */}
            <div className="mb-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-saas-orange to-amber-500 bg-clip-text text-transparent">
                From Casablanca to Global Success 🇲🇦
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Where Moroccan excellence meets international growth. Join elite brands transforming their future from the economic capital of Africa.
              </p>
            </div>

            {/* Morocco Images Grid */}
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
              <div className="md:w-1/2">
                <img 
                  src="/img/casa1.jpg"
                  alt="Casablanca Morocco"
                  className="rounded-lg w-full h-64 object-cover card-shadow"
                />
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/img/casa3.jpg"
                  alt="Morocco Cityscape"
                  className="rounded-lg w-full h-64 object-cover card-shadow"
                />
              </div>
            </div>

            {/* Call to Action Button */}
            <Button 
              onClick={scrollToCalendly}
              className="bg-saas-orange hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Your Free Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;