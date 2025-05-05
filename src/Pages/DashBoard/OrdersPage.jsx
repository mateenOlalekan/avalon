import { useState } from 'react';
import { ShoppingBag, Search, Filter, ArrowUpDown, Eye, ChevronDown } from 'lucide-react';

const OrdersPage = () => {
  // Sample orders data
  const orders = [
    {
      id: "#ORD-001",
      date: "2023-05-01",
      customer: {
        name: "Emma Thompson",
        email: "emma.t@example.com",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      items: 3,
      total: 124.95,
      payment: "Credit Card",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-600"
    },
    {
      id: "#ORD-002",
      date: "2023-05-01",
      customer: {
        name: "Michael Scott",
        email: "mscott@example.com",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      items: 1,
      total: 49.99,
      payment: "PayPal",
      status: "Processing",
      statusColor: "bg-blue-100 text-blue-600"
    },
    {
      id: "#ORD-003",
      date: "2023-04-30",
      customer: {
        name: "Sarah Miller",
        email: "sarah.m@example.com",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      items: 5,
      total: 237.50,
      payment: "Credit Card",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-600"
    },
    {
      id: "#ORD-004",
      date: "2023-04-30",
      customer: {
        name: "James Wilson",
        email: "j.wilson@example.com",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      items: 2,
      total: 89.90,
      payment: "Apple Pay",
      status: "Shipped",
      statusColor: "bg-purple-100 text-purple-600"
    },
    {
      id: "#ORD-005",
      date: "2023-04-29",
      customer: {
        name: "Olivia Martinez",
        email: "olivia@example.com",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      items: 4,
      total: 156.80,
      payment: "Google Pay",
      status: "Processing",
      statusColor: "bg-blue-100 text-blue-600"
    },
    {
      id: "#ORD-006",
      date: "2023-04-29",
      customer: {
        name: "Daniel Brown",
        email: "dbrown@example.com",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      items: 1,
      total: 299.99,
      payment: "Credit Card",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-600"
    },
    {
      id: "#ORD-007",
      date: "2023-04-28",
      customer: {
        name: "Sophie Taylor",
        email: "sophie.t@example.com",
        avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      items: 3,
      total: 124.85,
      payment: "PayPal",
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-600"
    },
    {
      id: "#ORD-008",
      date: "2023-04-28",
      customer: {
        name: "Ryan Johnson",
        email: "ryan.j@example.com",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      items: 2,
      total: 79.98,
      payment: "Credit Card",
      status: "Returned",
      statusColor: "bg-orange-100 text-orange-600"
    },
    {
      id: "#ORD-009",
      date: "2023-04-27",
      customer: {
        name: "Emily Davis",
        email: "emily.d@example.com",
        avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      items: 6,
      total: 329.94,
      payment: "Apple Pay",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-600"
    },
    {
      id: "#ORD-010",
      date: "2023-04-27",
      customer: {
        name: "Alex Robinson",
        email: "alex.r@example.com",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      items: 1,
      total: 59.99,
      payment: "PayPal",
      status: "Processing",
      statusColor: "bg-blue-100 text-blue-600"
    }
  ];

  // Status filters
  const statusFilters = ["All Orders", "Processing", "Shipped", "Delivered", "Cancelled", "Returned"];

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Orders");
  const [sortOrder, setSortOrder] = useState({ field: 'date', ascending: false });

  // Filter orders based on search term and status
  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All Orders" || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Sort orders based on current sort order
  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (sortOrder.field === "date") {
      return sortOrder.ascending 
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortOrder.field === "total") {
      return sortOrder.ascending 
        ? a.total - b.total
        : b.total - a.total;
    } else if (sortOrder.field === "items") {
      return sortOrder.ascending 
        ? a.items - b.items
        : b.items - a.items;
    }
    return 0;
  });

  // Handle sorting when column header is clicked
  const handleSort = (field) => {
    if (sortOrder.field === field) {
      setSortOrder({ ...sortOrder, ascending: !sortOrder.ascending });
    } else {
      setSortOrder({ field, ascending: false });
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <ShoppingBag size={24} className="mr-2 text-green-600" />
          <h1 className="text-xl font-semibold">Orders</h1>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md">
          Export Orders
        </button>
      </div>

      {/* Order Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Total Orders</p>
          <h3 className="text-2xl font-bold">1,248</h3>
          <div className="flex items-center text-sm mt-2">
            <span className="text-green-600">↑ 12.5%</span>
            <span className="text-gray-500 ml-1">vs last month</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Pending</p>
          <h3 className="text-2xl font-bold">42</h3>
          <div className="flex items-center text-sm mt-2">
            <span className="text-red-600">↑ 8.4%</span>
            <span className="text-gray-500 ml-1">vs last month</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Completed</p>
          <h3 className="text-2xl font-bold">1,139</h3>
          <div className="flex items-center text-sm mt-2">
            <span className="text-green-600">↑ 3.2%</span>
            <span className="text-gray-500 ml-1">vs last month</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Cancelled</p>
          <h3 className="text-2xl font-bold">67</h3>
          <div className="flex items-center text-sm mt-2">
            <span className="text-green-600">↓ 4.3%</span>
            <span className="text-gray-500 ml-1">vs last month</span>
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
              placeholder="Search by order ID or customer" 
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
                <option>Last 30 days</option>
                <option>Last 7 days</option>
                <option>Today</option>
                <option>Custom range</option>
              </select>
              <div className="absolute right-3 top-3 pointer-events-none">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("id")}>
                    Order ID
                    <ArrowUpDown size={14} className="ml-1" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("date")}>
                    Date
                    <ArrowUpDown size={14} className="ml-1" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Customer</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("items")}>
                    Items
                    <ArrowUpDown size={14} className="ml-1" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("total")}>
                    Total
                    <ArrowUpDown size={14} className="ml-1" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Payment</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{order.id}</td>
                  <td className="py-3 px-4 text-gray-600">{order.date}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <img 
                        src={order.customer.avatar} 
                        alt={order.customer.name} 
                        className="w-8 h-8 rounded-full object-cover mr-3"
                      />
                      <div>
                        <div className="font-medium">{order.customer.name}</div>
                        <div className="text-gray-500 text-xs">{order.customer.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{order.items}</td>
                  <td className="py-3 px-4 font-medium">${order.total.toFixed(2)}</td>
                  <td className="py-3 px-4 text-gray-600">{order.payment}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Showing 1-{sortedOrders.length} of {sortedOrders.length} orders
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
    </div>
  );
};

export default OrdersPage;