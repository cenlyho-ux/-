
import React from 'react';

export const StatusBar: React.FC = () => {
  return (
    <div className="bg-[#07c160] px-6 pt-2 pb-1 flex justify-between items-center text-white text-xs font-semibold">
      <span>10:11</span>
      <div className="flex items-center space-x-1">
        <span>5G</span>
        <div className="flex items-end space-x-0.5 h-3">
          <div className="w-0.5 h-1 bg-white opacity-50"></div>
          <div className="w-0.5 h-1.5 bg-white opacity-70"></div>
          <div className="w-0.5 h-2 bg-white"></div>
          <div className="w-0.5 h-2.5 bg-white"></div>
        </div>
        <div className="flex items-center ml-1">
          <span>76</span>
          <div className="w-5 h-2.5 border border-white/50 rounded-sm ml-0.5 relative">
            <div className="absolute left-0 top-0 bottom-0 bg-white" style={{ width: '76%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
