import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, Moon, Sun, BookOpen } from 'lucide-react';

const Navbar = ({ isDarkMode, setIsDarkMode, isAuthenticated }) => {
  return (
    <nav className={`navbar ${isDarkMode ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <BookOpen className={`icon ${isDarkMode ? 'text-white' : 'text-dark'}`} />
          Bangu Journal
        </Link>
        <div className="navbar-nav ml-auto">
          {isAuthenticated ? (
            <Link to="/upload" className="nav-item nav-link">
              <Upload className="icon" />
              Upload
            </Link>
          ) : (
            <Link to="/login" className="nav-item nav-link">
              Login
            </Link>
          )}
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="btn btn-outline-secondary ml-2">
            {isDarkMode ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
