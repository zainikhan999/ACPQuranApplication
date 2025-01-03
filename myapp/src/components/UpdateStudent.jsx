import React, { useState } from 'react';
import axios from 'axios';

function UpdateStudent() {
  const [email, setEmail] = useState('');
  const [studentData, setStudentData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
  });
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const fetchStudentData = async () => {
    if (!email) {
      setError('Please enter an email.');
      return;
    }

    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-student/${email}`);
      setStudentData(response.data);
      setError(''); // Clear any previous errors
    } catch (err) {
      setError('Student not found or an error occurred.');
      console.error('Error fetching student data:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, contact } = studentData;

    try {
      const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/update-student/${email}`, {
        firstName,
        lastName,
        contact,
      });
      alert(response.data.message); // Optionally alert the user
    } catch (error) {
      console.error('Error updating student:', error);
      alert('Failed to update student: ' + (error.response?.data.message || 'Unknown error'));
    }
  };

  return (
    <div className="bg-[#0C4A1F] text-[#FFEB3B] p-4">
      <h2 className="text-2xl font-bold mb-4">Update Student</h2>
      <input
        type="email"
        placeholder="Enter Student Email"
        value={email}
        onChange={handleEmailChange}
        className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
      />
      <button
        onClick={fetchStudentData}
        className="bg-[#FFEB3B] hover:bg-[#FEE64B] text-[#0C4A1F] font-bold py-2 px-4 rounded mt-2"
      >
        Fetch Student Data
      </button>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input
          type="text"
          name="firstName"
          placeholder="Student First Name"
          value={studentData.firstName}
          onChange={handleChange}
          className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Student Last Name"
          value={studentData.lastName}
          onChange={handleChange}
          className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
          required
        />
        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          value={studentData.contact}
          onChange={handleChange}
          className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
          required
        />
        
        <button type="submit" className="bg-[#FFEB3B] hover:bg-[#FEE64B] text-[#0C4A1F] font-bold py-2 px-4 rounded">
          Update Student
        </button>
      </form>
    </div>
  );
}

export default UpdateStudent;