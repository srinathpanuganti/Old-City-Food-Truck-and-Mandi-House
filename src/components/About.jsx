import React, { useState, useEffect } from 'react';
import { Heart, Award, Clock, Users, Sparkles, Star } from 'lucide-react';

const About = () => {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Made with Love",
      description: "Every dish is prepared with authentic ingredients and traditional recipes passed down through generations",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award Winning",
      description: "Recognized for serving the most authentic Indian street food and Mandi in the Dallas-Fort Worth area",
      color: "from-yellow-400 to-amber-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fresh Daily",
      description: "We prepare our food fresh daily using the finest spices and ingredients sourced directly from India",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Tradition",
      description: "A family-owned business bringing the authentic taste of Indian street food to your neighborhood",
      color: "from-blue-400 to-indigo-500"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-white via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 md:w-64 md:h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 md:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-2xl animate-float shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-display font-bold text-gray-900 text-responsive-xl md:text-5xl lg:text-6xl">
                Our Story
              </h2>
            </div>
            <p className="text-responsive md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Old City Food Truck & Mandi House brings the vibrant flavors of Indian street food and traditional 
              Arabian Mandi to Aubrey, Texas. Our journey began with a passion for authentic cuisine and a dream 
              to share the rich culinary heritage of India with our community.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Features Grid - Enhanced for Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group text-center transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 text-white shadow-lg transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl group-hover:text-amber-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed px-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Story Content - Enhanced for Mobile */}
          <div className={`bg-gradient-to-br from-white/80 to-amber-50/80 backdrop-blur-sm rounded-3xl p-6 md:p-12 border border-amber-200 shadow-xl ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h3 className="font-display font-bold text-gray-900 mb-6 text-2xl md:text-3xl lg:text-4xl">
                  From Heritage to Your Plate
                </h3>
                <div className="space-y-4 md:space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
                  <p>
                    Our culinary journey started in the bustling streets of Hyderabad, where the aroma of spices 
                    fills the air and every corner tells a story of flavor. We brought these authentic recipes 
                    and cooking techniques to Texas, staying true to the traditional methods while adapting to 
                    local tastes.
                  </p>
                  <p>
                    What sets us apart is our commitment to authenticity. From our signature Mandi prepared in 
                    traditional ovens to our street-style chaats made with imported spices, every dish reflects 
                    our dedication to preserving the true essence of Indian cuisine.
                  </p>
                  <p>
                    Whether you're craving the comfort of home-style cooking or looking to explore new flavors, 
                    Old City Food Truck & Mandi House offers an authentic culinary experience that transports 
                    you to the vibrant streets of India.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-amber-200 hover-lift">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-xl">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-display font-bold text-gray-900 text-xl md:text-2xl">Visit Our Food Truck</h4>
                    </div>
                    <p className="text-gray-600 text-base md:text-lg">Experience authentic flavors on wheels</p>
                  </div>
                  
                  <div className="space-y-4 text-sm md:text-base">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                      <span className="text-gray-600 font-medium">Location:</span>
                      <span className="font-bold text-gray-900">Plaza 380, Aubrey TX</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                      <span className="text-gray-600 font-medium">Cuisine Type:</span>
                      <span className="font-bold text-gray-900">Indian Street Food</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                      <span className="text-gray-600 font-medium">Specialty:</span>
                      <span className="font-bold text-gray-900">Traditional Mandi</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                      <span className="text-gray-600 font-medium">Price Range:</span>
                      <span className="font-bold text-gray-900">$10 - $20</span>
                    </div>
                  </div>

                  {/* Mobile-friendly rating display */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <div className="font-bold text-gray-900 text-lg">4.6 out of 5 stars</div>
                      <div className="text-sm text-gray-600">Based on 200+ reviews</div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full animate-pulse-custom"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse-custom" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;