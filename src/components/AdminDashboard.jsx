import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import HeroSection from './HeroSection';

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic to handle logout (clear user session, etc.)
    navigate('/'); // Redirect to Login page
  };

  return (
    <div className="relative h-screen">
      {/* Hero Section */}
      <HeroSection imageUrl="/HomePage.png" height="h-[100px]">
        <h1 className="text-center text-white text-4xl font-bold">Admin Dashboard</h1>
      </HeroSection>

      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="bg-[#0C4A1F] text-[#FFEB3B] h-full fixed top-0 left-0 w-64 border border-[#808080] rounded-lg p-8">
          <nav>
            <Link to="add" className="block p-4 w-full text-left hover:bg-[#0E5B24] text-[#FFEB3B] text-sm">
              Add Student
            </Link>
            <Link to="delete" className="block p-4 w-full text-left hover:bg-[#0E5B24] text-[#FFEB3B] text-sm">
              Delete Student
            </Link>
            <Link to="update" className="block p-4 w-full text-left hover:bg-[#0E5B24] text-[#FFEB3B] text-sm">
              Update Student
            </Link>
            <Link to="view" className="block p-4 w-full text-left hover:bg-[#0E5B24] text-[#FFEB3B] text-sm">
              View Students
            </Link>
          </nav>
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="mt-4 w-full p-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded"
          >
            Logout
          </button>
        </div>

        {/* Main Content */}
        <div className="ml-64 p-8 w-full bg-[#0C4A1F] text-[#FFEB3B]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;