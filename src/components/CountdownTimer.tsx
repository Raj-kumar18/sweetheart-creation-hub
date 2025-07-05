
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const CountdownTimer = () => {
  const [timeUnits, setTimeUnits] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Assuming your relationship started on a special date
    // You can change this to your actual relationship start date
    const startDate = new Date('2023-01-01'); // Change this to your actual date
    
    const updateTimer = () => {
      const now = new Date();
      const timeDiff = now.getTime() - startDate.getTime();
      
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      
      setTimeUnits({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <p className="text-lg text-gray-600 mb-4">We've been creating beautiful memories for:</p>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {Object.entries(timeUnits).map(([unit, value]) => (
          <div key={unit} className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-4 border-2 border-pink-200">
            <div className="text-2xl font-bold text-pink-600">{value}</div>
            <div className="text-sm text-gray-600 capitalize">{unit}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2">
        <Heart className="text-red-500 animate-pulse" size={16} />
        <span className="text-sm text-gray-500">...and counting every precious moment</span>
        <Heart className="text-red-500 animate-pulse" size={16} />
      </div>
    </div>
  );
};

export default CountdownTimer;
