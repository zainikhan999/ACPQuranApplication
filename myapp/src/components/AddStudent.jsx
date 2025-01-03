
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddStudent() {
  const [userName, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    // Prepare data to send to the server
    const studentData = {
      userName,
      firstName,
      lastName,
      email,
      password,
      contact
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/add-student`, studentData);
      console.log("Add Student Response:", response.data);

      // Show success alert
      alert('Student added successfully!');

      // Reset input fields
      setUsername('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setContact('');

      // Redirect to Admin Dashboard
      navigate('/AdminDashboard');
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Failed to add student');
      } else {
        setErrorMessage('Server error');
      }
      console.error('Error adding student:', error); // Log the error for debugging
    }
  };

  return (
    <div className="bg-[#0C4A1F] text-[#FFEB3B] p-4">
      <h2 className="text-2xl font-bold mb-4 text-[#FFEB3B]">Add Students</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="text-black"></label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter User Name"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
            required
          />
        </div>
        <div>
          <label htmlFor="firstName" className="text-black"></label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="text-black"></label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="text-black"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="text-black"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
            required
          />
        </div>
        <div>
          <label htmlFor="contact" className="text-black"></label>
          <input
            type="text"
            name="contact"
            id="contact"
            placeholder="Enter Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
            required
          />
        </div>
        
        <button type="submit" className="bg-[#FFEB3B] hover:bg-[#FEE64B] text-[#0C4A1F] font-bold py-2 px-4 rounded">
          Add Student
        </button>
        {errorMessage && (
          <p className="text-red-500 text-sm text-center">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}