import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://backend-1-xdr3.onrender.com/articles');
        setArticles(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Latest Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <div key={article.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600">{article.abstract}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
