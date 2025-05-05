import ProductCategoryPage from '../ProductCategoryPage';
import { computingProducts } from '../../components/Data/Product'; // You would import your actual data here

export default function ComputingPage() {
  const computingData = {
    categories: [
      'All Computing', 'Laptops', 'Desktops', 
      'Computer Accessories', 'Printers & Scanners', 'Networking', 'Software'
    ],
    brandsByCategory: {
      'All Computing': [
        'HP', 'Dell', 'Lenovo', 'Apple', 'ASUS', 
        'Acer', 'Microsoft', 'Samsung', 'LG'
      ],
      'Laptops': [
        'HP', 'Dell', 'Lenovo', 'Apple', 'ASUS',
        'Acer', 'Microsoft', 'MSI', 'Razer'
      ],
      'Desktops': [
        'HP', 'Dell', 'Lenovo', 'Apple', 'ASUS',
        'Acer', 'Alienware', 'CyberPowerPC', 'Intel'
      ],
      'Computer Accessories': [
        'Logitech', 'Microsoft', 'Anker', 'Belkin', 'Kensington',
        'Corsair', 'SteelSeries', 'Razer', 'Kingston'
      ],
      'Printers & Scanners': [
        'HP', 'Canon', 'Epson', 'Brother', 'Xerox',
        'Lexmark', 'Fujitsu', 'Samsung', 'Zebra'
      ],
      'Networking': [
        'TP-Link', 'Netgear', 'Linksys', 'Cisco', 'D-Link',
        'ASUS', 'Ubiquiti', 'Buffalo', 'Huawei'
      ],
      'Software': [
        'Microsoft', 'Adobe', 'Norton', 'McAfee', 'Kaspersky',
        'Autodesk', 'VMware', 'Symantec', 'Bitdefender'
      ]
    }
  };
  
  return (
    <ProductCategoryPage 
      pageTitle="Computing"
      categoryData={computingData}
      products={computingProducts}
      defaultCategory='Computer Eletronics'
      currency="₦"
    />
  );
}