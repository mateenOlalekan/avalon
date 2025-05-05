import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'; 
import Header from './Header';   

const DashLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 overflow-auto w-full">
        <Header toggleSidebar={toggleSidebar} />
        <div className="p-4 md:p-6">
          <Outlet /> {/* This is where the content of the nested routes will render */}
        </div>
      </div>
    </div>
  );
};

export default DashLayout;