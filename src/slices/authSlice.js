import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.username = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.username = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;