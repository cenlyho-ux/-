
import React from 'react';

export const PaymentHeader: React.FC = () => {
  return (
    <div className="bg-[#07c160] px-4 py-3 flex justify-between items-center text-white">
      <button className="p-1 active:opacity-60">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      </button>
      
      <div className="flex items-center space-x-1 bg-black/10 px-3 py-1.5 rounded-full border border-white/20">
        <div className="flex items-center space-x-1.5 border-r border-white/20 pr-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
        </div>
        <div className="pl-1">
          <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
