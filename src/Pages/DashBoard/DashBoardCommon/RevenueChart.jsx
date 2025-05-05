import { ChevronDown } from 'lucide-react';

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

export default RevenueChart;