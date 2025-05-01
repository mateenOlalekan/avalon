import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { ArrowRight, Clock } from 'lucide-react';
import brands from "../assets/BrandImage/BIdata";


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
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: 'Smart 4K TV - 55 inch',
      originalPrice: 799.99,
      currentPrice: 499.99,
      discount: 38,
      rating: 4,
      reviews: 86,
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      title: 'Designer Leather Handbag',
      originalPrice: 149.99,
      currentPrice: 89.99,
      discount: 40,
      rating: 4.5,
      reviews: 52,
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 4,
      title: 'Designer Leather Handbag',
      originalPrice: 149.99,
      currentPrice: 89.99,
      discount: 40,
      rating: 4.5,
      reviews: 52,
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  // Initial promotions with end dates (3 days from now)
  const initialPromotions = [
    {
      id: 1,
      title: 'Premium Wireless Headphones',
      originalPrice: 249.99,
      currentPrice: 149.99,
      discount: 40,
      rating: 4.5,
      reviewCount: 128,
      endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3 days from now
    },
    {
      id: 2,
      title: 'Smart 4K TV - 55 inch',
      originalPrice: 799.99,
      currentPrice: 499.99,
      discount: 38,
      rating: 4.7,
      reviewCount: 86,
      endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) // 2 days from now
    },
    {
      id: 3,
      title: 'Designer Leather Handbag',
      originalPrice: 149.99,
      currentPrice: 89.99,
      discount: 40,
      rating: 4.3,
      reviewCount: 52,
      endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) // 5 days from now
    }
  ];

  const [promotions, setPromotions] = useState(initialPromotions);
  const fallbackImg = "https://via.placeholder.com/150";

  useEffect(() => {
    const timer = setInterval(() => {
      setPromotions(prevPromotions => 
        prevPromotions.map(promotion => {
          // Calculate time left for each promotion
          const now = new Date();
          const timeLeft = promotion.endDate - now;
          
          // If time has expired, set a new end date (optional: you could remove expired promotions)
          if (timeLeft <= 0) {
            return {
              ...promotion,
              endDate: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000) // Reset to 3 days
            };
          }
          return promotion;
        })
      );
    }, 1000); // Update every second

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
            return <FaStar key={index} className="text-yellow-400" />;
          }
          if (index === fullStars && hasHalfStar) {
            return <FaStarHalfAlt key={index} className="text-yellow-400" />;
          }
          return <FaStar key={index} className="text-gray-300" />;
        })}
        <span className="ml-2 text-gray-500 text-sm">({rating})</span>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-block bg-yellow-500 text-white px-4 py-1 rounded-full mb-4">
          Limited Time Offers
        </div>
        <h2 className="text-3xl font-bold mb-4">Deals & Promotions</h2>
        <p className="text-gray-600">Don't miss out on these amazing deals - limited stock available!</p>
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {deals.map((deal) => (
          <div 
            key={deal.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Discount Badge */}
            <div className="relative">
              <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                {deal.discount}% OFF
              </div>
              <img 
                src={deal.image} 
                alt={deal.title} 
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200';
                  e.target.onerror = null;
                }}
              />
            </div>

            {/* Deal Details */}
            <div className="p-4">
              {/* Product Title */}
              <h3 className="font-semibold text-[16px] mb-1">{deal.title}</h3>

              {/* Rating */}
              <div className="mb-1">
                {renderStarRating(deal.rating)}
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-between space-x-2">
                <span className="text-xl font-bold text-black">${deal.currentPrice}</span>
                <span className="line-through text-gray-500 text-sm">${deal.originalPrice}</span>
                <button className="w-fit bg-yellow-400 text-white p-2 rounded-sm flex items-center justify-center hover:bg-gray-800 transition duration-300">
                  <FaShoppingCart/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Deals */}
      <div className="text-center mt-8">
        <button className="inline-flex items-center p-3 text-white bg-yellow-400 font-semibold rounded-lg hover:text-yellow-400 hover:bg-white border-2 border-yellow-300 hover:transition duration-300">
          View All Deals
          <ArrowRight className="ml-1" />
        </button>
      </div>

      <h1 className="text-3xl font-bold text-center mb-6 text-yellow-500 mt-20">Limited Time Offers</h1>
      <p className="text-center text-gray-600 mb-8">Hurry! These deals are ending soon!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {promotions.map((promote) => (
          <div 
            key={promote.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden relative"
          >
            <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded">
              {promote.discount}% OFF
            </div>
            
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <img 
                src={`https://via.placeholder.com/300x300`} 
                alt={promote.title} 
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x300';
                  e.target.onerror = null;
                }}
              />
            </div>
            
            <div className="p-4">
              <div className="flex items-center mb-1">
                {renderStarRating(promote.rating)}
                <span className="text-gray-600 ml-2">({promote.reviewCount})</span>
              </div>
              
              <h2 className="text-xl font-semibold mb-1">{promote.title}</h2>
              
              <div className="flex items-center justify-between mb-1">
                <div>
                  <span className="text-2xl font-bold text-yellow-400">${promote.currentPrice}</span>
                  <span className="line-through text-gray-500 ml-2">${promote.originalPrice}</span>
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <div className="flex items-center text-sm text-yellow-400 font-medium">
                  <Clock className="mr-1 h-4 w-4" />
                  Ends in: {formatTimeLeft(promote.endDate)}
                </div>
                <div className='p-2 rounded-lg bg-yellow-400 hover:scale-105 transition duration-600'>
                  <FaShoppingCart className="flex text-lg items-center justify-center text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8 w-full flex justify-center ">
        <button className="bg-yellow-400 flex justify-center items-center text-white hover:text-yellow-400 border-2 hover:bg-white hover:border-yellow-400 font-semibold p-3 rounded-lg">
          <span>View All Deals</span> <ArrowRight className="ml-1" />
        </button>
      </div>

      <div className='w-full h-full'>
        <div className='text-center'>Offical Stores</div>
      </div>

      <div className='  bg-gray-400 '>
        <div className='flex flex-col my-10 bg-yellow-300 rounded-t-md'>
          <h1 className="text-3xl font-normal text-center py-3  text-white gap-2 ">Offical Stories</h1>
        </div>

        <div className='grid grid-cols-6 gap-3 px-2  pb-2'>
                {brands.map((brand) => (
                  <div key={brand.id} className='  w-full h-full cursor-pointer '>
                    <img src={brand.img} alt={brand.id} className='w-full h-full object-contain hover:scale-95 duration-700 transition-all' />
                  </div>
                ))}
        </div>
      </div>
      
    </div>
  );
};

export default DealsAndPromotions;