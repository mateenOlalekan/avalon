import { Link, useLocation } from 'react-router-dom';
import {
  ShoppingBag, User, BarChart2, MessageSquare,
  Package, Tag, Grid, Settings, LogOut, X
} from 'lucide-react';
import { useState } from 'react'; 

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === `/dashboard${path}`;

  const navItems = [
    { icon: <Grid size={18} className="mr-3" />, label: 'Dashboard', to: '' },
    { icon: <Package size={18} className="mr-3" />, label: 'Products', to: '/products' },
    { icon: <User size={18} className="mr-3" />, label: 'Customers', to: '/customers' },
    { icon: <BarChart2 size={18} className="mr-3" />, label: 'Analytics', to: '/analytics' },
    { icon: <ShoppingBag size={18} className="mr-3" />, label: 'Orders', to: '/orders' },
    { icon: <Tag size={18} className="mr-3" />, label: 'Coupons', to: '/coupons' },
    { icon: <MessageSquare size={18} className="mr-3" />, label: 'Chats', to: '/chats', badge: 4 }
  ];

  const otherItems = [
    { icon: <Grid size={18} className="mr-3" />, label: 'Integrations', to: '/integrations' },
    { icon: <Settings size={18} className="mr-3" />, label: 'Settings', to: '/settings' },
    { icon: <LogOut size={18} className="mr-3" />, label: 'Logout', to: '/logout' }
  ];

  const renderNavItem = ({ icon, label, to, badge }) => {
    const active = isActive(to);
    return (
      <Link
        key={to}
        to={`/dashboard${to}`}
        className={`flex items-center w-full p-3 rounded-lg ${
          active ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'
        }`}
      >
        {icon}
        <span>{label}</span>
        {badge && (
          <div className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center ml-auto">
            <span className="text-xs">{badge}</span>
          </div>
        )}
      </Link>
    );
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
      } w-64 lg:w-64 overflow-y-auto`}>
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

        <p className="text-xs text-gray-400 ml-2 mb-2">MENU</p>
        <div className="space-y-1">
          {navItems.map(renderNavItem)}
        </div>

        <p className="text-xs text-gray-400 ml-2 mt-8 mb-2">OTHER</p>
        <div className="space-y-1">
          {otherItems.map(renderNavItem)}
        </div>
      </div>
    </>
  );
};

export default Sidebar;