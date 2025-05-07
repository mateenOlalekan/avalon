import { useLocation, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import "./App.css";

// Layout Components
const Top = lazy(() => import('./components/Common/Navbar'));
const DashLayout = lazy(() => import('./components/DashLayout/DashLayout'));
const Loading = lazy(() => import('./Pages/Loading'));


// Public Pages
const Home = lazy(() => import('./Pages/homepage'));
const Cart = lazy(() => import('./Pages/cart'));
const WishList = lazy(() => import('./Pages/wishList'));
const OrderHistory = lazy(() => import('./Pages/orderHistory'));
const Orderdetails = lazy(() => import('./Pages/orderDetails'));
const NotFound = lazy(() => import('./Pages/noFound'));

// Authentication Pages
const Login = lazy(() => import('./Auth/Login'));
const Signup = lazy(() => import('./Auth/Register'));

// Category Pages
const ElectronicsPage = lazy(() => import('./pages/categories/ElectronicsPage'));
const FashionPage = lazy(() => import('./pages/categories/FashionPage'));
const AppliancesPage = lazy(() => import('./pages/categories/AppliancesPage'));
const PhonesTabletsPage = lazy(() => import('./pages/categories/PhonesAndTabletsPage'));
const HealthBeautyPage = lazy(() => import('./pages/categories/HealthAndBeautyPage'));
const BabyProductsPage = lazy(() => import('./pages/categories/BabyProductsPage'));
const SupermarketPage = lazy(() => import('./pages/categories/SupermarketPage'));
const GamingPage = lazy(() => import('./pages/categories/GamingPage'));
const MusicalInstrumentsPage = lazy(() => import('./pages/categories/MusiclaIInstrumentsPage'));
const OtherCategoriesPage = lazy(() => import('./pages/categories/OtherCategoriesPage'));
const ComputingPage = lazy(() => import('./pages/categories/ComputingPage'));

// Dashboard Pages
const Dashboard = lazy(() => import('./Pages/DashBoard/dashboard'));
const AnalyticsPage = lazy(() => import('./Pages/DashBoard/analyticsPage'));
const ProductsPage = lazy(() => import('./Pages/DashBoard/productsPage'));
const OrdersPage = lazy(() => import('./Pages/DashBoard/ordersPage'));
const CustomersPage = lazy(() => import('./Pages/DashBoard/customersPage'));
const SettingsPage = lazy(() => import('./Pages/DashBoard/settingsPage'));
const ChatsPage = lazy(() => import('./Pages/DashBoard/chatsPage'));
const CouponsPage = lazy(() => import('./Pages/DashBoard/couponsPage'));
const IntegrationsPage = lazy(() => import('./Pages/DashBoard/integrationsPage'));
const LogoutPage = lazy(() => import('./Pages/logOut'));

// Create a loading component


function App() {
  const location = useLocation();
  const hiddenNavbarPaths = ["/signin", "/register", "/dashboard", "/*","/login"];
  const shouldHideNavbar = hiddenNavbarPaths.some((path) => 
    location.pathname.startsWith(path)
  );
  
  return (
    <>
      <Suspense fallback={<Loading />}>
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
          <Route path="/login" element={<Login/>} />
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
      </Suspense>
    </>
  );
}

export default App;