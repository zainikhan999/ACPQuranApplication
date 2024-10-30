import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Herosection from './Herosection';

export default function SignUp() {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      userName,
      firstName,
      lastName,
      email,
      password,
      contact,
    });
    navigate('/user-dashboard');
  };

  return (

    <>
     <Herosection imageUrl="/HomePage.png" height="h-[200px]">
      <h1>SignUp</h1>
    </Herosection>
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="max-w-md w-full p-8 border border-iconsAndBorders rounded-lg shadow-lg ">
        <h1 className="text-3xl font-bold text-headings text-center mb-8">Welcome User!</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-black mb-2">User Name:</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primaryButton"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-black mb-2">First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primaryButton"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-black mb-2">Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primaryButton"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-black mb-2">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primaryButton"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-black mb-2">Contact No.:</label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primaryButton"
              />
            </div>
          </div>
          <div>
            <label className="block text-black mb-2">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primaryButton"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-primaryButton text-black font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
