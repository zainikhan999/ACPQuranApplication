import React, { useState } from 'react';

function AddStudent() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(studentData);
  };

  return (
    <div className="bg-[#0C4A1F] text-[#FFEB3B] p-4">
      <h2 className="text-2xl font-bold mb-4 text-[#FFEB3B]">Add Students</h2> {/* Changed heading */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="text-black"></label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter First Name"
            value={studentData.firstName}
            onChange={handleChange}
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
            value={studentData.lastName}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
            required
          />
        </div>
        <div>
          <label htmlFor="studentID" className="text-black"></label>
          <input
            type="text"
            name="studentID"
            id="studentID"
            placeholder="Enter Student ID"
            value={studentData.studentID}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
            required
          />
        </div>
        <div>
          <label htmlFor="contactNumber" className="text-black"></label>
          <input
            type="tel"
            name="contactNumber"
            id="contactNumber"
            placeholder="Enter Contact Number"
            value={studentData.contactNumber}
            onChange={handleChange}
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
            value={studentData.email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
            required
          />
        </div>
        <div>
          <label htmlFor="paymentStatus" className="text-black"></label>
          <select
            name="paymentStatus"
            id="paymentStatus"
            value={studentData.paymentStatus}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white text-[#0C4A1F] focus:outline-none focus:ring focus:ring-[#FEE64B]"
            required
          >
            <option value="" disabled>Select Payment Status</option>
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option> {/* Updated options */}
          </select>
        </div>
        <div>
          <label htmlFor="courseName" className="text-black"></label>
          <input
            type="text"
            name="courseName"
            id="courseName"
            placeholder="Enter Course Name"
            value={studentData.courseName}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
            required
          />
        </div>
        <div>
          <label htmlFor="coursePrice" className="text-black"></label>
          <input
            type="number"
            name="coursePrice"
            id="coursePrice"
            placeholder="Enter Course Price"
            value={studentData.coursePrice}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
            required
          />
        </div>
        
        <button type="submit" className="bg-[#FFEB3B] hover:bg-[#FEE64B] text-[#0C4A1F] font-bold py-2 px-4 rounded">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;