import { useLocation, Routes, Route } from 'react-router-dom';
import "./App.css";
// Layout Components
import Top from './components/Common/Topbar';
import DashLayout from './components/DashLayout/DashLayout';

// Public Pages
import Home from './pages/Homepage';
import Cart from './pages/Cart';
import WishList from './pages/WishList';
import OrderHistory from './pages/OrderHistory';
import Orderdetails from './pages/Orderdetails';
import NotFound from './pages/NoFound';

// Authentication Pages
import Signin from '../src/Auth/Signin';
import Signup from '../src/Auth/Signup';

// Category Pages
import ElectronicsPage from './pages/categories/ElectronicsPage';
import FashionPage from './pages/categories/FashionPage';
import AppliancesPage from './pages/categories/AppliancesPage';
import PhonesTabletsPage from './pages/categories/PhonesAndTabletsPage';
import HealthBeautyPage from './pages/categories/HealthAndBeautyPage';
import BabyProductsPage from './pages/categories/BabyProductsPage';
import SupermarketPage from './pages/categories/SupermarketPage';
import GamingPage from './pages/categories/GamingPage';
import MusicalInstrumentsPage from './pages/categories/MusiclaIInstrumentsPage';
import OtherCategoriesPage from './pages/categories/OtherCategoriesPage';
import ComputingPage from './pages/categories/ComputingPage';

// Dashboard Pages
import Dashboard from './pages/dashboard/Dashboard';
import AnalyticsPage from './pages/dashboard/AnalyticsPage';
import ProductsPage from './pages/dashboard/ProductsPage';
import OrdersPage from './pages/dashboard/OrdersPage';
import CustomersPage from './pages/dashboard/CustomersPage';
import SettingsPage from './pages/dashboard/SettingsPage';
import ChatsPage from './pages/dashboard/ChatsPage';
import CouponsPage from './pages/dashboard/CouponsPage';
import IntegrationsPage from './pages/dashboard/IntegrationsPage';
import LogoutPage from './Pages/LogOut';

function App() {
  const location = useLocation();
  
  // Define paths where the Topbar should be hidden
  const hiddenNavbarPaths = ["/signin", "/register", "/dashboard", "/*"];
  const shouldHideNavbar = hiddenNavbarPaths.some((path) => 
    location.pathname.startsWith(path)
  );
  
  return (
    <>
      {!shouldHideNavbar && <Top />}
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/orderDetails/:id" element={<Orderdetails />} />
        <Route path="/orderDetails" element={<Orderdetails />} />
        
        {/* Authentication Routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        
        {/* Category Routes */}
        <Route path="/category/electronics" element={<ElectronicsPage />} />
        <Route path="/category/fashion" element={<FashionPage />} />
        <Route path="/category/appliances" element={<AppliancesPage />} />
        <Route path="/category/phones-tablets" element={<PhonesTabletsPage />} />
        <Route path="/category/health-beauty" element={<HealthBeautyPage />} />
        <Route path="/category/baby-products" element={<BabyProductsPage />} />
        <Route path="/category/supermarket" element={<SupermarketPage />} />
        <Route path="/category/gaming" element={<GamingPage />} />
        <Route path="/category/musical-instruments" element={<MusicalInstrumentsPage />} />
        <Route path="/category/other-categories" element={<OtherCategoriesPage />} />
        <Route path="/category/computing" element={<ComputingPage />} />

        
        {/* Dashboard Routes */}
        <Route path="/dashboard/*" element={<DashLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="chats" element={<ChatsPage />} />
          <Route path="coupons" element={<CouponsPage />} />
          <Route path="integrations" element={<IntegrationsPage />} />
          <Route path="logout" element={<LogoutPage />} />


        </Route>
        
        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;