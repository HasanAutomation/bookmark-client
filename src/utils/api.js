import axios from 'axios';

const baseURL = 'http://localhost:5000/api/v1';

const api = axios.create({
  baseURL,
});

const apiCalls = {
  createBookmarkApi: body => api.post('/bookmarks', body),
  getBookmarks: page => api.get(`/bookmarks/?page=${page}`),
  deleteBookmarkApi: id => api.delete(`/bookmarks/${id}`),
  getBookmark: id => api.get(`/bookmarks/${id}`),
  updateBookmark: (id, body) => api.put(`/bookmarks/${id}`, body),
};

export default apiCalls;
