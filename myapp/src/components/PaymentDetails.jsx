
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PaymentDetails({ purchasedCourses }) {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [submittedPayments, setSubmittedPayments] = useState([]);
  const [message, setMessage] = useState('');
  const [availableCourses, setAvailableCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  // Retrieve username and other details from localStorage
  const username = localStorage.getItem('user');
  const currentUser = username ? JSON.parse(username) : null;

  // Fetch payments already made by the user
  const fetchPayments = async () => {
    if (!currentUser) return;

    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/payments/${currentUser.username}`);
      setSubmittedPayments(response.data);
      // Get already selected courses
      const selectedCourses = response.data.map(payment => payment.courseName);
      setSelectedCourses(selectedCourses);
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  // Fetch payments and available courses on component mount
  useEffect(() => {
    fetchPayments();
  }, [currentUser]);

  // Available courses the user hasn't selected yet
  useEffect(() => {
    const courses = ['tafsseer', 'tajweed', 'hifz'];
    const filteredCourses = courses.filter(course => !selectedCourses.includes(course));
    setAvailableCourses(filteredCourses);
  }, [selectedCourses]);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!creditCardNumber) {
      return setMessage('Please enter your credit card number.');
    }
    if (!selectedCourse) {
      return setMessage('Please select a course.');
    }

    const paymentData = {
      username: currentUser.username, // Ensure you have the correct username
      courseName: selectedCourse,
      coursePrice: 100,  // Adjust this based on your logic
      creditCardNumber,
    };

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register-payment`, paymentData);
      setMessage(response.data.message);
      // Fetch updated payments from the server after submitting
      fetchPayments();
      // Reset the form fields
      setCreditCardNumber('');
      setSelectedCourse('');
    } catch (error) {
      console.error('Error registering payment:', error);
      setMessage('Error registering payment.');
    }
  };

  return (
    <div>
      <h2 className="text-headings font-semibold text-2xl mb-4">Payment Details</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username field (auto-filled from localStorage) */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            value={currentUser ? currentUser.username : ''}
            disabled
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Credit card number field with placeholder */}
        <div>
          <label htmlFor="creditCardNumber" className="block text-sm font-medium text-gray-700">Credit Card Number</label>
          <input
            type="text"
            id="creditCardNumber"
            value={creditCardNumber}
            onChange={(e) => setCreditCardNumber(e.target.value)}
            placeholder="Enter your credit card number"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Dropdown for selecting a course */}
        <div>
          <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">Select Course</label>
          <select
            id="courseName"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">-- Select a Course --</option>
            {availableCourses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="mt-4 w-full bg-primaryButton text-navigationBar font-semibold py-2 rounded">
          Submit Payment
        </button>
      </form>

      {message && <p className="mt-4 text-red-500">{message}</p>}

      <h2 className="text-headings font-semibold text-xl mt-6">Submitted Payments</h2>
      <table className="mt-4 w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">Course Name</th>
            <th className="border px-4 py-2">Course Price</th>
            <th className="border px-4 py-2">Credit Card Number</th>
          </tr>
        </thead>
        <tbody>
          {submittedPayments.map((payment, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{payment.username}</td>
              <td className="border px-4 py-2">{payment.courseName}</td>
              <td className="border px-4 py-2">{payment.coursePrice} USD</td>
              <td className="border px-4 py-2">{payment.creditCardNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentDetails;


