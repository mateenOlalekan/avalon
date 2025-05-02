import { useState, useEffect } from 'react';
import FiltersSidebar from '../filters/FiltersSidebar';
import ProductGrid from '../Product/ProductGrid';

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