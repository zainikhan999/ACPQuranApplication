import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
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
    if (formData.name && formData.email && formData.message) {
      setSubmittedMessages([...submittedMessages, formData]);
      setFormData({ name: '', email: '', message: '' }); // Reset form after submission
    }
  };

  return (
    <div>
      <h2 className="text-headings font-semibold text-2xl mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border p-2 w-full"
            rows="4"
          />
        </div>
        <button type="submit" className="mt-4 w-full bg-primaryButton text-navigationBar font-semibold py-2 rounded">
          Submit
        </button>
      </form>

      <h2 className="text-headings font-semibold text-xl mt-6">Submitted Messages</h2>
      <table className="mt-4 w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {submittedMessages.map((message, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{message.name}</td>
              <td className="border px-4 py-2">{message.email}</td>
              <td className="border px-4 py-2">{message.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactUs;