import ProductCategoryPage from '../ProductCategoryPage';
import { babyProducts } from '../../components/Data/Product'; // You would import your actual data here

export default function BabyProductsPage() {
  const babyProductsData = {
    categories: [
      'All Baby Products', 'Baby Food & Formula', 'Diapers & Wipes', 
      'Baby Gear', 'Nursery', 'Baby Clothing', 'Toys & Activities'
    ],
    brandsByCategory: {
      'All Baby Products': [
        'Pampers', 'Huggies', 'Gerber', 'Johnson\'s', 'Fisher-Price', 
        'Graco', 'Enfamil', 'Similac', 'Baby Dove'
      ],
      'Baby Food & Formula': [
        'Gerber', 'Similac', 'Enfamil', 'Earth\'s Best', 'Beech-Nut',
        'Happy Baby', 'Plum Organics', 'Nestle', 'Heinz'
      ],
      'Diapers & Wipes': [
        'Pampers', 'Huggies', 'Luvs', 'Seventh Generation', 'Honest',
        'Up & Up', 'Kirkland', 'Bamboo Nature', 'Coterie'
      ],
      'Baby Gear': [
        'Graco', 'Chicco', 'Baby Trend', 'Britax', 'Baby Bjorn',
        'Ingenuity', 'Evenflo', 'Maxi-Cosi', 'UPPAbaby'
      ],
      'Nursery': [
        'Delta Children', 'Graco', 'DaVinci', 'Carter\'s', 'Pottery Barn Kids',
        'Cloud Island', 'Dream On Me', 'Babyletto', 'Million Dollar Baby'
      ],
      'Baby Clothing': [
        'Carter\'s', 'Gerber', 'OshKosh B\'gosh', 'The Children\'s Place', 'Gap Baby',
        'Old Navy', 'Burt\'s Bees Baby', 'Hudson Baby', 'Simple Joys by Carter\'s'
      ],
      'Toys & Activities': [
        'Fisher-Price', 'VTech', 'Melissa & Doug', 'Baby Einstein', 'Infantino',
        'Skip Hop', 'Bright Starts', 'Manhattan Toy', 'Lamaze'
      ]
    }
  };
  
  return (
    <ProductCategoryPage 
      pageTitle="Baby Products"
      categoryData={babyProductsData}
      products={babyProducts}
      defaultCategory='All Baby Products'
      currency='₦'
    />
  );
}