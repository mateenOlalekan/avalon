import { useState } from 'react';
import { 
  BarChart2, 
  ChevronDown, 
  ArrowUpDown, 
  ShoppingBag,
  Tag,
  User,
  Package
} from 'lucide-react';


// Sample data for charts
const monthlyRevenue = [
  { month: 'Jan', revenue: 12500 },
  { month: 'Feb', revenue: 15000 },
  { month: 'Mar', revenue: 18000 },
  { month: 'Apr', revenue: 16500 },
  { month: 'May', revenue: 21000 },
  { month: 'Jun', revenue: 19500 },
  { month: 'Jul', revenue: 22000 },
  { month: 'Aug', revenue: 25000 },
  { month: 'Sep', revenue: 23500 },
  { month: 'Oct', revenue: 26000 },
  { month: 'Nov', revenue: 24500 },
  { month: 'Dec', revenue: 28000 }
];

const productCategories = [
  { category: 'Electronics', sales: 34, percentage: 42 },
  { category: 'Clothing', sales: 21, percentage: 26 },
  { category: 'Furniture', sales: 15, percentage: 18 },
  { category: 'Others', sales: 11, percentage: 14 }
];

const customerData = [
  { metric: 'New Customers', count: 356, change: '+12.5%', trend: 'up' },
  { metric: 'Active Users', count: 1247, change: '+18.2%', trend: 'up' },
  { metric: 'Returning Rate', count: '64%', change: '+3.8%', trend: 'up' },
  { metric: 'Churn Rate', count: '3.2%', change: '-1.4%', trend: 'down' }
];

const trafficSources = [
  { source: 'Direct', visitors: 4200, percentage: 35 },
  { source: 'Organic Search', visitors: 3100, percentage: 26 },
  { source: 'Social Media', visitors: 2300, percentage: 19 },
  { source: 'Referral', visitors: 1500, percentage: 13 },
  { source: 'Email', visitors: 900, percentage: 7 }
];

const deviceUsage = [
  { device: 'Mobile', percentage: 58 },
  { device: 'Desktop', percentage: 34 },
  { device: 'Tablet', percentage: 8 }
];

const AnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState('Last 30 days');
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <BarChart2 size={24} className="mr-2 text-green-600" />
          <h1 className="text-xl font-semibold">Analytics</h1>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <select
              className="pl-4 pr-8 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 appearance-none bg-white"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>This year</option>
            </select>
            <div className="absolute right-3 top-3 pointer-events-none">
              <ChevronDown size={16} />
            </div>
          </div>
          
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md">
            Export Report
          </button>
        </div>
      </div>
      
      {/* Analytics Navigation */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="flex overflow-x-auto scrollbar-hide">
          <button 
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
              activeTab === 'overview' 
                ? 'text-green-600 border-b-2 border-green-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
              activeTab === 'revenue' 
                ? 'text-green-600 border-b-2 border-green-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('revenue')}
          >
            Revenue
          </button>
          <button 
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
              activeTab === 'products' 
                ? 'text-green-600 border-b-2 border-green-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('products')}
          >
            <div className="flex items-center">
              <ShoppingBag size={16} className="mr-1" />
              Products
            </div>
          </button>
          <button 
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
              activeTab === 'inventory' 
                ? 'text-green-600 border-b-2 border-green-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('inventory')}
          >
            <div className="flex items-center">
              <Tag size={16} className="mr-1" />
              Inventory
            </div>
          </button>
          <button 
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
              activeTab === 'customers' 
                ? 'text-green-600 border-b-2 border-green-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('customers')}
          >
            <div className="flex items-center">
              <User size={16} className="mr-1" />
              Customers
            </div>
          </button>
        </div>
      </div>
      
      {/* Overview Dashboard */}
      {activeTab === 'overview' && (
        <>
          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
              <h3 className="text-2xl font-bold">$87,561</h3>
              <div className="flex items-center text-sm mt-2">
                <span className="text-green-600">↑ 16.4%</span>
                <span className="text-gray-500 ml-1">vs previous period</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500 mb-1">Conversion Rate</p>
              <h3 className="text-2xl font-bold">3.42%</h3>
              <div className="flex items-center text-sm mt-2">
                <span className="text-green-600">↑ 0.8%</span>
                <span className="text-gray-500 ml-1">vs previous period</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500 mb-1">Avg. Order Value</p>
              <h3 className="text-2xl font-bold">$124.32</h3>
              <div className="flex items-center text-sm mt-2">
                <span className="text-red-600">↓ 2.3%</span>
                <span className="text-gray-500 ml-1">vs previous period</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500 mb-1">Total Orders</p>
              <h3 className="text-2xl font-bold">1,247</h3>
              <div className="flex items-center text-sm mt-2">
                <span className="text-green-600">↑ 12.2%</span>
                <span className="text-gray-500 ml-1">vs previous period</span>
              </div>
            </div>
          </div>
          
          {/* Revenue Chart */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <div className="flex justify-between mb-4">
              <h3 className="font-medium">Revenue Trend</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full">Revenue</button>
                <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">Orders</button>
              </div>
            </div>
            
            <div className="h-64 flex items-end space-x-4 pb-4 border-b border-gray-100">
              {monthlyRevenue.map((item) => (
                <div key={item.month} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-green-600 rounded-sm hover:bg-green-700 transition-colors"
                    style={{ height: `${(item.revenue / 30000) * 200}px` }}
                  ></div>
                  <span className="text-xs text-gray-500 mt-2">{item.month}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Two-column metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Top Products */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Top Selling Products</h3>
                <button className="text-sm text-green-600 hover:underline">View All</button>
              </div>
              
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-gray-500 text-left text-sm">
                      <th className="pb-2 font-medium">Product</th>
                      <th className="pb-2 font-medium">Sold</th>
                      <th className="pb-2 font-medium">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <Package size={16} className="text-gray-500" />
                          </div>
                          <span className="ml-2 font-medium text-sm">Wireless Headphones</span>
                        </div>
                      </td>
                      <td className="text-sm">142 units</td>
                      <td className="text-sm font-medium">$14,384</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <Package size={16} className="text-gray-500" />
                          </div>
                          <span className="ml-2 font-medium text-sm">Smartphone Charger</span>
                        </div>
                      </td>
                      <td className="text-sm">124 units</td>
                      <td className="text-sm font-medium">$8,245</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <Package size={16} className="text-gray-500" />
                          </div>
                          <span className="ml-2 font-medium text-sm">Laptop Sleeve</span>
                        </div>
                      </td>
                      <td className="text-sm">98 units</td>
                      <td className="text-sm font-medium">$7,384</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <Package size={16} className="text-gray-500" />
                          </div>
                          <span className="ml-2 font-medium text-sm">Bluetooth Speaker</span>
                        </div>
                      </td>
                      <td className="text-sm">87 units</td>
                      <td className="text-sm font-medium">$6,124</td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <Package size={16} className="text-gray-500" />
                          </div>
                          <span className="ml-2 font-medium text-sm">Wireless Mouse</span>
                        </div>
                      </td>
                      <td className="text-sm">76 units</td>
                      <td className="text-sm font-medium">$4,572</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Traffic Sources */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Traffic Sources</h3>
                <button className="text-sm text-green-600 hover:underline">View Details</button>
              </div>
              
              <div className="space-y-4">
                {trafficSources.map((source) => (
                  <div key={source.source}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{source.source}</span>
                      <span className="font-medium">{source.visitors.toLocaleString()} visitors</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${source.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-3">Device Breakdown</h4>
                <div className="flex">
                  {deviceUsage.map((device) => (
                    <div 
                      key={device.device}
                      className="flex-1 text-center py-2"
                      style={{ 
                        backgroundColor: 
                          device.device === 'Mobile' ? '#dcfce7' :
                          device.device === 'Desktop' ? '#e0f2fe' : '#fef3c7'
                      }}
                    >
                      <p className="text-sm font-medium">{device.device}</p>
                      <p className="text-lg font-bold">{device.percentage}%</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      
      {/* Placeholder content for other tabs */}
      {activeTab !== 'overview' && (
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <h3 className="text-xl font-medium mb-2">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Analytics
          </h3>
          <p className="text-gray-500 mb-4">
            Detailed {activeTab} metrics and reports will be displayed here
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md">
            Generate {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Report
          </button>
        </div>
      )}
    </>
  );
};

export default AnalyticsPage;