import React, { useEffect, useState } from 'react';
import { Star, MapPin, Clock, Utensils, Sparkles, Award, Users } from 'lucide-react';
import { businessInfo } from '../data/mock';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen gradient-hero overflow-hidden pt-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 md:w-80 md:h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 md:w-80 md:h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-40 h-40 md:w-80 md:h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Left Content */}
          <div className={`space-y-6 md:space-y-8 text-center lg:text-left ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            {/* Premium badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 animate-slide-in-down">
              <Award className="w-4 h-4 text-amber-700" />
              <span className="text-sm font-medium text-amber-800">Award Winning Cuisine</span>
            </div> */}

            <div className="space-y-4 md:space-y-6">
              <h1 className="font-display font-bold text-gray-900 leading-tight">
                <span className="block text-3xl md:text-5xl lg:text-6xl">
                  Authentic
                </span>
                <span className="block text-3xl md:text-5xl lg:text-6xl text-amber-600">
                  Indian Street Food
                </span>
              </h1>
              
              <p className="text-responsive md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Experience the rich flavors of traditional Indian cuisine and signature Mandi dishes. 
                From crispy dosas to aromatic biryanis, every bite tells a story of authentic taste.
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
              <div className={`flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/40 hover-lift ${isVisible ? 'animate-scale-in animate-stagger-1' : ''}`}>
                <Star className="w-5 h-5 text-yellow-500 fill-current animate-pulse-custom" />
                <div className="text-left">
                  <span className="font-bold text-gray-900 text-lg">{businessInfo.rating}</span>
                  <div className="text-xs text-gray-600">({businessInfo.reviewCount} reviews)</div>
                </div>
              </div>
              
              <div className={`flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/40 hover-lift ${isVisible ? 'animate-scale-in animate-stagger-2' : ''}`}>
                <MapPin className="w-5 h-5 text-amber-600" />
                <div className="text-left">
                  <span className="font-semibold text-gray-900">{businessInfo.location}</span>
                  <div className="text-xs text-gray-600">Plaza 380</div>
                </div>
              </div>
              
              <div className={`flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/40 hover-lift ${isVisible ? 'animate-scale-in animate-stagger-3' : ''}`}>
                <Clock className="w-5 h-5 text-green-600" />
                <div className="text-left">
                  <span className="font-semibold text-gray-900">{businessInfo.hours}</span>
                  <div className="text-xs text-gray-600">Daily</div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 ${isVisible ? 'animate-fade-in-up animate-stagger-4' : ''}`}>
              <button 
                onClick={scrollToMenu}
                className="group relative overflow-hidden gradient-button hover:gradient-button text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Utensils className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  View Menu
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <a 
                href={`tel:${businessInfo.phone}`}
                className="group border-2 border-white bg-white/20 backdrop-blur-sm text-gray-800 hover:bg-white hover:text-amber-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 text-center hover:shadow-lg hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500 animate-pulse-custom"></div>
                  Call Now
                </span>
              </a>
            </div>
          </div>

          {/* Right Content - Enhanced */}
          <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative z-10">
              {/* Main logo container */}
              <div className="relative bg-white/30 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/40 shadow-2xl hover-lift">
                <img 
                  src={businessInfo.logo} 
                  alt="Old City Food Truck Logo" 
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating badges with enhanced animations */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    Open Now
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 gradient-button text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-lg flex items-center gap-2 hover-glow">
                  <Utensils className="w-4 h-4" />
                  {businessInfo.priceRange}
                </div>

                {/* Customer count badge */}
                <div className="absolute top-4 -left-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-lg" style={{animationDelay: '1s'}}>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    200+ Reviews
                  </div>
                </div>
              </div>

              {/* Enhanced decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-3xl transform rotate-3 -z-10 animate-pulse-custom"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-red-200/30 to-amber-200/30 rounded-3xl transform -rotate-3 -z-20" style={{animationDelay: '2s'}}></div>
              
              {/* Sparkle effects */}
              <Sparkles className="absolute top-10 right-10 w-6 h-6 text-yellow-400 animate-pulse-custom" />
              <Sparkles className="absolute bottom-20 left-10 w-4 h-4 text-amber-400 animate-pulse-custom" style={{animationDelay: '1s'}} />
              <Sparkles className="absolute top-1/2 -right-4 w-5 h-5 text-orange-400 animate-pulse-custom" style={{animationDelay: '2s'}} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-600 rounded-full mt-2 animate-pulse-custom"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;