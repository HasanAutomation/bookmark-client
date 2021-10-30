import axios from 'axios';
import storage from './storage';

// export const baseURL = 'http://localhost:5000/api/v1';
export const baseURL = 'https://bookmark-web-api.herokuapp.com/api/v1';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  config => {
    const accessToken = storage.getItem('bookmark-user-key');
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return config;
  },
  err => Promise.reject(err)
);

const apiCalls = {
  createBookmarkApi: body => api.post('/bookmarks', body),
  getBookmarks: page => api.get(`/bookmarks/?page=${page}`),
  deleteBookmarkApi: id => api.delete(`/bookmarks/${id}`),
  getBookmark: id => api.get(`/bookmarks/${id}`),
  updateBookmark: (id, body) => api.put(`/bookmarks/${id}`, body),

  // user
  loginUser: body => api.post('/users/login', body),
  registerUser: body => api.post('/users', body),
};

export default apiCalls;
