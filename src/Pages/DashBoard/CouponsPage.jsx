import { useState } from 'react';
import { Tag, Plus, Search, Filter, ArrowUpDown, Edit, Trash2, ChevronDown } from 'lucide-react';

// Sample coupons data
const coupons = [
  {
    id: "SUMMER2025",
    description: "Summer Sale Discount",
    type: "Percentage",
    value: "15%",
    minPurchase: "$50.00",
    maxUses: 500,
    usedCount: 217,
    startDate: "2025-05-01",
    endDate: "2025-06-30",
    status: "Active"
  },
  {
    id: "WELCOME20",
    description: "New Customer Discount",
    type: "Percentage",
    value: "20%",
    minPurchase: "$25.00",
    maxUses: 1000,
    usedCount: 642,
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    status: "Active"
  },
  {
    id: "FREESHIP",
    description: "Free Shipping",
    type: "Fixed",
    value: "$9.99",
    minPurchase: "$75.00",
    maxUses: 300,
    usedCount: 189,
    startDate: "2025-04-15",
    endDate: "2025-05-15",
    status: "Active"
  },
  {
    id: "FLASH50",
    description: "Flash Sale",
    type: "Percentage",
    value: "50%",
    minPurchase: "$100.00",
    maxUses: 100,
    usedCount: 100,
    startDate: "2025-04-10",
    endDate: "2025-04-12",
    status: "Expired"
  },
  {
    id: "LOYALTY10",
    description: "Loyalty Program Discount",
    type: "Percentage",
    value: "10%",
    minPurchase: "$0.00",
    maxUses: null,
    usedCount: 823,
    startDate: "2025-03-01",
    endDate: "2025-12-31",
    status: "Active"
  },
  {
    id: "BIRTHDAY25",
    description: "Birthday Discount",
    type: "Percentage",
    value: "25%",
    minPurchase: "$0.00",
    maxUses: null,
    usedCount: 156,
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    status: "Active"
  },
  {
    id: "BUNDLE15",
    description: "Bundle Discount",
    type: "Percentage",
    value: "15%",
    minPurchase: "$150.00",
    maxUses: 200,
    usedCount: 67,
    startDate: "2025-05-01",
    endDate: "2025-07-31",
    status: "Scheduled"
  }
];

// Status filters
const statusFilters = ["All Coupons", "Active", "Scheduled", "Expired"];

const CouponsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Coupons");
  const [sortOrder, setSortOrder] = useState({ field: "id", ascending: true });
  
  // Filter coupons based on search term and status
  const filteredCoupons = coupons.filter(coupon => {
    const matchesSearch = coupon.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         coupon.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All Coupons" || coupon.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Sort coupons based on current sort order
  const sortedCoupons = [...filteredCoupons].sort((a, b) => {
    if (sortOrder.field === "id") {
      return sortOrder.ascending 
        ? a.id.localeCompare(b.id)
        : b.id.localeCompare(a.id);
    } else if (sortOrder.field === "usedCount") {
      return sortOrder.ascending 
        ? a.usedCount - b.usedCount
        : b.usedCount - a.usedCount;
    }
    return 0;
  });

  // Handle sorting when column header is clicked
  const handleSort = (field) => {
    if (sortOrder.field === field) {
      setSortOrder({ ...sortOrder, ascending: !sortOrder.ascending });
    } else {
      setSortOrder({ field, ascending: true });
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Tag size={24} className="mr-2 text-green-600" />
          <h1 className="text-xl font-semibold">Coupons</h1>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center">
          <Plus size={18} className="mr-1" /> Add Coupon
        </button>
      </div>

      {/* Coupon Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Active Coupons</p>
          <h3 className="text-2xl font-bold">5</h3>
          <div className="text-sm text-gray-500 mt-2">
            Total value: $1,250.00
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Redemption Rate</p>
          <h3 className="text-2xl font-bold">32.8%</h3>
          <div className="flex items-center text-sm mt-2">
            <span className="text-green-600">↑ 4.2%</span>
            <span className="text-gray-500 ml-1">vs last month</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Avg. Discount</p>
          <h3 className="text-2xl font-bold">$13.45</h3>
          <div className="flex items-center text-sm mt-2">
            <span className="text-green-600">↑ 1.8%</span>
            <span className="text-gray-500 ml-1">vs last month</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Total Savings</p>
          <h3 className="text-2xl font-bold">$28,742</h3>
          <div className="text-sm text-gray-500 mt-2">
            Lifetime coupon savings
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-auto md:flex-1">
            <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search coupons" 
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center w-full md:w-auto gap-3">
            <div className="relative w-full md:w-auto">
              <Filter size={16} className="absolute left-3 top-3 text-gray-400" />
              <select
                className="pl-10 pr-8 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 appearance-none bg-white w-full md:w-auto"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                {statusFilters.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
              <div className="absolute right-3 top-3 pointer-events-none">
                <ChevronDown size={16} />
              </div>
            </div>

            <div className="relative w-full md:w-auto">
              <select
                className="pl-4 pr-8 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 appearance-none bg-white w-full md:w-auto"
              >
                <option>All Types</option>
                <option>Percentage</option>
                <option>Fixed</option>
                <option>Free Shipping</option>
              </select>
              <div className="absolute right-3 top-3 pointer-events-none">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coupons Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("id")}>
                    Code
                    <ArrowUpDown size={14} className="ml-1" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Description</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Type/Value</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Min. Purchase</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("usedCount")}>
                    Usage
                    <ArrowUpDown size={14} className="ml-1" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Validity</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedCoupons.map((coupon) => (
                <tr key={coupon.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-mono font-medium">{coupon.id}</td>
                  <td className="py-3 px-4 text-gray-600">{coupon.description}</td>
                  <td className="py-3 px-4">
                    <div>
                      <span className="text-xs text-gray-500">{coupon.type}</span>
                      <div className="font-medium">{coupon.value}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{coupon.minPurchase}</td>
                  <td className="py-3 px-4">
                    <div>
                      <span className="font-medium">{coupon.usedCount}</span>
                      {coupon.maxUses && (
                        <span className="text-gray-500"> / {coupon.maxUses}</span>
                      )}
                    </div>
                    {coupon.maxUses && (
                      <div className="w-full bg-gray-100 rounded-full h-1 mt-1">
                        <div 
                          className="bg-green-600 h-1 rounded-full" 
                          style={{ width: `${(coupon.usedCount / coupon.maxUses) * 100}%` }}
                        ></div>
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-4 text-gray-600">
                    <div className="text-xs">
                      <div>From: {coupon.startDate}</div>
                      <div>To: {coupon.endDate}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      coupon.status === 'Active' 
                        ? 'bg-green-100 text-green-600' 
                        : coupon.status === 'Expired'
                          ? 'bg-red-100 text-red-600'
                          : 'bg-blue-100 text-blue-600'
                    }`}>
                      {coupon.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-500 hover:text-blue-600">
                        <Edit size={16} />
                      </button>
                      <button className="text-gray-500 hover:text-red-600">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Showing 1-{sortedCoupons.length} of {sortedCoupons.length} coupons
          </div>
          <div className="flex items-center space-x-1">
            <button className="px-3 py-1 rounded bg-white border border-gray-300 text-sm disabled:opacity-50">
              Previous
            </button>
            <button className="px-3 py-1 rounded bg-green-600 text-white text-sm">1</button>
            <button className="px-3 py-1 rounded bg-white border border-gray-300 text-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponsPage;