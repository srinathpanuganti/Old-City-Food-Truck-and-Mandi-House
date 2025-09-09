import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Star, Heart, ChefHat, ArrowUp } from 'lucide-react';
import { businessInfo } from '../data/mock';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    const footerElement = document.querySelector('footer');
    if (footerElement) observer.observe(footerElement);
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
          showScrollTop ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white py-12 md:py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 md:w-64 md:h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
              {/* Business Info - Enhanced */}
              <div className={`lg:col-span-2 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="relative">
                    <img 
                      src={businessInfo.logo} 
                      alt="Old City Food Truck Logo" 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-amber-300 hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse-custom"></div>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-xl md:text-2xl">{businessInfo.name}</h3>
                    <p className="text-amber-200 text-sm md:text-base">{businessInfo.tagline}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  Experience the authentic flavors of India through our carefully crafted street food 
                  and traditional Mandi dishes. Every meal is a journey to the vibrant streets of the Old City.
                </p>
                <div className="flex items-center gap-2 text-yellow-400 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current animate-pulse-custom" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                  <span className="font-bold text-lg">{businessInfo.rating}</span>
                  <span className="text-gray-400">({businessInfo.reviewCount} reviews)</span>
                </div>
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 text-sm font-semibold">
                  <ChefHat className="w-4 h-4" />
                  <span>Authentic Indian Cuisine</span>
                </div>
              </div>

              {/* Quick Links - Enhanced */}
              <div className={`${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
                <h4 className="font-display font-bold text-white mb-4 md:mb-6 text-lg md:text-xl">Quick Links</h4>
                <ul className="space-y-3">
                  {[
                    { label: 'Home', id: 'home' },
                    { label: 'Menu', id: 'menu' },
                    { label: 'Mandi House', id: 'mandi' },
                    { label: 'About Us', id: 'about' },
                    { label: 'Contact', id: 'contact' }
                  ].map((link, index) => (
                    <li key={link.id}>
                      <button 
                        onClick={() => document.getElementById(link.id)?.scrollIntoView({behavior: 'smooth'})}
                        className="text-gray-300 hover:text-amber-400 transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group text-base md:text-lg"
                      >
                        <span className="w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info - Enhanced for Mobile */}
              <div className={`${isVisible ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'}`}>
                <h4 className="font-display font-bold text-white mb-4 md:mb-6 text-lg md:text-xl">Contact Info</h4>
                <div className="space-y-4 md:space-y-6">
                  <div className="group">
                    <div className="flex items-start gap-3">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-400 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Phone</p>
                        <a 
                          href={`tel:${businessInfo.phone}`}
                          className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium text-base md:text-lg"
                        >
                          {businessInfo.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-start gap-3">
                      <div className="bg-gradient-to-r from-blue-400 to-indigo-400 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Location</p>
                        <a 
                          href={`https://maps.google.com/?q=${encodeURIComponent(businessInfo.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium text-sm md:text-base break-words"
                        >
                          Plaza 380, Aubrey TX
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-start gap-3">
                      <div className="bg-gradient-to-r from-purple-400 to-violet-400 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Hours</p>
                        <span className="text-gray-300 font-medium text-base md:text-lg">{businessInfo.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer - Enhanced */}
            <div className={`border-t border-gray-700 pt-6 md:pt-8 ${isVisible ? 'animate-fade-in-up animate-stagger-3' : 'opacity-0'}`}>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
                <div className="text-gray-400 text-sm md:text-base text-center md:text-left">
                  © {currentYear} {businessInfo.name}. All rights reserved.
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse-custom" />
                  <span>for authentic food lovers</span>
                </div>
              </div>
              
              {/* Additional Mobile-friendly Info */}
              <div className="mt-6 pt-6 border-t border-gray-700 text-center">
                <p className="text-gray-400 text-sm">
                  🚚 Mobile Food Truck • 🌟 4.6/5 Rating • 📍 Aubrey, TX
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;