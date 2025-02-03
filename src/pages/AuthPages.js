import React, { useState } from 'react';
import axios from '../axiosConfig'; // Import the Axios instance
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card';

const AuthPages = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [formData, setFormData] = useState({ email: '', password: '', name: '', role: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = currentPage === 'login' ? '/api/auth/login' : '/api/auth/signup';
    try {
      const response = await axios.post(url, formData);
      console.log(response.data);
      // Handle successful response (e.g., redirect to home page)
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Response error:', error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error('Request error:', error.request);
      } else {
        // Something else happened while setting up the request
        console.error('Error:', error.message);
      }
    }
  };

  const LoginForm = () => (
    <div className="w-full max-w-md px-4">
      <Card className="shadow-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your academic email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center w-full text-gray-600">
            Don't have an account?{' '}
            <button onClick={() => setCurrentPage('signup')} className="text-blue-600 hover:text-blue-700 font-medium">
              Sign Up
            </button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );

  const SignupForm = () => (
    <div className="w-full max-w-md px-4">
      <Card className="shadow-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Create Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your academic email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Academic Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
                required
              >
                <option value="" disabled>Select your role</option>
                <option value="author">Author/Researcher</option>
                <option value="reviewer">Peer Reviewer</option>
                <option value="reader">Reader</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Re-enter your password"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-base"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center w-full text-gray-600">
            Already have an account?{' '}
            <button onClick={() => setCurrentPage('login')} className="text-blue-600 hover:text-blue-700 font-medium">
              Login
            </button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-56px)] py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl mb-3 text-blue-600">BanguJournal</h1>
        </div>
        {currentPage === 'login' ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};

export default AuthPages;
