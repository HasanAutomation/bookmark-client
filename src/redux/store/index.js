import { configureStore } from '@reduxjs/toolkit';
import bookmark from '../slices/bookmarkSlice';
import auth from '../slices/authSlice';

export const store = configureStore({
  reducer: {
    bookmark,
    auth,
  },
});
