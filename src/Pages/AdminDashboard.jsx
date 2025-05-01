
import  { useState } from 'react';
import { Search, Bell, ChevronDown, Menu, ShoppingBag, User,  BarChart2, MessageSquare, Settings, Package, Tag, Grid, LogOut, X } from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-gray-600 bg-opacity-50 z-20"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar - Hidden on mobile, shown on toggle */}
      <div className={`fixed lg:static lg:flex z-30 h-screen bg-white shadow-md p-4 flex-col transition-all duration-300 ${
        sidebarOpen ? 'left-0' : '-left-64'
      } w-64 lg:w-64`}>
        <div className="flex items-center justify-between mb-8 ml-2">
          <div className="flex items-center">
            <div className="bg-green-500 p-1 rounded">
              <ShoppingBag size={20} className="text-white" />
            </div>
            <span className="ml-2 font-bold text-lg">Ex Com</span>
          </div>
          <button className="lg:hidden" onClick={toggleSidebar}>
            <X size={20} />
          </button>
        </div>
        
        <p className="text-xs text-gray-400 ml-2 mb-2">MENU</p>
        
        <div className="space-y-1">
          <button className="flex items-center w-full p-3 rounded-lg bg-green-100 text-green-600">
            <Grid size={18} className="mr-3" />
            <span>Dashboard</span>
          </button>
          
          <button className="flex items-center w-full p-3 rounded-lg text-gray-500 hover:bg-gray-100">
            <Package size={18} className="mr-3" />
            <span>Products</span>
          </button>
          
          <button className="flex items-center w-full p-3 rounded-lg text-gray-500 hover:bg-gray-100">
            <User size={18} className="mr-3" />
            <span>Customer</span>
          </button>
          
          <button className="flex items-center w-full p-3 rounded-lg text-gray-500 hover:bg-gray-100">
            <BarChart2 size={18} className="mr-3" />
            <span>Analytics</span>
          </button>
          
          <button className="flex items-center w-full p-3 rounded-lg text-gray-500 hover:bg-gray-100">
            <ShoppingBag size={18} className="mr-3" />
            <span>Orders</span>
          </button>
          
          <button className="flex items-center w-full p-3 rounded-lg text-gray-500 hover:bg-gray-100">
            <Tag size={18} className="mr-3" />
            <span>Coupons</span>
          </button>
          
          <button className="flex items-center w-full p-3 rounded-lg text-gray-500 hover:bg-gray-100">
            <MessageSquare size={18} className="mr-3" />
            <span>Chats</span>
            <div className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center ml-auto">
              <span className="text-xs">4</span>
            </div>
          </button>
        </div>
        
        <p className="text-xs text-gray-400 ml-2 mt-8 mb-2">OTHER</p>
        
        <div className="space-y-1">
          <button className="flex items-center w-full p-3 rounded-lg text-gray-500 hover:bg-gray-100">
            <Grid size={18} className="mr-3" />
            <span>Integrations</span>
          </button>
          
          <button className="flex items-center w-full p-3 rounded-lg text-gray-500 hover:bg-gray-100">
            <Settings size={18} className="mr-3" />
            <span>Settings</span>
          </button>
          
          <button className="flex items-center w-full p-3 rounded-lg text-gray-500 hover:bg-gray-100">
            <LogOut size={18} className="mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto w-full">
        {/* Header */}
        <div className="bg-white p-4 flex justify-between items-center shadow-sm">
          {/* Mobile Menu Button */}
          <button className="lg:hidden mr-2" onClick={toggleSidebar}>
            <Menu size={20} />
          </button>
          
          <div className="relative flex-grow max-w-md">
            <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search something here" 
              className="pl-10 pr-4 py-2 rounded-full bg-gray-50 focus:outline-none w-full"
            />
          </div>
          
          <div className="flex items-center">
            <div className="relative mr-4">
              <Bell size={20} className="text-gray-600" />
              <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
                <span className="text-white text-xs">5</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <img 
                src="/api/placeholder/40/40" 
                alt="User Avatar" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2"
              />
              <div className="mr-2 hidden sm:block">
                <p className="text-sm font-medium">Sifat Hasan</p>
                <p className="text-xs text-gray-500">sifat@example.com</p>
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Dashboard Content */}
        <div className="p-4 md:p-6">
          <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
          
          {/* Stats Grid - 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
            {/* Sales Total */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between mb-2">
                <h3 className="text-gray-500 text-sm">Sales total</h3>
                <button className="text-gray-400">•••</button>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">$2456</h2>
                <div className="text-green-500 text-sm">↑ 20%</div>
              </div>
              <p className="text-xs text-gray-400 mt-2">Compared to December 2021</p>
            </div>
            
            {/* Average Order Value */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between mb-2">
                <h3 className="text-gray-500 text-sm">Average order value</h3>
                <button className="text-gray-400">•••</button>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">$372.98</h2>
                <div className="text-green-500 text-sm">↑ 15%</div>
              </div>
              <p className="text-xs text-gray-400 mt-2">Compared to December 2021</p>
            </div>
            
            {/* Total Orders */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between mb-2">
                <h3 className="text-gray-500 text-sm">Total orders</h3>
                <button className="text-gray-400">•••</button>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">678</h2>
                <div className="text-green-500 text-sm">↑ 44%</div>
              </div>
              <p className="text-xs text-gray-400 mt-2">Compared to December 2021</p>
            </div>
          </div>
          
          {/* Charts Row - 1 column on mobile, 2 on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
            {/* Revenue Chart */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between mb-2">
                <h3 className="text-gray-500 text-sm">Revenue analytics</h3>
                <div className="flex items-center">
                  <span className="text-sm mr-2">Yearly</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
              </div>
              
              <div className="h-48 md:h-64 flex items-end space-x-1 md:space-x-4 pb-4 border-b border-gray-100">
                {[300, 200, 350, 250, 400, 300, 250, 400, 350, 300, 200, 300].map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-green-700 rounded-sm" 
                      style={{ height: `${value / 4}px` }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-2 hidden sm:inline">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
                    </span>
                    <span className="text-xs text-gray-500 mt-2 sm:hidden">
                      {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Traffic Source Chart */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between mb-2">
                <h3 className="text-gray-500 text-sm">Sales by traffic source</h3>
                <button className="text-gray-400">•••</button>
              </div>
              
              <div className="flex items-center justify-center h-48 md:h-64">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-8 border-green-400 relative">
                  <div className="absolute top-0 right-0 w-14 h-14 md:w-16 md:h-16 border-8 border-orange-400 rounded-tr-full"></div>
                  <div className="absolute bottom-0 right-0 w-14 h-14 md:w-16 md:h-16 border-8 border-gray-200 rounded-br-full"></div>
                  <div className="absolute bottom-0 left-0 w-14 h-14 md:w-16 md:h-16 border-8 border-gray-200 rounded-bl-full"></div>
                  <div className="absolute top-0 left-0 w-14 h-14 md:w-16 md:h-16 border-8 border-green-400 rounded-tl-full"></div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>Source</span>
                  <span>Orders</span>
                  <span>Amount</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-sm mr-2"></div>
                      <span>Facebook</span>
                    </div>
                    <span>22</span>
                    <span>$2,742.00</span>
                  </div>
                  
                  <div className="flex justify-between text-xs sm:text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-700 rounded-sm mr-2"></div>
                      <span>YouTube</span>
                    </div>
                    <span>27</span>
                    <span>$3,272.00</span>
                  </div>
                  
                  <div className="flex justify-between text-xs sm:text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-orange-400 rounded-sm mr-2"></div>
                      <span>Twitter</span>
                    </div>
                    <span>10</span>
                    <span>$2,303.00</span>
                  </div>
                  
                  <div className="flex justify-between text-xs sm:text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gray-400 rounded-sm mr-2"></div>
                      <span>Instagram</span>
                    </div>
                    <span>25</span>
                    <span>$2,922.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Orders Table - Responsive */}
          <div className="bg-white p-4 rounded-lg shadow-sm overflow-x-auto">
            <div className="flex justify-between mb-4">
              <h3 className="text-gray-500">Recent orders</h3>
              <button className="text-gray-400">•••</button>
            </div>
            
            <div className="min-w-full overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-500 border-b">
                    <th className="pb-2 text-left font-medium">No.</th>
                    <th className="pb-2 text-left font-medium hidden md:table-cell">Date</th>
                    <th className="pb-2 text-left font-medium">Date</th>
                    <th className="pb-2 text-left font-medium">Customer</th>
                    <th className="pb-2 text-left font-medium hidden sm:table-cell">Items</th>
                    <th className="pb-2 text-left font-medium">Paid</th>
                    <th className="pb-2 text-left font-medium">Status</th>
                    <th className="pb-2 text-left font-medium">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">#00745</td>
                    <td className="hidden md:table-cell">2022-12-23</td>
                    <td>2022-12-23</td>
                    <td>Quilveer Casti</td>
                    <td className="hidden sm:table-cell">2 items</td>
                    <td><span className="px-2 py-1 bg-green-100 text-green-600 rounded-md text-xs">Yes</span></td>
                    <td><span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-md text-xs">Pending</span></td>
                    <td>$2,142.00</td>
                  </tr>
                  
                  <tr className="border-b border-gray-100">
                    <td className="py-3">#00321</td>
                    <td className="hidden md:table-cell">2022-11-25</td>
                    <td>2022-11-25</td>
                    <td>Hale Jonsen</td>
                    <td className="hidden sm:table-cell">11 items</td>
                    <td><span className="px-2 py-1 bg-red-100 text-red-600 rounded-md text-xs">No</span></td>
                    <td><span className="px-2 py-1 bg-green-100 text-green-600 rounded-md text-xs">Complete</span></td>
                    <td>$1,244.00</td>
                  </tr>
                  
                  <tr className="border-b border-gray-100">
                    <td className="py-3">#00114</td>
                    <td className="hidden md:table-cell">2022-10-22</td>
                    <td>2022-10-22</td>
                    <td>Vert Lock</td>
                    <td className="hidden sm:table-cell">3 items</td>
                    <td><span className="px-2 py-1 bg-red-100 text-red-600 rounded-md text-xs">No</span></td>
                    <td><span className="px-2 py-1 bg-green-100 text-green-600 rounded-md text-xs">Complete</span></td>
                    <td>$1,039.00</td>
                  </tr>
                  
                  <tr className="border-b border-gray-100">
                    <td className="py-3">#00422</td>
                    <td className="hidden md:table-cell">2022-09-17</td>
                    <td>2022-09-17</td>
                    <td>Thortin Odi</td>
                    <td className="hidden sm:table-cell">4 items</td>
                    <td><span className="px-2 py-1 bg-red-100 text-red-600 rounded-md text-xs">No</span></td>
                    <td><span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-md text-xs">Cancel</span></td>
                    <td>$750.00</td>
                  </tr>
                  
                  <tr className="border-b border-gray-100">
                    <td className="py-3">#00332</td>
                    <td className="hidden md:table-cell">2022-08-12</td>
                    <td>2022-08-12</td>
                    <td>Thor Odinson</td>
                    <td className="hidden sm:table-cell">9 items</td>
                    <td><span className="px-2 py-1 bg-green-100 text-green-600 rounded-md text-xs">Yes</span></td>
                    <td><span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded-md text-xs">Hold</span></td>
                    <td>$825.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;