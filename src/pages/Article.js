import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://backend-1-xdr3.onrender.com/articles/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
      <p className="text-gray-600 mb-4">{article.abstract}</p>
      <div className="prose">
        {article.content}
      </div>
    </div>
  );
};

export default Article;
