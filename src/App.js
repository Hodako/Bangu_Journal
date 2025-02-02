import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
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
        <Switch>
          <Route exact path="/" component={() => <Home articles={articles} isDarkMode={isDarkMode} />} />
          <Route path="/login" component={() => <Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" component={Signup} />
          <Route path="/upload" component={Upload} />
          <Route path="/article/:id" component={Article} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
