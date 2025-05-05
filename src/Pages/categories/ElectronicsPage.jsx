import ProductCategoryPage from '../ProductCategoryPage';
import { electronicsProducts } from '../../components/Data/Product'; // You would import your actual data here

export default function ElectronicsPage() {
  const electronicsData = {
    categories: [
      'All Electronics', 'TVs', 'Audio Systems', 
      'Cameras', 'Home Appliances', 'Accessories'
    ],
    brandsByCategory: {
      'All Electronics': [
        'Samsung', 'Sony', 'LG', 'Philips', 'Panasonic', 
        'Hisense', 'JBL', 'Bose', 'Canon'
      ],
      'TVs': [
        'Samsung', 'LG', 'Sony', 'Hisense', 'TCL',
        'Philips', 'Panasonic', 'Vizio', 'Toshiba'
      ],
      'Audio Systems': [
        'Sony', 'Bose', 'JBL', 'Sonos', 'Harman Kardon',
        'Yamaha', 'Sennheiser', 'Bang & Olufsen', 'Denon'
      ],
      'Cameras': [
        'Canon', 'Nikon', 'Sony', 'Fujifilm', 'Panasonic',
        'Olympus', 'GoPro', 'DJI', 'Leica'
      ],
      'Home Appliances': [
        'Samsung', 'LG', 'Whirlpool', 'Bosch', 'Electrolux',
        'Panasonic', 'Philips', 'Haier', 'Hitachi'
      ],
      'Accessories': [
        'Belkin', 'Anker', 'Logitech', 'JBL', 'Sony',
        'Samsung', 'HDMI', 'AmazonBasics', 'SanDisk'
      ]
    }
  };
  
  return (
    <ProductCategoryPage 
      pageTitle="Electronics"
      categoryData={electronicsData}
      defaultCategory='All Electronics'
      currency="₦"
      products={electronicsProducts}
    />
  );
}