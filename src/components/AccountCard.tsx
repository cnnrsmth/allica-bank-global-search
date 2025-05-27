import React from 'react';
import { Account } from '../types';
import { Home, ArrowRight, FileText, Lock } from 'lucide-react';

interface AccountCardProps {
  account: Account;
}

const AccountCard: React.FC<AccountCardProps> = ({ account }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  if (account.isEmpty) {
    return (
      <div className="bg-white rounded-lg p-8 mb-4 text-center">
        <div className="flex justify-center mb-4">
          <Lock size={48} className="text-allica-blue" />
        </div>
        <h3 className="text-lg font-bold text-allica-navy mb-2">{account.name}</h3>
        <p className="text-gray-600 mb-6">Open your account to start earning unrivalled cashback.</p>
        <button className="flex items-center justify-center space-x-2 bg-allica-navy text-white px-6 py-3 rounded-lg font-medium w-full hover:bg-allica-navy/90">
          <Lock size={16} className="mr-2" />
          Get Started
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg mb-4">
      <div className="p-6">
        <a href="#" className="group">
          <h3 className="text-lg font-bold text-allica-navy group-hover:underline">{account.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{account.sortCode} {account.accountNumber}</p>
        </a>

        <div className="mt-6">
          <p className="text-2xl font-bold text-allica-navy">{formatCurrency(account.balance)}</p>
          {account.savingsPotBalance !== undefined && (
            <>
              <p className="text-gray-600 text-sm mt-4">Total savings pot balance</p>
              <p className="text-lg font-bold text-allica-navy">{formatCurrency(account.savingsPotBalance)}</p>
              <a href="#" className="text-allica-blue hover:underline text-sm">View savings pot</a>
            </>
          )}
          {account.interestRate && (
            <p className="text-gray-600 text-sm mt-1">· {account.interestRate}</p>
          )}
        </div>
      </div>

      <div className="border-t border-allica-border grid grid-cols-3">
        <button className="flex items-center justify-center py-4 text-allica-blue hover:bg-allica-background">
          <Home size={18} className="mr-2" />
          <span>View account</span>
        </button>
        <button className="flex items-center justify-center py-4 text-allica-blue hover:bg-allica-background border-l border-r border-allica-border">
          <ArrowRight size={18} className="mr-2" />
          <span>Pay someone</span>
        </button>
        <button className="flex items-center justify-center py-4 text-allica-blue hover:bg-allica-background">
          <FileText size={18} className="mr-2" />
          <span>Statements</span>
        </button>
      </div>
    </div>
  );
};

export default AccountCard;