import axios from 'axios';

const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 80000,
});

export default request;
