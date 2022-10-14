import { createSlice } from '@reduxjs/toolkit';

import {
  logIn,
  register,
  logOut,
  fetchCurrentUser,
} from 'redux/auth/auth-operatipons';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedin = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedin = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedin = false;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedin = true;
    },
  },
});

export const authReduser = authSlice.reducer;
