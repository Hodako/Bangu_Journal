import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">BanguJournal</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          <Link to="/upload" className="text-gray-600 hover:text-gray-800">Upload</Link>
          {isAuthenticated ? (
            <Link to="/profile" className="text-gray-600 hover:text-gray-800">Profile</Link>
          ) : (
            <Link to="/auth" className="text-gray-600 hover:text-gray-800">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
