import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

const LuxemartLoader = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Slightly faster animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="w-full max-w-xs px-6">
        {/* Brand header */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <ShoppingBag className="text-emerald-600" size={24} />
          <h1 className="text-2xl font-bold text-gray-800">LUXEMART</h1>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
          <div 
            className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Progress text */}
        <div className="flex justify-between text-sm text-gray-500">
          <span>Loading your experience</span>
          <span>{progress}%</span>
        </div>

        {/* Subtle animation */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <div 
                key={i}
                className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                style={{ 
                  animationDelay: `${i * 0.2}s`,
                  opacity: 0.6 + (i * 0.2)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxemartLoader;