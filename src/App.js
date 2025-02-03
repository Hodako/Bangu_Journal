import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AuthPages from './pages/AuthPages';
import Upload from './pages/Upload';
import Article from './pages/Article';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPages />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </Router>
  );
};

export default App;
