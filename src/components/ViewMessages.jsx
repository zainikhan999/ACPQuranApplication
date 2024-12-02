import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewMessages() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');

  const fetchContacts = async () => {
    try {
      console.log('Fetching contacts...'); // Track fetching
      const response = await axios.get('http://localhost:3001/get-contacts');
      setContacts(response.data);
      setError(''); // Clear any previous errors
      console.log('Contacts fetched successfully:', response.data); // Track successful fetch
    } catch (err) {
      setError('Error fetching messages.');
      console.error('Error fetching messages:', err); // Track error
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Track message click
  const handleMessageClick = (contact) => {
    console.log('Message clicked:', contact); // Track clicked message
  };

  return (
    <div className="bg-[#0C4A1F] text-[#FFEB3B] p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Messages</h2>
      {error && <p className="text-red-500">{error}</p>}
      {contacts.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <table className="min-w-full bg-white text-[#0C4A1F]">
          <thead>
            <tr>
              <th className="py-2">Student Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Message</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr 
                key={contact._id} 
                onClick={() => handleMessageClick(contact)} 
                className="cursor-pointer hover:bg-gray-200"
              >
                <td className="border px-4 py-2">{contact.studentName}</td>
                <td className="border px-4 py-2">{contact.email}</td>
                <td className="border px-4 py-2">{contact.message}</td>
                <td className="border px-4 py-2">{new Date(contact.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewMessages;