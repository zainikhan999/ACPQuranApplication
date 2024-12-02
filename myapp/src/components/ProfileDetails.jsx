import React, { useState, useEffect } from 'react';

function ProfileDetails({ isOpen, onLogout, selectedSection }) {
  // Define state for user profile
  const [userProfile, setUserProfile] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
  });

  // Simulating fetching user profile data
  useEffect(() => {
    if (selectedSection === 'profile') {
      setUserProfile({
        firstName: 'John',
        lastName: 'Doe',
        contact: '123-456-7890',
        email: 'john.doe@example.com',
      });
    }
  }, [selectedSection]);

  return (
    <div className={`bg-sidebar ${isOpen ? 'w-64' : 'w-20'} p-4`}>
      {selectedSection === 'profile' ? (
        <div>
          <h2 className="font-bold text-lg mb-4">Profile Details</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1 font-medium">First Name</label>
              <input
                type="text"
                value={userProfile.firstName}
                readOnly
                className="min-w-[200px] p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Last Name</label>
              <input
                type="text"
                value={userProfile.lastName}
                readOnly
                className="min-w-[200px] p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Contact</label>
              <input
                type="text"
                value={userProfile.contact}
                readOnly
                className="min-w-[200px] p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                value={userProfile.email}
                readOnly
                className="min-w-[200px] p-2 border rounded"
              />
            </div>
          </form>
        </div>
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
