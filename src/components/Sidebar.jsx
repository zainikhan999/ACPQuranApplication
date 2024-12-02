
import React from 'react';

function Sidebar({ isOpen, onToggle, onLogout, onSelectSection }) {
  return (
    // <div
    //   className={`bg-navigationBar border border-iconsAndBorders-300 text-bodyText transition-all ${
    //     isOpen ? 'w-28' : 'w-10'
    //   } border border-iconsAndBorders rounded-lg`}
    //   style={{ height: 'calc(100vh - 4rem)' }}
    //   h-9 sticky top-[150x] left-0 `} // "h-screen" ensures full viewport height
    // >
    <div
  className={`bg-navigationBar border border-iconsAndBorders text-bodyText transition-all ${
    isOpen ? 'w-60' : 'w-15'
  } rounded-lg sticky top-[150px] left-0`}
  style={{ height: 'calc(100vh - 4rem)' }}
>

      <button onClick={onToggle} className="p-3 text-iconsAndBorders hover:bg-footerBackground">
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

