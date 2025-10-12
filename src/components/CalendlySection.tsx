import React from "react";
import { Calendar, Clock, CheckCircle } from "lucide-react";

const CalendlySection = () => {
  return (
    <section id="rendez-vous" className="py-20 bg-gradient-to-b from-saas-black to-saas-darkGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Calendar className="text-saas-orange" size={32} />
          </div>
          
          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Clock className="text-saas-orange" size={16} />
              <span>30 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <CheckCircle className="text-saas-orange" size={16} />
              <span>Free</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <CheckCircle className="text-saas-orange" size={16} />
              <span>No commitment</span>
            </div>
          </div>

          {/* New Section - Exclusive Message */}
          <div className="mb-7">
             <p className="text-saas-orange text-xl font-bold">
              Ready to Unlock Your Hidden Potential?
            </p>
            <p className="text-white text-md font-semibold mb-2">
              We Don't Work With Everyone – Only High-Potential Clients
            </p>
          </div>
        </div>

        {/* Calendly Embed - SMALLER SIZE */}
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

        {/* Optional: Trust indicators below */}
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