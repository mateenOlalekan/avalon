import { useState } from 'react';
import { User, Search, ArrowUpDown, Filter, Edit, Trash2, Plus, ChevronDown } from 'lucide-react';

// Sample customer data
const customers = [
  {
    id: "C001",
    name: "Emma Thompson",
    email: "emma.thompson@example.com",
    phone: "+1 (555) 123-4567",
    orders: 12,
    totalSpent: 1423.47,
    lastOrder: "2023-04-23",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "C002",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 234-5678",
    orders: 8,
    totalSpent: 875.20,
    lastOrder: "2023-04-15",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "C003",
    name: "Sarah Miller",
    email: "sarah.miller@example.com",
    phone: "+1 (555) 345-6789",
    orders: 23,
    totalSpent: 2756.98,
    lastOrder: "2023-04-28",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "C004",
    name: "David Wilson",
    email: "david.wilson@example.com",
    phone: "+1 (555) 456-7890",
    orders: 5,
    totalSpent: 427.65,
    lastOrder: "2023-03-30",
    status: "Inactive",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "C005",
    name: "Olivia Brown",
    email: "olivia.brown@example.com",
    phone: "+1 (555) 567-8901",
    orders: 15,
    totalSpent: 1892.33,
    lastOrder: "2023-04-25",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "C006",
    name: "Michael Davis",
    email: "michael.davis@example.com",
    phone: "+1 (555) 678-9012",
    orders: 9,
    totalSpent: 982.10,
    lastOrder: "2023-04-18",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "C007",
    name: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    phone: "+1 (555) 789-0123",
    orders: 0,
    totalSpent: 0,
    lastOrder: "N/A",
    status: "Inactive",
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "C008",
    name: "James Taylor",
    email: "james.taylor@example.com",
    phone: "+1 (555) 890-1234",
    orders: 17,
    totalSpent: 2105.76,
    lastOrder: "2023-04-27",
    status: "Active",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

// Customer status filters
const statusFilters = ["All", "Active", "Inactive"];

const CustomersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState({ field: "name", ascending: true });

  // Filter customers based on search term and status
  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || customer.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Sort customers based on current sort order
  const sortedCustomers = [...filteredCustomers].sort((a, b) => {
    if (sortOrder.field === "name") {
      return sortOrder.ascending 
        ? a.name.localeCompare(b.name) 
        : b.name.localeCompare(a.name);
    } else if (sortOrder.field === "orders") {
      return sortOrder.ascending 
        ? a.orders - b.orders
        : b.orders - a.orders;
    } else if (sortOrder.field === "totalSpent") {
      return sortOrder.ascending 
        ? a.totalSpent - b.totalSpent
        : b.totalSpent - a.totalSpent;
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
          <User size={24} className="mr-2 text-green-600" />
          <h1 className="text-xl font-semibold">Customers</h1>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center">
          <Plus size={18} className="mr-1" /> Add Customer
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-auto md:flex-1">
            <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by name or email" 
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

            <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-gray-600">
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("name")}>
                    Customer
                    <ArrowUpDown size={14} className="ml-1" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Contact</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("orders")}>
                    Orders
                    <ArrowUpDown size={14} className="ml-1" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("totalSpent")}>
                    Total Spent
                    <ArrowUpDown size={14} className="ml-1" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Last Order</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedCustomers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <img 
                        src={customer.avatar} 
                        alt={customer.name} 
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="ml-3 font-medium">{customer.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col">
                      <span className="text-gray-600">{customer.email}</span>
                      <span className="text-gray-500 text-sm">{customer.phone}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-medium">{customer.orders}</td>
                  <td className="py-3 px-4 font-medium">
                    ${customer.totalSpent.toFixed(2)}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{customer.lastOrder}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      customer.status === 'Active' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {customer.status}
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
            Showing 1-{sortedCustomers.length} of {sortedCustomers.length} customers
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

export default CustomersPage;