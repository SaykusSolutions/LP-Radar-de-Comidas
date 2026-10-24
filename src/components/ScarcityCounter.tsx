import React, { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';

interface ScarcityCounterProps {
  className?: string;
}

export const ScarcityCounter: React.FC<ScarcityCounterProps> = ({ className = '' }) => {
  // Scarcity spots starting at 7, decreasing over time down to 2
  const [spotsLeft, setSpotsLeft] = useState<number>(7);
  const [isDecreasing, setIsDecreasing] = useState<boolean>(false);

  useEffect(() => {
    // Schedule intervals to decrease spots:
    // 10s -> 6 cupos
    // 30s -> 5 cupos
    // 55s -> 4 cupos
    // 85s -> 3 cupos
    // 120s -> 2 cupos (stops at 2)
    const timers: NodeJS.Timeout[] = [];

    const dropSpots = (targetSpots: number) => {
      setIsDecreasing(true);
      setSpotsLeft(targetSpots);
      setTimeout(() => setIsDecreasing(false), 1200);
    };

    timers.push(setTimeout(() => dropSpots(6), 10000));
    timers.push(setTimeout(() => dropSpots(5), 30000));
    timers.push(setTimeout(() => dropSpots(4), 55000));
    timers.push(setTimeout(() => dropSpots(3), 85000));
    timers.push(setTimeout(() => dropSpots(2), 120000));

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className={`mt-3 flex items-center justify-center sm:justify-start gap-2 ${className}`}>
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF5F2] border border-[#FADCD5] shadow-xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97757] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D97757]" />
        </span>
        <Flame className="w-3.5 h-3.5 text-[#D97757]" />
        <span className="text-[11px] sm:text-xs font-bold text-[#8A3822]">
          Solo{' '}
          <strong
            className={`font-black text-[#D97757] inline-block transition-transform duration-300 ${
              isDecreasing ? 'scale-125 text-red-600' : 'scale-100'
            }`}
          >
            {spotsLeft} cupos disponibles
          </strong>{' '}
          a este precio
        </span>
      </div>
    </div>
  );
};
