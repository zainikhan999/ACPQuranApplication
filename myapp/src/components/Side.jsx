// Sidebar.js
import React from 'react';

function Sidebar({ isOpen, onToggle, onLogout, onSelectSection }) {
  return (
    <div className={`bg-navigationBar text-bodyText fixed top-0 left-0 transition-all ${isOpen ? 'w-64' : 'w-20'} border 
     border-iconsAndBorders rounded-lg`}
     style={{ height: 'calc(100vh - 4rem)' }}
     >
      <button onClick={onToggle} className="p-3 text-iconsAndBorders hover:bg-footerBackground">
        {isOpen ? 'Collapse' : 'Expand'}
      </button>
      <nav className="mt-8">
        <button
          onClick={() => onSelectSection('add')}
          className="block p-4 w-full text-left hover:bg-footerBackground text-bodyText text-sm"
        >
          Add Student
        </button>
        <button
          onClick={() => onSelectSection('delete')}
          className="block p-4 w-full text-left hover:bg-footerBackground text-bodyText text-sm"
        >
          Delete Student
        </button>
        <button
          onClick={() => onSelectSection('update')}
          className="block p-4 w-full text-left hover:bg-footerBackground text-bodyText text-sm"
        >
          Update Student
        </button>
        <button
          onClick={() => onSelectSection('view')}
          className="block p-4 w-full text-left hover:bg-footerBackground text-bodyText text-sm"
        >
          View Students
        </button>
        <button
          onClick={() => onSelectSection('viewMessage')} // Add this line
          className="block p-4 w-full text-left hover:bg-footerBackground text-bodyText text-sm"
        >
          View Messages
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