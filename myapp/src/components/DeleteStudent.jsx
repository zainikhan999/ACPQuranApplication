


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DeleteStudent() {
  const [email, setEmail] = useState('');
  const [students, setStudents] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch students from the backend
  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-students`);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async () => {
    if (!email) {
      setErrorMessage('Please enter an email');
      return;
    }

    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/delete-student/${email}`);
      setErrorMessage('Student deleted successfully!');
      setEmail('');
      // Refetch the students
      fetchStudents();
    } catch (error) {
      setErrorMessage(error.response.data.message || 'Failed to delete student');
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="bg-[#0C4A1F] text-[#FFEB3B] p-4 w-full">
        <h2 className="text-2xl font-bold mb-4">Delete Student</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleDelete();
          }}
          className="space-y-4"
        >
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
            required
          />
          <button
            type="submit"
            className="bg-[#FFEB3B] hover:bg-[#FEE64B] text-[#0C4A1F] font-bold py-2 px-4 rounded"
          >
            Delete Student
          </button>
          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}
        </form>
      </div>

      <div className="bg-[#F1F1F1] p-4 w-full mt-4">
        <h2 className="text-2xl font-bold mb-4">Student List</h2>
        <table className="min-w-full bg-white text-[#0C4A1F] border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">First Name</th>
              <th className="border px-4 py-2">Last Name</th>
              <th className="border px-4 py-2">Contact Number</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{student.firstName}</td>
                <td className="border px-4 py-2">{student.lastName}</td>
                <td className="border px-4 py-2">{student.contact}</td>
                <td className="border px-4 py-2">{student.email}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDelete(student.email)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DeleteStudent;