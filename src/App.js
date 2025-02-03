import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AuthPages from './pages/AuthPages';
import Upload from './pages/Upload';
import Article from './pages/Article';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [articles, setArticles] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/articles`);
      setArticles(res.data);
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/" element={<Home articles={articles} isDarkMode={isDarkMode} />} />
          <Route path="/auth" element={<AuthPages />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;          <Route path="/" element={<Home articles={articles} isDarkMode={isDarkMode} />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
