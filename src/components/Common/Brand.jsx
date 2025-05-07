import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Star } from 'lucide-react';

import Lg from "../../assets/BrandImage/LG.png";
import Tecno from "../../assets/BrandImage/Tecno.webp";
import Samsung from "../../assets/BrandImage/Samsung.webp";
import EcoFlow from "../../assets/BrandImage/Ecoflow.webp";
import Intel from "../../assets/BrandImage/intel.webp";
import Lenovo from "../../assets/BrandImage/intel.webp";
import TGI from "../../assets/BrandImage/tgi.webp";
import Garnier from "../../assets/BrandImage/garnier.webp";
import Unilever from "../../assets/BrandImage/Unilever.webp";
import Haier from "../../assets/BrandImage/HaierThermocool.webp";
import Infinix from "../../assets/BrandImage/image.webp";
import ZTE from "../../assets/BrandImage/ZTE.webp";
import Huawei from "../../assets/BrandImage/Huawei.webp";
import Anker from "../../assets/BrandImage/Anker.png";
import Canon from "../../assets/BrandImage/Canon.png";
import Hisense from "../../assets/BrandImage/Hisense.png";
import Oriamo from "../../assets/BrandImage/Oraimo.png";

const brands = [
  { id: 1, name: "LG", image:Lg, products: 428, rating: 4.7 },
  { id: 2, name: "Huawei", image: Huawei, products: 312, rating: 4.5 },
  { id: 3, name: "Intel", image:Intel, products: 196, rating: 4.8 },
  { id: 4, name: "Oraimo", image:Oriamo, products: 157, rating: 4.3 },
  { id: 5, name: "Canon", image: Canon, products: 289, rating: 4.6 },
  { id: 6, name: "TECNO", image: Tecno, products: 203, rating: 4.2 },
  { id: 7, name: "Anker", image: Anker, products: 178, rating: 4.9 },
  { id: 8, name: "Samsung", image: Samsung, products: 512, rating: 4.8 },
  { id: 9, name: "EcoFlow", image:EcoFlow, products: 87, rating: 4.7 },
  { id: 10, name: "Lenovo", image: Lenovo, products: 345, rating: 4.5 },
  { id: 11, name: "TGI Group", image:TGI, products: 92, rating: 4.1 },
  { id: 12, name: "Garnier", image: Garnier, products: 134, rating: 4.4 },
  { id: 13, name: "Unilever", image: Unilever, products: 256, rating: 4.6 },
  { id: 14, name: "Haier Thermocool", image: Haier, products: 210, rating: 4.7 },
  { id: 15, name: "Infinix", image: Infinix, products: 198, rating: 4.3 },
  { id: 16, name: "ZTE", image: ZTE, products: 145, rating: 4.2 },
  { id: 17, name: "Hisense", image: Hisense, products: 120, rating: 4.5 },
  { id: 18, name: "Lenovo", image: Lenovo, products: 345, rating: 4.5 },
];

export default function BrandStore() {
  const featugreenBrands = brands.slice(0, 18);
  const trendingBrands = brands.slice(6);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Featugreen Brands */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Featugreen Brands</h3>
            <Link to="/brands" className="flex items-center text-green-500 hover:text-green-600  font-medium group">
              View all brands
              <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {featugreenBrands.map((brand) => (
              <Link
                key={brand.id}
                to={`/brands/${brand.id}`}
                className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="overflow-hidden flex items-center justify-center p-2">
                  <img 
                    src={brand.image} 
                    alt={brand.name} 
                    className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                  />
                </div>
                <div className="p-1 pt-0 text-center">
                  <h4 className="font-medium text-gray-900 group-hover:text-green-500 transition-colors">{brand.name}</h4>
                  <div className="flex items-center justify-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-gray-500 ml-1 my-2">{brand.rating}</span>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400 rounded-xl transition-all duration-300 pointer-events-none" />
              </Link>
            ))}
          </div>
        </div>

        {/* Trending Brands */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Trending Now</h3>
            <Link to="/trending-brands" className="flex items-center text-gray-600 hover:text-gray-900 font-medium group">
              See all trending
              <ChevronRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {trendingBrands.map((brand) => (
              <div key={brand.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
                <Link to={`/brands/${brand.id}`} className="block">
                  <div className=" flex items-center justify-center p-2">
                    <img 
                      src={brand.image} 
                      alt={brand.name} 
                      className="h-28 w-auto object-contain transition-transform duration-300 hover:scale-110" 
                    />
                  </div>
                  <div className="p-4 pt-0 text-center">
                    <h4 className="font-medium text-gray-900 hover:text-green-500 transition-colors">{brand.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">{brand.products} products</p>
                  </div>
                </Link>
                <div className="px-4 pb-4">
                  <button className="w-full py-2 bg-green-50 text-green-500 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-10">
            <div className="text-white mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Become a Verified Seller</h3>
              <p className="text-white/90 mb-4 max-w-lg">
                Join our marketplace and get your brand featugreen with millions of potential customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-6 py-3 bg-white text-green-600 rounded-lg font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center">
                  Register Your Brand
                  <ArrowRight size={16} className="ml-2" />
                </button>
                <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img
                src="/brand-cta-illustration.svg"
                alt="Brand partnership"
                className="h-40 md:h-48 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}