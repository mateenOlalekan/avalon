
import { useState } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import { 
  Search, Bell, ChevronDown, Menu, ShoppingBag, User,  
  BarChart2, MessageSquare, Settings, Package, Tag, Grid, LogOut, X 
} from 'lucide-react';

const App = () => {
  return (
    
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/products" element={<ProductsPage />} />
        <Route path="/dashboard/customers" element={<CustomersPage />} />
        <Route path="/dashboard/analytics" element={<AnalyticsPage />} />
        <Route path="/dashboard/orders" element={<OrdersPage />} />
        <Route path="/dashboard/coupons" element={<CouponsPage />} />
        <Route path="/dashboard/chats" element={<ChatsPage />} />
        <Route path="/dashboard/integrations" element={<IntegrationsPage />} />
        <Route path="/dashboard/settings" element={<SettingsPage />} />
      </Routes>
    
  );
};

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
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
          <Link 
            to="/" 
            className={`flex items-center w-full p-3 rounded-lg ${isActive('/') ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <Grid size={18} className="mr-3" />
            <span>Dashboard</span>
          </Link>
          
          <Link 
            to="/products" 
            className={`flex items-center w-full p-3 rounded-lg ${isActive('/products') ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <Package size={18} className="mr-3" />
            <span>Products</span>
          </Link>
          
          <Link 
            to="/customers" 
            className={`flex items-center w-full p-3 rounded-lg ${isActive('/customers') ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <User size={18} className="mr-3" />
            <span>Customers</span>
          </Link>
          
          <Link 
            to="/analytics" 
            className={`flex items-center w-full p-3 rounded-lg ${isActive('/analytics') ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <BarChart2 size={18} className="mr-3" />
            <span>Analytics</span>
          </Link>
          
          <Link 
            to="/orders" 
            className={`flex items-center w-full p-3 rounded-lg ${isActive('/orders') ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <ShoppingBag size={18} className="mr-3" />
            <span>Orders</span>
          </Link>
          
          <Link 
            to="/coupons" 
            className={`flex items-center w-full p-3 rounded-lg ${isActive('/coupons') ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <Tag size={18} className="mr-3" />
            <span>Coupons</span>
          </Link>
          
          <Link 
            to="/chats" 
            className={`flex items-center w-full p-3 rounded-lg ${isActive('/chats') ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <MessageSquare size={18} className="mr-3" />
            <span>Chats</span>
            <div className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center ml-auto">
              <span className="text-xs">4</span>
            </div>
          </Link>
        </div>
        
        <p className="text-xs text-gray-400 ml-2 mt-8 mb-2">OTHER</p>
        
        <div className="space-y-1">
          <Link 
            to="/integrations" 
            className={`flex items-center w-full p-3 rounded-lg ${isActive('/integrations') ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <Grid size={18} className="mr-3" />
            <span>Integrations</span>
          </Link>
          
          <Link 
            to="/settings" 
            className={`flex items-center w-full p-3 rounded-lg ${isActive('/settings') ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <Settings size={18} className="mr-3" />
            <span>Settings</span>
          </Link>
          
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
                src="https://randomuser.me/api/portraits/men/32.jpg" 
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
        
        {/* Page Content */}
        <div className="p-4 md:p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <Layout>
      <h1 className="text-xl font-semibold mb-4">Dashboard Overview</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
        <StatCard 
          title="Sales total" 
          value="$2456" 
          change="↑ 20%" 
          changePositive={true}
          description="Compared to December 2021"
        />
        <StatCard 
          title="Average order value" 
          value="$372.98" 
          change="↑ 15%" 
          changePositive={true}
          description="Compared to December 2021"
        />
        <StatCard 
          title="Total orders" 
          value="678" 
          change="↑ 44%" 
          changePositive={true}
          description="Compared to December 2021"
        />
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
        <RevenueChart />
        <TrafficSourceChart />
      </div>
      
      {/* Recent Orders Table */}
      <RecentOrders />
    </Layout>
  );
};

const ProductsPage = () => {
  const products = [
    { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: '$99.99', stock: 45, sales: 120 },
    { id: 2, name: 'Leather Wallet', category: 'Accessories', price: '$49.99', stock: 78, sales: 85 },
    { id: 3, name: 'Smart Watch', category: 'Electronics', price: '$199.99', stock: 23, sales: 156 },
    { id: 4, name: 'Cotton T-Shirt', category: 'Clothing', price: '$24.99', stock: 112, sales: 210 },
    { id: 5, name: 'Running Shoes', category: 'Footwear', price: '$89.99', stock: 34, sales: 92 },
    { id: 6, name: 'Coffee Mug', category: 'Home', price: '$14.99', stock: 200, sales: 310 },
    { id: 7, name: 'Bluetooth Speaker', category: 'Electronics', price: '$79.99', stock: 18, sales: 67 },
    { id: 8, name: 'Backpack', category: 'Accessories', price: '$59.99', stock: 42, sales: 78 },
  ];

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Products</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
          Add Product
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 flex justify-between items-center border-b">
          <div className="relative flex-grow max-w-md">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="pl-10 pr-4 py-2 rounded-lg bg-gray-50 focus:outline-none w-full"
            />
          </div>
          <div className="flex items-center ml-4">
            <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Accessories</option>
              <option>Footwear</option>
              <option>Home</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="pb-3 text-left font-medium pl-4">Product</th>
                <th className="pb-3 text-left font-medium">Category</th>
                <th className="pb-3 text-left font-medium">Price</th>
                <th className="pb-3 text-left font-medium">Stock</th>
                <th className="pb-3 text-left font-medium">Sales</th>
                <th className="pb-3 text-right font-medium pr-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 pl-4">{product.name}</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                      {product.category}
                    </span>
                  </td>
                  <td className="py-3">{product.price}</td>
                  <td className="py-3">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-1.5 mr-2">
                        <div 
                          className="bg-green-500 h-1.5 rounded-full" 
                          style={{ width: `${(product.stock / 200) * 100}%` }}
                        ></div>
                      </div>
                      {product.stock}
                    </div>
                  </td>
                  <td className="py-3">{product.sales}</td>
                  <td className="py-3 pr-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 flex justify-between items-center border-t">
          <div className="text-sm text-gray-500">
            Showing 1 to 8 of 8 entries
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-sm disabled">Previous</button>
            <button className="px-3 py-1 bg-green-600 text-white rounded-md text-sm">1</button>
            <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-sm disabled">Next</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const CustomersPage = () => {
  const customers = [
    { id: 1, name: 'John Smith', email: 'john@example.com', phone: '(123) 456-7890', orders: 5, spent: '$1,245.00', joined: '2022-01-15' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', phone: '(234) 567-8901', orders: 12, spent: '$3,421.00', joined: '2021-11-22' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', phone: '(345) 678-9012', orders: 8, spent: '$2,156.00', joined: '2022-03-05' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', phone: '(456) 789-0123', orders: 3, spent: '$876.00', joined: '2022-05-18' },
    { id: 5, name: 'Robert Wilson', email: 'robert@example.com', phone: '(567) 890-1234', orders: 7, spent: '$1,932.00', joined: '2021-09-30' },
  ];

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Customers</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
          Add Customer
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 flex justify-between items-center border-b">
          <div className="relative flex-grow max-w-md">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search customers..." 
              className="pl-10 pr-4 py-2 rounded-lg bg-gray-50 focus:outline-none w-full"
            />
          </div>
          <div className="flex items-center ml-4">
            <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm">
              <option>All Customers</option>
              <option>New</option>
              <option>Returning</option>
              <option>High Value</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="pb-3 text-left font-medium pl-4">Customer</th>
                <th className="pb-3 text-left font-medium">Contact</th>
                <th className="pb-3 text-left font-medium">Orders</th>
                <th className="pb-3 text-left font-medium">Total Spent</th>
                <th className="pb-3 text-left font-medium">Joined</th>
                <th className="pb-3 text-right font-medium pr-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map(customer => (
                <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 pl-4">
                    <div className="flex items-center">
                      <img 
                        src={`https://randomuser.me/api/portraits/men/${customer.id}.jpg`} 
                        alt={customer.name} 
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      {customer.name}
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="text-gray-600">{customer.email}</div>
                    <div className="text-xs text-gray-400">{customer.phone}</div>
                  </td>
                  <td className="py-3">{customer.orders}</td>
                  <td className="py-3">{customer.spent}</td>
                  <td className="py-3">{customer.joined}</td>
                  <td className="py-3 pr-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 flex justify-between items-center border-t">
          <div className="text-sm text-gray-500">
            Showing 1 to 5 of 5 entries
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-sm disabled">Previous</button>
            <button className="px-3 py-1 bg-green-600 text-white rounded-md text-sm">1</button>
            <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-sm disabled">Next</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const AnalyticsPage = () => {
  return (
    <Layout>
      <h1 className="text-xl font-semibold mb-4">Analytics</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between mb-4">
            <h3 className="text-gray-500">Sales Overview</h3>
            <select className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>This year</option>
            </select>
          </div>
          
          <div className="h-64">
            {/* Placeholder for chart */}
            <div className="flex items-center justify-center h-full bg-gray-50 rounded-lg">
              <p className="text-gray-400">Sales chart will be displayed here</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between mb-4">
            <h3 className="text-gray-500">Top Products</h3>
            <select className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 text-sm">
              <option>By Revenue</option>
              <option>By Units Sold</option>
              <option>By Profit</option>
            </select>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'Wireless Headphones', value: 45, percent: 45, color: 'bg-green-500' },
              { name: 'Smart Watch', value: 30, percent: 30, color: 'bg-blue-500' },
              { name: 'Running Shoes', value: 15, percent: 15, color: 'bg-yellow-500' },
              { name: 'Leather Wallet', value: 10, percent: 10, color: 'bg-purple-500' },
            ].map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${item.color} h-2 rounded-full`} 
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
        <StatCard 
          title="Conversion Rate" 
          value="3.2%" 
          change="↑ 0.5%" 
          changePositive={true}
          description="Compared to last month"
        />
        <StatCard 
          title="Avg. Session Duration" 
          value="4m 12s" 
          change="↓ 0.8%" 
          changePositive={false}
          description="Compared to last month"
        />
        <StatCard 
          title="Returning Customers" 
          value="42%" 
          change="↑ 5.2%" 
          changePositive={true}
          description="Compared to last month"
        />
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex justify-between mb-4">
          <h3 className="text-gray-500">Traffic Sources</h3>
          <select className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 text-sm">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
        
        <div className="h-64">
          {/* Placeholder for chart */}
          <div className="flex items-center justify-center h-full bg-gray-50 rounded-lg">
            <p className="text-gray-400">Traffic sources chart will be displayed here</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const OrdersPage = () => {
  const orders = [
    { id: '#00745', date: '2022-12-23', customer: 'Quilveer Casti', items: 2, paid: true, status: 'Pending', total: '$2,142.00' },
    { id: '#00321', date: '2022-11-25', customer: 'Hale Jonsen', items: 11, paid: false, status: 'Complete', total: '$1,244.00' },
    { id: '#00114', date: '2022-10-22', customer: 'Vert Lock', items: 3, paid: false, status: 'Complete', total: '$1,039.00' },
    { id: '#00422', date: '2022-09-17', customer: 'Thortin Odi', items: 4, paid: false, status: 'Cancelled', total: '$750.00' },
    { id: '#00332', date: '2022-08-12', customer: 'Thor Odinson', items: 9, paid: true, status: 'Hold', total: '$825.00' },
    { id: '#00211', date: '2022-07-05', customer: 'Jane Smith', items: 1, paid: true, status: 'Complete', total: '$99.99' },
    { id: '#00567', date: '2022-06-28', customer: 'Mike Johnson', items: 5, paid: true, status: 'Shipped', total: '$456.50' },
    { id: '#00678', date: '2022-05-15', customer: 'Sarah Williams', items: 2, paid: true, status: 'Complete', total: '$210.00' },
  ];

  const statusClasses = {
    'Pending': 'bg-blue-100 text-blue-600',
    'Complete': 'bg-green-100 text-green-600',
    'Cancelled': 'bg-orange-100 text-orange-600',
    'Hold': 'bg-yellow-100 text-yellow-600',
    'Shipped': 'bg-purple-100 text-purple-600'
  };

  const paidClasses = {
    true: 'bg-green-100 text-green-600',
    false: 'bg-red-100 text-red-600'
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Orders</h1>
        <div className="flex space-x-2">
          <button className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm">
            Export
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
            Create Order
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 flex justify-between items-center border-b">
          <div className="relative flex-grow max-w-md">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search orders..." 
              className="pl-10 pr-4 py-2 rounded-lg bg-gray-50 focus:outline-none w-full"
            />
          </div>
          <div className="flex items-center space-x-2 ml-4">
            <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm">
              <option>All Status</option>
              <option>Pending</option>
              <option>Complete</option>
              <option>Cancelled</option>
              <option>Hold</option>
            </select>
            <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm">
              <option>Last 30 days</option>
              <option>Today</option>
              <option>Last 7 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="pb-3 text-left font-medium pl-4">Order</th>
                <th className="pb-3 text-left font-medium">Date</th>
                <th className="pb-3 text-left font-medium">Customer</th>
                <th className="pb-3 text-left font-medium">Items</th>
                <th className="pb-3 text-left font-medium">Paid</th>
                <th className="pb-3 text-left font-medium">Status</th>
                <th className="pb-3 text-left font-medium">Total</th>
                <th className="pb-3 text-right font-medium pr-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 pl-4">{order.id}</td>
                  <td className="py-3">{order.date}</td>
                  <td className="py-3">{order.customer}</td>
                  <td className="py-3">{order.items}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-md text-xs ${paidClasses[order.paid]}`}>
                      {order.paid ? 'Yes' : 'No'}
                    </span>
                  </td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-md text-xs ${statusClasses[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3">{order.total}</td>
                  <td className="py-3 pr-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 flex justify-between items-center border-t">
          <div className="text-sm text-gray-500">
            Showing 1 to 8 of 8 entries
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-sm disabled">Previous</button>
            <button className="px-3 py-1 bg-green-600 text-white rounded-md text-sm">1</button>
            <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-sm disabled">Next</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const CouponsPage = () => {
  const coupons = [
    { code: 'SUMMER20', discount: '20%', type: 'Percentage', minOrder: '$50', uses: '45/100', startDate: '2022-06-01', endDate: '2022-08-31', status: 'Active' },
    { code: 'FREESHIP', discount: 'Free', type: 'Shipping', minOrder: '$100', uses: '12/50', startDate: '2022-07-15', endDate: '2022-07-31', status: 'Active' },
    { code: 'SAVE10', discount: '$10', type: 'Fixed', minOrder: '$75', uses: '89/200', startDate: '2022-05-01', endDate: '2022-12-31', status: 'Active' },
    { code: 'WELCOME15', discount: '15%', type: 'Percentage', minOrder: '$25', uses: '120/∞', startDate: '2022-01-01', endDate: '2022-12-31', status: 'Active' },
    { code: 'FLASH30', discount: '30%', type: 'Percentage', minOrder: '$100', uses: '0/50', startDate: '2022-08-01', endDate: '2022-08-07', status: 'Scheduled' },
    { code: 'HOLIDAY25', discount: '25%', type: 'Percentage', minOrder: '$75', uses: '65/65', startDate: '2021-12-01', endDate: '2021-12-25', status: 'Expired' },
  ];

  const statusClasses = {
    'Active': 'bg-green-100 text-green-600',
    'Scheduled': 'bg-blue-100 text-blue-600',
    'Expired': 'bg-gray-100 text-gray-600'
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Coupons</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
          Create Coupon
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 flex justify-between items-center border-b">
          <div className="relative flex-grow max-w-md">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search coupons..." 
              className="pl-10 pr-4 py-2 rounded-lg bg-gray-50 focus:outline-none w-full"
            />
          </div>
          <div className="flex items-center ml-4">
            <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm">
              <option>All Status</option>
              <option>Active</option>
              <option>Scheduled</option>
              <option>Expired</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="pb-3 text-left font-medium pl-4">Code</th>
                <th className="pb-3 text-left font-medium">Discount</th>
                <th className="pb-3 text-left font-medium">Type</th>
                <th className="pb-3 text-left font-medium">Min. Order</th>
                <th className="pb-3 text-left font-medium">Uses</th>
                <th className="pb-3 text-left font-medium">Dates</th>
                <th className="pb-3 text-left font-medium">Status</th>
                <th className="pb-3 text-right font-medium pr-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((coupon, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 pl-4 font-medium">{coupon.code}</td>
                  <td className="py-3">{coupon.discount}</td>
                  <td className="py-3">{coupon.type}</td>
                  <td className="py-3">{coupon.minOrder}</td>
                  <td className="py-3">{coupon.uses}</td>
                  <td className="py-3">
                    <div className="text-gray-600">{coupon.startDate}</div>
                    <div className="text-xs text-gray-400">to {coupon.endDate}</div>
                  </td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-md text-xs ${statusClasses[coupon.status]}`}>
                      {coupon.status}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 flex justify-between items-center border-t">
          <div className="text-sm text-gray-500">
            Showing 1 to 6 of 6 entries
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-sm disabled">Previous</button>
            <button className="px-3 py-1 bg-green-600 text-white rounded-md text-sm">1</button>
            <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-sm disabled">Next</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const ChatsPage = () => {
  const conversations = [
    { id: 1, name: 'John Smith', lastMessage: 'Hey, when will my order arrive?', time: '10:30 AM', unread: true, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Sarah Johnson', lastMessage: 'Thanks for your help!', time: 'Yesterday', unread: false, avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, name: 'Michael Brown', lastMessage: 'I have a question about my order', time: 'Yesterday', unread: true, avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 4, name: 'Emily Davis', lastMessage: 'The product looks great!', time: '7/15/22', unread: false, avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 5, name: 'Robert Wilson', lastMessage: 'Can I change my shipping address?', time: '7/14/22', unread: false, avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
  ];

  return (
    <Layout>
      <h1 className="text-xl font-semibold mb-4">Chats</h1>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="pl-10 pr-4 py-2 rounded-lg bg-gray-50 focus:outline-none w-full"
            />
          </div>
        </div>
        
        <div className="divide-y divide-gray-100">
          {conversations.map(conversation => (
            <div key={conversation.id} className={`p-4 flex items-center hover:bg-gray-50 cursor-pointer ${conversation.unread ? 'bg-blue-50' : ''}`}>
              <img 
                src={conversation.avatar} 
                alt={conversation.name} 
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <h3 className={`text-sm font-medium truncate ${conversation.unread ? 'text-blue-600' : 'text-gray-800'}`}>
                    {conversation.name}
                  </h3>
                  <span className="text-xs text-gray-500">{conversation.time}</span>
                </div>
                <p className={`text-sm truncate ${conversation.unread ? 'font-medium text-gray-800' : 'text-gray-500'}`}>
                  {conversation.lastMessage}
                </p>
              </div>
              {conversation.unread && (
                <div className="ml-2 bg-blue-500 rounded-full w-2 h-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Chat Window - Placeholder */}
      <div className="mt-6 bg-white rounded-lg shadow-sm p-4 h-96 flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <MessageSquare size={24} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-700">Select a conversation</h3>
          <p className="text-gray-500 mt-1">Choose a chat from the list to start messaging</p>
        </div>
      </div>
    </Layout>
  );
};

const IntegrationsPage = () => {
  const integrations = [
    { name: 'Shopify', connected: true, description: 'Sync your Shopify store with our platform', logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
    { name: 'Mailchimp', connected: false, description: 'Email marketing automation service', logo: 'https://cdn.worldvectorlogo.com/logos/mailchimp.svg' },
    { name: 'Stripe', connected: true, description: 'Online payment processing for internet businesses', logo: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg' },
    { name: 'Zapier', connected: false, description: 'Automate workflows between apps', logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg' },
    { name: 'QuickBooks', connected: false, description: 'Accounting software for small businesses', logo: 'https://cdn.worldvectorlogo.com/logos/quickbooks.svg' },
    { name: 'Slack', connected: false, description: 'Team communication and collaboration', logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg' },
  ];

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Integrations</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
          Request Integration
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {integrations.map((integration, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center mb-4">
              <img 
                src={integration.logo} 
                alt={integration.name} 
                className="w-10 h-10 object-contain mr-3"
              />
              <h3 className="text-lg font-medium">{integration.name}</h3>
            </div>
            <p className="text-gray-500 text-sm mb-4">{integration.description}</p>
            <button 
              className={`w-full py-2 rounded-lg text-sm ${integration.connected ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {integration.connected ? 'Connected' : 'Connect'}
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

const SettingsPage = () => {
  return (
    <Layout>
      <h1 className="text-xl font-semibold mb-6">Settings</h1>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button className="py-4 px-6 border-b-2 border-green-500 font-medium text-sm text-green-600">
              General
            </button>
            <button className="py-4 px-6 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
              Payments
            </button>
            <button className="py-4 px-6 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
              Shipping
            </button>
            <button className="py-4 px-6 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
              Taxes
            </button>
            <button className="py-4 px-6 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
              Notifications
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          <h2 className="text-lg font-medium mb-6">General Settings</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Store Name</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" 
                defaultValue="Ex Com Store"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Store Description</label>
              <textarea 
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" 
                defaultValue="Premium products for everyone"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Store Logo</label>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                  <ShoppingBag size={24} className="text-gray-400" />
                </div>
                <button className="ml-4 bg-white border border-gray-300 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Change
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Store Currency</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
                <option>US Dollar (USD)</option>
                <option>Euro (EUR)</option>
                <option>British Pound (GBP)</option>
                <option>Japanese Yen (JPY)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
                <option>(UTC-05:00) Eastern Time (US & Canada)</option>
                <option>(UTC-08:00) Pacific Time (US & Canada)</option>
                <option>(UTC+00:00) Greenwich Mean Time</option>
                <option>(UTC+01:00) Central European Time</option>
              </select>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Reusable Components
const StatCard = ({ title, value, change, changePositive, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between mb-2">
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <button className="text-gray-400">•••</button>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{value}</h2>
        <div className={`text-sm ${changePositive ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-2">{description}</p>
    </div>
  );
};

const RevenueChart = () => {
  return (
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
  );
};

const TrafficSourceChart = () => {
  return (
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
  );
};

const RecentOrders = () => {
  return (
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
              <td>Quilveer Casti</td>
              <td className="hidden sm:table-cell">2 items</td>
              <td><span className="px-2 py-1 bg-green-100 text-green-600 rounded-md text-xs">Yes</span></td>
              <td><span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-md text-xs">Pending</span></td>
              <td>$2,142.00</td>
            </tr>
            
            <tr className="border-b border-gray-100">
              <td className="py-3">#00321</td>
              <td className="hidden md:table-cell">2022-11-25</td>
              <td>Hale Jonsen</td>
              <td className="hidden sm:table-cell">11 items</td>
              <td><span className="px-2 py-1 bg-red-100 text-red-600 rounded-md text-xs">No</span></td>
              <td><span className="px-2 py-1 bg-green-100 text-green-600 rounded-md text-xs">Complete</span></td>
              <td>$1,244.00</td>
            </tr>
            
            <tr className="border-b border-gray-100">
              <td className="py-3">#00114</td>
              <td className="hidden md:table-cell">2022-10-22</td>
              <td>Vert Lock</td>
              <td className="hidden sm:table-cell">3 items</td>
              <td><span className="px-2 py-1 bg-red-100 text-red-600 rounded-md text-xs">No</span></td>
              <td><span className="px-2 py-1 bg-green-100 text-green-600 rounded-md text-xs">Complete</span></td>
              <td>$1,039.00</td>
            </tr>
            
            <tr className="border-b border-gray-100">
              <td className="py-3">#00422</td>
              <td className="hidden md:table-cell">2022-09-17</td>
              <td>Thortin Odi</td>
              <td className="hidden sm:table-cell">4 items</td>
              <td><span className="px-2 py-1 bg-red-100 text-red-600 rounded-md text-xs">No</span></td>
              <td><span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-md text-xs">Cancel</span></td>
              <td>$750.00</td>
            </tr>
            
            <tr className="border-b border-gray-100">
              <td className="py-3">#00332</td>
              <td className="hidden md:table-cell">2022-08-12</td>
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
  );
};

export default App;
