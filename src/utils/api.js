import axios from 'axios';

const baseURL = 'http://localhost:5000/api/v1';

const api = axios.create({
  baseURL,
});

const apiCalls = {
  createBookmark: body => api.post('/bookmarks', body),
  getBookmarks: () => api.get('/bookmarks'),
};

export default apiCalls;
