import { useState } from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';

export default function FlashSales() {
  const [favorites, setFavorites] = useState({});
  
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$129.99",
      image: "/api/placeholder/400/320",
      rating: 4.8
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: "$89.99",
      image: "/api/placeholder/400/320",
      rating: 4.5
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      price: "$59.99",
      image: "/api/placeholder/400/320",
      rating: 4.7
    },
    {
      id: 4,
      name: "Ultra HD Action Camera",
      price: "$199.99",
      image: "/api/placeholder/400/320",
      rating: 4.6
    },
    {
      id: 5,
      name: "Fast Wireless Charger",
      price: "$34.99",
      image: "/api/placeholder/400/320",
      rating: 4.4
    },
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="p-4  grid grid-cols-5 gap-2 bg-gray-50 rounded-lg">
      {products.map(product => (
        <div key={product.id} className="flex-shrink-0 w-60 bg-white rounded-lg shadow-md p-3 transition-transform hover:scale-105">
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="h-40 w-full object-cover rounded-md mb-3"
            />
            <button 
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm"
            >
              <Heart 
                size={20} 
                className={favorites[product.id] ? "text-red-500 fill-red-500" : "text-gray-400"} 
              />
            </button>
          </div>
          
          <div className="mb-2 flex items-center">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span className="text-sm ml-1 text-gray-700">{product.rating}</span>
          </div>
          
          <h3 className="font-medium text-gray-900 mb-1 truncate">{product.name}</h3>
          <div className="flex justify-between items-center">
            <span className="font-bold text-gray-800">{product.price}</span>
            <button className="p-1 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200">
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}