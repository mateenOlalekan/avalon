import { Search, ShoppingCart, User, Heart, Menu, ChevronDown, Star, Filter } from 'lucide-react';
const FiltersSidebar = ({ 
    categories, 
    activeCategory, 
    setActiveCategory,
    priceRange,
    setPriceRange,
    selectedBrands,
    setSelectedBrands,
    selectedRatings,
    setSelectedRatings
  }) => {
    const brands = [
      'LG', 'Samsung', 'Hisense', 'Nexus', 'Scanfrost', 
      'Haier Thermocool', 'Midea', 'Binatone', 'Maxi'
    ];
  
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
          <h4 className="font-medium mb-2">Brands</h4>
          <ul className="space-y-1">
            {brands.map((brand) => (
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

  export default FiltersSidebar;