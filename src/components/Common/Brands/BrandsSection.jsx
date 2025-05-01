import React from 'react';
import BrandCase from '../Case/BrandCase';

const BrandsSection = () => {
  const brands = [
    {
      id: 1,
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      link: "/shop?brand=apple",
      bgColor: "bg-black"
    },
    {
      id: 2,
      name: "Samsung",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo_blue.svg",
      link: "/shop?brand=samsung",
      bgColor: "bg-blue-100"
    },
    {
      id: 3,
      name: "Nike",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Nike_Logo.svg",
      link: "/shop?brand=nike",
      bgColor: "bg-gray-900"
    },
    {
      id: 4,
      name: "Adidas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
      link: "/shop?brand=adidas",
      bgColor: "bg-white"
    },
    {
      id: 5,
      name: "Sony",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Sony_logo.svg",
      link: "/shop?brand=sony",
      bgColor: "bg-white"
    },
    {
      id: 6,
      name: "LG",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg",
      link: "/shop?brand=lg",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <BrandCase 
      brands={brands} 
      title="Popular Brands"  
      subtitle="Shop your favorite brands" 
    />
  );
};

export default BrandsSection;