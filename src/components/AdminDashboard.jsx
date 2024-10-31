import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Side from './Side';
import AddStudent from './AddStudent'; // Import your components
import DeleteStudent from './DeleteStudent';
import UpdateStudent from './UpdateStudent';
import ViewStudents from './ViewStudents';
import HeroSection from './HeroSection';
// import Login from './Login'
function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('add'); // Default to Add Student
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/Login');
  };

  return (
    <>
      <HeroSection imageUrl="/Home.png" height="h-[150px]">
        <h1>Admin Dashboard</h1>
      </HeroSection>
      <div className="flex min-h-screen bg-background">
        {/* Sidebar */}
        <Side
          isOpen={sidebarOpen} 
          onToggle={() => setSidebarOpen(!sidebarOpen)} 
          onLogout={handleLogout} 
          onSelectSection={setActiveSection} // Update active section
        />

        {/* Main content area */}
        <div className={`flex-1 p-6 transition-all ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
          <h1 className="text-headings font-semibold text-2xl mb-4">Welcome to the Admin Dashboard</h1>
          
          {/* Conditional rendering based on active section */}
          {activeSection === 'add' && <AddStudent />}
          {activeSection === 'delete' && <DeleteStudent />}
          {activeSection === 'update' && <UpdateStudent />}
          {activeSection === 'view' && <ViewStudents />}
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;