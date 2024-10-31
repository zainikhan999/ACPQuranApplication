import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Brand from './Brand'; 
import AdminDashboard from './AdminDashboard';
import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';
import UpdateStudent from './UpdateStudent';
import ViewStudents from './ViewStudents';
import ContactUs from './ContactUs';
import Login from './Login';
import AboutUs from './AboutUs';

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/AdminDashboard' && (
        <nav className='flex justify-between items-center bg-[#004D40] w-full h-28 sticky top-0 z-10 p-12'>
          <Brand />
          <ul className='flex flex-row gap-7'>
            <li className='text-[#FFD54F]'><Link to="/">Home</Link></li>
            <li className='text-[#FFD54F]'><Link to="/AboutUs">About Us</Link></li>
            <li className='text-[#FFD54F]'><Link to="#">Courses</Link></li>   
            <li className='text-[#FFD54F]'><Link to="/ContactUs">Contact Us</Link></li>
            <li className='text-[#FFD54F]'><Link to="#">SignUp</Link></li>
            <li className='text-[#FFD54F]'><Link to="/Login">Login</Link></li>
          </ul>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />}>
          <Route path="add" element={<AddStudent />} />
          <Route path="delete" element={<DeleteStudent />} />
          <Route path="update" element={<UpdateStudent />} />
          <Route path="view" element={<ViewStudents />} />
        </Route>
      </Routes>
    </>
  );
}
