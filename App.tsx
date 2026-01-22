
import React, { useState, useEffect } from 'react';
import { PaymentHeader } from './components/PaymentHeader';
import { PaymentDetails } from './components/PaymentDetails';
import { PromoPopup } from './components/PromoPopup';
import { StatusBar } from './components/StatusBar';
import { CouponSection } from './components/CouponSection';
import { PaymentInfo, PromoConfig } from './types';

const App: React.FC = () => {
  const [showPromo, setShowPromo] = useState(false);
  
  const paymentData: PaymentInfo = {
    merchantName: 'TT演示店',
    amount: 0.03,
    orderType: '买单',
    orderNumber: '0001'
  };

  const promoData: PromoConfig = {
    title: '文旅专属授权领取',
    description: '因涉及文旅基金发放安全，请长按识别下方二维码关注官方账号，授权后即可将消费券存入微信卡包。',
    imageUrl: 'https://images.unsplash.com/photo-1541343672885-9be56236302a?q=80&w=800&auto=format&fit=crop',
    buttonText: '授权并进入小程序',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com/mini-program-auth'
  };

  const handleClaimCoupon = () => {
    // 点击领券后弹出授权引导（二维码海报）
    setTimeout(() => {
      setShowPromo(true);
    }, 300);
  };

  const handleClosePromo = () => setShowPromo(false);
  const handleGoToMiniProgram = () => {
    alert('正在拉取微信授权...');
    setTimeout(() => {
      alert('授权成功！正在跳转至文旅小程序...');
      setShowPromo(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white max-w-md mx-auto relative overflow-hidden flex flex-col shadow-xl">
      {/* 状态栏 */}
      <StatusBar />

      {/* 顶部导航 */}
      <PaymentHeader />

      {/* 支付成功信息 */}
      <div className="px-6 py-8 text-center bg-white">
        <div className="flex justify-center mb-2">
           <div className="w-12 h-12 bg-[#07c160] rounded-full flex items-center justify-center shadow-lg shadow-green-100">
             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
           </div>
        </div>
        <h2 className="text-lg font-medium text-slate-800 mb-2 tracking-tight">支付成功</h2>
        <div className="flex items-center justify-center space-x-1">
          <span className="text-3xl font-bold text-slate-800">¥</span>
          <span className="text-5xl font-semibold tracking-tighter text-slate-900">{paymentData.amount.toFixed(2)}</span>
        </div>
      </div>

      {/* 领券提示区域 - 绑定点击触发授权弹窗 */}
      <CouponSection onClaim={handleClaimCoupon} />

      {/* 商户信息与订单详情 */}
      <PaymentDetails data={paymentData} />

      {/* 完成按钮 */}
      <div className="mt-auto px-10 pb-12">
        <button 
          className="w-full py-3.5 border border-[#07c160] text-[#07c160] rounded-full text-lg font-medium active:bg-green-50 transition-colors shadow-sm"
          onClick={() => alert('支付流程已结束')}
        >
          完成
        </button>
      </div>

      {/* 授权引导弹窗 - 以“海报/图片”形式呈现二维码 */}
      <PromoPopup 
        isOpen={showPromo} 
        onClose={handleClosePromo} 
        onConfirm={handleGoToMiniProgram}
        config={promoData}
      />
    </div>
  );
};

export default App;
