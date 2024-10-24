import React, { useState } from 'react';
import { Menu, X, Bot } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Bot className="h-8 w-8 text-black" />
            <div className="ml-2">
              <span className="text-xl font-bold">ODA</span>
              <span className="text-sm block text-gray-600">On-Demand-Agentcy</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-black">Features</a>
            <a href="#agents" className="text-gray-700 hover:text-black">Agents</a>
            <a href="#calculator" className="text-gray-700 hover:text-black">Calculator</a>
            <a href="#beta" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              Join Beta
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#features" className="block px-3 py-2 text-gray-700">Features</a>
            <a href="#agents" className="block px-3 py-2 text-gray-700">Agents</a>
            <a href="#calculator" className="block px-3 py-2 text-gray-700">Calculator</a>
            <a href="#beta" className="block px-3 py-2 bg-black text-white rounded-lg mt-2">
              Join Beta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;