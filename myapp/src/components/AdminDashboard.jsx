import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Side from './Side';
import AddStudent from './AddStudent'; 
import DeleteStudent from './DeleteStudent';
import UpdateStudent from './UpdateStudent';
import ViewStudents from './ViewStudents';
import ViewMessages from './ViewMessages'; // Import ViewMessages
import Herosection from './Herosection';

function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('add'); // Default to Add Student
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/Login');
  };

  return (
    <>
      <Herosection imageUrl="/HomePage.png" height="h-[150px]">
        <h1>Admin Dashboard</h1>
      </Herosection>
      <div className="flex min-h-screen bg-background">
        {/* Sidebar */}
        <Side
          isOpen={sidebarOpen} 
          onToggle={() => setSidebarOpen(!sidebarOpen)} 
          onLogout={handleLogout} 
          onSelectSection={setActiveSection} // Update active section
        />

        {/* Main content area */}
        <div className={`flex-1 p-6 transition-all ${sidebarOpen ? 'ml-50' : 'ml-20'}`}>
          <h1 className="text-headings font-semibold text-2xl mb-4">Welcome to the Admin Dashboard</h1>
          
          {/* Conditional rendering based on active section */}
          {activeSection === 'add' && <AddStudent />}
          {activeSection === 'delete' && <DeleteStudent />}
          {activeSection === 'update' && <UpdateStudent />}
          {activeSection === 'view' && <ViewStudents />}
          {activeSection === 'viewMessage' && <ViewMessages />} {/* Add ViewMessages condition */}
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;