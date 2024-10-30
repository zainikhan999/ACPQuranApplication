import React, { useState } from 'react';

function ViewStudents() {
  // Sample student data
  const studentData = {
    firstName: 'Zainab',
    lastName: 'Khan',
    studentID: 12,
    contactNumber: 1234,
    email: 'zainabkhan@gmail.com',
    paymentStatus: 'Paid',
    courseName: 'Tajweed',
    coursePrice: 3000
  };

  const [showDetails, setShowDetails] = useState(false);

  const handleViewClick = () => {
    setShowDetails(!showDetails); // Toggle visibility
  };

  return (
    <div className="bg-[#0C4A1F] text-[#FFEB3B] p-4">
      <h2 className="text-2xl font-bold mb-4">View Student</h2>
      <button 
        onClick={handleViewClick} 
        className="bg-[#FFEB3B] hover:bg-[#FEE64B] text-[#0C4A1F] font-bold py-2 px-4 rounded mb-4"
      >
        {showDetails ? 'Hide Details' : 'View Details'}
      </button>
      
      {showDetails && (
        <table className="min-w-full bg-white text-[#0C4A1F] border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">First Name</th>
              <th className="border px-4 py-2">Last Name</th>
              <th className="border px-4 py-2">Student ID</th>
              <th className="border px-4 py-2">Contact Number</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Payment Status</th>
              <th className="border px-4 py-2">Course Name</th>
              <th className="border px-4 py-2">Course Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">{studentData.firstName}</td>
              <td className="border px-4 py-2">{studentData.lastName}</td>
              <td className="border px-4 py-2">{studentData.studentID}</td>
              <td className="border px-4 py-2">{studentData.contactNumber}</td>
              <td className="border px-4 py-2">{studentData.email}</td>
              <td className="border px-4 py-2">{studentData.paymentStatus}</td>
              <td className="border px-4 py-2">{studentData.courseName}</td>
              <td className="border px-4 py-2">{studentData.coursePrice}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewStudents;