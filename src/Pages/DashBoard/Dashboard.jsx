import React from 'react';
import StatCard from '../DashBoard/DashBoardCommon/StatCard';
import RevenueChart from '../DashBoard/DashBoardCommon/RevenueChart';
import TrafficSourceChart from '../DashBoard/DashBoardCommon/TrafficSourceChart';
import RecentOrders from '../DashBoard/DashBoardCommon/RecentOrders';

function Dashboard() {
  const recentOrders = [
    {
      id: '#ORD-1001',
      date: '2023-06-15',
      customer: 'John Smith',
      items: 3,
      total: '$245.99',
      status: 'Completed'
    },
    {
      id: '#ORD-1002',
      date: '2023-06-14',
      customer: 'Sarah Johnson',
      items: 5,
      total: '$189.50',
      status: 'Shipped'
    },
    {
      id: '#ORD-1003',
      date: '2023-06-13',
      customer: 'Michael Brown',
      items: 2,
      total: '$99.99',
      status: 'Processing'
    },
    {
      id: '#ORD-1004',
      date: '2023-06-12',
      customer: 'Emily Davis',
      items: 1,
      total: '$49.99',
      status: 'Pending'
    },
    {
      id: '#ORD-1005',
      date: '2023-06-11',
      customer: 'Robert Wilson',
      items: 4,
      total: '$320.00',
      status: 'Completed'
    },
    {
      id: '#ORD-1006',
      date: '2023-06-10',
      customer: 'Lisa Miller',
      items: 2,
      total: '$75.50',
      status: 'Cancelled'
    },
    {
      id: '#ORD-1007',
      date: '2023-06-09',
      customer: 'David Taylor',
      items: 3,
      total: '$210.25',
      status: 'Completed'
    }
  ];
  return (
    <>
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
      <RecentOrders recentOrders={recentOrders} />

      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="pb-2 text-left font-medium">Order ID</th>
                <th className="pb-2 text-left font-medium">Customer</th>
                <th className="pb-2 text-left font-medium">Total</th>
                <th className="pb-2 text-left font-medium">Status</th>
                <th className="pb-2 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="border-b border-gray-100">
                  <td className="py-3">#ORD{item}</td>
                  <td>Customer {item}</td>
                  <td>${(item * 19.99).toFixed(2)}</td>
                  <td>
                    <span className="px-2 py-1 bg-green-100 text-green-600 rounded-md text-xs">
                      Completed
                    </span>
                  </td>
                  <td>
                    <button className="text-blue-500 mr-2">View</button>
                    <button className="text-red-500">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default Dashboard