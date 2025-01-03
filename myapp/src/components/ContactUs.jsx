
import React, { useState } from 'react';
import HeroSection from './Herosection';
import axios from 'axios'; // Import axios

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.studentName && formData.email && formData.message) {
      try {
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/add-contact`, formData);
        console.log(response.data.message); // Log success message
        setSubmittedMessages([...submittedMessages, formData]);
        setFormData({ studentName: '', email: '', message: '' }); // Reset form after submission
      } catch (error) {
        console.error('Error submitting message:', error);
      }
    }
  };

  return (
    <>
      <HeroSection imageUrl="/HomePage.png" height="h-[150px]">
        <h1>Contact Us</h1>
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