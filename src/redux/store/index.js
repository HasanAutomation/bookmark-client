import { configureStore } from '@reduxjs/toolkit';
import bookmark from '../slices/bookmarkSlice';

export const store = configureStore({
  reducer: {
    bookmark,
  },
});
