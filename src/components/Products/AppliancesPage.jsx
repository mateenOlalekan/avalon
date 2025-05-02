import { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Heart, Menu, ChevronDown, Star, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

// Utility Components
const PriceFormatter = ({ price, currency = '₦' }) => {
  return <span>{currency}{price.toLocaleString()}</span>;
};

const RatingStars = ({ rating }) => {
  return (
    <div className="flex">
      {Array(5).fill(0).map((_, i) => (
        <Star 
          key={i} 
          size={16} 
          className={i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
        />
      ))}
     </div>
  );
};

// Main Components
const ProductCard = ({ product, addToCart, currency }) => {
  return (
    <div className="bg-white rounded shadow overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-contain p-4" 
        />
        {product.discount > 0 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            -{product.discount}%
          </span>
        )}
        <button className="absolute top-2 left-2 text-gray-500 hover:text-red-500">
          <Heart size={20} />
        </button>
      </div>
      <div className="p-4 border-t">
        <Link to={`/product/${product.id}`} className="font-medium mb-1 line-clamp-2 h-12">{product.name}</Link>
        <div className="mb-1">
          <span className="font-bold"><PriceFormatter price={product.discountPrice} currency={currency} /></span>
          {product.discount > 0 && (
            <span className="text-sm text-gray-500 line-through ml-2">
              <PriceFormatter price={product.price} currency={currency} />
            </span>
          )}
        </div>
        <div className="flex items-center mb-3">
          <RatingStars rating={product.rating} />
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>
        <button 
          onClick={() => addToCart(product)}
          className="bg-red-500 text-white w-full p-2 rounded hover:bg-red-600 flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const FiltersSidebar = ({ 
  categories, 
  activeCategory, 
  setActiveCategory,
  priceRange,
  setPriceRange,
  selectedBrands,
  setSelectedBrands,
  selectedRatings,
  setSelectedRatings,
  availableBrands,
  filterTitle,
  currency
}) => {
  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings(prev => 
      prev.includes(rating) 
        ? prev.filter(r => r !== rating) 
        : [...prev, rating]
    );
  };

  return (
    <aside className="w-full md:w-64 bg-white p-4 rounded shadow">
      <h3 className="font-bold text-lg mb-4 flex items-center">
        <Filter size={18} className="mr-2" />
        Filters
      </h3>
      
      {categories.length > 1 && (
        <div className="mb-6">
          <h4 className="font-medium mb-2">Categories</h4>
          <ul className="space-y-1">
            {categories.map((category) => (
              <li key={category}>
                <button 
                  className={`w-full text-left p-1 hover:text-red-500 ${activeCategory === category ? 'text-red-500 font-medium' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="mb-6">
        <h4 className="font-medium mb-2">Price {currency && `(${currency})`}</h4>
        <div className="flex items-center gap-2">
          <input 
            type="number" 
            placeholder="Min" 
            className="w-full p-2 border border-gray-300 rounded"
            value={priceRange.min}
            onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
          />
          <span>-</span>
          <input 
            type="number" 
            placeholder="Max" 
            className="w-full p-2 border border-gray-300 rounded"
            value={priceRange.max}
            onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
          />
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium mb-2">
          {activeCategory === categories[0] ? 'Brands' : `${activeCategory} Brands`}
        </h4>
        {availableBrands.length > 0 ? (
          <ul className="space-y-1">
            {availableBrands.map((brand) => (
              <li key={brand} className="flex items-center">
                <input 
                  type="checkbox" 
                  id={brand} 
                  className="mr-2" 
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                <label htmlFor={brand}>{brand}</label>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No brands available for this category</p>
        )}
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium mb-2">Customer Ratings</h4>
        <div className="space-y-1">
          {[4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center">
              <input 
                type="checkbox" 
                id={`rating-${rating}`} 
                className="mr-2" 
                checked={selectedRatings.includes(rating)}
                onChange={() => handleRatingChange(rating)}
              />
              <label htmlFor={`rating-${rating}`} className="flex items-center">
                {Array(rating).fill(0).map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
                {Array(5-rating).fill(0).map((_, i) => (
                  <Star key={i} size={16} className="text-gray-300" />
                ))}
                <span className="ml-1">& Above</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

const ProductGrid = ({ 
  filteredProducts, 
  addToCart, 
  sortOption, 
  setSortOption,
  currentPage,
  totalPages,
  setCurrentPage,
  currency
}) => {
  const sortOptions = [
    { value: 'popularity', label: 'Popularity' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest Arrivals' },
    { value: 'discount', label: 'Discount' }
  ];

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex-1">
      <div className="bg-white p-4 rounded shadow mb-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-gray-600">{filteredProducts.length} products found</p>
          <div className="flex items-center gap-2">
            <span className="text-sm">Sort by:</span>
            <select 
              className="border border-gray-300 rounded p-1"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
              currency={currency}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500">No products match your filters</p>
          </div>
        )}
      </div>
      
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-1">
            <button 
              className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`px-3 py-1 border rounded ${currentPage === page ? 'bg-red-500 text-white border-red-500' : 'border-gray-300 hover:bg-gray-100'}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
            
            <button 
              className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Main Reusable Product Page Component
export default function ProductCategoryPage({ 
  pageTitle = "Products",
  categoryData = {},
  products = [],
  defaultCategory = "All Products",
  currency = "₦",
  productsPerPage = 16
}) {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [sortOption, setSortOption] = useState('popularity');
  const [currentPage, setCurrentPage] = useState(1);
  const [availableBrands, setAvailableBrands] = useState([]);
  
  // Get categories from the data or use default
  const categories = categoryData.categories || [defaultCategory];
  
  // Update brands when category changes
  useEffect(() => {
    if (categoryData.brandsByCategory && categoryData.brandsByCategory[activeCategory]) {
      setAvailableBrands(categoryData.brandsByCategory[activeCategory]);
    } else {
      // Collect all unique brands from products if no specific brands are defined
      const uniqueBrands = [...new Set(products.map(product => product.brand).filter(Boolean))];
      setAvailableBrands(uniqueBrands);
    }
    // Clear selected brands when changing category
    setSelectedBrands([]);
  }, [activeCategory, categoryData, products]);
  
  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
    setCartCount(prev => prev + 1);
  };

  // Filter and sort products
  const filteredProducts = products.filter(product => {
    // Category filter
    if (activeCategory !== defaultCategory && product.category !== activeCategory) {
      return false;
    }
    
    // Price filter
    if (priceRange.min && product.discountPrice < Number(priceRange.min)) {
      return false;
    }
    if (priceRange.max && product.discountPrice > Number(priceRange.max)) {
      return false;
    }
    
    // Brand filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }
    
    // Rating filter
    if (selectedRatings.length > 0 && !selectedRatings.some(r => Math.floor(product.rating) >= r)) {
      return false;
    }
    
    return true;
  }).sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return a.discountPrice - b.discountPrice;
      case 'price-high':
        return b.discountPrice - a.discountPrice;
      case 'newest':
        return b.id - a.id;
      case 'discount':
        return (b.discount || 0) - (a.discount || 0);
      default: // popularity
        return (b.rating * b.reviews) - (a.rating * a.reviews);
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, priceRange, selectedBrands, selectedRatings, sortOption]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm mb-4">
        <div className="container mx-auto py-4 px-2">
          <h1 className="text-2xl font-bold">{pageTitle}</h1>
        </div>
      </div>
      
      {/* Main content */}
      <main className="container mx-auto p-2 flex-1">
        <div className="flex flex-col md:flex-row gap-6">
          <FiltersSidebar 
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            selectedRatings={selectedRatings}
            setSelectedRatings={setSelectedRatings}
            availableBrands={availableBrands}
            filterTitle={pageTitle}
            currency={currency}
          />
          
          <ProductGrid 
            filteredProducts={paginatedProducts} 
            addToCart={addToCart}
            sortOption={sortOption}
            setSortOption={setSortOption}
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
            currency={currency}
          />
        </div>
      </main>
    </div>
  );
}

// Example of how to use this component for different product categories
export const AppliancesPage = () => {
  // Define appliance-specific data
  const appliancesData = {
    categories: [
      'All Appliances', 'Kitchen Appliances', 'Refrigerators', 
      'Washing Machines', 'Air Conditioners', 'Microwaves',
      'Blenders & Juicers', 'Electric Kettles', 'Water Dispensers'
    ],
    brandsByCategory: {
      'All Appliances': [
        'LG', 'Samsung', 'Hisense', 'Nexus', 'Scanfrost', 
        'Haier Thermocool', 'Midea', 'Binatone', 'Maxi'
      ],
      'Kitchen Appliances': [
        'Scanfrost', 'Binatone', 'Maxi', 'Nexus', 'Haier Thermocool'
      ],
      'Refrigerators': [
        'LG', 'Samsung', 'Hisense', 'Haier Thermocool', 'Midea'
      ],
      'Washing Machines': [
        'LG', 'Samsung', 'Hisense', 'Nexus', 'Haier Thermocool'
      ],
      'Air Conditioners': [
        'LG', 'Samsung', 'Hisense', 'Midea', 'Haier Thermocool'
      ],
      'Microwaves': [
        'LG', 'Samsung', 'Nexus', 'Scanfrost', 'Midea'
      ],
      'Blenders & Juicers': [
        'Binatone', 'Maxi', 'Nexus', 'Scanfrost'
      ],
      'Electric Kettles': [
        'Binatone', 'Maxi', 'Scanfrost', 'Haier Thermocool'
      ],
      'Water Dispensers': [
        'Nexus', 'Scanfrost', 'Midea', 'Haier Thermocool'
      ]
    }
  };
  
  // Import products from your data source or API
  const applianceProducts = []; // This would be your actual products

  return (
    <ProductCategoryPage
      pageTitle="Appliances"
      categoryData={appliancesData}
      products={applianceProducts}
      defaultCategory="All Appliances"
      currency="₦"
    />
  );
};

export const PhonesAndTabletsPage = () => {
  const phonesData = {
    categories: [
      'All Phones & Tablets', 'Smartphones', 'Basic Phones', 
      'Tablets', 'Smartwatches', 'Accessories'
    ],
    brandsByCategory: {
      'All Phones & Tablets': [
        'Apple', 'Samsung', 'Xiaomi', 'Infinix', 'Tecno', 
        'Nokia', 'Huawei', 'Oppo', 'Vivo'
      ],
      'Smartphones': [
        'Apple', 'Samsung', 'Xiaomi', 'Infinix', 'Tecno', 'Huawei', 'Oppo', 'Vivo'
      ],
      'Basic Phones': [
        'Nokia', 'Tecno', 'Itel'
      ],
      'Tablets': [
        'Apple', 'Samsung', 'Huawei', 'Lenovo', 'Microsoft'
      ],
      'Smartwatches': [
        'Apple', 'Samsung', 'Huawei', 'Xiaomi', 'Fitbit'
      ],
      'Accessories': [
        'Apple', 'Samsung', 'Anker', 'Baseus', 'Oraimo'
      ]
    }
  };
  
  const phoneProducts = []; // This would be your actual products
  
  return (
    <ProductCategoryPage
      pageTitle="Phones & Tablets"
      categoryData={phonesData}
      products={phoneProducts}
      defaultCategory="All Phones & Tablets"
      currency="₦"
    />
  );
};

export const HealthAndBeautyPage = () => {
  const healthData = {
    categories: [
      'All Health & Beauty', 'Skincare', 'Makeup', 'Hair Care', 
      'Fragrances', 'Personal Care', 'Health Care'
    ],
    brandsByCategory: {
      'All Health & Beauty': [
        'Nivea', 'L\'Oreal', 'Maybelline', 'Garnier', 'Dove', 
        'Neutrogena', 'Olay', 'The Ordinary', 'Cerave'
      ],
      'Skincare': [
        'Nivea', 'Neutrogena', 'The Ordinary', 'Cerave', 'La Roche-Posay'
      ],
      'Makeup': [
        'L\'Oreal', 'Maybelline', 'MAC', 'Fenty Beauty', 'NYX'
      ],
      'Hair Care': [
        'Dove', 'Pantene', 'TRESemmé', 'Garnier', 'Cantu'
      ],
      'Fragrances': [
        'Versace', 'Dior', 'Chanel', 'Gucci', 'Victoria\'s Secret'
      ],
      'Personal Care': [
        'Dove', 'Nivea', 'Gillette', 'Oral-B', 'Colgate'
      ],
      'Health Care': [
        'Omron', 'Centrum', 'Ensure', 'Nature\'s Bounty', 'Advil'
      ]
    }
  };
  
  const healthProducts = []; // This would be your actual products
  
  return (
    <ProductCategoryPage
      pageTitle="Health & Beauty"
      categoryData={healthData}
      products={healthProducts}
      defaultCategory="All Health & Beauty"
      currency="₦"
    />
  );
};

// Similarly, you can create specialized components for each product category
export const HomeAndOfficePage = () => {
  // Define with appropriate categories and brands
  return <ProductCategoryPage pageTitle="Home & Office" />;
};

export const ElectronicsPage = () => {
  // Define with appropriate categories and brands
  return <ProductCategoryPage pageTitle="Electronics" />;
};

export const FashionPage = () => {
  // Define with appropriate categories and brands
  return <ProductCategoryPage pageTitle="Fashion" />;
};

export const SupermarketPage = () => {
  // Define with appropriate categories and brands
  return <ProductCategoryPage pageTitle="Supermarket" />;
};

export const ComputingPage = () => {
  // Define with appropriate categories and brands
  return <ProductCategoryPage pageTitle="Computing" />;
};

export const BabyProductsPage = () => {
  // Define with appropriate categories and brands
  return <ProductCategoryPage pageTitle="Baby Products" />;
};

export const GamingPage = () => {
  // Define with appropriate categories and brands
  return <ProductCategoryPage pageTitle="Gaming" />;
};

export const MusicalInstrumentsPage = () => {
  // Define with appropriate categories and brands
  return <ProductCategoryPage pageTitle="Musical Instruments" />;
};

export const OtherCategoriesPage = () => {
  // Define with appropriate categories and brands
  return <ProductCategoryPage pageTitle="Other Categories" />;
};