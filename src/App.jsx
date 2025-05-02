import "./App.css";
import Top from "./components/Common/Topbar";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./Pages/NoFound";
import Home from "./Pages/Homepage";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";
import WishList from "./Pages/WishList";
import Cart from "./Pages/Cart";
import Dashboard from "./Pages/AdminDashboard";
//import Product from "./Pages/Product";
import Orderdetails from "./Pages/OrderDetails";
import OrderHistory from "./Pages/OrderHistory";
import BabyProductsPage from "./Pages/categories/BabyProductsPage";
import ElectronicsPage from "./Pages/categories/ElectronicsPage";
import FashionPage from "./Pages/categories/FashionPage";
import AppliancesPage from "./Pages/categories/AppliancesPage";
import PhonesTabletsPage from "./Pages/categories/PhonesAndTabletsPage";
import HealthBeautyPage from "./Pages/categories/HealthAndBeautyPage";
import AppliancesCategoryPage from "./Pages/categories/AppliancesPage";
import SupermarketPage from "./Pages/categories/SupermarketPage";
import GamingPage from "./Pages/categories/GamingPage";
import MusicalInstrumentsPage from "./Pages/categories/MusicalInstrumentsPage";
import OtherCategoriesPage from "./Pages/categories/OtherCategoriesPage";
import ComputingPage from "./Pages/categories/ComputingPage";





function App() {
  const location = useLocation();

  const hiddenNavbarPaths = ["/signin", "/register", "/dashboard"];
  const shouldHideNavbar = hiddenNavbarPaths.some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!shouldHideNavbar && <Top />}

      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/cart" element={<Cart />} />
        <Route path="/category/electronics" element={<ElectronicsPage />} />
        <Route path="/category/fashion" element={<FashionPage />} />
        <Route path="/category/appliances" element={<AppliancesPage />} />
        <Route path="/category/phones-tablets" element={<PhonesTabletsPage />} />
        <Route path="/category/health-beauty" element={<HealthBeautyPage />} />
        <Route path="/category/baby-products" element={<BabyProductsPage />} />
        <Route path="/category/appliances" element={<AppliancesCategoryPage />} />
        <Route path="/category/supermarket" element={<SupermarketPage />} />
        <Route path="/category/gaming" element={<GamingPage />} />
        <Route path="/category/musical-instruments" element={<MusicalInstrumentsPage />} />
        <Route path="/category/other-categories" element={<OtherCategoriesPage />} />
        <Route path="/category/computing" element={<ComputingPage />} />
        
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/orderDetails/:id" element={<Orderdetails />} />
        <Route path="/orderDetails" element={<Orderdetails />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;