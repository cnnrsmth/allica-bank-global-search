import { Account, AccountGroup } from '../types';

export const accountGroups: AccountGroup[] = [
  {
    title: 'Personal Accounts',
    accounts: [
      {
        id: '1',
        type: 'rewards',
        name: 'Business rewards account',
        accountNumber: '00013489',
        sortCode: '04-13-76',
        balance: 0,
      },
    ]
  },
  {
    title: 'Allica Bank Ltd',
    accounts: [
      {
        id: '2',
        type: 'rewards',
        name: 'Your Business Rewards Account is ready!',
        accountNumber: '',
        sortCode: '',
        balance: 0,
        isEmpty: true,
      }
    ]
  },
  {
    title: 'Allica Payments Tribe - test case',
    accounts: [
      {
        id: '3',
        type: 'rewards',
        name: 'Business rewards account 1',
        accountNumber: '00006266',
        sortCode: '04-13-76',
        balance: 7.98,
        savingsPotBalance: 5.59,
      },
      {
        id: '4',
        type: 'rewards',
        name: 'Business rewards account 3',
        accountNumber: '00403433',
        sortCode: '04-13-76',
        balance: 0.03,
        savingsPotBalance: 1.00,
      },
      {
        id: '5',
        type: 'rewards',
        name: 'Business rewards account Test',
        accountNumber: '00400098',
        sortCode: '04-13-76',
        balance: 0.11,
        savingsPotBalance: 0.03,
      },
      {
        id: '6',
        type: 'rewards',
        name: 'Grace Test Account',
        accountNumber: '00413307',
        sortCode: '04-13-76',
        balance: 0.10,
        savingsPotBalance: 0,
      },
      {
        id: '7',
        type: 'rewards',
        name: 'Jonah Demo Test',
        accountNumber: '00466775',
        sortCode: '04-13-76',
        balance: 0,
        savingsPotBalance: 0,
      },
      {
        id: '8',
        type: 'rewards',
        name: 'SaaScada release 318',
        accountNumber: '00483916',
        sortCode: '04-13-76',
        balance: 0,
        savingsPotBalance: 0,
      },
      {
        id: '9',
        type: 'rewards',
        name: 'Test Secured Designated re: test name',
        accountNumber: '00486996',
        sortCode: '04-13-76',
        balance: 0,
        interestRate: '3.05% Gross',
      },
      {
        id: '10',
        type: 'rewards',
        name: 'Test Secured Undesignated re: test name',
        accountNumber: '00487007',
        sortCode: '04-13-76',
        balance: 0,
        interestRate: '3.05% Gross',
      }
    ]
  }
];