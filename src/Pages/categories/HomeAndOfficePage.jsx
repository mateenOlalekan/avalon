import ProductCategoryPage from '../ProductCategoryPage';
import { homeOfficeProducts } from '../../components/Data/Product'; // You would import your actual data here

export default function HomeAndOfficePage() {
  const homeOfficeData = {
    categories: [
      'All Home & Office', 'Furniture', 'Kitchen & Dining', 
      'Home Decor', 'Bedding', 'Office Supplies', 'Lighting'
    ],
    brandsByCategory: {
      'All Home & Office': [
        'IKEA', 'Ashley Furniture', 'Staples', 'Crate & Barrel', 'West Elm', 
        'HomeGoods', 'Wayfair', 'Office Depot', 'Pottery Barn'
      ],
      'Furniture': [
        'IKEA', 'Ashley Furniture', 'La-Z-Boy', 'West Elm', 'Wayfair',
        'Pottery Barn', 'Ethan Allen', 'Crate & Barrel', 'Restoration Hardware'
      ],
      'Kitchen & Dining': [
        'KitchenAid', 'Cuisinart', 'Pyrex', 'Calphalon', 'OXO',
        'Corelle', 'Ninja', 'Le Creuset', 'Instant Pot'
      ],
      'Home Decor': [
        'HomeGoods', 'Pottery Barn', 'West Elm', 'Wayfair', 'Target',
        'IKEA', 'Crate & Barrel', 'Pier 1', 'At Home'
      ],
      'Bedding': [
        'Brooklinen', 'Casper', 'Pottery Barn', 'The Company Store', 'Parachute',
        'West Elm', 'Bed Bath & Beyond', 'IKEA', 'Wayfair'
      ],
      'Office Supplies': [
        'Staples', 'Office Depot', '3M', 'HP', 'Sharpie',
        'Post-it', 'Pilot', 'Bic', 'Moleskine'
      ],
      'Lighting': [
        'Philips', 'GE', 'IKEA', 'West Elm', 'Pottery Barn',
        'Restoration Hardware', 'Wayfair', 'Lamps Plus', 'Home Depot'
      ]
    }
  };
  
  return (
    <ProductCategoryPage 
      pageTitle="Home & Office"
      categories={homeOfficeData.categories}
      brandsByCategory={homeOfficeData.brandsByCategory}
      products={homeOfficeProducts}
    />
  );
}