import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './HeroSection';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Hardcoded credentials
    if (username === 'Gul' && password === '1234') {
      navigate('/AdminDashboard'); // Redirect to Admin Dashboard
    } else if (username === 'user123' && password === 'userpass') {
      navigate('/dashboard'); // Redirect to User Dashboard
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <>
      <HeroSection imageUrl="/HomePage.png" height="h-[800px]">
        <h1 className="text-center text-white text-4xl font-bold">Login</h1>
      </HeroSection>
      <div className="absolute inset-0 flex items-center justify-center h-screen">
        <div className="max-w-md w-full p-8 border border-iconsAndBorders rounded-lg shadow-lg bg-white">
          <h1 className="text-3xl font-bold text-headings text-center mb-8">Welcome Back User!</h1>
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