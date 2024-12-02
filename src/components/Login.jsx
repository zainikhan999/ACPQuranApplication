
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure you import axios
import Herosection from './Herosection';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setErrorMessage(''); // Clear any previous error messages

    axios
      .post('http://localhost:3001/login', { username, password })
      .then((response) => {
        
        const { message, userType } = response.data;
        console.log('Login Response:', response.data);

        // Store only the username in localStorage
        const userData = { username };
        localStorage.setItem('user', JSON.stringify(userData));

        // Navigate based on userType
        if (userType === 'admin') {
          navigate('/AdminDashboard');
        } else if (userType === 'user') {
          navigate('/Dashboard');
        }
      })
      .catch((error) => {
        if (error.response) {
          setErrorMessage(error.response.data.message || 'Login failed');
        } else {
          setErrorMessage('Server error');
        }
      });
  };

  return (
    <>
      <Herosection imageUrl="/HomePage.png" height="h-[200px]">
        <h1>Login</h1>
      </Herosection>
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="max-w-md w-full p-8 border border-iconsAndBorders rounded-lg shadow-lg bg-white">
          <h1 className="text-3xl font-bold text-headings text-center mb-8">
            Welcome Back!
          </h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-black mb-2">Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primaryButton"
              />
            </div>
            <div>
              <label className="block text-black mb-2">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primaryButton"
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}
            <button
              type="submit"
              className="w-full p-3 bg-primaryButton text-black font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}