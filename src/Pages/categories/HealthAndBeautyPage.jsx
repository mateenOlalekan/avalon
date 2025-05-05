import ProductCategoryPage from '../productCategoryPage';
import { healthBeautyProducts } from '../../components/Data/Product'; // You would import your actual data here

export default function HealthAndBeautyPage() {
  const healthBeautyData = {
    categories: [
      'All Health & Beauty', 'Skincare', 'Hair Care', 
      'Makeup', 'Fragrances', 'Personal Care', 'Health Products'
    ],
    brandsByCategory: {
      'All Health & Beauty': [
        'Nivea', 'Neutrogena', 'LOreal', 'Maybelline', 'Dove', 
        'Garnier', 'Revlon', 'Johnson & Johnson', 'Olay'
      ],
      'Skincare': [
        'Neutrogena', 'Cetaphil', 'The Ordinary', 'CeraVe', 'La Roche-Posay',
        'Clinique', 'Olay', 'Bioderma', 'Nivea'
      ],
      'Hair Care': [
        'Pantene', 'TRESemmé', 'Head & Shoulders', 'LOreal', 'Dove',
        'Garnier', 'Shea Moisture', 'Cantu', 'OGX'
      ],
      'Makeup': [
        'Maybelline', 'L Oreal', 'MAC', 'Revlon', 'NYX',
        'Fenty Beauty', 'e.l.f.', 'Covergirl', 'Rimmel'
      ],
      'Fragrances': [
        'Chanel', 'Dior', 'Versace', 'Calvin Klein', 'Victorias Secret',
        'Dolce & Gabbana', 'Hugo Boss', 'Gucci', 'Tom Ford'
      ],
      'Personal Care': [
        'Dove', 'Gillette', 'Colgate', 'Oral-B', 'Listerine',
        'Nivea', 'Vaseline', 'Dial', 'Degree'
      ],
      'Health Products': [
        'Centrum', 'Natures Way', 'GNC', 'One-A-Day', 'Ensure',
        'Advil', 'Tylenol', 'Band-Aid', 'CVS Health'
      ]
    }
  };
  
  return (
    <ProductCategoryPage 
      pageTitle="Health & Beauty"
      categoryData={healthBeautyData}
      products={healthBeautyProducts}
      defaultCategory='Health and Beauty'
      currency="₦"
    />
  );
}