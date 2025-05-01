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
import Product from "./components/Products/AppliancesPage";
import Orderdetails from "./Pages/OrderDetails";
import OrderHistory from "./Pages/OrderHistory";

function App() {
  const location = useLocation();

  // ✅ Fix: Don't use `includes` for path matching with dynamic routes
  const hiddenNavbarPaths = ["/signin", "/register", "/dashboard"];
  const shouldHideNavbar = hiddenNavbarPaths.some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!shouldHideNavbar && <Top />}

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/orderDetails/:id" element={<Orderdetails />} />
        <Route path="/orderDetails" element={<Orderdetails />} />

        {/* Auth Pages */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Signup />} />

        {/* Admin Pages */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
