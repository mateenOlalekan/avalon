import ProductCard from './ProductCard';
import Pagination from '../components/Common/Pagination';

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
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default ProductGrid;