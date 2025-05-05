import { useParams } from 'react-router-dom';
import ProductCategoryPage from '../components/Products/ProductCategoryPage';
import { appliancesData, phonesData, healthData,} from '../data/categoryData';

import products from '../data/products';

const CategoryPage = () => {
  const { categoryName } = useParams();
  
  const getCategoryData = () => {
    switch(categoryName) {
      case 'appliances': return { data: appliancesData, products: products.filter(p => p.category === 'Appliances') };
      case 'phones-tablets': return { data: phonesData, products: products.filter(p => p.category === 'Phones & Tablets') };
      case 'health-beauty': return { data: healthData, products: products.filter(p => p.category === 'Health & Beauty') };
      case 'electronics': return { data: appliancesData, products: products.filter(p => p.category === 'Electronics') };
      case 'fashion': return { data: appliancesData, products: products.filter(p => p.category === 'Fashion') };
      case 'baby-products': return { data: appliancesData, products: products.filter(p => p.category === 'Baby Products') };
      case 'computing': return { data: appliancesData, products: products.filter(p => p.category === 'Computing') };
      case 'supermarket': return { data: appliancesData, products: products.filter(p => p.category === 'Supermarket') };
      case 'gaming': return { data: appliancesData, products: products.filter(p => p.category === 'Gaming') };
      case 'musical-instruments': return { data: appliancesData, products: products.filter(p => p.category === 'Musical Instruments') };
      case 'other-categories': return { data: appliancesData, products: products.filter(p => p.category === 'Other Categories') };     
      default: return { data: null, products: [] };
    }
  };

  const { data, products: filteredProducts } = getCategoryData();

  return (
    <ProductCategoryPage
      pageTitle={categoryName?.replace('-', ' ') || 'Category'}
      categoryData={data}
      products={filteredProducts}
      currency="₦"
    />
  );
};

export default CategoryPage;