import React from 'react';

function Sidebar({ isOpen, onToggle, onLogout, onSelectSection }) {
  return (
    <div className={`bg-navigationBar text-bodyText h-full fixed top-0 left-0 transition-all ${isOpen ? 'w-64' : 'w-20'} border 
     border-iconsAndBorders  rounded-lg    `}>
      <button onClick={onToggle} className="p-4 text-iconsAndBorders hover:bg-footerBackground">
        {isOpen ? 'Collapse' : 'Expand'}
      </button>
      <nav className="mt-8">
        <button
          onClick={() => onSelectSection('dashboard')}
          className="block p-4 w-full text-left hover:bg-footerBackground text-bodyText text-sm"
        >
          Dashboard
        </button>
        <button
          onClick={() => onSelectSection('profile')}
          className="block p-4 w-full text-left hover:bg-footerBackground text-bodyText text-sm"
        >
          Profile Details
        </button>
        <button
          onClick={() => onSelectSection('payment')}
          className="block p-4 w-full text-left hover:bg-footerBackground text-bodyText text-sm"
        >
          Payment Details
        </button>
        <button
          onClick={onLogout}
          className="block p-4 w-full text-left hover:bg-footerBackground text-bodyText text-sm"
        >
          Logout
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
