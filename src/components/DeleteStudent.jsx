import React, { useState } from 'react';

function DeleteStudent() {
  const [studentData, setStudentData] = useState({
    studentID: ''
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleAddStudent = () => {
    if (studentData.studentID) {
      // Dummy student data for demonstration
      const newStudent = {
        firstName: 'Zainab',
        lastName: 'Khan',
        studentID: studentData.studentID,
        contactNumber: '1234',
        email: 'zainabkhan@gmail.com',
        courseName: 'Tajweed',
        paymentStatus: 'Paid'
      };
      
      setStudents([...students, newStudent]);
      setStudentData({ studentID: '' }); // Reset form
    }
  };

  const handleDelete = (index) => {
    const newStudents = students.filter((_, i) => i !== index);
    setStudents(newStudents);
  };

  return (
    <div className="flex flex-col">
      <div className="bg-[#0C4A1F] text-[#FFEB3B] p-4 w-full">
        <h2 className="text-2xl font-bold mb-4">Delete Student</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddStudent();
          }}
          className="space-y-4"
        >
          <input
            type="text"
            name="studentID"
            placeholder="Enter Student ID"
            value={studentData.studentID}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white text-[#0C4A1F] placeholder-black focus:outline-none focus:ring focus:ring-[#FEE64B]"
            required
          />
          <button
            type="button"
            onClick={handleAddStudent}
            className="bg-[#FFEB3B] hover:bg-[#FEE64B] text-[#0C4A1F] font-bold py-2 px-4 rounded"
          >
            Delete Student
          </button>
        </form>
      </div>

      <div className="bg-[#F1F1F1] p-4 w-full mt-4">
        <h2 className="text-2xl font-bold mb-4">Student List</h2>
        <table className="min-w-full bg-white text-[#0C4A1F] border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">First Name</th>
              <th className="border px-4 py-2">Last Name</th>
              <th className="border px-4 py-2">Student ID</th>
              <th className="border px-4 py-2">Contact Number</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Course Name</th>
              <th className="border px-4 py-2">Payment Status</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{student.firstName}</td>
                <td className="border px-4 py-2">{student.lastName}</td>
                <td className="border px-4 py-2">{student.studentID}</td>
                <td className="border px-4 py-2">{student.contactNumber}</td>
                <td className="border px-4 py-2">{student.email}</td>
                <td className="border px-4 py-2">{student.courseName}</td>
                <td className="border px-4 py-2">{student.paymentStatus}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDelete(index)}
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