import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './HeroSection';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setErrorMessage('');

    // Hardcoded credentials
    const adminUsername = 'Admin001';
    const adminPassword = '12345';

    // Check credentials
    if (username === adminUsername && password === adminPassword) {
      navigate('/AdminDashboard'); // Redirect to admin dashboard
    } else {
      setErrorMessage('Invalid username or password'); // Show error message
    }
  };

  return (
    <>
      <HeroSection imageUrl="/HomePage.png" height="h-[200px]">
        <h1>Login</h1>
      </HeroSection>
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="max-w-md w-full p-8 border border-iconsAndBorders rounded-lg shadow-lg bg-white">
          <h1 className="text-3xl font-bold text-headings text-center mb-8">Welcome Back!</h1>
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