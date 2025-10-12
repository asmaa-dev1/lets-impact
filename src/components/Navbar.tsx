import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
      setIsOpen(false); // Close mobile menu
    }
  };

  // Navigation items
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    // { name: "Clients", id: "clients" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
        { name: "Blogs", id: "Blogs" }
  ];

  return (
    <nav className="bg-brand-logo backdrop-blur-sm sticky top-0 z-50 border-b border-brand-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={() => scrollToSection("home")}
              className="flex items-center cursor-pointer"
            >
              <img 
                src="/img/logoL.png" 
                alt="LET'S IMPACT Logo" 
                className="h-12 w-auto object-contain"
              />
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 text-lg font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-black font-bold"
                      : "text-white hover:text-black"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Book a Call Button - New Style */}
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline" 
                className="relative border-2 border-white/50 text-white hover:text-black font-semibold py-3 px-7 rounded-xl transition-all duration-300 group overflow-hidden hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] bg-black/20 backdrop-blur-sm"
              >
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative text-base flex items-center gap-2">
                  <Calendar size={20} />
                  Book a Call
                </span>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-orange-600 border-t border-orange-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 text-base font-medium ${
                  activeSection === item.id
                    ? "text-black font-bold"
                    : "text-white hover:text-black"
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Book a Call in mobile menu - New Style */}
            <div className="mt-4 px-3 py-2">
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline" 
                className="relative border-2 border-white/50 text-white hover:text-black font-semibold py-3 px-7 rounded-xl transition-all duration-300 group overflow-hidden hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] w-full bg-black/20 backdrop-blur-sm"
              >
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative text-base flex items-center justify-center gap-2">
                  <Calendar size={20} />
                  Book a Call
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;