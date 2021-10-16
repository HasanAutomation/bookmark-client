import axios from 'axios';

const baseURL = 'http://localhost:5000/api/v1';

const api = axios.create({
  baseURL,
});

const apiCalls = {
  createBookmarkApi: body => api.post('/bookmarks', body),
  getBookmarks: () => api.get('/bookmarks'),
  deleteBookmarkApi: id => api.delete(`/bookmarks/${id}`),
};

export default apiCalls;
