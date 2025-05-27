import React from 'react';
import { LogOut } from 'lucide-react';

const NavBar: React.FC = () => {
  return (
    <div>
      <div className="bg-allica-lightNavy h-8 flex items-center justify-end px-8">
        <span className="text-white/80 text-sm">connor.smith@allica.bank</span>
      </div>
      <nav className="bg-allica-navy h-16 flex items-center w-full">
        <div className="max-w-container mx-auto w-full px-8 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/bowler-hat.svg" alt="Allica Bank" className="h-8" />
            <span className="text-white font-medium ml-2">Allica Bank</span>
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="#" className="text-white text-sm font-medium border-b-2 border-allica-orange pb-1">Accounts</a>
            <a href="#" className="text-white text-sm hover:text-white/80">To-do</a>
            <a href="#" className="text-white text-sm hover:text-white/80">Products</a>
            <a href="#" className="text-white text-sm hover:text-white/80">Help</a>
            <a href="#" className="text-white text-sm hover:text-white/80">Settings</a>
            <button className="flex items-center bg-white text-allica-navy px-4 py-2 rounded text-sm font-medium hover:bg-white/90">
              <LogOut size={16} className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;