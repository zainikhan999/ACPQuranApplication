/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewStudent() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');

  const fetchStudents = async () => {
    try {
      const response = await axios.get('${import.meta.env.VITE_REACT_APP_BACKEND_URL}/get-students');
      setStudents(response.data);
      setError(''); // Clear any previous errors
    } catch (err) {
      setError('Error fetching students.');
      console.error('Error fetching students:', err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="bg-[#0C4A1F] text-[#FFEB3B] p-4">
      <h2 className="text-2xl font-bold mb-4">All Students</h2>
      {error && <p className="text-red-500">{error}</p>}
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <table className="min-w-full bg-white text-[#0C4A1F]">
          <thead>
            <tr>
              <th className="py-2">First Name</th>
              <th className="py-2">Last Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td className="border px-4 py-2">{student.firstName}</td>
                <td className="border px-4 py-2">{student.lastName}</td>
                <td className="border px-4 py-2">{student.email}</td>
                <td className="border px-4 py-2">{student.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}/*/

//export default ViewStudent;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewStudents = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('${import.meta.env.VITE_REACT_APP_BACKEND_URL}/get-students');
                setStudents(response.data);
            } catch (err) {
                setError('Error fetching students');
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    if (loading) {
        return <div className="bg-[#0C4A1F] text-[#FFEB3B] p-4">Loading...</div>;
    }

    return (
        <div className="bg-[#0C4A1F] text-[#FFEB3B] p-4">
            <h2 className="text-2xl font-bold mb-4">All Students</h2>
            {error && <p className="text-red-500">{error}</p>}
            {students.length === 0 ? (
                <p>No students found.</p>
            ) : (
                <table className="min-w-full bg-white text-[#0C4A1F] rounded-lg shadow-md">
                    <thead>
                        <tr>
                            <th className="py-2 border-b-2 border-[#0C4A1F]">First Name</th>
                            <th className="py-2 border-b-2 border-[#0C4A1F]">Last Name</th>
                            <th className="py-2 border-b-2 border-[#0C4A1F]">Email</th>
                            <th className="py-2 border-b-2 border-[#0C4A1F]">Contact Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student._id} className="hover:bg-[#f3f4f6]">
                                <td className="border px-4 py-2">{student.firstName}</td>
                                <td className="border px-4 py-2">{student.lastName}</td>
                                <td className="border px-4 py-2">{student.email}</td>
                                <td className="border px-4 py-2">{student.contact}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ViewStudents;