import React from 'react';
import { Star } from 'lucide-react';

const ReviewsSection = () => {
  return (
    <div className="bg-saas-black py-8 border-b border-gray-800">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Google Reviews */}
          <div className="flex items-center gap-3">
            <span className="text-xl md:text-2xl font-bold text-white">5 étoiles</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-400">sur</span>
            <svg className="h-8 w-20" viewBox="0 0 272 92" fill="none">
              <text x="0" y="60" fill="#4285F4" fontSize="48" fontWeight="bold" fontFamily="Arial">G</text>
              <text x="40" y="60" fill="#EA4335" fontSize="48" fontWeight="bold" fontFamily="Arial">o</text>
              <text x="80" y="60" fill="#FBBC04" fontSize="48" fontWeight="bold" fontFamily="Arial">o</text>
              <text x="120" y="60" fill="#4285F4" fontSize="48" fontWeight="bold" fontFamily="Arial">g</text>
              <text x="160" y="60" fill="#34A853" fontSize="48" fontWeight="bold" fontFamily="Arial">l</text>
              <text x="190" y="60" fill="#EA4335" fontSize="48" fontWeight="bold" fontFamily="Arial">e</text>
            </svg>
          </div>

          {/* Trustpilot Reviews */}
          <div className="flex items-center gap-3">
            <span className="text-xl md:text-2xl font-bold text-white">4.9 étoiles</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-green-500 fill-current" />
              ))}
            </div>
            <span className="text-gray-400">sur</span>
            <div className="flex items-center gap-2 bg-green-500 px-3 py-1 rounded">
              <Star className="w-4 h-4 text-white fill-current" />
              <span className="text-white font-bold text-sm">Trustpilot</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;