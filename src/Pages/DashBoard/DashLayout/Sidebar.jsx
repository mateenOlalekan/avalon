import { Link, useLocation } from 'react-router-dom';
import {
  ShoppingBag, User, BarChart2, MessageSquare,
  Package, Tag, Grid, Settings, LogOut, X
} from 'lucide-react';

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const location = useLocation();

  const isActive = (path) => {
    const fullPath = `/dashboard${path}`;
    return location.pathname.startsWith(fullPath);
  };

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-gray-600 bg-opacity-50 z-20"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed lg:static lg:flex z-30 h-screen bg-white shadow-md p-4 flex-col transition-all duration-300 ${
        sidebarOpen ? 'left-0' : '-left-64'
      } w-64 lg:w-64`}>
        <div className="flex items-center justify-between mb-8 ml-2">
          <div className="flex items-center">
            <div className="bg-green-500 p-1 rounded">
              <ShoppingBag size={20} className="text-white" />
            </div>
            <span className="ml-2 font-bold text-lg">LuxeMart</span>
          </div>
          <button className="lg:hidden" onClick={toggleSidebar}>
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col h-full justify-between">
          <div className="space-y-1">
            <Link
              to="/dashboard"
              className={`flex items-center w-full p-3 rounded-lg ${isActive('') ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <Grid size={18} className="mr-3" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/dashboard/analytics"
              className={`flex items-center w-full p-3 rounded-lg ${isActive('/analytics') ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <BarChart2 size={18} className="mr-3" />
              <span>Analytics</span>
            </Link>
            <Link
              to="/dashboard/products"
              className={`flex items-center w-full p-3 rounded-lg ${isActive('/products') ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <Package size={18} className="mr-3" />
              <span>Products</span>
            </Link>
            <Link
              to="/dashboard/orders"
              className={`flex items-center w-full p-3 rounded-lg ${isActive('/orders') ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <ShoppingBag size={18} className="mr-3" />
              <span>Orders</span>
            </Link>
            <Link
              to="/dashboard/customers"
              className={`flex items-center w-full p-3 rounded-lg ${isActive('/customers') ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <User size={18} className="mr-3" />
              <span>Customers</span>
            </Link>
            <Link
              to="/dashboard/chats"
              className={`flex items-center w-full p-3 rounded-lg ${isActive('/chats') ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <MessageSquare size={18} className="mr-3" />
              <span>Chats</span>
            </Link>
            <Link
              to="/dashboard/coupons"
              className={`flex items-center w-full p-3 rounded-lg ${isActive('/coupons') ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <Tag size={18} className="mr-3" />
              <span>Coupons</span>
            </Link>
            <Link
              to="/dashboard/integrations"
              className={`flex items-center w-full p-3 rounded-lg ${isActive('/integrations') ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <Settings size={18} className="mr-3" />
              <span>Integrations</span>
            </Link>
            <Link
              to="/dashboard/settings"
              className={`flex items-center w-full p-3 rounded-lg ${isActive('/settings') ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <Settings size={18} className="mr-3" />
              <span>Settings</span>
            </Link>
          </div>
          <div className="space-y-1">
            {/* Optional visual separator */}
            {/* <hr className="border-gray-200 my-2" /> */}
            <Link
              to="/logout"
              className={`flex items-center w-full p-3 rounded-lg text-gray-500 hover:bg-gray-100`}
            >
              <LogOut size={18} className="mr-3" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;