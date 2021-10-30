import { createSlice } from '@reduxjs/toolkit';
import storage from '../../utils/storage';

const initialState = {
  user: null,
  isLoggedIn: false,
  loading: false,
};

const authActions = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUpUser: (state, action) => {
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = true;
    },
    setLoadingFalse: (state, action) => {
      state.loading = false;
    },
    loginUser: (state, action) => {
      const { success, data, accessToken } = action.payload;
      if (success) {
        state.isLoggedIn = true;
        state.user = data;
        storage.setItem('bookmark-user-key', accessToken);
        state.loading = false;
      }
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      storage.removeItem('bookmark-user-key');
    },
  },
});

export const { loginUser, logout, setLoading, signUpUser, setLoadingFalse } =
  authActions.actions;
export default authActions.reducer;
