export interface ICardData {
  name: string;
  cardNumber: string;
  paymentSystem: PaymentSystem;
}

export enum PaymentSystem {
  VISA = 'VISA',
  MASTERCARD = 'MASTERCARD',
  PAYPAL = 'PAYPAL',
  MIR = 'MIR'
}

export const paymentURL = {
  [PaymentSystem.VISA]: '/images/visa.png',
  [PaymentSystem.MASTERCARD]: '/images/mastercard.png',
  [PaymentSystem.PAYPAL]: '/images/paypal.png',
  [PaymentSystem.MIR]: '/images/mir.png'
};
