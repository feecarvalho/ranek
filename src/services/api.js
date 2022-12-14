import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000',
});

export const api = {
  get(url) {
    return API.get(url);
  },
  post(url, body) {
    return API.post(url, body);
  },
};
