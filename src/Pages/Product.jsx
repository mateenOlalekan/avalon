// import { useState, useEffect } from 'react';
// import { Search, ShoppingCart, User, Heart, Menu, ChevronDown, Star, Filter } from 'lucide-react';
// import products from '../components/Data/Product';
// import {Link} from 'react-router-dom';

// // Utility Components
// const PriceFormatter = ({ price }) => {
//   return <span>₦{price.toLocaleString()}</span>;
// };

// const RatingStars = ({ rating }) => {
//   return (
//     <div className="flex">
//       {Array(5).fill(0).map((_, i) => (
//         <Star 
//           key={i} 
//           size={16} 
//           className={i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
//         />
//       ))}
//     </div>
//   );
// };

// // Main Components
// const ProductCard = ({ product, addToCart }) => {
//   return (
//     <div  className="bg-white rounded shadow overflow-hidden hover:shadow-lg transition-shadow">
//       <div className="relative">
//         <img 
//           src={product.image} 
//           alt={product.name} 
//           className="w-full h-48 object-contain p-4" 
//         />
//         {product.discount > 0 && (
//           <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
//             -{product.discount}%
//           </span>
//         )}
//         <button className="absolute top-2 left-2 text-gray-500 hover:text-red-500">
//           <Heart size={20} />
//         </button>
//       </div>
//       <div className="p-4 border-t">
//         <Link to={`/product/${product.id}`} className="font-medium mb-1 line-clamp-2 h-12">{product.name}</Link>
//         <div className="mb-1">
//           <span className="font-bold"><PriceFormatter price={product.discountPrice} /></span>
//           {product.discount > 0 && (
//             <span className="text-sm text-gray-500 line-through ml-2">
//               <PriceFormatter price={product.price} />
//             </span>
//           )}
//         </div>
//         <div className="flex items-center mb-3">
//           <RatingStars rating={product.rating} />
//           <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
//         </div>
//         <button 
//           onClick={addToCart}
//           className="bg-red-500 text-white w-full p-2 rounded hover:bg-red-600 flex items-center justify-center gap-2"
//         >
//           <ShoppingCart size={16} />
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// const FiltersSidebar = ({ 
//   categories, 
//   activeCategory, 
//   setActiveCategory,
//   priceRange,
//   setPriceRange,
//   selectedBrands,
//   setSelectedBrands,
//   selectedRatings,
//   setSelectedRatings
// }) => {
//   const brands = [
//     'LG', 'Samsung', 'Hisense', 'Nexus', 'Scanfrost', 
//     'Haier Thermocool', 'Midea', 'Binatone', 'Maxi'
//   ];

//   const handleBrandChange = (brand) => {
//     setSelectedBrands(prev => 
//       prev.includes(brand) 
//         ? prev.filter(b => b !== brand) 
//         : [...prev, brand]
//     );
//   };

//   const handleRatingChange = (rating) => {
//     setSelectedRatings(prev => 
//       prev.includes(rating) 
//         ? prev.filter(r => r !== rating) 
//         : [...prev, rating]
//     );
//   };

//   return (
//     <aside className="w-full md:w-64 bg-white p-4 rounded shadow">
//       <h3 className="font-bold text-lg mb-4 flex items-center">
//         <Filter size={18} className="mr-2" />
//         Filters
//       </h3>
      
//       <div className="mb-6">
//         <h4 className="font-medium mb-2">Categories</h4>
//         <ul className="space-y-1">
//           {categories.map((category) => (
//             <li key={category}>
//               <button 
//                 className={`w-full text-left p-1 hover:text-red-500 ${activeCategory === category ? 'text-red-500 font-medium' : ''}`}
//                 onClick={() => setActiveCategory(category)}
//               >
//                 {category}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
      
//       <div className="mb-6">
//         <h4 className="font-medium mb-2">Price</h4>
//         <div className="flex items-center gap-2">
//           <input 
//             type="number" 
//             placeholder="Min" 
//             className="w-full p-2 border border-gray-300 rounded"
//             value={priceRange.min}
//             onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
//           />
//           <span>-</span>
//           <input 
//             type="number" 
//             placeholder="Max" 
//             className="w-full p-2 border border-gray-300 rounded"
//             value={priceRange.max}
//             onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
//           />
//         </div>
//       </div>
      
//       <div className="mb-6">
//         <h4 className="font-medium mb-2">Eletronics</h4>
//         <ul className="space-y-1">
//           {brands.map((brand) => (
//             <li key={brand} className="flex items-center">
//               <input 
//                 type="checkbox" 
//                 id={brand} 
//                 className="mr-2" 
//                 checked={selectedBrands.includes(brand)}
//                 onChange={() => handleBrandChange(brand)}
//               />
//               <label htmlFor={brand}>{brand}</label>
//             </li>
//           ))}
//         </ul>
//       </div>
      
//       <div className="mb-6">
//         <h4 className="font-medium mb-2">Customer Ratings</h4>
//         <div className="space-y-1">
//           {[4, 3, 2, 1].map((rating) => (
//             <div key={rating} className="flex items-center">
//               <input 
//                 type="checkbox" 
//                 id={`rating-${rating}`} 
//                 className="mr-2" 
//                 checked={selectedRatings.includes(rating)}
//                 onChange={() => handleRatingChange(rating)}
//               />
//               <label htmlFor={`rating-${rating}`} className="flex items-center">
//                 {Array(rating).fill(0).map((_, i) => (
//                   <Star key={i} size={16} className="text-yellow-400 fill-current" />
//                 ))}
//                 {Array(5-rating).fill(0).map((_, i) => (
//                   <Star key={i} size={16} className="text-gray-300" />
//                 ))}
//                 <span className="ml-1">& Above</span>
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>
//     </aside>
//   );
// };

// const ProductGrid = ({ 
//   filteredProducts, 
//   addToCart, 
//   sortOption, 
//   setSortOption,
//   currentPage,
//   totalPages,
//   setCurrentPage
// }) => {
//   const sortOptions = [
//     { value: 'popularity', label: 'Popularity' },
//     { value: 'price-low', label: 'Price: Low to High' },
//     { value: 'price-high', label: 'Price: High to Low' },
//     { value: 'newest', label: 'Newest Arrivals' },
//     { value: 'discount', label: 'Discount' }
//   ];

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="flex-1">
//       <div className="bg-white p-4 rounded shadow mb-4">
//         <div className="flex flex-wrap items-center justify-between gap-2">
//           <p className="text-sm text-gray-600">{filteredProducts.length} products found</p>
//           <div className="flex items-center gap-2">
//             <span className="text-sm">Sort by:</span>
//             <select 
//               className="border border-gray-300 rounded p-1"
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//             >
//               {sortOptions.map(option => (
//                 <option key={option.value} value={option.value}>{option.label}</option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} addToCart={addToCart} />
//           ))
//         ) : (
//           <div className="col-span-full text-center py-10">
//             <p className="text-gray-500">No products match your filters</p>
//           </div>
//         )}
//       </div>
      
//       {totalPages > 1 && (
//         <div className="mt-6 flex justify-center">
//           <div className="flex items-center gap-1">
//             <button 
//               className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
//               disabled={currentPage === 1}
//               onClick={() => handlePageChange(currentPage - 1)}
//             >
//               Previous
//             </button>
            
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
//               <button
//                 key={page}
//                 className={`px-3 py-1 border rounded ${currentPage === page ? 'bg-red-500 text-white border-red-500' : 'border-gray-300 hover:bg-gray-100'}`}
//                 onClick={() => handlePageChange(page)}
//               >
//                 {page}
//               </button>
//             ))}
            
//             <button 
//               className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
//               disabled={currentPage === totalPages}
//               onClick={() => handlePageChange(currentPage + 1)}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Main Page Component
// export default function AppliancesPage() {
//   const [cartCount, setCartCount] = useState(0);
//   const [activeCategory, setActiveCategory] = useState('All Appliances');
//   const [priceRange, setPriceRange] = useState({ min: '', max: '' });
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [selectedRatings, setSelectedRatings] = useState([]);
//   const [sortOption, setSortOption] = useState('popularity');
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 16;
  
//   const categories = [
//     'All Appliances', 'Kitchen Appliances', 'Refrigerators', 
//     'Washing Machines', 'Air Conditioners', 'Microwaves',
//     'Blenders & Juicers', 'Electric Kettles', 'Water Dispensers'
//   ];
  
//   const addToCart = () => {
//     setCartCount(cartCount + 1);
//   };

//   // Filter and sort products
//   const filteredProducts = products.filter(product => {
//     // Category filter
//     if (activeCategory !== 'All Appliances' && product.category !== activeCategory) {
//       return false;
//     }
    
//     // Price filter
//     if (priceRange.min && product.discountPrice < Number(priceRange.min)) {
//       return false;
//     }
//     if (priceRange.max && product.discountPrice > Number(priceRange.max)) {
//       return false;
//     }
    
//     // Brand filter
//     if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
//       return false;
//     }
    
//     // Rating filter
//     if (selectedRatings.length > 0 && !selectedRatings.some(r => Math.floor(product.rating) >= r)) {
//       return false;
//     }
    
//     return true;
//   }).sort((a, b) => {
//     switch (sortOption) {
//       case 'price-low':
//         return a.discountPrice - b.discountPrice;
//       case 'price-high':
//         return b.discountPrice - a.discountPrice;
//       case 'newest':
//         return b.id - a.id;
//       case 'discount':
//         return (b.discount || 0) - (a.discount || 0);
//       default: // popularity
//         return (b.rating * b.reviews) - (a.rating * a.reviews);
//     }
//   });

//   // Pagination logic
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
//   const paginatedProducts = filteredProducts.slice(
//     (currentPage - 1) * productsPerPage,
//     currentPage * productsPerPage
//   );

//   // Reset to first page when filters change
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [activeCategory, priceRange, selectedBrands, selectedRatings, sortOption]);

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       {/* Main content */}
//       <main className="container mx-auto p-2 flex-1">
//         <div className="flex flex-col md:flex-row gap-6">
//           <FiltersSidebar 
//             categories={categories}
//             activeCategory={activeCategory}
//             setActiveCategory={setActiveCategory}
//             priceRange={priceRange}
//             setPriceRange={setPriceRange}
//             selectedBrands={selectedBrands}
//             setSelectedBrands={setSelectedBrands}
//             selectedRatings={selectedRatings}
//             setSelectedRatings={setSelectedRatings}
//           />
          
//           <ProductGrid 
//             filteredProducts={paginatedProducts} 
//             addToCart={addToCart}
//             sortOption={sortOption}
//             setSortOption={setSortOption}
//             currentPage={currentPage}
//             totalPages={totalPages}
//             setCurrentPage={setCurrentPage}
//           />
//         </div>
//       </main>
//     </div>
//   );
// }
import { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Heart, Menu, ChevronDown, Star, Filter } from 'lucide-react';
import products from '../components/Data/Product';
import { Link } from 'react-router-dom';

// Utility Components
const PriceFormatter = ({ price }) => {
  return <span>₦{price.toLocaleString()}</span>;
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
const ProductCard = ({ product, addToCart }) => {
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
          <span className="font-bold"><PriceFormatter price={product.discountPrice} /></span>
          {product.discount > 0 && (
            <span className="text-sm text-gray-500 line-through ml-2">
              <PriceFormatter price={product.price} />
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
  availableBrands
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
      
      <div className="mb-6">
        <h4 className="font-medium mb-2">Price</h4>
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
        <h4 className="font-medium mb-2">{activeCategory === 'All Appliances' ? 'Brands' : `${activeCategory} Brands`}</h4>
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
  setCurrentPage
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
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
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

// Brand data by category
const brandsByCategory = {
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
};

// Main Page Component
export default function AppliancesPage() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All Appliances');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [sortOption, setSortOption] = useState('popularity');
  const [currentPage, setCurrentPage] = useState(1);
  const [availableBrands, setAvailableBrands] = useState(brandsByCategory['All Appliances']);
  const productsPerPage = 16;
  
  const categories = [
    'All Appliances', 'Kitchen Appliances', 'Refrigerators', 
    'Washing Machines', 'Air Conditioners', 'Microwaves',
    'Blenders & Juicers', 'Electric Kettles', 'Water Dispensers'
  ];
  
  // Update brands when category changes
  useEffect(() => {
    setAvailableBrands(brandsByCategory[activeCategory] || []);
    // Clear selected brands when changing category
    setSelectedBrands([]);
  }, [activeCategory]);
  
  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
    setCartCount(prev => prev + 1);
  };

  // Filter and sort products
  const filteredProducts = products.filter(product => {
    // Category filter
    if (activeCategory !== 'All Appliances' && product.category !== activeCategory) {
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
          />
          
          <ProductGrid 
            filteredProducts={paginatedProducts} 
            addToCart={addToCart}
            sortOption={sortOption}
            setSortOption={setSortOption}
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </main>
    </div>
  );
}

