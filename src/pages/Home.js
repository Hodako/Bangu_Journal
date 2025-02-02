import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Clock, ThumbsUp, MessageSquare, Share2, Bookmark } from 'lucide-react';

const Home = ({ articles, isDarkMode }) => {
  return (
    <div className="container">
      <div className="row">
        {articles.map(article => (
          <div key={article.id} className="col-md-4">
            <div className={`card mb-4 shadow-sm ${isDarkMode ? 'bg-dark text-white' : ''}`}>
              <img src={`${process.env.REACT_APP_API_URL}/uploads/${article.thumbnail}`} className="card-img-top" alt="Thumbnail" />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.content.substring(0, 100)}...</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">{new Date(article.publishDate).toLocaleDateString()}</small>
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">
                      <Eye className="icon" /> {article.views}
                    </button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">
                      <Clock className="icon" /> {article.readTime}
                    </button>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">
                      <ThumbsUp className="icon" /> {article.likes}
                    </button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">
                      <MessageSquare className="icon" /> {article.comments}
                    </button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">
                      <Share2 className="icon" /> {article.shares}
                    </button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">
                      <Bookmark className="icon" />
                    </button>
                  </div>
                </div>
                <div className="mt-2">
                  {article.tags && article.tags.map(tag => (
                    <span key={tag} className="badge bg-primary me-1">{tag}</span>
                  ))}
                </div>
                <Link to={`/article/${article.id}`} className="btn btn-primary mt-3">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
