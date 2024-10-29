import React, { useState } from 'react';

function PaymentDetails({ purchasedCourses }) {
  const [paymentProof, setPaymentProof] = useState(null);
  const [submittedPayments, setSubmittedPayments] = useState([]);

  const handleUpload = (event) => {
    event.preventDefault();
    // Simulate uploading payment proof
    if (paymentProof) {
      const newPayment = {
        username: "John Doe", // Replace with dynamic username if available
        courseName: paymentProof.course.title,
        coursePrice: paymentProof.course.price,
      };
      setSubmittedPayments([...submittedPayments, newPayment]);
      setPaymentProof(null); // Reset after upload
    }
  };

  return (
    <div>
      <h2 className="text-headings font-semibold text-2xl mb-4">Upload Payment Proof</h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          onChange={(e) => setPaymentProof({ course: purchasedCourses[0] })} // Simulate selecting the course
          required
        />
        <button type="submit" className="mt-4 w-full bg-primaryButton text-navigationBar font-semibold py-2 rounded">
          Upload Payment Proof
        </button>
      </form>

      <h2 className="text-headings font-semibold text-xl mt-6">Payment Details</h2>
      <table className="mt-4 w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">Course Name</th>
            <th className="border px-4 py-2">Course Price</th>
          </tr>
        </thead>
        <tbody>
          {submittedPayments.map((payment, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{payment.username}</td>
              <td className="border px-4 py-2">{payment.courseName}</td>
              <td className="border px-4 py-2">{payment.coursePrice} USD</td> {/* Display course price */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentDetails;
