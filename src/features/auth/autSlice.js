import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  const username = localStorage.getItem("username") || "";

  return { username, isAuthenticated: username ? true : false };
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const payload = action.payload.toLowerCase();
      state.username = payload;
      state.isAuthenticated = true;
      localStorage.setItem("username", payload);
    },
    logout(state) {
      localStorage.removeItem("username");
      state.username = "";
      state.isAuthenticated = false;
    },
  },
});

export const { username, isAuthenticated, login, logout } = authSlice.actions;
export default authSlice.reducer;
