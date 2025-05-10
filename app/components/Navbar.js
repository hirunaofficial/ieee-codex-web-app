'use client'

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Handle active section tracking
      const sections = ['hero', 'about', 'competitions', 'timeline', 'team', 'faq', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Handle navbar appearance - glass effect
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Handle navbar auto-hide on scroll down
      const currentScrollPos = window.scrollY;
      // Use function form of setState to access the most recent state values
      setPrevScrollPos(prevPos => {
        const isScrollingDown = currentScrollPos > prevPos && currentScrollPos > 200;
        
        setNavVisible(visible => {
          if (isScrollingDown && visible) {
            return false;
          } else if (!isScrollingDown && !visible) {
            return true;
          }
          return visible;
        });
        
        return currentScrollPos;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Remove dependencies to avoid infinite loop

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
    } ${navVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white blue-glow-text">CodeX</span>
          <span className="ml-2 text-xs bg-blue-600 bg-opacity-20 text-blue-300 px-2 py-1 rounded-md border border-blue-500 border-opacity-30">IEEE Sri Lanka</span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-darkBlue-700 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['about', 'competitions', 'timeline', 'team', 'faq', 'contact'].map((section) => (
            <button
              key={section}
              className={`text-sm font-medium transition-all relative hover:text-blue-400 ${
                activeSection === section ? 'text-blue-400' : 'text-gray-300'
              } focus:outline-none`}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span 
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform origin-left duration-300 ${
                  activeSection === section ? 'scale-x-100' : ''
                }`}
              ></span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden glass-card mt-2 border-t border-blue-900 transform transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        {['about', 'competitions', 'timeline', 'team', 'faq', 'contact'].map((section) => (
          <button
            key={section}
            className={`block w-full text-left px-4 py-3 text-sm font-medium hover:bg-darkBlue-700 transition-colors ${
              activeSection === section ? 'text-blue-400 bg-darkBlue-800' : 'text-gray-300'
            } focus:outline-none`}
            onClick={() => scrollToSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
}