import ProductCategoryPage from '../ProductCategoryPage';
import { fashionProducts } from '../../components/Data/Product'; // You would import your actual data here

export default function FashionPage() {
  const fashionData = {
    categories: [
      'All Fashion', 'Men\'s Clothing', 'Women\'s Clothing', 
      'Kids\' Clothing', 'Shoes', 'Bags & Accessories', 'Jewelry'
    ],
    brandsByCategory: {
      'All Fashion': [
        'Nike', 'Adidas', 'Zara', 'H&M', 'Levi\'s', 
        'Tommy Hilfiger', 'Calvin Klein', 'Forever 21', 'Gap'
      ],
      'Men\'s Clothing': [
        'Nike', 'Adidas', 'Levi\'s', 'Tommy Hilfiger', 'Calvin Klein',
        'Polo Ralph Lauren', 'H&M', 'Zara', 'Under Armour'
      ],
      'Women\'s Clothing': [
        'Zara', 'H&M', 'Forever 21', 'Nike', 'Adidas',
        'Mango', 'Shein', 'Victoria\'s Secret', 'Gap'
      ],
      'Kids\' Clothing': [
        'Carter\'s', 'OshKosh B\'gosh', 'Gap Kids', 'Children\'s Place', 'Nike',
        'Adidas', 'H&M Kids', 'Old Navy', 'Gymboree'
      ],
      'Shoes': [
        'Nike', 'Adidas', 'Puma', 'Vans', 'Converse',
        'Reebok', 'New Balance', 'Skechers', 'Clarks'
      ],
      'Bags & Accessories': [
        'Coach', 'Michael Kors', 'Kate Spade', 'Louis Vuitton', 'Gucci',
        'Fossil', 'Herschel', 'Samsonite', 'Ray-Ban'
      ],
      'Jewelry': [
        'Pandora', 'Swarovski', 'Tiffany & Co.', 'Cartier', 'Alex and Ani',
        'Kendra Scott', 'David Yurman', 'James Avery', 'Kay Jewelers'
      ]
    }
  };
  
  return (
    <ProductCategoryPage 
      pageTitle="Fashion"
      categories={fashionData.categories}
      brandsByCategory={fashionData.brandsByCategory}
      products={fashionProducts}
    />
  );
}