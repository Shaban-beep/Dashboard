import React from 'react';

const SalesChart = () => {
  return (
    <div className="w-full h-[380px] relative">
      <svg viewBox="0 0 800 400" className="w-full h-full">
        <path
          d="M 50 300 C 100 280, 150 260, 200 220 C 250 180, 300 240, 350 160 C 400 80, 450 180, 500 200 C 550 220, 600 160, 650 180 C 700 200, 750 100, 750 100"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="3"
        />
        <path
          d="M 50 300 C 100 280, 150 260, 200 220 C 250 180, 300 240, 350 160 C 400 80, 450 180, 500 200 C 550 220, 600 160, 650 180 C 700 200, 750 100, 750 100 L 750 350 L 50 350 Z"
          fill="url(#gradient)"
          fillOpacity="0.4"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-8 py-4 text-sm text-gray-500">
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
        <span>Aug</span>
        <span>Sep</span>
        <span>Oct</span>
        <span>Nov</span>
        <span>Dec</span>
      </div>
    </div>
  );
};

export default SalesChart;