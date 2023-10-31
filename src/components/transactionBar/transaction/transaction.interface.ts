export interface ITransaction {
  image?: string;
  subject: string;
  message?: string;
  date: string;
  time: string;
  money: string;
  type: TransactionTypes;
}

export const enum TransactionTypes {
  RECEIPT,
  DEBIT
}
