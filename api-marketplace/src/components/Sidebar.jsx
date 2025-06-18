import React from 'react';
import { Globe, BookOpen, BarChart3, CreditCard, Settings, X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Globe, label: 'Browse APIs', active: true },
    { icon: BookOpen, label: 'Documentation' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: CreditCard, label: 'Subscriptions' },
    { icon: Settings, label: 'Settings' }
  ];

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={onClose}></div>
        </div>
      )}
      
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:inset-0 transition duration-200 ease-in-out md:transition-none`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 md:hidden">
          <h1 className="text-xl font-bold text-blue-600">API Hub</h1>
          <button onClick={onClose}>
            <X className="h-6 w-6 text-gray-400" />
          </button>
        </div>
        
        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                    item.active
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;