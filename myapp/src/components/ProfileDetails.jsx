
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ProfileDetails({ isOpen, onLogout, selectedSection, user }) {
//   const [userProfile, setUserProfile] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Ensure the profile section is selected and the user prop is available
//     if (selectedSection === 'profile' && user) {
//       setUserProfile(user); // Use the provided `user` prop initially

//       // Fetch additional profile details if needed
//       axios
//         .get(`http://localhost:3001/users?userName=${user.username}`)
//         .then((response) => {
//           if (response.data) {
//             setUserProfile(response.data);
//           } else {
//             setError('No profile data found.');
//           }
//         })
//         .catch((err) => {
//           console.error('Error fetching profile:', err);
//           setError('Failed to load profile details. Please try again.');
//         });
//     }
//   }, [selectedSection, user]);

//   // Render logic
//   if (!user) {
//     return (
//       <div>
//         <p className="text-red-500">Please log in to view your profile.</p>
//       </div>
//     );
//   }

//   return (
//     <div className={`bg-sidebar ${isOpen ? 'w-60' : 'w-15'} p-4`}>
//       {selectedSection === 'profile' ? (
//         userProfile ? (
//           <div>
//             <h2 className="font-bold text-lg mb-4">Profile Details</h2>
//             <form>
//               <div className="mb-4">
//                 <label className="block mb-1 font-medium">First Name</label>
//                 <input
//                   type="text"
//                   value={userProfile.firstName || 'N/A'}
//                   readOnly
//                   className="min-w-[200px] p-2 border rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-1 font-medium">Last Name</label>
//                 <input
//                   type="text"
//                   value={userProfile.lastName || 'N/A'}
//                   readOnly
//                   className="min-w-[200px] p-2 border rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-1 font-medium">Contact</label>
//                 <input
//                   type="text"
//                   value={userProfile.contact || 'N/A'}
//                   readOnly
//                   className="min-w-[200px] p-2 border rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-1 font-medium">Email</label>
//                 <input
//                   type="email"
//                   value={userProfile.email || 'N/A'}
//                   readOnly
//                   className="min-w-[200px] p-2 border rounded"
//                 />
//               </div>
//             </form>
//           </div>
//         ) : error ? (
//           <div>
//             <p className="text-red-500">{error}</p>
//             <p>Please verify your connection or try again later.</p>
//           </div>
//         ) : (
//           <p>Loading profile...</p>
//         )
//       ) : (
//         <p>Please select a section to view details.</p>
//       )}
//       <button onClick={onLogout} className="mt-auto bg-red-500 text-white py-2 px-4 rounded">
//         Logout
//       </button>
//     </div>
//   );
// }

// export default ProfileDetails;
// // import React, { useState, useEffect } from 'react';

// // function ProfileDetails({ isOpen, onLogout, selectedSection }) {
// //   // Define state for user profile
// //   const [userProfile, setUserProfile] = useState({
// //     firstName: '',
// //     lastName: '',
// //     contact: '',
// //     email: '',
// //   });

// //   // Simulating fetching user profile data
// //   useEffect(() => {
// //     if (selectedSection === 'profile') {
// //       setUserProfile({
// //         firstName: 'John',
// //         lastName: 'Doe',
// //         contact: '123-456-7890',
// //         email: 'john.doe@example.com',
// //       });
// //     }
// //   }, [selectedSection]);

// //   return (
// //     <div className={`bg-sidebar ${isOpen ? 'w-64' : 'w-20'} p-4`}>
// //       {selectedSection === 'profile' ? (
// //         <div>
// //           <h2 className="font-bold text-lg mb-4">Profile Details</h2>
// //           <form>
// //             <div className="mb-4">
// //               <label className="block mb-1 font-medium">First Name</label>
// //               <input
// //                 type="text"
// //                 value={userProfile.firstName}
// //                 readOnly
// //                 className="min-w-[200px] p-2 border rounded"
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label className="block mb-1 font-medium">Last Name</label>
// //               <input
// //                 type="text"
// //                 value={userProfile.lastName}
// //                 readOnly
// //                 className="min-w-[200px] p-2 border rounded"
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label className="block mb-1 font-medium">Contact</label>
// //               <input
// //                 type="text"
// //                 value={userProfile.contact}
// //                 readOnly
// //                 className="min-w-[200px] p-2 border rounded"
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label className="block mb-1 font-medium">Email</label>
// //               <input
// //                 type="email"
// //                 value={userProfile.email}
// //                 readOnly
// //                 className="min-w-[200px] p-2 border rounded"
// //               />
// //             </div>
// //           </form>
// //         </div>
// //       ) : (
// //         <p>Please select a section to view details.</p>
// //       )}
// //       <button onClick={onLogout} className="mt-auto bg-red-500 text-white py-2 px-4 rounded">
// //         Logout
// //       </button>
// //     </div>
// //   );
// // }

// // export default ProfileDetails;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ProfileDetails({ isOpen, onLogout, selectedSection, user }) {
//   const [userProfile, setUserProfile] = useState(null);
//   const [error, setError] = useState('');

//   // Only fetch profile details if the profile section is selected
//   useEffect(() => {
//     if (selectedSection === 'profile' && user) {
//       // Set the user data from the prop initially
//       setUserProfile(user);

//       // Optionally fetch additional profile details if required
//       // If you already have all necessary data in `user`, you can skip this
//       axios
//         .get(`http://localhost:3001/users?email=${user.email.toLowerCase()}`)
//         .then((response) => {
//           if (response.data) {
//             setUserProfile(response.data); // Update profile with full data from backend
//           } else {
//             setError('No profile data found.');
//           }
//         })
//         .catch((err) => {
//           console.error('Error fetching profile:', err);
//           setError('Failed to load profile details. Please try again.');
//         });
//     }
//   }, [selectedSection, user]); // Dependency on selectedSection and user

//   // If no user is provided, prompt login
//   if (!user) {
//     return (
//       <div>
//         <p className="text-red-500">Please log in to view your profile.</p>
//       </div>
//     );
//   }

//   return (
//     <div className={`bg-sidebar ${isOpen ? 'w-60' : 'w-15'} p-4`}>
//       {selectedSection === 'profile' ? (
//         userProfile ? (
//           <div>
//             <h2 className="font-bold text-lg mb-4">Profile Details</h2>
//             <form>
//               <div className="mb-4">
//                 <label className="block mb-1 font-medium">First Name</label>
//                 <input
//                   type="text"
//                   value={userProfile.firstName || 'N/A'}
//                   readOnly
//                   className="min-w-[200px] p-2 border rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-1 font-medium">Last Name</label>
//                 <input
//                   type="text"
//                   value={userProfile.lastName || 'N/A'}
//                   readOnly
//                   className="min-w-[200px] p-2 border rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-1 font-medium">Contact</label>
//                 <input
//                   type="text"
//                   value={userProfile.contact || 'N/A'}
//                   readOnly
//                   className="min-w-[200px] p-2 border rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-1 font-medium">Email</label>
//                 <input
//                   type="email"
//                   value={userProfile.email || 'N/A'}
//                   readOnly
//                   className="min-w-[200px] p-2 border rounded"
//                 />
//               </div>
//             </form>
//           </div>
//         ) : error ? (
//           <div>
//             <p className="text-red-500">{error}</p>
//             <p>Please verify your connection or try again later.</p>
//           </div>
//         ) : (
//           <p>Loading profile...</p>
//         )
//       ) : (
//         <p>Please select a section to view details.</p>
//       )}
//       <button onClick={onLogout} className="mt-auto bg-red-500 text-white py-2 px-4 rounded">
//         Logout
//       </button>
//     </div>
//   );
// }

// export default ProfileDetails;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ProfileDetails({ isOpen, onLogout, selectedSection, user }) {
//   const [userProfile, setUserProfile] = useState(null); // We will set userProfile based on user or fetch data
//   const [error, setError] = useState('')

//   useEffect(() => {
//     console.log('Selected section:', selectedSection);
//     console.log('User prop:', user);

//     if (selectedSection === 'profile' && user) {
//       // If user is already provided as a prop, set userProfile to that data
//       if (!userProfile) {
//         console.log('Fetching profile data from API...');
//         axios
//           .get(`http://localhost:3001/users?email=${user.email.toLowerCase()}`)
//           .then((response) => {
//             if (response.data) {
//               console.log('API response:', response.data);
//               setUserProfile(response.data); // Set profile data from API
//             } else {
//               setError('No profile data found.');
//             }
//           })
//           .catch((err) => {
//             console.error('Error fetching profile:', err);
//             setError('Failed to load profile details. Please try again.');
//           });
//       } else {
//         console.log('Using user data from prop directly:', user);
//         setUserProfile(user); // If user prop has data, use it immediately
//       }
//     }
//   }, [selectedSection, user, userProfile]); // Ensure useEffect runs on selectedSection, user, and userProfile change

//   // If no user is provided, prompt login
//   if (!user) {
//     return (
//       <div>
//         <p className="text-red-500">Please log in to view your profile.</p>
//       </div>
//     );
//   }

//   return (
//     <div className={`bg-sidebar ${isOpen ? 'w-60' : 'w-15'} p-4`}>
//       {selectedSection === 'profile' ? (
//         userProfile ? (
//           <div>
//             <h2 className="font-bold text-lg mb-4">Profile Details</h2>
//             <form>
//               <div className="mb-4">
//                 <label className="block mb-1 font-medium">First Name</label>
//                 <input
//                   type="text"
//                   value={userProfile.firstName || 'N/A'}
//                   readOnly
//                   className="min-w-[200px] p-2 border rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-1 font-medium">Last Name</label>
//                 <input
//                   type="text"
//                   value={userProfile.lastName || 'N/A'}
//                   readOnly
//                   className="min-w-[200px] p-2 border rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-1 font-medium">Contact</label>
//                 <input
//                   type="text"
//                   value={userProfile.contact || 'N/A'}
//                   readOnly
//                   className="min-w-[200px] p-2 border rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-1 font-medium">Email</label>
//                 <input
//                   type="email"
//                   value={userProfile.email || 'N/A'}
//                   readOnly
//                   className="min-w-[200px] p-2 border rounded"
//                 />
//               </div>
//             </form>
//           </div>
//         ) : error ? (
//           <div>
//             <p className="text-red-500">{error}</p>
//             <p>Please verify your connection or try again later.</p>
//           </div>
//         ) : (
//           <p>Loading profile...</p>
//         )
//       ) : (
//         <p>Please select a section to view details.</p>
//       )}
//       <button onClick={onLogout} className="mt-auto bg-red-500 text-white py-2 px-4 rounded">
//         Logout
//       </button>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileDetails({ isOpen, onLogout, selectedSection }) {
  const [userProfile, setUserProfile] = useState(null); // Profile data state
  const [error, setError] = useState(''); // Error state

  useEffect(() => {
    // Retrieve the user from local storage
    const storedUser = localStorage.getItem('user');
    const currentUser = storedUser ? JSON.parse(storedUser) : null;

    if (selectedSection === 'profile' && currentUser) {
      const fetchedUsername = currentUser.username?.toLowerCase(); // Safeguard against undefined
      if (fetchedUsername) {
        console.log('Fetching profile data from API...');
        axios
          .get(`http://localhost:3001/users?userName=${fetchedUsername}`)
          .then((response) => {
            if (response.data) {
              console.log('API response:', response.data);
              setUserProfile(response.data);
            } else {
              setError('No profile data found.');
            }
          })
          .catch((err) => {
            console.error('Error fetching profile:', err);
            setError('Failed to load profile details. Please try again.');
          });
      } else {
        console.error('User does not have a username.');
        setError('User information is incomplete.');
      }
    }
  }, [selectedSection]);

  return (
    <div className={`bg-sidebar ${isOpen ? 'w-60' : 'w-15'} p-4`}>
      {selectedSection === 'profile' ? (
        userProfile ? (
          <div>
            <h2 className="font-bold text-lg mb-4">Profile Details</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-1 font-medium">First Name</label>
                <input
                  type="text"
                  value={userProfile.firstName || 'N/A'}
                  readOnly
                  className="min-w-[200px] p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Last Name</label>
                <input
                  type="text"
                  value={userProfile.lastName || 'N/A'}
                  readOnly
                  className="min-w-[200px] p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Contact</label>
                <input
                  type="text"
                  value={userProfile.contact || 'N/A'}
                  readOnly
                  className="min-w-[200px] p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  value={userProfile.email || 'N/A'}
                  readOnly
                  className="min-w-[200px] p-2 border rounded"
                />
              </div>
            </form>
          </div>
        ) : error ? (
          <div>
            <p className="text-red-500">{error}</p>
            <p>Please verify your connection or try again later.</p>
          </div>
        ) : (
          <p>Loading profile...</p>
        )
      ) : (
        <p>Please select a section to view details.</p>
      )}
      <button onClick={onLogout} className="mt-auto bg-red-500 text-white py-2 px-4 rounded">
        Logout
      </button>
    </div>
  );
}

export default ProfileDetails;
