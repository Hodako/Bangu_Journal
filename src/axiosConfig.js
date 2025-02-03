import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend-1-xdr3.onrender.com', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
