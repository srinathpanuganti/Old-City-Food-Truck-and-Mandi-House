import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, Star } from 'lucide-react';
import { businessInfo } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg border-b border-amber-200 shadow-lg' 
        : 'bg-transparent'
    }`}>
      {/* Top Info Bar */}
      <div className={`transition-all duration-500 overflow-hidden ${
        isScrolled ? 'max-h-0 opacity-0' : 'max-h-16 opacity-100'
      }`}>
        <div className="bg-gradient-to-r from-amber-900 to-orange-900 text-amber-100 py-2 text-sm">
          <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-2 md:gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 hover:text-white transition-colors">
                <MapPin className="w-4 h-4" />
                <span className="hidden sm:inline">{businessInfo.location}</span>
                <span className="sm:hidden">Aubrey, TX</span>
              </div>
              <div className="flex items-center gap-1 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden md:inline">{businessInfo.phone}</span>
                <span className="md:hidden">Call Us</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 hover:text-white transition-colors">
                <Clock className="w-4 h-4" />
                <span>{businessInfo.hours}</span>
              </div>
              <div className="flex items-center gap-1 hover:text-white transition-colors">
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <span className="hidden sm:inline">{businessInfo.rating} ({businessInfo.reviewCount} reviews)</span>
                <span className="sm:hidden">{businessInfo.rating} ★</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 animate-fade-in-left">
            <div className="relative">
              <img 
                src={businessInfo.logo} 
                alt="Old City Food Truck Logo" 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-amber-300 hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse-custom"></div>
            </div>
            <div>
              <h1 className={`text-lg md:text-xl lg:text-2xl font-display font-bold transition-colors duration-300 ${
                isScrolled ? 'text-amber-900' : 'text-gray-900'
              }`}>
                {businessInfo.name}
              </h1>
              <p className={`text-xs md:text-sm transition-colors duration-300 ${
                isScrolled ? 'text-amber-700' : 'text-amber-700'
              }`}>
                {businessInfo.tagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 animate-fade-in-right">
            {['Home', 'Menu', 'Mandi House', 'About', 'Contact'].map((item, index) => {
              const sectionId = item.toLowerCase().replace(' ', '').replace('house', '');
              return (
                <button 
                  key={item}
                  onClick={() => scrollToSection(sectionId === 'home' ? 'home' : sectionId)}
                  className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                    isScrolled ? 'text-amber-800 hover:text-amber-900' : 'text-white hover:text-amber-200'
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              );
            })}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
              isScrolled ? 'text-amber-900 hover:bg-amber-100' : 'text-white hover:bg-white/20'
            }`}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'
              }`}>
                <Menu className="w-6 h-6" />
              </span>
              <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0'
              }`}>
                <X className="w-6 h-6" />
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <nav className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 border border-amber-200 shadow-xl">
            <div className="flex flex-col gap-4">
              {['Home', 'Menu', 'Mandi House', 'About', 'Contact'].map((item, index) => {
                const sectionId = item.toLowerCase().replace(' ', '').replace('house', '');
                return (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(sectionId === 'home' ? 'home' : sectionId)}
                    className="text-amber-800 hover:text-amber-900 font-medium text-left py-2 px-4 rounded-lg hover:bg-amber-50 transition-all duration-300 transform hover:translate-x-2"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {item}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-amber-200">
                <a 
                  href={`tel:${businessInfo.phone}`}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-center block"
                >
                  Call Now
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;