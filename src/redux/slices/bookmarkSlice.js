import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookmarks: [],
  bookmark: {},
  loading: false,
};

const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    setBookmarks: (state, action) => {
      state.bookmarks.unshift(action.payload.data);
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = true;
    },
    setLoadingFalse: (state, action) => {
      state.loading = false;
    },

    getBookmarks: (state, action) => {
      state.bookmarks = action.payload.data.data;
    },
    deleteBookmark: (state, action) => {
      const newBookMarks = state.bookmarks.filter(
        bookmark => bookmark._id !== action.payload
      );
      state.bookmarks = newBookMarks;
    },
    setBookmark: (state, action) => {
      state.bookmark = action.payload;
    },
    updateBookmark: (state, action) => {
      const updatedBookmarks = state.bookmarks.map(bookmark =>
        bookmark._id === action.payload.id
          ? { ...bookmark, ...action.payload.data.data }
          : bookmark
      );
      state.bookmarks = updatedBookmarks;
    },
  },
});

export const {
  setBookmarks,
  getBookmarks,
  deleteBookmark,
  setBookmark,
  updateBookmark,
  setLoading,
  setLoadingFalse,
} = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
