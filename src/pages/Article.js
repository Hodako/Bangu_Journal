import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/articles/${id}`);
        setArticle(res.data);
      } catch (error) {
        console.error('Error fetching article', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h1>{article.title}</h1>
          <img src={`${process.env.REACT_APP_API_URL}/uploads/${article.thumbnail}`} alt="Thumbnail" className="img-fluid" />
          <p>{article.content}</p>
          <div className="mt-2">
            {article.tags && article.tags.map(tag => (
              <span key={tag} className="badge bg-primary me-1">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
