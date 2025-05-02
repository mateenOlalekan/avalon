import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import PriceFormatter from '../components/Common/PriceFormatter';
import RatingStars from '../components/Common/RatingStars';

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

export default ProductCard;