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
  },
});

export const { setBookmarks, getBookmarks } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
