import React, { useState, useEffect } from 'react';
import { ChefHat, Sparkles, Search } from 'lucide-react';
import { regularMenu } from '../data/mock';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('shawarmas');
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('menu');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const categories = [
    { key: 'shawarmas', label: 'Shawarmas', icon: '🌯', color: 'from-red-400 to-red-600' },
    { key: 'dosas', label: 'Dosas', icon: '🥞', color: 'from-yellow-400 to-yellow-600' },
    { key: 'friedRice', label: 'Fried Rice', icon: '🍚', color: 'from-green-400 to-green-600' },
    { key: 'noodles', label: 'Noodles', icon: '🍜', color: 'from-blue-400 to-blue-600' },
    { key: 'idlyVada', label: 'Idly/Vada', icon: '🥟', color: 'from-purple-400 to-purple-600' },
    { key: 'southIndianSnacks', label: 'Snacks', icon: '🥙', color: 'from-pink-400 to-pink-600' },
    { key: 'chickenAppetizers', label: 'Chicken', icon: '🍗', color: 'from-orange-400 to-orange-600' },
    { key: 'vegAppetizers', label: 'Veg Apps', icon: '🥗', color: 'from-teal-400 to-teal-600' },
    { key: 'beverages', label: 'Beverages', icon: '🥤', color: 'from-indigo-400 to-indigo-600' },
    { key: 'muskbun', label: 'Musk Bun', icon: '🥙', color: 'from-indigo-400 to-indigo-600' },
    { key: 'milkshakes', label: 'Milkshakes', icon: '🥤', color: 'from-amber-400 to-amber-600' },
    { key: 'slushes', label: 'Slushes', icon: '🧊', color: 'from-cyan-400 to-cyan-600' }
  ];

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const isSpecialItem = (name) => {
    return name.includes('24k Gold') || name.includes('Special');
  };

  const filteredItems = regularMenu[activeCategory]?.items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <section id="menu" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-amber-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-amber-400 to-orange-400 p-3 rounded-2xl animate-float">
              <ChefHat className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-gray-900 text-responsive-xl md:text-5xl lg:text-6xl">
              Our Menu
            </h2>
          </div>
          <p className="text-responsive md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully crafted selection of authentic Indian street food and traditional favorites
          </p>
          
          {/* Search Bar */}
          {/* <div className="max-w-md mx-auto mt-8 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            />
          </div> */}
        </div>

        {/* Category Tabs - Enhanced for Mobile */}
        <div className={`mb-12 md:mb-16 ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
          {/* Mobile - Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-3 min-w-max px-4">
              {categories.map((category, index) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`flex-shrink-0 px-4 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 min-w-max ${
                    activeCategory === category.key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                      : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200'
                  }`}
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="text-sm font-semibold">{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop - Wrapped Grid */}
          <div className="hidden md:flex flex-wrap justify-center gap-3 lg:gap-4">
            {categories.map((category, index) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 hover-lift ${
                  activeCategory === category.key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-xl transform scale-105`
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200'
                }`}
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="font-semibold">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="max-w-5xl mx-auto">
          {regularMenu[activeCategory] && (
            <div className={`${isVisible ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'}`}>
              <div className="text-center mb-8 md:mb-12">
                <h3 className="font-display font-bold text-gray-900 text-responsive-lg md:text-4xl mb-2">
                  {regularMenu[activeCategory].title}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid gap-4 md:gap-6">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <div 
                      key={index}
                      className={`group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-gray-200 hover:border-amber-300 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                        isSpecialItem(item.name) 
                          ? 'bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-300 shadow-lg' 
                          : ''
                      }`}
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="flex items-center gap-2 flex-1">
                              <h4 className="font-display font-bold text-gray-900 text-lg md:text-xl lg:text-2xl group-hover:text-amber-700 transition-colors duration-300">
                                {item.name}
                              </h4>
                              {isSpecialItem(item.name) && (
                                <div className="flex items-center gap-1">
                                  <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse-custom" />
                                  <span className="bg-gradient-to-r from-yellow-400 to-amber-400 text-white text-xs px-2 py-1 rounded-full font-bold">
                                    PREMIUM
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          {isSpecialItem(item.name) && (
                            <p className="text-sm md:text-base text-yellow-700 italic mb-2 font-medium">
                              Chef's Special - Premium ingredients and unique preparation
                            </p>
                          )}
                          
                          <div className="md:hidden mt-4">
                            <div className="text-center">
                              <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                                {formatPrice(item.price)}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="hidden md:block text-right">
                          <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-xl text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
                    <p className="text-gray-500">Try searching with different keywords</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;