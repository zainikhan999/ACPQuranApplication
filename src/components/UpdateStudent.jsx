import React, { useState, useEffect } from 'react';

function UpdateStudent({ currentStudent, onUpdate }) {
  const [studentData, setStudentData] = useState({
    firstName: '',
    lastName: '',
    studentID: '',
    contactNumber: '',
    email: '',
    paymentStatus: '',
    courseName: '',
    coursePrice: ''
  });

  useEffect(() => {
    if (currentStudent) {
      setStudentData(currentStudent);
    }
  }, [currentStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onUpdate function passed as a prop
    onUpdate(studentData);
  };

  return (
    <div className="bg-[#0C4A1F] text-[#FFEB3B] p-4">
      <h2 className="text-2xl font-bold mb-4">Update Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          type="text"
          name="studentID"
          placeholder="Student ID"
          value={studentData.studentID}
          onChange={handleChange}
          className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
          required
        />
        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          value={studentData.contactNumber}
          onChange={handleChange}
          className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={studentData.email}
          onChange={handleChange}
          className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
          required
        />
        <select
          name="paymentStatus"
          value={studentData.paymentStatus}
          onChange={handleChange}
          className="w-full p-2 rounded bg-white text-[#0C4A1F] focus:outline-none focus:ring focus:ring-[#FEE64B]"
          required
        >
          <option value="" disabled>Select Payment Status</option>
          <option value="Paid">Paid</option>
          <option value="Unpaid">Unpaid</option>
        </select>
        <input
          type="text"
          name="courseName"
          placeholder="Course Name"
          value={studentData.courseName}
          onChange={handleChange}
          className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
          required
        />
        <input
          type="number"
          name="coursePrice"
          placeholder="Course Price"
          value={studentData.coursePrice}
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