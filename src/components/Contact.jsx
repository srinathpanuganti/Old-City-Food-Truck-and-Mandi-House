import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Mail, Star, Navigation, MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/mock';

const Contact = () => {
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

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: businessInfo.phone,
      link: `tel:${businessInfo.phone}`,
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: businessInfo.address,
      link: `https://maps.google.com/?q=${encodeURIComponent(businessInfo.address)}`,
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: businessInfo.hours,
      link: null,
      color: "from-purple-400 to-violet-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Location",
      details: businessInfo.location,
      link: null,
      color: "from-amber-400 to-orange-500"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 md:w-64 md:h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 md:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-2xl animate-float shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-display font-bold text-gray-900 text-responsive-xl md:text-5xl lg:text-6xl">
                Visit Us Today
              </h2>
            </div>
            <p className="text-responsive md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Come experience the authentic flavors of India at our food truck. We're ready to serve you 
              the best street food and Mandi in Aubrey!
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8">
              <div className={`bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-gray-200 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h3 className="font-display font-bold text-gray-900 mb-6 md:mb-8 text-2xl md:text-3xl">Get In Touch</h3>
                
                <div className="space-y-6 md:space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className={`flex items-start gap-4 md:gap-6 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: `${index * 0.1}s`}}>
                      <div className={`bg-gradient-to-br ${info.color} p-3 md:p-4 rounded-xl md:rounded-2xl flex-shrink-0 text-white group-hover:shadow-lg transition-all duration-300 hover:scale-110`}>
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 mb-2 text-lg md:text-xl group-hover:text-amber-700 transition-colors duration-300">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-gray-600 hover:text-amber-600 transition-colors duration-300 text-base md:text-lg block break-words"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-gray-600 text-base md:text-lg">{info.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating Card - Enhanced for Mobile */}
              <div className={`bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-yellow-200 shadow-xl ${isVisible ? 'animate-scale-in animate-stagger-1' : 'opacity-0'}`}>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-4 md:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-6 h-6 md:w-8 md:h-8 text-yellow-500 fill-current animate-pulse-custom" 
                        style={{animationDelay: `${i * 0.1}s`}}
                      />
                    ))}
                  </div>
                  <h3 className="font-display font-bold text-gray-900 mb-3 md:mb-4 text-2xl md:text-3xl">
                    {businessInfo.rating} out of 5 stars
                  </h3>
                  <p className="text-gray-700 mb-4 md:mb-6 text-base md:text-lg font-medium">
                    Based on {businessInfo.reviewCount} Google reviews
                  </p>
                  <p className="text-sm md:text-base text-gray-600 italic">
                    "Authentic flavors that transport you straight to India!"
                  </p>
                </div>
              </div>
            </div>

            {/* Map/Additional Info - Enhanced for Mobile */}
            <div className="space-y-6 md:space-y-8">
              <div className={`bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-gray-200 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <h3 className="font-display font-bold text-gray-900 mb-6 md:mb-8 text-2xl md:text-3xl">Find Our Food Truck</h3>
                
                <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                  <div className="bg-amber-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-amber-200">
                    <h4 className="font-bold text-gray-900 mb-2 md:mb-3 text-lg md:text-xl">Plaza 380 Location</h4>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      We're conveniently located at Plaza 380 in Aubrey, Texas. Look for our 
                      distinctive food truck with the Old City branding!
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-green-200">
                    <h4 className="font-bold text-gray-900 mb-2 md:mb-3 text-lg md:text-xl">Operating Hours</h4>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      We open at 6 PM daily. Perfect timing for dinner or a late evening snack!
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-200">
                    <h4 className="font-bold text-gray-900 mb-2 md:mb-3 text-lg md:text-xl">Price Range</h4>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Affordable pricing from {businessInfo.priceRange} per person. Great value for authentic, 
                      high-quality Indian cuisine!
                    </p>
                  </div>
                </div>

                {/* CTA Buttons - Enhanced for Mobile */}
                <div className="flex flex-col gap-4">
                  <a 
                    href={`tel:${businessInfo.phone}`}
                    className="group bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-4 rounded-xl md:rounded-2xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-xl hover:scale-105"
                  >
                    <Phone className="w-5 h-5 group-hover:animate-pulse-custom" />
                    <span className="text-lg">Call Now</span>
                  </a>
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(businessInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-4 rounded-xl md:rounded-2xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-xl hover:scale-105"
                  >
                    <Navigation className="w-5 h-5 group-hover:animate-pulse-custom" />
                    <span className="text-lg">Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;