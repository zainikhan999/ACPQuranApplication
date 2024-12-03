
import React from 'react'
import { Link, Route, Routes ,useLocation } from 'react-router-dom';
import Home from './Home';
import Course from './Course';
import SignUp from './SignUp';
import Brand from './Brand';
import Dashboard from './Dashboard';
import Login from './Login';
import PaymentDetails from './PaymentDetails';
import AboutUs from './AboutUs';
import AdminDashboard from './AdminDashboard';
import AddStudent from  './AddStudent';
import ContactUs from './ContactUs';
import DeleteStudent from './DeleteStudent';
import Side from './Side';
import UpdateStudent from './UpdateStudent';
import ViewMessages from './ViewMessages';
import ViewStudents from './ViewStudents';
export default function Navbar() {
  
  const location = useLocation();

  return (
  
    <>
        {location.pathname !== '/Dashboard' && (
        <nav className='flex flex-row gap-20 bg-[#004D40] w-full h-28 items-center sticky top-0 z-10'>
          <Brand/>
          <ul>
            <div className='flex flex-row gap-7 '>
              <li className='text-[#FFD54F]'><Link to="/">Home</Link></li>
              <li className='text-[#FFD54F]'><Link to="/AboutUs">Aboutus</Link></li>

              <li className='text-[#FFD54F]'><Link to="/Course">Courses</Link></li>

              <li className='text-[#FFD54F]'><Link to="/ContactUs">Contactus</Link></li>

              <li className='text-[#FFD54F]'><Link to="/SignUp">SignUp</Link></li>
              <li className='text-[#FFD54F]'><Link to="/Login">Login</Link></li>
            </div>
          </ul>
        </nav>
      )}

      <Routes className='flex flex-row justify-center'>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/PaymentDetails" element={<PaymentDetails/>}/>
        <Route path="/AddStudent" element={<AddStudent/>}/>
        <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
        <Route path="/DeleteStudent" element={<DeleteStudent/>}/>
        <Route path="/Side" element={<Side/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/UpdateStudent" element={<UpdateStudent/>}/>
        <Route path="/ViewMessages" element={<ViewMessages/>}/>
        <Route path="/ViewStudents" element={<ViewStudents/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        
      </Routes>
    
    
    </>
  )
}