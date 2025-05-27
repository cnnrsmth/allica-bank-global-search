import React from 'react';
import { CatIcon as HatIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-allica-navy text-white py-6 mt-8">
      <div className="max-w-container mx-auto px-4">
        <div className="flex items-center mb-4">
          <HatIcon className="text-allica-orange h-5 w-5 mr-2" />
          <span className="font-medium">Allica Bank</span>
        </div>
        
        <div className="text-xs opacity-80 max-w-3xl">
          <p className="mb-2">
            Allica Bank Limited is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority (FRN: 821851). Registered office: 4th Floor, Empire House, 175 Piccadilly, London W1J 9EN. Registered in England and Wales with company number 10971485.
          </p>
          <p>
            © Allica Bank Limited 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;