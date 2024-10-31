import React, { useState } from 'react';
import HeroSection from './HeroSection'; // Ensure this import matches your file structure

function ContactUs() {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    message: '',
  });

  const [submittedMessages, setSubmittedMessages] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate submitting the contact form
    if (formData.studentName && formData.email && formData.message) {
      setSubmittedMessages([...submittedMessages, formData]);
      setFormData({ studentName: '', email: '', message: '' }); // Reset form after submission
    }
  };

  return (
    <>
      <HeroSection imageUrl="/home.png" height="h-[150px]">
        <h1 className="text-yellow-500 text-4xl font-bold">Contact Us</h1>
      </HeroSection>
      <div className="flex items-start justify-center h-screen bg-background p-9 mt-9">
        <div className="max-w-md w-full p-8 border border-iconsAndBorders rounded-lg shadow-lg bg-white">
          <h1 className="text-yellow-500 text-3xl font-bold text-center mb-8">Get in Touch</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student Name Field */}
            <div>
              <label className="block text-black mb-2">Student Name:</label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primaryButton"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-black mb-2">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primaryButton"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-black mb-2">Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primaryButton h-32"
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              className="w-full p-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Submit Message
            </button>
          </form>

         
        </div>
      </div>
    </>
  );
}

export default ContactUs;