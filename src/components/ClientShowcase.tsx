import React, { useState } from 'react';
import { Star, ChevronRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

// Projects with complete data
const projects = [
  {
    name: "Il Ristorante",
    client: "Simon",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&h=500",
    testimonial: "Before, we had to spend a lot of money for an agency to find us clients online...",
    fullTestimonial: "Before, we had to spend a lot of money for an agency to find us clients online, it wasn't great in terms of profitability. Thanks to the website that cyberscale developed, we finally have real visibility, and reservations come in for free. We no longer need to pay an agency.",
    rating: 5,
    stats: "+300 customers served per month",
    projectUrl: "#"
  },
  {
    name: "Onestore",
    client: "Valérie",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500",
    testimonial: "Before our sales process was a bit manual and we wasted a lot of time...",
    fullTestimonial: "Before our sales process was a bit manual and we wasted a lot of time with clients. The system that CyberScale created now allows us to manage everything online, it's much more professional and we save so much time!",
    rating: 5,
    stats: "+500 orders per month",
    projectUrl: "#"
  },
  {
    name: "iPxcs",
    client: "Pierre",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=500",
    testimonial: "CyberScale did an impeccable job for iPxcs. Adam and his team created a...",
    fullTestimonial: "CyberScale did an impeccable job for iPxcs. Adam and his team created a platform that allows us to manage all our projects easily. The result exceeds our expectations, and the team was always available for our questions.",
    rating: 5,
    stats: "+200 projects managed",
    projectUrl: "#"
  },
  {
    name: "MyJiminy",
    client: "Alexis",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&h=500",
    testimonial: "I was very happy to work with Adam and his team. Adam is someone committed...",
    fullTestimonial: "I was very happy to work with Adam and his team. Adam is someone committed who really understands his client's needs. The site they created for MyJiminy is exactly what we wanted, modern and functional.",
    rating: 5,
    stats: "+1000 active users",
    projectUrl: "#"
  },
  {
    name: "TechFlow",
    client: "Marie",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500",
    testimonial: "At the end of 2022, I needed to change our management system. I wanted...",
    fullTestimonial: "At the end of 2022, I needed to change our management system. CyberScale created a custom solution that saves us hours every week. Their support is also excellent!",
    rating: 5,
    stats: "+150 client companies",
    projectUrl: "#"
  }
];

const ClientShowcaseCarousel = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewMore = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="bg-saas-black py-16 md:py-24 overflow-hidden">
        <div className="section-container">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
          </div>
          
          {/* Carousel Container */}
          <div className="relative">
            <div className="flex animate-carousel gap-6">
              {/* First group */}
              {projects.map((project, index) => (
                <div 
                  key={`project-1-${index}`}
                  className="flex-shrink-0 w-80"
                >
                  <div className="bg-white rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 h-full flex flex-col">
                    {/* Project name */}
                    <div className="px-6 pt-6 pb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                    </div>

                    {/* Project Image */}
                    <div className="relative h-48 mx-6 rounded-lg overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="mb-3">
                        <p className="text-gray-600 text-sm mb-1">
                          Testimonial from <span className="text-orange-500 font-bold">{project.client}</span>
                        </p>
                        
                        {/* Stars */}
                        <div className="flex mb-3">
                          {[...Array(project.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      {/* Testimonial */}
                      <p className="text-gray-700 text-sm mb-4 flex-grow line-clamp-3">
                        {project.testimonial}
                      </p>
                      
                      {/* See More Button */}
                      <button 
                        onClick={() => handleViewMore(project)}
                        className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition flex items-center gap-1 mt-auto"
                      >
                        Read more
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Second group (duplicate for infinite scroll) */}
              {projects.map((project, index) => (
                <div 
                  key={`project-2-${index}`}
                  className="flex-shrink-0 w-80"
                >
                  <div className="bg-white rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 h-full flex flex-col">
                    {/* Project name */}
                    <div className="px-6 pt-6 pb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                    </div>

                    {/* Project Image */}
                    <div className="relative h-48 mx-6 rounded-lg overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="mb-3">
                        <p className="text-gray-600 text-sm mb-1">
                          Testimonial from <span className="text-orange-500 font-bold">{project.client}</span>
                        </p>
                        
                        {/* Stars */}
                        <div className="flex mb-3">
                          {[...Array(project.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      {/* Testimonial */}
                      <p className="text-gray-700 text-sm mb-4 flex-grow line-clamp-3">
                        {project.testimonial}
                      </p>
                      
                      {/* See More Button */}
                      <button 
                        onClick={() => handleViewMore(project)}
                        className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition flex items-center gap-1 mt-auto"
                      >
                        Read more
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes carousel {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-320px * ${projects.length} - ${projects.length * 24}px));
            }
          }
          
          .animate-carousel {
            animation: carousel 40s linear infinite;
          }
          
          .animate-carousel:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </>
  );
};

export default ClientShowcaseCarousel;