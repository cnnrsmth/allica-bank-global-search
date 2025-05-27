import React from 'react';
import { MessageCircle } from 'lucide-react';

const HelpSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold text-allica-navy mb-4">FAQs</h2>
        
        <div className="space-y-3 mb-4">
          <a href="#" className="block text-allica-blue hover:underline">
            What is a Business Rewards Account?
          </a>
          <a href="#" className="block text-allica-blue hover:underline">
            How do I apply for a commercial mortgage?
          </a>
          <a href="#" className="block text-allica-blue hover:underline">
            Where can I download the Allica bank app?
          </a>
        </div>
        
        <a href="#" className="text-allica-blue hover:underline">See all FAQs</a>
      </div>

      <div className="bg-white rounded-lg p-6">
        <img src="/fscs-protected.svg" alt="FSCS Protected" className="w-24 mb-4" />
        <h3 className="font-bold text-allica-navy mb-2">Deposit protection up to £85,000</h3>
        <p className="text-gray-600 text-sm">
          All our current accounts and savings accounts are covered by the Financial Services Compensation Scheme (FSCS). This means that any eligible deposit of up to £85,000 will be protected.
        </p>
      </div>

      <button className="fixed bottom-6 right-6 bg-allica-blue text-white p-4 rounded-full shadow-lg hover:bg-allica-blue/90">
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default HelpSection;