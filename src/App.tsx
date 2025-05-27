import React from 'react';
import NavBar from './components/NavBar';
import PageHeader from './components/PageHeader';
import AccountsList from './components/AccountsList';
import HelpSection from './components/HelpSection';
import { accountGroups } from './data/accounts';

function App() {
  return (
    <div className="min-h-screen bg-allica-background">
      <NavBar />
      
      <main className="max-w-container mx-auto px-8 pb-16">
        <PageHeader />
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/4">
            <AccountsList accountGroups={accountGroups} />
          </div>
          
          <div className="w-full lg:w-1/4">
            <HelpSection />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;