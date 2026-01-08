export interface Category {
  id: string;
  title: string;
}

export type TransactionType = 'INCOME' | 'EXPENSE';

export interface Transaction {
  id: string;
  title: string;
  type: TransactionType;
  amount: number;
  category: string;
  paymentType: string;
  description: string;
  createDt: Date;
}
