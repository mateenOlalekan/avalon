import ProductCategoryPage from '../ProductCategoryPage';
import { supermarketProducts } from '../../components/Data/Product'; // You would import your actual data here

export default function SupermarketPage() {
  const supermarketData = {
    categories: [
      'All Supermarket', 'Groceries', 'Beverages', 
      'Baking & Cooking', 'Canned & Packaged Foods', 'Snacks', 'Household Supplies'
    ],
    brandsByCategory: {
      'All Supermarket': [
        'Nestlé', 'Coca-Cola', 'Unilever', 'P&G', 'Kellogg\'s', 
        'General Mills', 'Kraft Heinz', 'PepsiCo', 'Danone'
      ],
      'Groceries': [
        'Knorr', 'Maggi', 'Indomie', 'Quaker', 'Dangote',
        'Golden Penny', 'Honeywell', 'Dufil', 'Titus'
      ],
      'Beverages': [
        'Coca-Cola', 'PepsiCo', 'Nestlé', 'Red Bull', 'Starbucks',
        'Lipton', 'Tropicana', 'Nescafé', 'Snapple'
      ],
      'Baking & Cooking': [
        'Betty Crocker', 'Pillsbury', 'King Arthur', 'McCormick', 'Crisco',
        'Domino', 'Gold Medal', 'Reynolds', 'Pyrex'
      ],
      'Canned & Packaged Foods': [
        'Campbell\'s', 'Heinz', 'Del Monte', 'Goya', 'Bush\'s',
        'Dole', 'Green Giant', 'Hunt\'s', 'Libby\'s'
      ],
      'Snacks': [
        'Frito-Lay', 'Kellogg\'s', 'Nabisco', 'Hershey\'s', 'Mars',
        'General Mills', 'Mondelez', 'Planters', 'Pringles'
      ],
      'Household Supplies': [
        'P&G', 'Clorox', 'Unilever', 'SC Johnson', 'Colgate-Palmolive',
        'Kimberly-Clark', 'Reckitt Benckiser', 'Georgia-Pacific', '3M'
      ]
    }
  };
  
  return (
    <ProductCategoryPage 
      pageTitle="Supermarket"
      categoryData={supermarketData}
      brandsByCategory={supermarketProducts}
      products={supermarketProducts}
      defaultCategory="All Supermarket"
      currency="₦"
  
    />
  );
}