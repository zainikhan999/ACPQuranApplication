import React, { useState } from 'react';

function PaymentForm({ location }) {
  const { course } = location.state; // Get course details passed from PaymentDetails
  const [screenshot, setScreenshot] = useState(null);
  const [accountNumber, setAccountNumber] = useState('');

  const handleScreenshotChange = (event) => {
    setScreenshot(event.target.files[0]);
  };

  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission (upload screenshot and account number)
    console.log('Submitting payment for:', course.title);
    console.log('Account Number:', accountNumber);
    // Implement the logic to handle the upload of payment proof
  };

  return (
    <div className="p-4">
      <h2 className="text-headings font-semibold text-xl mb-4">Payment for {course.title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Account Number</label>
          <input
            type="text"
            value={accountNumber}
            onChange={handleAccountNumberChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Upload Payment Screenshot</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleScreenshotChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-primaryButton text-navigationBar font-semibold py-2 rounded">
          Submit Payment
        </button>
      </form>
    </div>
  );
}

export default PaymentForm;
