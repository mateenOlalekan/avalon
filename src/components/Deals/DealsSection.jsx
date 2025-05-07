import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight,Shirt,TabletSmartphone, TrendingUp, Star, Heart, Clock, Percent } from 'lucide-react';

// Placeholder image for products
const placeholderImage = "https://via.placeholder.com/300";

// Deal categories data
const dealCategories = [
  {
    title: "Top Sellers",
    icon: <TrendingUp size={20} />,
    items: [
      {
        id: 1,
        name: "iPhone 15 Pro Max",
        image: placeholderImage,
        oldPrice: 1299,
        newPrice: 1199,
        discount: "8% OFF",
        rating: 4.8
      },
      {
        id: 2,
        name: "Samsung Galaxy S24",
        image: placeholderImage,
        oldPrice: 999,
        newPrice: 899,
        discount: "10% OFF",
        rating: 4.7
      },
      {
        id: 3,
        name: "Google Pixel 8 Pro",
        image: placeholderImage,
        oldPrice: 999,
        newPrice: 849,
        discount: "15% OFF",
        rating: 4.6
      },
      {
        id: 4,
        name: "OnePlus 12",
        image: placeholderImage,
        oldPrice: 799,
        newPrice: 699,
        discount: "13% OFF",
        rating: 4.5
      },
      {
        id: 5,
        name: "Xiaomi 14 Ultra",
        image: placeholderImage,
        oldPrice: 999,
        newPrice: 899,
        discount: "10% OFF",
        rating: 4.4
      }
    ]
  },
  {
    title: "Limited Stock Deals",
    icon: <Clock size={20} />,
    items: [
      {
        id: 7,
        name: "MacBook Pro M3",
        image: placeholderImage,
        oldPrice: 1999,
        newPrice: 1799,
        discount: "10% OFF",
        stock: 3
      },
      {
        id: 8,
        name: "Sony WH-1000XM5",
        image: placeholderImage,
        oldPrice: 399,
        newPrice: 349,
        discount: "13% OFF",
        stock: 5
      },
      {
        id: 9,
        name: "Bose QuietComfort 45",
        image: placeholderImage,
        oldPrice: 329,
        newPrice: 279,
        discount: "15% OFF",
        stock: 2
      },
      {
        id: 10,
        name: "DJI Mavic 3 Pro",
        image: placeholderImage,
        oldPrice: 2199,
        newPrice: 1999,
        discount: "9% OFF",
        stock: 4
      },
      {
        id: 11,
        name: "GoPro Hero 12",
        image: placeholderImage,
        oldPrice: 499,
        newPrice: 399,
        discount: "20% OFF",
        stock: 1
      }
    ]
  },
  {
    title: "Fashion Best Deals",
    icon: <Shirt size={20} />,
    items: [
      {
        id: 13,
        name: "Nike Air Max",
        image: placeholderImage,
        oldPrice: 150,
        newPrice: 120,
        discount: "20% OFF",
        colors: 5
      },
      {
        id: 14,
        name: "Levi's 501 Jeans",
        image: placeholderImage,
        oldPrice: 80,
        newPrice: 60,
        discount: "25% OFF",
        sizes: "28-40"
      },
      {
        id: 15,
        name: "Adidas Ultraboost",
        image: placeholderImage,
        oldPrice: 180,
        newPrice: 135,
        discount: "25% OFF",
        colors: 3
      },
      {
        id: 16,
        name: "North Face Jacket",
        image: placeholderImage,
        oldPrice: 199,
        newPrice: 149,
        discount: "25% OFF",
        sizes: "S-XXL"
      },
      {
        id: 17,
        name: "Ray-Ban Aviators",
        image: placeholderImage,
        oldPrice: 159,
        newPrice: 119,
        discount: "25% OFF",
        colors: 4
      }
    ]
  },
  {
    title: "Phone and Tablets",
    icon: <TabletSmartphone size={20} />,
    items: [
      {
        id: 19,
        name: "iPad Pro 12.9",
        image: placeholderImage,
        oldPrice: 1099,
        newPrice: 999,
        discount: "9% OFF",
        storage: "256GB"
      },
      {
        id: 20,
        name: "Samsung Galaxy Tab S9",
        image: placeholderImage,
        oldPrice: 799,
        newPrice: 699,
        discount: "13% OFF",
        storage: "128GB"
      },
      {
        id: 21,
        name: "Microsoft Surface Pro 9",
        image: placeholderImage,
        oldPrice: 1299,
        newPrice: 1099,
        discount: "15% OFF",
        storage: "256GB"
      },
      {
        id: 22,
        name: "OnePlus Pad",
        image: placeholderImage,
        oldPrice: 479,
        newPrice: 399,
        discount: "17% OFF",
        storage: "128GB"
      },
      {
        id: 23,
        name: "Lenovo Tab P12 Pro",
        image: placeholderImage,
        oldPrice: 599,
        newPrice: 499,
        discount: "17% OFF",
        storage: "128GB"
      }
    ]
  }
];

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-4">
        {/* Product image */}
        <div className="relative aspect-square bg-gray-100 rounded-lg  overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Discount badge */}
          {product.discount && (
            <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {product.discount}
            </span>
          )}
          
          {/* Stock warning */}
          {product.stock && product.stock < 5 && (
            <span className="absolute bottom-2 left-2 bg-yellow-500 text-black text-xs font-medium px-2 py-1 rounded-full">
              Only {product.stock} left
            </span>
          )}
          
          {/* Favorite button */}
          <button 
            className="absolute top-2 left-2 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-sm"
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart 
              size={18} 
              className={isFavorite ? "fill-green-500 text-green-500" : "text-gray-400"} 
            />
          </button>
        </div>
        
        {/* Product name */}
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="mb-1">
          <span className="text-lg font-bold text-green-600">
            ${product.newPrice}
          </span>
          {product.oldPrice && (
            <span className="text-gray-500 line-through text-sm ml-2">
              ${product.oldPrice}
            </span>
          )}
        </div>
        
        {/* Additional info */}
        <div className="space-y-1">
          {product.colors && (
            <p className="text-xs text-gray-500">
              <span className="font-medium">Colors:</span> {product.colors} options
            </p>
          )}
          {product.sizes && (
            <p className="text-xs text-gray-500">
              <span className="font-medium">Sizes:</span> {product.sizes}
            </p>
          )}
          {product.storage && (
            <p className="text-xs text-gray-500">
              <span className="font-medium">Storage:</span> {product.storage}
            </p>
          )}
        </div>
        
        {/* Rating */}
        {product.rating && (
          <div className="flex items-center mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                  className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const CategorySection = ({ category }) => {
  return (
    <section className="mb-12">
      <div className="flex items-center mb-3">
        <div className="mr-2 text-green-500">
          {category.icon}
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {category.items.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <ProductCard product={item} />
          </Link>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Link
          to={`/category/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
          className="inline-flex items-center text-green-600 hover:text-green-700 shadow-lg p-4 border-2 border-green-500 rounded-lg font-medium group"
        >
          View all {category.title}
          <ChevronRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

const ProductCatalog = () => {
  return (
    <div className="bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        
        {/* Categories */}
        <div className="space-y-16">
          {dealCategories.map((category, index) => (
            <CategorySection key={index} category={category} />
          ))}
        </div>
        

      </div>
    </div>
  );
};

export default ProductCatalog;