import React, { useState } from 'react';
import {
  FaFacebook, FaTwitter, FaInstagram, 
  FaYoutube, FaLinkedin, FaPinterest,
  FaApple, FaGooglePlay, FaCcVisa, FaCcMastercard,
  FaCcPaypal, FaCcAmex, FaRegCreditCard
} from "react-icons/fa";
import { 
  MdLocalShipping, MdSecurity, MdSupportAgent, 
  MdEmail, MdWhatsapp, MdLocationOn
} from "react-icons/md";
import { 
  Mail, MapPin, Clock, Phone, ChevronRight, ShoppingBag,
  ArrowRight, Send, AlertCircle, Award, Gift, ArrowUp
} from 'lucide-react';

export default function EnhancedFooter() {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [language, setLanguage] = useState('English');
  const [currency, setCurrency] = useState('USD');
  
  // Handle scroll to top button visibility
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Email submitted:', email);
    setEmail('');
    // Show success message or notification
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white text-gray-800 w-full">
      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
          <div className="flex items-center p-4 space-x-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-green-500">
            <MdLocalShipping className="text-green-600 text-4xl flex-shrink-0" />
            <div>
              <h5 className="font-bold text-gray-900 text-lg">Free Delivery</h5>
              <p className="text-gray-600 text-sm">Free shipping over $100</p>
            </div>
          </div>

          <div className="flex items-center p-4 space-x-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-green-500">
            <MdSecurity className="text-green-600 text-4xl flex-shrink-0" />
            <div>
              <h5 className="font-bold text-gray-900 text-lg">Money Back Guarantee</h5>
              <p className="text-gray-600 text-sm">Quality checked by our team</p>
            </div>
          </div>

          <div className="flex items-center p-4 space-x-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-green-500">
            <MdSupportAgent className="text-green-600 text-4xl flex-shrink-0" />
            <div>
              <h5 className="font-bold text-gray-900 text-lg">Customer Support</h5>
              <p className="text-gray-600 text-sm">Friendly 24/7 customer support</p>
            </div>
          </div>
          
          <div className="flex items-center p-4 space-x-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-green-500">
            <Gift className="text-green-600 text-4xl flex-shrink-0" />
            <div>
              <h5 className="font-bold text-gray-900 text-lg">Special Offers</h5>
              <p className="text-gray-600 text-sm">New deals every week</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="bg-gray-900 w-full text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
            {/* Brand & Description */}
            <div className="space-y-6 md:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-3xl text-white ml-2">
                  <span className="text-green-400">Luxe</span>
                  <span className="text-white">Mart</span>
                </h3>
                <ShoppingBag className="text-green-400" size={24} />
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                Your comprehensive online shopping destination offering premium electronics,
                unbeatable deals, and an exceptional customer experience. Shop with confidence
                and enjoy our excellent service.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-green-400" />
                  <span className="text-gray-200">+91 9500 888 33</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={16} className="text-green-400" />
                  <span className="text-gray-200">Mon-Fri: 10:00 AM To 6:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MdEmail className="text-green-400" size={16} />
                  <span className="text-gray-200">support@example.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-200">58 West Temple Drive Ashburn, VA 20147</span>
                </div>
              </div>
            </div>

            {/* Shop Categories */}
            <div className="space-y-6">
              <h4 className="font-semibold text-lg uppercase tracking-wide border-b border-gray-700 pb-2">
                Shop
              </h4>
              <ul className="space-y-2">
                {[
                  'Televisions', 'Fridges', 'Washing Machines',
                  'Fans', 'Air Conditioners', 'Laptops',
                  'Smartphones', 'Audio Systems'
                ].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="hover:text-green-400 transition-colors flex items-center group text-gray-300 text-sm"
                    >
                      <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">›</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Help Section */}
            <div className="space-y-6">
              <h4 className="font-semibold text-lg uppercase tracking-wide border-b border-gray-700 pb-2">
                Help
              </h4>
              <ul className="space-y-2">
                {[
                  'Customer Service', 'Find a Store', 
                  'Legal & Privacy', 'Contact', 'Gift Card',
                  'FAQ', 'Shipping Info', 'Returns Policy'
                ].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="hover:text-green-400 transition-colors flex items-center group text-gray-300 text-sm"
                    >
                      <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">›</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* My Account Section */}
            <div className="space-y-6">
              <h4 className="font-semibold text-lg uppercase tracking-wide border-b border-gray-700 pb-2">
                My Account
              </h4>
              <ul className="space-y-2">
                {[
                  'My Profile', 'My Order History', 
                  'My Wish List', 'Order Tracking',
                  'Shopping Cart', 'Addresses',
                  'Compare Products', 'Payment Methods'
                ].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="hover:text-green-400 transition-colors flex items-center group text-gray-300 text-sm"
                    >
                      <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">›</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              {/* Mobile App Section */}
              <div className="flex flex-col space-y-3">
                <h5 className="font-semibold text-lg">Download Our App</h5>
                <div className="flex flex-col space-y-3">
                  <a href="#" className="flex items-center space-x-2 bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-700 transition-colors">
                    <FaApple size={20} />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-300">Download on the</span>
                      <span className="font-medium">App Store</span>
                    </div>
                  </a>
                  <a href="#" className="flex items-center space-x-2 bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-700 transition-colors">
                    <FaGooglePlay size={16} />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-300">Get it on</span>
                      <span className="font-medium">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="pt-4">
                <h5 className="font-semibold text-lg mb-3">Follow Us</h5>
                <div className="flex flex-wrap gap-3">
                  {[
                    { Icon: FaFacebook, label: 'Facebook' },
                    { Icon: FaTwitter, label: 'Twitter' },
                    { Icon: FaInstagram, label: 'Instagram' },
                    { Icon: FaYoutube, label: 'YouTube' },
                    { Icon: FaLinkedin, label: 'LinkedIn' },
                    { Icon: FaPinterest, label: 'Pinterest' }
                  ].map(({ Icon, label }, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      aria-label={label}
                      className="bg-gray-700 p-2 rounded-full hover:bg-green-500 transition duration-300"
                      title={label}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="border-t border-gray-700 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="font-semibold text-xl text-white mb-4">
                  Stay Connected
                </h4>
                <p className="text-gray-300 text-sm">
                  Subscribe to receive exclusive offers, latest trends and personalized recommendations.
                  Join over 25,000 subscribers who never miss our best deals!
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative flex">
                  <input 
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 pl-4 text-gray-800 bg-white border-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                  <button 
                    type="submit"
                    className="bg-green-500 text-white py-3 px-6 rounded-r-lg hover:bg-green-600 transition duration-300 font-medium flex items-center text-sm"
                  >
                    <Send className="mr-2" size={16} />
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-400 flex items-start">
                  <AlertCircle className="mr-1 flex-shrink-0" size={14} />
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Language and Currency Selectors */}
        <div className="border-t border-gray-700 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap gap-4">
                <div className="relative">
                  <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-gray-700 text-white rounded py-2 px-3 appearance-none pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-green-400"
                  >
                    {['English', 'Spanish', 'French', 'German', 'Japanese'].map(lang => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                  <ChevronRight size={14} className="absolute right-2 top-2.5 transform rotate-90 pointer-events-none text-gray-400" />
                </div>
                
                <div className="relative">
                  <select 
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="bg-gray-700 text-white rounded py-2 px-3 appearance-none pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-green-400"
                  >
                    {['USD', 'EUR', 'GBP', 'CAD', 'AUD'].map(curr => (
                      <option key={curr} value={curr}>{curr}</option>
                    ))}
                  </select>
                  <ChevronRight size={14} className="absolute right-2 top-2.5 transform rotate-90 pointer-events-none text-gray-400" />
                </div>
              </div>
              
              <div className="flex items-center">
                <Award className="mr-2 text-green-400" size={20} />
                <span className="text-gray-300 text-sm">Certified Secure Online Shopping</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-300">
                &copy; {new Date().getFullYear()} Technoby. All rights reserved
              </p>
              
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
                {[
                  'Privacy Policy', 'Terms & Conditions', 
                  'Cookie Policy', 'Accessibility',
                  'Sitemap'
                ].map((item) => (
                  <a 
                    key={item} 
                    href="#" 
                    className="hover:text-green-400 transition-colors whitespace-nowrap"
                  >
                    {item}
                  </a>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                <FaCcVisa size={28} className="text-gray-300 hover:text-white transition-colors" />
                <FaCcMastercard size={28} className="text-gray-300 hover:text-white transition-colors" />
                <FaCcPaypal size={28} className="text-gray-300 hover:text-white transition-colors" />
                <FaCcAmex size={28} className="text-gray-300 hover:text-white transition-colors" />
                <FaRegCreditCard size={28} className="text-gray-300 hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}