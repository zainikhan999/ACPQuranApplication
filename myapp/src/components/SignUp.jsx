

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API calls
import Herosection from './Herosection';

export default function SignUp() {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // General error message
  const [userNameError, setUserNameError] = useState(''); // Error message for username
  const [emailError, setEmailError] = useState(''); // Error message for email
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  const navigate = useNavigate(); // To navigate to Dashboard after successful signup


  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page refresh
  
    // Clear any previous error messages
    setErrorMessage('');
    setUserNameError('');
    setEmailError('');
  
    // Validation for restricted usernames
    if (userName.toLowerCase() === 'laiba001') {
      setUserNameError('This username already exists.');
      return;
    }
  
    // Validation for password length
    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return;
    }
  
    // Validation for contact number format: numeric and between 10 to 15 digits
    const contactRegex = /^\d{10,15}$/;
    if (!contactRegex.test(contact)) {
      setErrorMessage('Contact number must be numeric and between 10 to 15 digits.');
      return;
    }
  
    try {
      // Make the API call to register the user
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
        userName,
        firstName,
        lastName,
        email,
        password,
        contact,
      });
  
      if (response.status === 201) {
        console.log('User registered successfully:', response.data);
  
        const userData = { username: userName, firstName, lastName, email, contact };
        localStorage.setItem('user', JSON.stringify(userData)); // Store user data in localStorage
  
        // Show the popup on successful signup
        setShowPopup(true);
  
        // Immediately navigate to the dashboard after the popup timeout
        setTimeout(() => {
          setShowPopup(false);
          navigate('/Dashboard'); // Navigate to the dashboard after successful signup
        }, 3000);
      }
    } catch (error) {
      if (error.response?.data?.message) {
        const { message } = error.response.data;
  
        if (message.includes('Username')) {
          setUserNameError('This username is already taken. Please choose another.');
        }
        if (message.includes('Email')) {
          setEmailError('This email is already registered. Please use a different email.');
        }
      } else {
        console.error('Error response structure:', error.response); // Log for debugging
        setErrorMessage('Signup failed. Please try again.');
      }
    }
  };
  
  return (
    <>
      <Herosection imageUrl="/HomePage.png" height="h-[200px]">
        <h1>Sign Up</h1>
      </Herosection>
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="max-w-md w-full p-8 border border-iconsAndBorders rounded-lg shadow-lg bg-white">
          <h1 className="text-3xl font-bold text-headings text-center mb-6">Welcome User!</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-black mb-2">User Name</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primaryButton"
              />
              {userNameError && <p className="text-red-500 text-xs">{userNameError}</p>}
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-black mb-2">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primaryButton"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-black mb-2">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primaryButton"
                />
              </div>
            </div>

            <div>
              <label className="block text-black mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primaryButton"
              />
              {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
            </div>

            <div>
              <label className="block text-black mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primaryButton"
              />
            </div>

            <div>

              <label className="block text-black mb-2">Contact No.</label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primaryButton"
              />
            </div>

            {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}

            <button
              type="submit"
              className="w-full p-3 bg-primaryButton text-black font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg text-green-400">You have successfully signed up!</p>
          </div>
        </div>
      )}
    </>
  );
}