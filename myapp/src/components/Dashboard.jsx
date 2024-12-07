import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import CourseList from './CourseList';
import ProfileDetails from './ProfileDetails';
import PaymentDetails from './PaymentDetails';
import Herosection from './Herosection';
import axios from 'axios';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [activeSection, setActiveSection] = useState('dashboard'); // Track active section
  const [userData, setUserData] = useState(null); // State to hold user data
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchUserData = async () => {
      const user = JSON.parse(localStorage.getItem('user')); // Retrieve the user object
      if (user && user.username) {  // Ensure 'username' exists
        try {
          // Fetch full user data from backend using username
          const response = await axios.get(`http://localhost:3001/users?userName=${user.username.toLowerCase()}`);
          if (response.data) {
            setUserData(response.data); // Set full user data
          } else {
            console.error('User data not found');
            navigate('/login'); // Redirect to login if user data not found
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          navigate('/login'); // Redirect to login if there is an error fetching data
        }
      } else {
        navigate('/login'); // Redirect if no username found in localStorage
      }
      setLoading(false); // Stop loading after fetch completes
    };
  
    fetchUserData();
  }, [navigate]);
  

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      localStorage.removeItem('user'); // Remove username from localStorage on logout
      navigate('/login'); // Redirect to login page
    }
  };

  const handlePurchaseCourse = (course) => {
    setPurchasedCourses([...purchasedCourses, course]);
    setActiveSection('payment');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Herosection imageUrl="/HomePage.png" height="h-[150px]">
        <h1>User Dashboard</h1>
      </Herosection>
      <div className="flex min-h-screen bg-background">
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          onLogout={handleLogout}
          onSelectSection={setActiveSection}
        />
        <div className={`flex-1 p-6 transition-all ${sidebarOpen ? 'ml-50' : 'ml-20'}`}>
          {userData ? (
            <>
              <h1 className="text-headings font-semibold text-2xl mb-4">
                Welcome, {userData.firstName || userData.username}!
              </h1>
              

              {/* Conditional rendering based on active section */}
              {activeSection === 'dashboard' && (
                <CourseList onPurchase={handlePurchaseCourse} />
              )}
              {activeSection === 'profile' && (
        <ProfileDetails
          isOpen={sidebarOpen}              // isOpen prop
          onLogout={handleLogout}           // onLogout prop
          selectedSection={activeSection}   // selectedSection prop
        />
      )}
              {activeSection === 'payment' && <PaymentDetails purchasedCourses={purchasedCourses} />}
            </>
          ) : (
            <h1 className="text-red-500 text-xl font-semibold">
              Error: Unable to load user data. Please log in again.
            </h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;

