import React from 'react';
import { Star } from 'lucide-react';

// Les projets/témoignages - t9der tbeddel b les vrais données dyalek
const projects = [
  {
    name: "FreeCoffee",
    client: "Rudy",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&h=400",
    testimonial: "Let's Impact nous a accompagné dans le développement du projet coffee en mars 2023, nous étions à...",
    rating: 5
  },
  {
    name: "Naaform",
    client: "Ludovic",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400",
    testimonial: "Bonjour, je suis Ludovic Jambon-Coste, le fondateur de l'application NaaForm, qui est une application dédiée...",
    rating: 5
  },
  {
    name: "Isovea",
    client: "Stéphane",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&h=400",
    testimonial: "On avait déjà testé plusieurs agences pour essayer d'améliorer notre site Shopify, mais aucune n'avait...",
    rating: 5
  },
  {
    name: "AlloReflexo",
    client: "Frank",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&h=400",
    testimonial: "CyberScale a vraiment optimisé notre process. Avant on galérait à onboarder chaque réflexologue, ça prenait...",
    rating: 5
  }
];

const ClientShowcase = () => {
  return (
    <div className="bg-saas-black py-16 md:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ils <span className="gradient-text">témoignent</span>
          </h2>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-b from-saas-darkGray to-saas-black border border-gray-800 rounded-xl overflow-hidden hover:border-saas-orange transition-all duration-300 card-shadow hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-saas-black via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                
                {/* Stars */}
                <div className="flex mb-3">
                  {[...Array(project.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-saas-orange fill-current" />
                  ))}
                </div>
                
                {/* Testimonial */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.testimonial}
                </p>
                
                {/* Client Info */}
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-sm">
                    Le témoignage de <span className="text-saas-orange font-semibold">{project.client}</span>
                  </p>
                </div>
                
                {/* See More Link */}
                <button className="mt-4 text-saas-orange text-sm font-medium hover:underline flex items-center">
                  Voir plus
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientShowcase;