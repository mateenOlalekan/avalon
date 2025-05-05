import { useState } from 'react';
import { Menu, Bell, Sun, Moon, ChevronDown, Search } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Implement actual dark mode logic here if needed
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Left side: Menu icon (mobile) and search */}
        <div className="flex items-center flex-1">
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-md lg:hidden text-gray-500 hover:bg-gray-100"
          >
            <Menu size={20} />
          </button>
          
          <div className="relative ml-4 flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <Search size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Theme toggle, notifications, profile */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div className="relative">
            <button className="p-2 rounded-md text-gray-500 hover:bg-gray-100 relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
            </button>
          </div>
          
          <div className="flex items-center">
            <div className="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-semibold">
              JD
            </div>
            <div className="ml-2 hidden md:block">
              <div className="text-sm font-medium">John Doe</div>
              <div className="text-xs text-gray-500">Admin</div>
            </div>
            <ChevronDown size={16} className="ml-1 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;