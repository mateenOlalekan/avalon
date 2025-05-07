import { useState } from 'react';
import { ShoppingCart, Star, Heart, Clock, Zap } from 'lucide-react';

export default function FlashSales() {
  const [favorites, setFavorites] = useState({});
  
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 129.99,
      originalPrice: 179.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=320&auto=format&fit=crop",
      rating: 4.8,
      reviews: 124,
      discount: 28,
      timeLeft: "02:45:30"
    },
    {
      id: 2,
      name: "Smart Fitness Watch with Heart Monitor",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=320&auto=format&fit=crop",
      rating: 4.5,
      reviews: 89,
      discount: 31,
      timeLeft: "01:30:15"
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      price: 59.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=320&auto=format&fit=crop",
      rating: 4.7,
      reviews: 215,
      discount: 25,
      timeLeft: "03:15:45"
    },
    {
      id: 4,
      name: "Ultra HD 4K Action Camera",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=320&auto=format&fit=crop",
      rating: 4.6,
      reviews: 67,
      discount: 20,
      timeLeft: "04:20:10"
    },
    {
      id: 5,
      name: "Fast Wireless Charger (15W)",
      price: 34.99,
      originalPrice: 49.99,
      image: "https://images.unsplash.com/photo-1587033411394-4d47ebb1ee1f?w=400&h=320&auto=format&fit=crop",
      rating: 4.4,
      reviews: 312,
      discount: 30,
      timeLeft: "00:45:25"
    },
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto ">


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {products.map(product => (
          <div 
            key={product.id} 
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 group"
          >
            <div className="relative">
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                -{product.discount}%
              </div>
              <button 
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <Heart 
                  size={20} 
                  className={favorites[product.id] ? "text-red-500 fill-red-500" : "text-gray-400 hover:text-red-500"} 
                />
              </button>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover  transition-opacity"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-md flex items-center">
                <Clock size={14} className="mr-1" />
                {product.timeLeft}
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
              </div>
              
              <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 h-12">{product.name}</h3>
              <div className='flex justify-between'>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Zap size={14} className="mr-1" />
                  <span>Fast Delivery</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Zap size={14} className="mr-1" />
                  <span>Free Shipping</span>
                </div>
              </div>
              <div className='flex justify-between items-center '>
              <div className="flex items-center mb-3">
                <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
              </div>
              
              <button className="flex items-center justify-center p-1  border border-green-500 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600">
                <ShoppingCart   />
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}