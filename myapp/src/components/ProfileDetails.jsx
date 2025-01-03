
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
          .get(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/users?userName=${fetchedUsername}`)
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