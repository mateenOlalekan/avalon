import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 20,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const totalSeconds = prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds - 1;
        
        if (totalSeconds < 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-center">Flash Sale Ends In</h3>
      <div className="flex justify-center space-x-4">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className="text-sm">Hours</span>
        </div>
        <span className="text-3xl font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <span className="text-sm">Minutes</span>
        </div>
        <span className="text-3xl font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <span className="text-sm">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer; 