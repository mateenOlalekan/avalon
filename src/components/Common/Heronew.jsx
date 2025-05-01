import { useState } from 'react';
import {Link} from "react-router-dom";

import { 
  ShoppingBag,
  Smartphone, 
  Sparkles, 
  Home, 
  Tv, 
  Shirt, 
  ShoppingCart, 
  Monitor, 
  Baby, 
  Gamepad, 
  Music, 
  MoreHorizontal 
} from 'lucide-react';

// Sidebar Component
const CategorySidebar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { icon: ShoppingBag, name: "Appliances", id: "appliances",page:"/appliance" },
    { icon: Smartphone, name: "Phones & Tablets", id: "phones",page:"/phone&tablet" },
    { icon: Sparkles, name: "Health & Beauty", id: "health",page:"/health" },
    { icon: Home, name: "Home & Office", id: "home",page:"/Home"},
    { icon: Tv, name: "Electronics", id: "electronics",page:"/eletronic" },
    { icon: Shirt, name: "Fashion", id: "fashion",page:"/fashion" },
    { icon: ShoppingCart, name: "Supermarket", id: "supermarket",page:"" },
    { icon: Monitor, name: "Computing", id: "computing" },
    { icon: Baby, name: "Baby Products", id: "baby" },
    { icon: Gamepad, name: "Gaming", id: "gaming" },
    { icon: Music, name: "Musical Instruments", id: "music" },
    // { icon: MoreHorizontal, name: "Other categories", id: "other" }
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(prevCategory => prevCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="w-full h-[450px] lg:w-2/12 lg:block hidden bg-white p-4 border-r border-gray-200 shadow-sm">
      <div className="flex flex-col gap-1">
        <h2 className='font-bold text-lg my-2'>Categories</h2>
        {categories.map((category, index) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          
          return (
            <div 
              key={index} 
              className={`flex items-center gap-1 w-full py-1 px-3 cursor-pointer rounded-md transition-colors ${
                isActive ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <Icon className={isActive ? "text-red-600" : "text-gray-600"} size={20} />
              <span className={`text-sm ${isActive ? "text-red-600 font-medium" : "text-gray-700"}`}>
                {category.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default CategorySidebar;