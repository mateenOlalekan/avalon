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
  
  export default StatCard;