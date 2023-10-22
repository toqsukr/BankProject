import { useMemo } from 'react';

export const usePaymentSystem = useMemo(() => {
  type PaymentSystem =
    | 'VISA'
    | 'MASTERCARD'
    | 'AMEX'
    | 'DISCOVER'
    | 'DINERS'
    | 'JCB'
    | 'MIR'
    | 'UNION_PAY'
    | 'MAESTRO'
    | 'UNKNOWN_SYSTEM';
  const PaymentSystems: Record<PaymentSystem, PaymentSystem> = {
    VISA: 'VISA',
    MASTERCARD: 'MASTERCARD',
    AMEX: 'AMEX',
    DISCOVER: 'DISCOVER',
    DINERS: 'DINERS',
    JCB: 'JCB',
    MIR: 'MIR',
    UNION_PAY: 'UNION_PAY',
    MAESTRO: 'MAESTRO',
    UNKNOWN_SYSTEM: 'UNKNOWN_SYSTEM'
  } as const;

  const CardPatterns: Record<PaymentSystem, RegExp> = {
    VISA: /^4[0-9]{12}(?:[0-9]{3})?$/,
    MASTERCARD: /^5[1-5][0-9]{14}$/,
    AMEX: /^3[47][0-9]{13}$/,
    DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    DINERS: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
    MIR: /^2[0-9]{15}$/,
    UNION_PAY: /^(62|88)\d{14,17}$/,
    MAESTRO: /^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/,
    UNKNOWN_SYSTEM: /^\d{13,19}$/
  } as const;

  const PaymentSystemImages: Record<PaymentSystem, string> = {
    VISA: '/images/visa.png',
    MASTERCARD: '/images/mastercard.png',
    AMEX: '/images/amex.png',
    DISCOVER: '/images/discover.png',
    DINERS: '/images/diners.png',
    JCB: '/images/jcb.png',
    MIR: '/images/mir.png',
    UNION_PAY: '/images/unionpay.png',
    MAESTRO: '/images/maestro.png',
    UNKNOWN_SYSTEM: 'favicon.svg'
  } as const;

  const detectPaymentSystem = (cardNumber: string) => {
    const preparedCardNumber = cardNumber.replace(/[\s\-]/g, '');
    const systems = Object.keys(PaymentSystems) as PaymentSystem[];
    const filteredSystems = systems.filter(system => {
      if (CardPatterns[system].test(preparedCardNumber)) {
        return system;
      }
    });
    return filteredSystems[0];
  };

  return { detectPaymentSystem, PaymentSystems, PaymentSystemImages };
}, []);
