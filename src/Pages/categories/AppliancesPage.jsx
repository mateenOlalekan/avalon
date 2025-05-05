import ProductCategoryPage from '../productCategoryPage';
import { applianceProducts } from '../../components/Data/Product'; // You would import your actual data here

export default function AppliancesPage() {
  // Define appliance-specific data
  const appliancesData = {
    categories: [
      'All Appliances', 'Kitchen Appliances', 'Refrigerators', 
      'Washing Machines', 'Air Conditioners', 'Microwaves',
      'Blenders & Juicers', 'Electric Kettles', 'Water Dispensers'
    ],
    brandsByCategory: {
      'All Appliances': ['LG', 'Samsung', 'Hisense', 'Nexus', 'Scanfrost','Haier Thermocool', 'Midea', 'Binatone', 'Maxi'],
      'Kitchen Appliances': ['Scanfrost', 'Binatone', 'Maxi', 'Nexus', 'Haier Thermocool'],
      'Refrigerators': ['LG', 'Samsung', 'Hisense', 'Haier Thermocool', 'Midea'],
      'Washing Machines': ['LG', 'Samsung', 'Hisense', 'Nexus', 'Haier Thermocool'],
      'Air Conditioners': ['LG', 'Samsung', 'Hisense', 'Midea', 'Haier Thermocool',],
      'Microwaves': ['LG', 'Samsung', 'Nexus', 'Scanfrost', 'Midea'],
      'Blenders & Juicers': ['Binatone', 'Maxi', 'Nexus', 'Scanfrost', 'Haier Thermocool'],
      'Electric Kettles': ['Binatone', 'Maxi', 'Scanfrost', 'Haier Thermocool', 'Nexus'],
      'Water Dispensers': ['Nexus', 'Scanfrost', 'Midea', 'Haier Thermocool', 'LG']
    }
  };

  return (
    <ProductCategoryPage
      pageTitle="Appliances"
      categoryData={appliancesData}
      products={applianceProducts}
      defaultCategory="All Appliances"
      currency="₦"
    />
  );
}