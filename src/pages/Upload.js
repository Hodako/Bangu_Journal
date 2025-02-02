import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('tags', tags.split(',').map(tag => tag.trim()));
    formData.append('file', file);

    try {
      const token = localStorage.getItem('token');
      await axios.post(`${process.env.REACT_APP_API_URL}/articles/upload`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      alert('Article uploaded successfully');
    } catch (error) {
      console.error('Error uploading article', error);
      alert('Failed to upload article');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            className="form-control"
            id="content"
            rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags (comma separated)</label>
          <input
            type="text"
            className="form-control"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">Upload Image</label>
          <input
            type="file"
            className="form-control-file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload;
