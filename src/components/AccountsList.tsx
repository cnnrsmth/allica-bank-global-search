import React from 'react';
import AccountCard from './AccountCard';
import { AccountGroup } from '../types';

interface AccountsListProps {
  accountGroups: AccountGroup[];
}

const AccountsList: React.FC<AccountsListProps> = ({ accountGroups }) => {
  return (
    <div className="w-full">
      {accountGroups.map((group, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-bold text-allica-navy mb-4">{group.title}</h2>
          {group.accounts.map(account => (
            <AccountCard key={account.id} account={account} />
          ))}
        </div>
      ))}
      <button className="text-blue-600 hover:underline">View closed accounts</button>
    </div>
  );
};

export default AccountsList;