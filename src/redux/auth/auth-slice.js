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
  isRefreshing: false,
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
    [logOut.fulfilled](state, ) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedin = false;
    },
    [fetchCurrentUser.pending](state, ) {
      state.isRefreshing = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedin = true;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.rejected](state, ) {
      state.isRefreshing = false;
    },
  },
});

export const authReduser = authSlice.reducer;
