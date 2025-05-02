import ProductCategoryPage from '../ProductCategoryPage';
import { phoneProducts } from '../../components/Data/Product'; // You would import your actual data here

export default function PhonesAndTabletsPage() {
  const phonesData = {
    categories: [
      'All Phones & Tablets', 'Smartphones', 'Basic Phones', 
      'Tablets', 'Smartwatches', 'Accessories'
    ],
    brandsByCategory: {
      'All Phones & Tablets': [
        'Apple', 'Samsung', 'Xiaomi', 'Infinix', 'Tecno', 
        'Nokia', 'Huawei', 'Oppo', 'Vivo'
      ],
      'Smartphones': [
        'Apple', 'Samsung', 'Xiaomi', 'Infinix', 'Tecno', 'Huawei', 'Oppo', 'Vivo'
      ],
      'Basic Phones': [
        'Nokia', 'Tecno', 'Itel'
      ],
      'Tablets': [
        'Apple', 'Samsung', 'Huawei', 'Lenovo', 'Microsoft'
      ],
      'Smartwatches': [
        'Apple', 'Samsung', 'Huawei', 'Xiaomi', 'Fitbit'
      ],
      'Accessories': [
        'Apple', 'Samsung', 'Anker', 'Baseus', 'Oraimo'
      ]
    }
  };

  return (
    <ProductCategoryPage
      pageTitle="Phones & Tablets"
      categoryData={phonesData}
      products={phoneProducts}
      defaultCategory="All Phones & Tablets"
      currency="₦"
    />
  );
}