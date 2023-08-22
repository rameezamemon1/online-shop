"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
    },
  },
});

export const { loginSuccess } = authSlice.actions;
export default authSlice.reducer;
