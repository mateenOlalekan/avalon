import { useState } from 'react';

import { Search, Package, Plus, Edit, Trash2, Filter, ArrowUpDown, ChevronDown } from 'lucide-react';

// Sample product data
const products = [
  {
    id: "P001",
    name: "Premium Wireless Headphones",
    sku: "SKU-8472",
    category: "Electronics",
    price: 129.99,
    stock: 45,
    status: "Active"
  },
  {
    id: "P002",
    name: "Ergonomic Office Chair",
    sku: "SKU-3654",
    category: "Furniture",
    price: 249.99,
    stock: 17,
    status: "Active"
  },
  {
    id: "P003",
    name: "Stainless Steel Water Bottle",
    sku: "SKU-2298",
    category: "Lifestyle",
    price: 24.95,
    stock: 78,
    status: "Active"
  },
  {
    id: "P004",
    name: "Smart Home Security Camera",
    sku: "SKU-5127",
    category: "Electronics",
    price: 89.99,
    stock: 32,
    status: "Active"
  },
  {
    id: "P005",
    name: "Organic Cotton T-shirt",
    sku: "SKU-9063",
    category: "Apparel",
    price: 29.95,
    stock: 0,
    status: "Out of Stock"
  },
  {
    id: "P006",
    name: "Bluetooth Smart Speaker",
    sku: "SKU-7341",
    category: "Electronics",
    price: 79.99,
    stock: 12,
    status: "Active"
  },
  {
    id: "P007",
    name: "Leather Wallet - Brown",
    sku: "SKU-6129",
    category: "Accessories",
    price: 49.95,
    stock: 23,
    status: "Active"
  },
  {
    id: "P008",
    name: "LED Desk Lamp",
    sku: "SKU-4278",
    category: "Furniture",
    price: 34.99,
    stock: 0,
    status: "Out of Stock"
  }
];

// Product categories for filter dropdown
const categories = [
  "All Categories",
  "Electronics",
  "Furniture",
  "Lifestyle",
  "Apparel",
  "Accessories"
];

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortOrder, setSortOrder] = useState({ field: "name", ascending: true });

  // Filter products based on search term and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Sort products based on current sort order
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder.field === "name") {
      return sortOrder.ascending 
        ? a.name.localeCompare(b.name) 
        : b.name.localeCompare(a.name);
    } else if (sortOrder.field === "price") {
      return sortOrder.ascending 
        ? a.price - b.price
        : b.price - a.price;
    } else if (sortOrder.field === "stock") {
      return sortOrder.ascending 
        ? a.stock - b.stock
        : b.stock - a.stock;
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
          <Package size={24} className="mr-2 text-green-600" />
          <h1 className="text-xl font-semibold">Products</h1>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center">
          <Plus size={18} className="mr-1" /> Add Product
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-auto md:flex-1">
            <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by product name or SKU" 
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
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <div className="absolute right-3 top-3 pointer-events-none">
                <ChevronDown size={16} />
              </div>
            </div>

            <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-gray-600">
              Advanced Filters
            </button>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("name")}>
                    Product
                    <ArrowUpDown size={14} className="ml-1" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">SKU</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Category</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("price")}>
                    Price
                    <ArrowUpDown size={14} className="ml-1" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("stock")}>
                    Stock
                    <ArrowUpDown size={14} className="ml-1" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedProducts.map((product) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex-shrink-0 bg-gray-100 rounded-md flex items-center justify-center">
                        <Package size={16} className="text-gray-500" />
                      </div>
                      <span className="ml-3 font-medium">{product.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{product.sku}</td>
                  <td className="py-3 px-4 text-gray-600">{product.category}</td>
                  <td className="py-3 px-4 font-medium">${product.price.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <span className={`font-medium ${product.stock === 0 ? 'text-red-500' : 'text-gray-600'}`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      product.status === 'Active' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {product.status}
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
            Showing 1-{sortedProducts.length} of {sortedProducts.length} products
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

export default ProductsPage;