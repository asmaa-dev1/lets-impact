import React from "react";
import { Calendar, Clock, CheckCircle } from "lucide-react";

const CalendlySection = () => {
  return (
    <section id="rendez-vous" className="py-20 bg-gradient-to-b from-saas-black to-saas-darkGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Calendar className="text-saas-orange" size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-saas-orange to-amber-500 bg-clip-text text-transparent">
            Book Your Personalized Call
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            An expert analyzes your situation and shows you how to fill your calendar
          </p>
          
          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="text-saas-orange" size={20} />
              <span>30 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="text-saas-orange" size={20} />
              <span>Free</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="text-saas-orange" size={20} />
              <span>No commitment</span>
            </div>
          </div>
        </div>

        {/* Calendly Embed */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
          <iframe
            src="https://calendly.com/asmaaelhint0/30min?embed_domain=localhost&embed_type=Inline&hide_gdpr_banner=1"
            width="100%"
            height="700"
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