
import React from 'react';
import { PaymentInfo } from '../types';

interface Props {
  data: PaymentInfo;
}

export const PaymentDetails: React.FC<Props> = ({ data }) => {
  return (
    <div className="px-5 space-y-4">
      {/* 商户 */}
      <div className="flex items-center justify-between py-4 border-t border-slate-100 mt-2">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-[#07c160] rounded flex items-center justify-center">
             <span className="text-white font-bold text-xl">司司</span>
          </div>
          <span className="text-lg font-medium text-slate-800 tracking-tight">{data.merchantName}</span>
        </div>
        <button className="flex items-center space-x-1 px-3 py-1 border border-slate-200 rounded text-slate-500 text-sm active:bg-slate-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
          <span>点赞商家</span>
        </button>
      </div>

      {/* 详情列表 */}
      <div className="space-y-4 pt-2 border-t border-slate-100">
        <div className="flex justify-between items-center">
          <span className="text-slate-500">订单类型</span>
          <span className="text-slate-800">{data.orderType}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-500">短订单号</span>
          <span className="text-slate-800">{data.orderNumber}</span>
        </div>
      </div>

      {/* 会员卡入口 */}
      <div className="relative h-24 rounded-lg overflow-hidden mt-6 group cursor-pointer active:scale-95 transition-transform">
        <img 
          src="https://picsum.photos/id/11/600/200" 
          alt="Member Card BG" 
          className="w-full h-full object-cover filter brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-between px-5 text-white bg-black/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#07c160] rounded-sm flex items-center justify-center opacity-90 shadow-lg">
               <span className="text-xs font-bold leading-none text-center">司司</span>
            </div>
            <span className="text-xl font-medium drop-shadow-md">我的会员卡</span>
          </div>
          <div className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded">
             <span className="text-sm font-medium">进入</span>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
        {/* VIP watermark simulation */}
        <div className="absolute bottom-1 right-2 text-white/10 font-bold text-5xl select-none">VIP</div>
      </div>
    </div>
  );
};
