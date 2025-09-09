import React, { useState, useEffect } from 'react';
import { Crown, Plus, Star, Sparkles } from 'lucide-react';
import { mandiMenu } from '../data/mock';

const MandiSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('mandi');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <section id="mandi" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 md:w-64 md:h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-2xl animate-float shadow-lg">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-gray-900 text-responsive-xl md:text-5xl lg:text-6xl">
              Mandi House
            </h2>
          </div>
          <p className="text-responsive md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the royal flavors of traditional Arabian Mandi - slow-cooked perfection in aromatic rice
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Main Mandi Items */}
        <div className="mb-16 md:mb-20">
          <h3 className={`font-display font-bold text-gray-900 text-responsive-lg md:text-4xl mb-8 md:mb-12 text-center ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
            Signature Mandi Collection
          </h3>
          
          <div className="grid gap-6 md:gap-8 max-w-6xl mx-auto">
            {mandiMenu.mains.map((item, index) => (
              <div 
                key={index}
                className={`group bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-amber-200 hover:border-amber-400 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h4 className="font-display font-bold text-gray-900 text-xl md:text-2xl lg:text-3xl group-hover:text-amber-700 transition-colors duration-300">
                        {item.name}
                      </h4>
                      <Sparkles className="w-6 h-6 text-amber-500 animate-pulse-custom" />
                    </div>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      Tender, perfectly spiced meat served over fragrant basmati rice with traditional herbs and spices
                    </p>
                  </div>
                  
                  {/* Mobile Pricing */}
                  <div className="lg:hidden">
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(item.prices).map(([portion, price]) => (
                        <div 
                          key={portion}
                          className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-4 text-center border border-amber-200 hover:shadow-md transition-all duration-300 hover-lift"
                        >
                          <div className="text-sm font-bold text-gray-700 mb-1">{portion}</div>
                          <div className="font-bold text-amber-600 text-lg">
                            {formatPrice(price)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Desktop Pricing */}
                  <div className="hidden lg:flex gap-4">
                    {Object.entries(item.prices).map(([portion, price]) => (
                      <div 
                        key={portion}
                        className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl px-6 py-4 text-center border border-amber-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <div className="text-sm font-bold text-gray-700 mb-1">{portion}</div>
                        <div className="font-bold text-amber-600 text-xl">
                          {formatPrice(price)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add-Ons */}
        <div className="mb-16 md:mb-20">
          <div className={`text-center mb-8 md:mb-12 ${isVisible ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'}`}>
            <h3 className="font-display font-bold text-gray-900 text-responsive-lg md:text-3xl mb-4 flex items-center justify-center gap-3">
              <Plus className="w-8 h-8 text-amber-600" />
              Add-Ons
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {mandiMenu.addOns.map((addon, index) => (
              <div 
                key={index}
                className={`group bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-amber-200 hover:border-amber-400 transition-all duration-300 text-center transform hover:-translate-y-2 hover:shadow-lg ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{animationDelay: `${0.3 + index * 0.1}s`}}
              >
                <h4 className="font-semibold text-gray-900 mb-3 text-base md:text-lg group-hover:text-amber-700 transition-colors duration-300">
                  {addon.name}
                </h4>
                <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-lg font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
                  {formatPrice(addon.price)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Mandi */}
        <div>
          <div className={`text-center mb-8 md:mb-12 ${isVisible ? 'animate-fade-in-up animate-stagger-3' : 'opacity-0'}`}>
            <h3 className="font-display font-bold text-gray-900 text-responsive-lg md:text-3xl mb-4 flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-yellow-500 animate-pulse-custom" />
              Old City Specials
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-6 md:gap-8 max-w-5xl mx-auto">
            {mandiMenu.specials.map((special, index) => (
              <div 
                key={index}
                className={`group bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-yellow-300 hover:border-yellow-400 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${0.6 + index * 0.2}s`}}
              >
                {/* Sparkle effect */}
                <div className="absolute top-4 right-4">
                  <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse-custom" />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h4 className="font-display font-bold text-gray-900 text-xl md:text-2xl lg:text-3xl group-hover:text-amber-700 transition-colors duration-300">
                        {special.name}
                      </h4>
                      <Crown className="w-6 h-6 md:w-8 md:h-8 text-yellow-500 animate-float" />
                    </div>
                    <p className="text-gray-700 italic text-base md:text-lg leading-relaxed">
                      Our signature combination featuring the finest selection of meats and traditional preparation methods
                    </p>
                  </div>
                  
                  <div className="text-center md:text-right">
                    <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="font-bold text-2xl md:text-3xl lg:text-4xl">
                        {formatPrice(special.price)}
                      </div>
                      <div className="text-sm opacity-90 mt-1">
                        Perfect for sharing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MandiSection;