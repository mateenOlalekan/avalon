import React, { useState, useEffect, useRef } from 'react';
import {Link} from "react-router-dom";
import { 
  Search, ShoppingCart, Heart, User, ChevronDown, 
  Menu, X, Bell, ArrowRight, ShoppingBag, 
  Phone, Mail, MapPin, ShieldCheck
} from 'lucide-react';

const ECommerceNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [openMobileCategory, setOpenMobileCategory] = useState(null);
  
  // Refs for dropdown menus
  const dropdownRefs = useRef({});
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeCategory && dropdownRefs.current[activeCategory] && 
          !dropdownRefs.current[activeCategory].contains(event.target)) {
        setActiveCategory(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeCategory]);
  
  const categories = [
    {
      name: "Electronics",
      subcategories: ["Smartphones", "Laptops", "Tablets", "Accessories", "Wearables", "Audio"]
    },
    {
      name: "Fashion",
      subcategories: ["Men's Clothing", "Women's Clothing", "Footwear", "Accessories", "Jewelry", "Watches"]
    },
    {
      name: "Home & Living",
      subcategories: ["Furniture", "Decor", "Kitchen", "Bedding", "Lighting", "Storage"]
    },
    {
      name: "Beauty",
      subcategories: ["Skincare", "Makeup", "Haircare", "Fragrances", "Bath & Body", "Tools"]
    }
  ];

  // Toggle mobile category dropdown
  const toggleMobileCategory = (categoryName) => {
    if (openMobileCategory === categoryName) {
      setOpenMobileCategory(null);
    } else {
      setOpenMobileCategory(categoryName);
    }
  };

  // Handle category hover for desktop dropdown
  const handleCategoryHover = (categoryName) => {
    setActiveCategory(categoryName);
  };
  
  return (
    <div className="w-full">
      {/* Top utility bar with contact info */}
    
      {/* Announcement bar */}
      <div className="bg-red-500 text-white py-2.5 ">
        <div className="max-w-screen-2xl mx-auto text-center text-sm font-medium px4">
          <p className="flex justify-center items-center">
            Free express shipping on all orders over $75!

          </p>
        </div>
      </div>

      <header className={`bg-white  ${scrolled ? 'shadow-lg' : 'shadow-sm'} sticky top-0 z-50 transition-all duration-300`}>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between py-2 md:py-3">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="font-semibold text-2xl tracking-tight">
                <span className="text-red-600">Luxe</span>
                <span className="text-black">Market</span>
                <ShoppingBag className="inline-block ml-1 text-red-500" size={20} />
              </Link>
            </div>
            
            {/* Search Bar - Hidden on Mobile */}
            <div className="hidden md:flex flex-grow max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-0 top-0 mt-2.5 mr-3 text-gray-400 hover:text-indigo-600 transition-colors duration-200">
                  <Search size={20} />
                </button>
              </div>
            </div>
            
            {/* Right Navigation - Hidden on Mobile */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                <Bell size={20} className="hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                <Heart size={20} className="hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 group relative transition-colors duration-200">
                <div className="relative">
                  <ShoppingCart size={20} className="hover:scale-110 transition-transform duration-200" />
                  <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-200">
                    {cartItems}
                  </span>
                </div>
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                <User size={20} className="hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 focus:outline-none"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
        </div>
        
        {/* Mobile Menu - Slide from Left */}
        <div 
          className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-100">
            <div className="font-bold text-xl">
              <span className="text-indigo-600">Luxe</span>
              <span className="text-purple-600">Market</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-0 top-0 mt-2.5 mr-3 text-gray-400 hover:text-indigo-600 transition-colors duration-200">
                <Search size={20} />
              </button>
            </div>
          </div>
          
          <nav className="h-full overflow-y-auto pb-20">
            <ul className="divide-y divide-gray-100">
              {categories.map((category) => (
                <li key={category.name} className="py-1">
                  <div 
                    className="px-4 py-3 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleMobileCategory(category.name)}
                  >
                    <span className="font-medium text-gray-800">{category.name}</span>
                    <ChevronDown 
                      size={16} 
                      className={`text-gray-600 transition-transform duration-200 ${openMobileCategory === category.name ? 'rotate-180' : ''}`} 
                    />
                  </div>
                  <ul className={`bg-gray-50 pl-8 py-1 transition-all duration-200 ease-in-out ${openMobileCategory === category.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    {category.subcategories.map((subcat) => (
                      <li key={subcat}>
                        <a href="#" className="block py-2.5 text-sm text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                          {subcat}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href="#" className="block py-2.5 text-sm text-indigo-600 font-medium hover:text-purple-600 transition-colors duration-200">
                        View All →
                      </a>
                    </li>
                  </ul>
                </li>
              ))}
              <li>
                <a href="#" className="block px-4 py-3 text-red-600 font-medium hover:text-red-700 transition-colors duration-200">
                  Sale
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-3 text-indigo-600 font-medium hover:text-purple-600 transition-colors duration-200">
                  New Arrivals
                </a>
              </li>
            </ul>
            
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100">
              <a href="#" className="flex items-center px-4 py-3.5 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                <Bell size={20} className="mr-3" />
                <span>Notifications</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3.5 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                <Heart size={20} className="mr-3" />
                <span>Wishlist</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3.5 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                <div className="relative">
                  <ShoppingCart size={20} className="mr-3" />
                  <span className="absolute -top-2 -right-1 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                </div>
                <span>Cart</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3.5 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                <User size={20} className="mr-3" />
                <span>Account</span>
              </a>
            </div>
          </nav>
        </div>
        

        {isMenuOpen && (
          <div 
            className="fixed inset-0  bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </header>
    </div>
  );
};

export default ECommerceNavbar;