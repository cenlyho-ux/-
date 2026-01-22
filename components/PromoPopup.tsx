
import React from 'react';
import { PromoConfig } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  config: PromoConfig;
}

export const PromoPopup: React.FC<Props> = ({ isOpen, onClose, onConfirm, config }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-sm overflow-visible transform animate-in zoom-in-95 duration-300">
        
        {/* The "Poster" Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col">
          {/* Top Visual Area */}
          <div className="relative h-44 w-full bg-slate-100">
            <img 
              src={config.imageUrl} 
              alt="Promo background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-5 right-5">
               <h3 className="text-white text-xl font-bold leading-tight">{config.title}</h3>
            </div>
          </div>

          {/* Guidance / Auth Area */}
          <div className="p-6 flex flex-col items-center text-center">
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              {config.description}
            </p>

            {/* QR Code Container styled as a "Photo Element" */}
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-4 mb-6 relative group">
              <div className="w-32 h-32 bg-white rounded-lg shadow-inner flex items-center justify-center p-2">
                {/* Simulated QR Code */}
                <div className="w-full h-full bg-slate-100 relative overflow-hidden rounded">
                   <img 
                     src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com/mini-program-auth" 
                     alt="QR Code" 
                     className="w-full h-full"
                   />
                </div>
              </div>
              <div className="mt-3 text-[10px] text-slate-400 font-medium uppercase tracking-widest">
                长按识图或扫码关注
              </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full space-y-3">
              <button 
                onClick={onConfirm}
                className="w-full py-3.5 bg-[#07c160] text-white rounded-full text-base font-bold shadow-lg shadow-green-100 active:scale-[0.97] transition-all flex items-center justify-center space-x-2"
              >
                <span>{config.buttonText}</span>
              </button>
              
              <button 
                onClick={onClose}
                className="w-full py-2 text-slate-400 text-sm font-medium active:opacity-60"
              >
                返回支付页
              </button>
            </div>
          </div>

          {/* Branding Footer */}
          <div className="bg-slate-50 py-3 px-6 border-t border-slate-100 flex items-center justify-center space-x-2">
            <div className="w-5 h-5 bg-[#07c160] rounded-full flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Verified by Cultural Tourism Dept.</span>
          </div>
        </div>

        {/* Floating Close Icon at the bottom */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
           <button 
             onClick={onClose}
             className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/10 active:bg-white/20 transition-colors"
           >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
           </button>
        </div>
      </div>
    </div>
  );
};
