
import React, { useState } from 'react';

interface Props {
  onClaim?: () => void;
}

export const CouponSection: React.FC<Props> = ({ onClaim }) => {
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    setClaimed(true);
    if (onClaim) {
      onClaim();
    }
  };

  return (
    <div className="mx-5 mb-4 mt-2">
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-100 rounded-xl p-4 flex items-center justify-between shadow-sm relative overflow-hidden">
        {/* Decorative Circles for Coupon Look */}
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border border-orange-100"></div>
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border border-orange-100"></div>
        
        <div className="flex items-center space-x-3 pl-2">
          <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-1.761 1.761a2 2 0 0 0 0 2.828L15 11.414"/><path d="M9 19l1.761-1.761a2 2 0 0 0 0-2.828L9 12.586"/><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          </div>
          <div className="flex flex-col">
            <span className="text-red-600 font-bold text-base leading-tight">文旅消费券</span>
            <span className="text-orange-500 text-xs font-medium">满50减10元 · 全省通用</span>
          </div>
        </div>

        <button 
          onClick={handleClaim}
          className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all transform active:scale-95 ${
            claimed 
            ? 'bg-slate-100 text-slate-400 cursor-default' 
            : 'bg-red-500 text-white shadow-lg shadow-red-200'
          }`}
        >
          {claimed ? '已领取' : '领券'}
        </button>
      </div>
    </div>
  );
};
