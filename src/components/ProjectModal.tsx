import React from 'react';
import { X, Star, Trophy } from 'lucide-react';

interface Project {
  name: string;
  client: string;
  image: string;
  testimonial: string;
  fullTestimonial: string;
  rating: number;
  stats?: string;
  projectUrl?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition z-10 bg-white rounded-full p-1.5 shadow-lg"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {project.name} – Le projet idéal.
            </h2>
            
            {project.stats && (
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Trophy className="text-orange-500" size={20} />
                <span className="text-base">{project.stats}</span>
              </div>
            )}
          </div>

          {/* Project Image */}
          <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Stars */}
          <div className="flex justify-center mb-4">
            {[...Array(project.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>

          {/* Testimonial */}
          <div className="text-center mb-4">
            <p className="text-base text-gray-600 mb-2">
              Le témoignage de <span className="font-bold text-gray-900">{project.client}</span>
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              {project.fullTestimonial}
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={() => {
                if (project.projectUrl) {
                  window.open(project.projectUrl, '_blank');
                }
                onClose();
              }}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg"
            >
              Voir le projet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;