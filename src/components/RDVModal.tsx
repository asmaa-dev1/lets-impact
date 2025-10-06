import React from "react";
import { X, Calendar } from "lucide-react";

interface RDVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RDVModal: React.FC<RDVModalProps> = ({ isOpen, onClose }) => {
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full h-[90vh] shadow-2xl relative flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-6 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar size={32} className="text-white" />
            <h2 className="text-2xl font-bold text-white">Prendre Rendez-vous</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Calendly Iframe - Embedded directement */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src="https://calendly.com/asmaaelhint0/30min?embed_domain=localhost&embed_type=Inline"
            width="100%"
            height="100%"
            frameBorder="0"
            className="rounded-b-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default RDVModal;