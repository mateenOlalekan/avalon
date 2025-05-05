import ProductCategoryPage from '../ProductCategoryPage';
import { otherCategoryProducts } from '../../components/Data/Product'; // You would import your actual data here

export default function OtherCategoriesPage() {
  const otherCategoriesData = {
    categories: [
      'All Other Categories', 'Books & Media', 'Sports & Fitness', 
      'Automotive', 'Garden & Outdoor', 'Pet Supplies', 'Arts & Crafts'
    ],
    brandsByCategory: {
      'All Other Categories': [
        'Amazon', 'Penguin Random House', 'Nike', 'Adidas', 'Purina', 
        'Scotts', 'Bosch', 'Royal Canin', 'Crayola'
      ],
      'Books & Media': [
        'Penguin Random House', 'HarperCollins', 'Simon & Schuster', 'Netflix', 'Disney',
        'Warner Bros.', 'Universal Pictures', 'Macmillan', 'Scholastic'
      ],
      'Sports & Fitness': [
        'Nike', 'Adidas', 'Under Armour', 'Reebok', 'Wilson',
        'Spalding', 'Callaway', 'Peloton', 'NordicTrack'
      ],
      'Automotive': [
        'Bosch', 'Michelin', 'Castrol', 'Shell', 'Mobil',
        'Toyota', 'Ford', 'Honda', 'STP'
      ],
      'Garden & Outdoor': [
        'Scotts', 'Miracle-Gro', 'Weber', 'Coleman', 'BLACK+DECKER',
        'WORX', 'Husqvarna', 'Craftsman', 'Keter'
      ],
      'Pet Supplies': [
        'Purina', 'Royal Canin', 'Pedigree', 'Hill\'s', 'Blue Buffalo',
        'Kong', 'PetSafe', 'Hartz', 'Friskies'
      ],
      'Arts & Crafts': [
        'Crayola', 'Faber-Castell', 'Cricut', 'Sharpie', 'Strathmore',
        '3M Scotch', 'Fiskars', 'Singer', 'Martha Stewart'
      ]
    }
  };
  
  return (
    <ProductCategoryPage 
      pageTitle="Other Categories"
      categoryData={otherCategoriesData}
      products={otherCategoryProducts}
      defaultCategory='All Other Categories'
      currency="₦"
    />
  );
}