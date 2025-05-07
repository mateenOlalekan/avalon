import React, { useState, useEffect } from "react";
import { ArrowRight, Clock, ShoppingBag, ChevronRight } from "lucide-react";
import FlashSales from "./FlashSales";
import { Link } from "react-router-dom";

// Import your category images
import img1 from "../../assets/catImg/electronic-gadgets.webp";
import img2 from "../../assets/catImg/fashion.jpg";
import img3 from "../../assets/catImg/homeandStore.jpg";
import img4 from "../../assets/catImg/babypro.jpg";
import img5 from "../../assets/catImg/sport.webp";
import img6 from "../../assets/catImg/computing.webp";
import img7 from "../../assets/catImg/phoneandTablet.jpg";
import img8 from "../../assets/catImg/supermarket.webp";
import img9 from "../../assets/catImg/babypro.jpg";
import img10 from "../../assets/catImg/gaming.jpg";
import img11 from "../../assets/catImg/Musical.png";
import img12 from "../../assets/catImg/kitchen.avif";

function Categories() {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 20,
    minutes: 10,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const totalSeconds = prevTime.days * 86400 + prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds - 1;
        
        if (totalSeconds < 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const categories = [
    { 
      id: 1, 
      title: "Electronics", 
      image: img1,
      description: "Latest gadgets and electronic devices",
      link: "/shop?category=electronics",
      icon: "💻"
    },
    { 
      id: 2, 
      title: "Fashion", 
      image: img2,
      description: "Trendy clothing, shoes and accessories",
      link: "/shop?category=fashion",
      icon: "👕"
    },
    { 
      id: 3, 
      title: "Home & Office", 
      image: img3,
      description: "Furniture, decor and office supplies",
      link: "/shop?category=home-office",
      icon: "🛋️"
    },
    { 
      id: 4, 
      title: "Health & Beauty", 
      image: img4,
      description: "Personal care and wellness products",
      link: "/shop?category=health-beauty",
      icon: "💄"
    },
    { 
      id: 5, 
      title: "Sports", 
      image: img5,
      description: "Athletic wear and sporting equipment",
      link: "/shop?category=sports",
      icon: "⚽"
    },
    { 
      id: 6, 
      title: "Computing", 
      image: img6,
      description: "Laptops, desktops and computer accessories",
      link: "/shop?category=computing",
      icon: "🖥️"
    },
    { 
      id: 7, 
      title: "Phones & Tablets", 
      image: img7,
      description: "Mobile devices and accessories",
      link: "/shop?category=phones-tablets",
      icon: "📱"
    },
    { 
      id: 8, 
      title: "Supermarket", 
      image: img8,
      description: "Groceries and household essentials",
      link: "/shop?category=supermarket",
      icon: "🛒"
    },
    { 
      id: 9, 
      title: "Baby Products", 
      image: img9,
      description: "Everything for babies and toddlers",
      link: "/shop?category=baby-products",
      icon: "👶"
    },
    { 
      id: 10, 
      title: "Gaming", 
      image: img10,
      description: "Video games, consoles and accessories",
      link: "/shop?category=gaming",
      icon: "🎮"
    },
    { 
      id: 11, 
      title: "Musical Instruments", 
      image: img11,
      description: "Instruments, equipment and accessories",
      link: "/shop?category=musical-instruments",
      icon: "🎸"
    },
    { 
      id: 12, 
      title: "Appliances", 
      image: img12,
      description: "Home and kitchen appliances",
      link: "/shop?category=appliances",
      icon: "🍳"
    },
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Flash Sale Section */}
        <section className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          {/* Flash Sale Header */}
          <div className="bg-green-500 px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <div className="bg-white/20 p-2 rounded-lg">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Flash Sale</h2>
                <p className="text-sm text-blue-100">Limited time offers</p>
              </div>
            </div>
            
            {/* Timer */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg">
                <Clock className="w-4 h-4 text-white" />
                <span className="text-white font-medium">Ends in:</span>
                <div className="flex items-center space-x-1">
                  {timeLeft.days > 0 && (
                    <>
                      <div className="bg-white/30 text-white px-2 py-1 rounded text-sm font-bold">
                        {String(timeLeft.days).padStart(2, '0')}
                      </div>
                      <span className="text-white text-sm">d</span>
                    </>
                  )}
                  <div className="bg-white/30 text-white px-2 py-1 rounded text-sm font-bold">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <span className="text-white text-sm">h</span>
                  <div className="bg-white/30 text-white px-2 py-1 rounded text-sm font-bold">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <span className="text-white text-sm">m</span>
                  <div className="bg-white/30 text-white px-2 py-1 rounded text-sm font-bold">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <span className="text-white text-sm">s</span>
                </div>
              </div>
              
              <Link 
                to="/shop?category=flash-sale" 
                className="hidden sm:flex items-center text-white hover:text-blue-100 font-medium transition-colors duration-300"
              >
                View All
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Flash sale products preview */}
          <div className="p-4">
            <FlashSales />
          </div>
          
          <div className="px-6 py-3 border-t border-gray-100 text-center sm:hidden">
            <Link 
              to="/shop?category=flash-sale" 
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm"
            >
              View all flash sales
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-green-600 to-green-500">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Shop by Category</h2>
              <Link 
                to="/categories" 
                className="hidden sm:flex items-center text-white hover:text-green-100 font-medium"
              >
                Browse all categories
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <p className="text-green-100 text-sm mt-1">Discover products by category</p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                to={category.link}
                className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 hover:border-green-400"
              >
                {/* Category Image with overlay */}
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Emoji icon */}
                  <div className="absolute top-2 right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.icon}
                  </div>
                </div>
                
                {/* Category Info */}
                <div className="p-3">
                  <h3 className="font-semibold text-gray-900 text-center group-hover:text-green-600 transition-colors">
                    {category.title}
                  </h3>
                  
                  {/* Hidden description that appears on hover */}
                  <div className="absolute inset-0 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-700 mb-2">{category.description}</p>
                      <div className="inline-flex items-center text-green-600 text-sm font-medium">
                        Shop now
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Mobile view all button */}
          <div className="px-6 py-3 border-t border-gray-100 text-center sm:hidden">
            <Link 
              to="/categories" 
              className="text-green-600 hover:text-green-700 font-medium inline-flex items-center text-sm"
            >
              Browse all categories
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Categories;