import React, { useState, useEffect } from "react";
import {   ArrowRight,   Clock,  ShoppingBag} from "lucide-react";
import FlashSales from "./FlashSales";
import { Link } from "react-router-dom";

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
  const [hoveredId, setHoveredId] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    hours: 20,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const totalSeconds = prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds - 1;
        
        if (totalSeconds < 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { hours, minutes, seconds };
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
      link: "/shop?category=electronics"
    },
    { 
      id: 2, 
      title: "Fashion", 
      image: img2,
      description: "Trendy clothing, shoes and accessories",
      link: "/shop?category=fashion"
    },
    { 
      id: 3, 
      title: "Office", 
      image: img3,
      description: "Furniture, decor and office supplies",
      link: "/shop?category=home-office"
    },
    { 
      id: 4, 
      title: "Health & Beauty", 
      image: img4,
      description: "Personal care and wellness products",
      link: "/shop?category=health-beauty"
    },
    { 
      id: 5, 
      title: "Sports", 
      image: img5,
      description: "Athletic wear and sporting equipment",
      link: "/shop?category=sports"
    },
    { 
      id: 6, 
      title: "Computing", 
      image: img6,
      description: "Laptops, desktops and computer accessories",
      link: "/shop?category=computing"
    },
    { 
      id: 7, 
      title: "Phones & Tablets", 
      image: img7,
      description: "Mobile devices and accessories",
      link: "/shop?category=phones-tablets"
    },
    { 
      id: 8, 
      title: "Supermarket", 
      image: img8,
      description: "Groceries and household essentials",
      link: "/shop?category=supermarket"
    },
    { 
      id: 9, 
      title: "Baby Products", 
      image: img9,
      description: "Everything for babies and toddlers",
      link: "/shop?category=baby-products"
    },
    { 
      id: 10, 
      title: "Gaming", 
      image: img10,
      description: "Video games, consoles and accessories",
      link: "/shop?category=gaming"
    },
    { 
      id: 11, 
      title: "Musical Instruments", 
      image: img11,
      description: "Instruments, equipment and accessories",
      link: "/shop?category=musical-instruments"
    },
    { 
      id: 12, 
      title: "Appliances", 
      image: img12,
      description: "Home and kitchen appliances",
      link: "/shop?category=appliances"
    },
  ];

  return (
    <div className="py-5">
      <div className="max-w-7xl mx-auto">
        {/* Flash Sale Section */}
        <section className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
          {/* Flash Sale Header */}
          <div className="bg-red-600 text-white px-6 py-2 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="w-5 h-5" />
              <h2 className="text-xl font-bold">Flash Sale</h2>
              
              {/* Timer */}
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg">
                <div className="flex justify-center items-center gap-2">
                  <span className="text-lg font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-xs">Hours</span>
                </div>
                <span className="text-lg">:</span>
                <div className="flex justify-center items-center gap-2">
                  <span className="text-lg font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-xs">Min</span>
                </div>
                <span className="text-lg">:</span>
                <div className="flex justify-center items-center gap-2">
                  <span className="text-lg font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="text-xs">Sec</span>
                </div>
              </div>
            </div>
            
            <Link 
              to="/shop?category=flash-sale" 
              className="flex items-center text-white hover:text-red-100 transition-colors duration-300"
            >
              View All
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {/* Flash sale products preview (placeholder) */}
          <FlashSales />
        </section>

        {/* Categories Section */}
        <section className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b bg-red-500 border-red-500">
            <h2 className="text-2xl font-semibold text-white">Shop by Category</h2>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
          {categories.map((category) => (
              <Link 
                key={category.id} 
                to={category.link}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                onMouseEnter={() => setHoveredId(category.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-40 overflow-hidden">
                  {/* Category Image */}
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  
                  {/* Overlay that appears on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
                    hoveredId === category.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                  
                  {/* Description that appears on hover */}
                  <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                    hoveredId === category.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <p className="text-white text-xs">{category.description}</p>
                    <div className="mt-2 flex items-center text-white text-xs font-medium">
                      Shop Now
                      <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                
                {/* Category Title */}
                <div className="p-3 text-center bg-red-500">
                  <h3 className="text-sm font-medium text-white">{category.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Categories;