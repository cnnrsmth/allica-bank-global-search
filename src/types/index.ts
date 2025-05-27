export interface Account {
  id: string;
  type: 'current' | 'savings' | 'credit' | 'fixed' | 'empty' | 'rewards';
  name: string;
  accountNumber: string;
  sortCode: string;
  balance: number;
  savingsPotBalance?: number;
  interestRate?: string;
  isEmpty?: boolean;
  hasCard?: boolean;
  maturityDate?: string;
  lastUpdated?: string;
}

export interface AccountGroup {
  title: string;
  accounts: Account[];
}