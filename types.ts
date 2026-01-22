
export interface PaymentInfo {
  merchantName: string;
  amount: number;
  orderType: string;
  orderNumber: string;
}

export interface PromoConfig {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  qrCodeUrl?: string;
  footerNote?: string;
}
