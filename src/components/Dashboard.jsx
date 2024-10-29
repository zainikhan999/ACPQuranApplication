import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import CourseList from './CourseList';
import ProfileDetails from './ProfileDetails';
import PaymentDetails from './PaymentDetails'; // Ensure this is correctly imported
import Herosection from './Herosection'
function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [activeSection, setActiveSection] = useState('dashboard'); // Track active section
  const navigate = useNavigate();

  // Sample user profile data
  const userProfile = {
    firstName: 'John',
    lastName: 'Doe',
    contact: '123-456-7890',
    email: 'john.doe@example.com',
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const handlePurchaseCourse = (course) => {
    // Here you can keep track of purchased courses if necessary
    setPurchasedCourses([...purchasedCourses, course]); // Optionally add to purchased courses
    setActiveSection('payment'); // Redirect to the PaymentDetails section
  };

  return (
    <>
    
    <Herosection imageUrl="/HomePage.png" height="h-[150px]">
      <h1>User Dashboard</h1>
    </Herosection>
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
        onLogout={handleLogout} 
        onSelectSection={setActiveSection} // Update active section
      />

      {/* Main content area */}
      <div className={`flex-1 p-6 transition-all ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <h1 className="text-headings font-semibold text-2xl mb-4">Welcome to your Dashboard</h1>
        
        {/* Conditional rendering based on active section */}
        {activeSection === 'dashboard' && (
          <CourseList 
            purchasedCourses={purchasedCourses} 
            onPurchase={handlePurchaseCourse} 
          />
        )}
        {activeSection === 'profile' && (
          <ProfileDetails 
            isOpen={sidebarOpen} 
            onLogout={handleLogout} 
            selectedSection={activeSection} 
            userProfile={userProfile} 
          />
        )}
        {activeSection === 'payment' && ( // Render existing PaymentDetails component
          <PaymentDetails 
            purchasedCourses={purchasedCourses} 
          />
        )}
      </div>
    </div>
  </>
  );
}

export default Dashboard;
