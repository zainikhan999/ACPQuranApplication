
// // import React, { useState, useEffect } from 'react';
// // import { Link, Route, Routes, useNavigate, Navigate } from 'react-router-dom'; // Added Navigate
// // import Home from './Home';
// // import Course from './Course';
// // import SignUp from './SignUp';
// // import Brand from './Brand';
// // import Dashboard from './Dashboard';
// // import Login from './Login';
// // import AdminPage from './AdminPage'; // Admin page component
// // import PaymentDetails from './PaymentDetails';
// // import PaymentForm from './PaymentForm';

// // export default function Navbar() {
// //   const [user, setUser] = useState(null);
// //   const navigate = useNavigate();

// //   // Check user info in localStorage when component mounts
// //   useEffect(() => {
// //     const userData = JSON.parse(localStorage.getItem('user'));
// //     if (userData) {
// //       setUser(userData);  // Set user state if user data is found
// //     }
// //   }, []);

// //   const handleLogout = () => {
// //     setUser(null);  // Clear user state
// //     localStorage.removeItem('user');  // Remove user from localStorage
// //     navigate('/');  // Redirect to home page
// //   };

// //   // Protected Route logic for normal user
// //   const ProtectedRoute = ({ element }) => {
// //     if (!user) {
// //       return <Navigate to="/Login" replace />;
// //     }
// //     return element;
// //   };

// //   // Admin Protected Route logic
// //   const AdminRoute = ({ element }) => {
// //     if (!user || user.userType !== 'admin') {
// //       return <Navigate to="/" replace />;  // Redirect non-admins to Home
// //     }
// //     return element;
// //   };

// //   return (
// //     <>
// //       <nav className='flex flex-row gap-20 bg-[#004D40] w-full h-28 items-center sticky top-0 z-10'>
// //         <Brand />
// //         <ul className='flex flex-row gap-7'>
// //           {/* Conditionally render username or login/signup */}
// //           {user ? (
// //             <>
// //               <li className='text-[#FFD54F]'><Link to="/">Home</Link></li>
// //               <li className='text-[#FFD54F]'><Link to="/Course">About Us</Link></li>
// //               <li className='text-[#FFD54F]'><Link to="/Course">Courses</Link></li>
// //               <li className='text-[#FFD54F]'><Link to="/Course">Contact Us</Link></li>
// //               <li className='text-[#FFD54F]'><Link to="/Dashboard">Dashboard</Link></li>

// //               {/* Admin specific link */}
// //               {user.userType === 'admin' && (
// //                 // <li className='text-[#FFD54F]'><Link to="/AdminPage">Admin Page</Link></li>
// //                 <li className='text-[#FFD54F]'>Admin Page</li>

// //               )}

// //               {/* Logout button */}
// //               <li className='text-[#FFD54F]' onClick={handleLogout}>Logout</li>
// //             </>
// //           ) : (
// //             <>
// //               <li className='text-[#FFD54F]'><Link to="/">Home</Link></li>
// //               <li className='text-[#FFD54F]'><Link to="/Course">About Us</Link></li>
// //               <li className='text-[#FFD54F]'><Link to="/Course">Courses</Link></li>
// //               <li className='text-[#FFD54F]'><Link to="/Course">Contact Us</Link></li>
// //               <li className='text-[#FFD54F]'><Link to="/SignUp">Sign Up</Link></li>
// //               <li className='text-[#FFD54F]'><Link to="/Login">Login</Link></li>
// //             </>
// //           )}
// //         </ul>
// //       </nav>

// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/Course" element={<Course />} />
// //         <Route path="/SignUp" element={<SignUp />} />
// //         <Route path="/Login" element={<Login />} />

// //         {/* Protected Routes */}
// //         <Route
// //           path="/Dashboard"
// //           element={<ProtectedRoute element={<Dashboard />} />}
// //         />

// //         {/* Admin Protected Route */}
// //         <Route
// //           path="/AdminPage"
// //           element={<AdminRoute element={<AdminPage />} />}
// //         />

// //         <Route path="/PaymentDetails" element={<PaymentDetails />} />
// //         <Route path="/PaymentForm" element={<PaymentForm />} />
// //       </Routes>
// //     </>
// //   );
// // }
// // import React, { useState, useEffect } from 'react';
// // import { Link, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
// // import Home from './Home';
// // import Course from './Course';
// // import SignUp from './SignUp';
// // import Dashboard from './Dashboard';
// // import Login from './Login';
// // import AdminPage from './AdminPage';
// // import PaymentDetails from './PaymentDetails';
// // import PaymentForm from './PaymentForm';
// // import Brand from './Brand';

// // export default function Navbar() {
// //   const [user, setUser] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const userData = JSON.parse(localStorage.getItem('user'));
// //     if (userData) setUser(userData);
// //   }, []);

// //   const handleLogout = () => {
// //     setUser(null);
// //     localStorage.removeItem('user');
// //     navigate('/');
// //   };

// //   const ProtectedRoute = ({ element }) => {
// //     if (!user) return <Navigate to="/Login" replace />;
// //     return element;
// //   };

// //   const AdminRoute = ({ element }) => {
// //     if (!user || user.userType !== 'admin') return <Navigate to="/" replace />;
// //     return element;
// //   };

// //   return (
// //     <>
// //       <nav className="flex flex-row gap-20 bg-[#004D40] w-full h-28 items-center sticky top-0 z-10">
// //         <Brand />
// //         <ul className="flex flex-row gap-7">
// //           {user ? (
// //             <>
// //               <li className="text-[#FFD54F]"><Link to="/">Home</Link></li>
// //               <li className="text-[#FFD54F]"><Link to="/Course">About </Link></li>
// //               <li className="text-[#FFD54F]"><Link to="/Course">Courses</Link></li>
// //               <li className="text-[#FFD54F]"><Link to="/Course">Contact</Link></li>

// //               <li className="text-[#FFD54F]"><Link to="/Dashboard">Dashboard</Link></li>
// //               {user.userType === 'admin' && (
// //                 <li className="text-[#FFD54F]"><Link to="/AdminPage">Admin Page</Link></li>
// //               )}
// //               <li className="text-[#FFD54F]"><Link to="/SignUp">Sign Up</Link></li>
// //               <li className="text-[#FFD54F]"><Link to="/Login">Login</Link></li>            
// //               </>
// //           ) : (
// //             <>
// //               <li className="text-[#FFD54F]"><Link to="/">Home</Link></li>
// //               <li className="text-[#FFD54F]"><Link to="/Course">About </Link></li>

// //               <li className="text-[#FFD54F]"><Link to="/Course">Courses</Link></li>
// //               <li className="text-[#FFD54F]"><Link to="/Course">Contact</Link></li>

// //               <li className="text-[#FFD54F]"><Link to="/SignUp">Sign Up</Link></li>
// //               <li className="text-[#FFD54F]"><Link to="/Login">Login</Link></li>
// //             </>
// //           )}
// //         </ul>
// //       </nav>

// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/Course" element={<Course />} />
// //         <Route path="/SignUp" element={<SignUp />} />
// //         <Route path="/Login" element={<Login />} />
// //         <Route path="/Dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
// //         <Route path="/AdminPage" element={<AdminRoute element={<AdminPage />} />} />
// //         <Route path="/PaymentDetails" element={<PaymentDetails />} />
// //         <Route path="/PaymentForm" element={<PaymentForm />} />
// //       </Routes>
// //     </>
// //   );
// // }
// import React, { useState, useEffect } from 'react';
// import { Link, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
// import Home from './Home';
// import Course from './Course';
// import SignUp from './SignUp';
// import Dashboard from './Dashboard';
// import Login from './Login';
// import PaymentDetails from './PaymentDetails';
// import PaymentForm from './PaymentForm';
// import Brand from './Brand';

// export default function Navbar() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   // Check user info in localStorage when component mounts
//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem('user'));
//     if (userData) setUser(userData);
//   }, []);

//   // Handle user logout
//   const handleLogout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//     navigate('/'); // Redirect to the home page
//   };

//   // Protected Route for logged-in users
//   const ProtectedRoute = ({ element }) => {
//     if (!user) return <Navigate to="/Login" replace />;
//     return element;
//   };

//   return (
//     <>
//       {/* Navigation bar */}
//       <nav className="flex flex-row gap-20 bg-[#004D40] w-full h-28 items-center sticky top-0 z-10">
//         <Brand />
//         <ul className="flex flex-row gap-7">
//           <li className="text-[#FFD54F]">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="text-[#FFD54F]">
//             <Link to="/Course">About</Link>
//           </li>
//           <li className="text-[#FFD54F]">
//             <Link to="/Course">Courses</Link>
//           </li>
//           <li className="text-[#FFD54F]">
//             <Link to="/Course">Contact</Link>
//           </li>
//           {user ? (
//             <>
//               <li className="text-[#FFD54F]">
//                 <Link to="/Dashboard">Dashboard</Link>
//               </li>
//               <li
//                 className="text-[#FFD54F] cursor-pointer"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </li>
//             </>
//           ) : (
//             <>
//               <li className="text-[#FFD54F]">
//                 <Link to="/SignUp">Sign Up</Link>
//               </li>
//               <li className="text-[#FFD54F]">
//                 <Link to="/Login">Login</Link>
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Course" element={<Course />} />
//         <Route path="/SignUp" element={<SignUp />} />
//         <Route path="/Login" element={<Login />} />
//         <Route
//           path="/Dashboard"
//           element={<ProtectedRoute element={<Dashboard />} />}
//         />
//         <Route path="/PaymentDetails" element={<PaymentDetails />} />
//         <Route path="/PaymentForm" element={<PaymentForm />} />
//       </Routes>
//     </>
//   );
// }
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