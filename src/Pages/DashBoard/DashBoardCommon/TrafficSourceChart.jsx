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
export default TrafficSourceChart;  