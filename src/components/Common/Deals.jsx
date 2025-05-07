import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaStar, FaStarHalfAlt, FaRegHeart, FaHeart } from 'react-icons/fa';
import { ArrowRight, Clock, ChevronRight } from 'lucide-react';
// import brands from "../../assets/BrandImage/BIdata";

const DealsAndPromotions = () => {
  const deals = [
    {
      id: 1,
      title: 'Premium Wireless Headphones',
      originalPrice: 249.99,
      currentPrice: 149.99,
      discount: 40,
      rating: 4.5,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      isWishlisted: false
    },
    {
      id: 2,
      title: 'Smart 4K TV - 55 inch',
      originalPrice: 799.99,
      currentPrice: 499.99,
      discount: 38,
      rating: 4,
      reviews: 86,
      image: 'https://images.unsplash.com/photo-1546538915-a9e2c8d1a5e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      isWishlisted: false
    },
    {
      id: 3,
      title: 'Designer Leather Handbag',
      originalPrice: 149.99,
      currentPrice: 89.99,
      discount: 40,
      rating: 4.5,
      reviews: 52,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      isWishlisted: false
    },
    {
      id: 4,
      title: 'Wireless Gaming Mouse',
      originalPrice: 99.99,
      currentPrice: 59.99,
      discount: 40,
      rating: 4.2,
      reviews: 76,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      isWishlisted: false
    }
  ];

  // Initial promotions with end dates (3 days from now)
  const initialPromotions = [
    {
      id: 1,
      title: 'Premium Wireless Headphones with Noise Cancellation',
      originalPrice: 249.99,
      currentPrice: 149.99,
      discount: 40,
      rating: 4.5,
      reviewCount: 128,
      endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      isWishlisted: false
    },
    {
      id: 2,
      title: 'Smart 4K TV - 55 inch with HDR10+',
      originalPrice: 799.99,
      currentPrice: 499.99,
      discount: 38,
      rating: 4.7,
      reviewCount: 86,
      endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
      image: 'https://images.unsplash.com/photo-1546538915-a9e2c8d1a5e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      isWishlisted: false
    },
    {
      id: 3,
      title: 'Designer Leather Handbag - Premium Edition',
      originalPrice: 149.99,
      currentPrice: 89.99,
      discount: 40,
      rating: 4.3,
      reviewCount: 52,
      endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      isWishlisted: false
    }
  ];

  const [promotions, setPromotions] = useState(initialPromotions);
  const [dealItems, setDealItems] = useState(deals);
  const fallbackImg = "https://via.placeholder.com/150";

  useEffect(() => {
    const timer = setInterval(() => {
      setPromotions(prevPromotions => 
        prevPromotions.map(promotion => {
          const now = new Date();
          const timeLeft = promotion.endDate - now;
          
          if (timeLeft <= 0) {
            return {
              ...promotion,
              endDate: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000) // Reset to 3 days
            };
          }
          return promotion;
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeLeft = (endDate) => {
    const now = new Date();
    const timeLeft = endDate - now;
    
    if (timeLeft <= 0) {
      return 'Expired';
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => {
          if (index < fullStars) {
            return <FaStar key={index} className="text-green-400 text-sm" />;
          }
          if (index === fullStars && hasHalfStar) {
            return <FaStarHalfAlt key={index} className="text-green-400 text-sm" />;
          }
          return <FaStar key={index} className="text-gray-300 text-sm" />;
        })}
      </div>
    );
  };

  const toggleWishlist = (id, section) => {
    if (section === 'deals') {
      setDealItems(prev => prev.map(item => 
        item.id === id ? {...item, isWishlisted: !item.isWishlisted} : item
      ));
    } else {
      setPromotions(prev => prev.map(item => 
        item.id === id ? {...item, isWishlisted: !item.isWishlisted} : item
      ));
    }
  };

  return (
    <div className="max-w-7xl mx-auto  py-12">
      {/* Daily Deals Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <span className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-2">
              Today's Deals
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Daily Best Deals</h2>
          </div>
          <button className="flex items-center text-green-600 hover:text-green-700 font-medium mt-4 md:mt-0">
            View all deals <ChevronRight className="ml-1 h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealItems.map((deal) => (
            <div 
              key={deal.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative">
                <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                  -{deal.discount}%
                </div>
                <button 
                  onClick={() => toggleWishlist(deal.id, 'deals')}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                >
                  {deal.isWishlisted ? 
                    <FaHeart className="text-red-500" /> : 
                    <FaRegHeart className="text-gray-400" />
                  }
                </button>
                <img 
                  src={deal.image} 
                  alt={deal.title} 
                  className="w-full h-48 object-contain hover:opacity-90 transition-opacity"
                  onError={(e) => {
                    e.target.src = fallbackImg;
                    e.target.onerror = null;
                  }}
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{deal.title}</h3>
                
                <div className="flex items-center mb-2">
                  {renderStarRating(deal.rating)}
                  <span className="text-gray-500 text-xs ml-1">({deal.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">${deal.currentPrice.toFixed(2)}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">${deal.originalPrice.toFixed(2)}</span>
                  </div>
                  <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors">
                    <FaShoppingCart className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Flash Sales Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-2">
              Limited Time
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Flash Sales</h2>
            <p className="text-gray-600 mt-1">Hurry! These deals won't last long</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex items-center bg-red-100 px-4 py-2 rounded-lg">
              <Clock className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-red-600 font-medium">Ends in: </span>
              <span className="ml-2 font-bold text-red-600">
                {formatTimeLeft(new Date(Date.now() + 24 * 60 * 60 * 1000))}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promotions.map((promotion) => (
            <div 
              key={promotion.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 relative"
            >
              <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                -{promotion.discount}%
              </div>
              
              <button 
                onClick={() => toggleWishlist(promotion.id, 'promotions')}
                className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
              >
                {promotion.isWishlisted ? 
                  <FaHeart className="text-red-500" /> : 
                  <FaRegHeart className="text-gray-400" />
                }
              </button>
              
              <div className="h-64 bg-gray-50 flex items-center justify-center p-4">
                <img 
                  src={promotion.image} 
                  alt={promotion.title} 
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.target.src = fallbackImg;
                    e.target.onerror = null;
                  }}
                />
              </div>
              
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    {renderStarRating(promotion.rating)}
                    <span className="text-gray-500 text-xs ml-1">({promotion.reviewCount})</span>
                  </div>
                  <div className="flex items-center text-xs text-red-600 font-medium">
                    <Clock className="mr-1 h-3 w-3" />
                    {formatTimeLeft(promotion.endDate)}
                  </div>
                </div>
                
                <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{promotion.title}</h2>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-gray-900">${promotion.currentPrice.toFixed(2)}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">${promotion.originalPrice.toFixed(2)}</span>
                  </div>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg inline-flex items-center transition-colors">
            View All Flash Sales
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </section>


    </div>
  );
};

export default DealsAndPromotions;