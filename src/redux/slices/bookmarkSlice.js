import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookmarks: [],
};

const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    setBookmarks: (state, action) => {
      state.bookmarks.push(action.payload.data);
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
  },
});

export const { setBookmarks, getBookmarks, deleteBookmark } =
  bookmarkSlice.actions;
export default bookmarkSlice.reducer;
