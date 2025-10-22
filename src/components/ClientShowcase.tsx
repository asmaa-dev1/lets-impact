import React, { useState } from 'react';
import { Star, ChevronRight } from 'lucide-react';

// Projects with complete data - ADD YOUR REAL CLIENT PROJECTS HERE
// Uncomment and fill with your actual client data when ready
/*
const projects = [
  {
    name: "Project Name",
    client: "Client Name",
    image: "path/to/image.jpg",
    testimonial: "Short testimonial preview...",
    fullTestimonial: "Full testimonial text here...",
    rating: 5,
    stats: "+XXX metric here",
    projectUrl: "#"
  },
  // Add more projects here...
];
*/

// Temporary empty array - remove this when you add your real projects
const projects = [];

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="relative">
          <img 
            src={project.image}
            alt={project.name}
            className="w-full h-64 object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
          >
            ✕
          </button>
        </div>
        
        <div className="p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.name}</h3>
          <p className="text-gray-600 mb-4">Client: <span className="text-orange-500 font-bold">{project.client}</span></p>
          
          <div className="flex mb-6">
            {[...Array(project.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            "{project.fullTestimonial}"
          </p>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <p className="text-orange-900 font-semibold">{project.stats}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClientShowcaseCarousel = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewMore = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="bg-black py-8 md:py-12 overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <p className="text-xl md:text-2xl text-gray-400 mb-6 font-light">
              Industry leaders and professionals agree:
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12">
              <span className="text-orange-500">Let's Impact</span>{' '}
              <span className="text-white">redefines the way</span>
              <br />
              <span className="text-white">businesses grow.</span>
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