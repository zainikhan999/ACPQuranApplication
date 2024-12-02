
import React from 'react'
import { Link, Route, Routes ,useLocation } from 'react-router-dom';
import Home from './Home';
import Course from './Course';
import SignUp from './SignUp';
import Brand from './Brand';
import Dashboard from './Dashboard';
import Login from './Login';
import PaymentDetails from './PaymentDetails';

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
              <li className='text-[#FFD54F]'><Link to="/Course">Aboutus</Link></li>

              <li className='text-[#FFD54F]'><Link to="/Course">Courses</Link></li>

              <li className='text-[#FFD54F]'><Link to="/Course">Contactus</Link></li>

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

        
      </Routes>
    
    
    </>
  )
}