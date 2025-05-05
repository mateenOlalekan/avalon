import ProductCategoryPage from '../productCategoryPage';
import { gamingProducts } from '../../components/Data/Product'; // You would import your actual data here

export default function GamingPage() {
  const gamingData = {
    categories: [
      'All Gaming', 'Consoles', 'Games', 
      'Gaming Accessories', 'PC Gaming', 'Gaming Chairs', 'Gaming Merchandise'
    ],
    brandsByCategory: {
      'All Gaming': [
        'Sony', 'Microsoft', 'Nintendo', 'Razer', 'Logitech G', 
        'SteelSeries', 'Corsair', 'HyperX', 'ASUS ROG'
      ],
      'Consoles': [
        'Sony PlayStation', 'Microsoft Xbox', 'Nintendo', 'Valve', 'Sega',
        'Atari', 'Intellivision', 'Oculus', 'Nvidia Shield'
      ],
      'Games': [
        'Electronic Arts', 'Ubisoft', 'Activision Blizzard', 'Rockstar Games', 'Nintendo',
        'Square Enix', 'Epic Games', 'Capcom', 'Bethesda'
      ],
      'Gaming Accessories': [
        'Razer', 'Logitech G', 'SteelSeries', 'HyperX', 'Corsair',
        'Turtle Beach', 'PowerA', 'PDP', 'Astro'
      ],
      'PC Gaming': [
        'ASUS ROG', 'MSI', 'Alienware', 'Razer', 'Corsair',
        'HP Omen', 'Acer Predator', 'Lenovo Legion', 'NZXT'
      ],
      'Gaming Chairs': [
        'DXRacer', 'Secretlab', 'GT Racing', 'AKRacing', 'Homall',
        'Respawn', 'Corsair', 'Razer', 'Noblechairs'
      ],
      'Gaming Merchandise': [
        'Funko', 'Jinx', 'Insert Coin', 'Bioworld', 'Good Smile',
        'Numskull', 'Loot Crate', 'ThinkGeek', 'Dark Horse'
      ]
    }
  };
  
  return (
    <ProductCategoryPage 
      pageTitle="Gaming"
      categoryData={gamingData}
      defaultCategory='All Gaming'
      currency="₦"
      products={gamingProducts}
    />
  );
}