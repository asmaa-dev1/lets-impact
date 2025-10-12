import React from "react";
import { Calendar, Clock, CheckCircle } from "lucide-react";

const CalendlySection = () => {
  return (
    <section id="rendez-vous" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Calendar Icon */}
          <div className="inline-flex items-center gap-2 mb-6">
            <Calendar className="text-orange-500" size={32} />
          </div>
          
          {/* Main Title - BIG */}
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            Ready to Unlock Your Hidden Potential?
          </h2>

          {/* Subtitle */}
          <p className="text-white text-lg md:text-xl font-semibold mb-8">
            We Don't Work With Everyone – Only High-Potential Clients
          </p>

          {/* Benefits - 30 min, Free, No commitment */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-300 text-base">
              <Clock className="text-orange-500" size={18} />
              <span>30 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-base">
              <CheckCircle className="text-orange-500" size={18} />
              <span>Free</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-base">
              <CheckCircle className="text-orange-500" size={18} />
              <span>No commitment</span>
            </div>
          </div>
        </div>

        {/* Calendly Embed */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-3xl mx-auto">
          <iframe
            src="https://calendly.com/asmaaelhint0/30min?embed_domain=localhost&embed_type=Inline&hide_gdpr_banner=1"
            width="100%"
            height="550"
            frameBorder="0"
            title="Calendly Booking"
            className="w-full"
          />
        </div>

        {/* Trust indicators below */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            ✓ Your data is secure • ✓ No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;