import { createSlice } from "@reduxjs/toolkit";
import { addLogIn, checkUserSessionAction } from "./signIn.action";

const initialState = {
  login: {},
  loginLoading: false,
  loginLoadingSucess: false,
  loginLoadingFailed: false,
  error: {},
  isSessionLoading: false,
  isSessionLoadingFailed: false,
  isAuthenticated: false,
};

const loginSlicer = createSlice({
  name: "login/signIn",
  initialState: initialState,
  reducers: {
    removeToken: (state) => {
      localStorage.removeItem("mui4uJWTtoken");
      state.login = {};
      state.loginLoading = false;
      state.loginLoadingSucess = false;
      state.isAuthenticated = false;
    },
  },
  extraReducers: {
    [addLogIn.pending]: (state) => {
      state.loginLoading = true;
      state.error = "";
    },
    [addLogIn.fulfilled]: (state, action) => {
      state.loginLoading = false;
      state.loginLoadingSucess = true;

      if (action.payload?.status === 201) {
        state.isAuthenticated = true;
        state.login = action.payload;
        state.error = "";
      }

      if (action.payload?.status === 404 || 403) {
        state.error = action.payload?.data?.message;
      }
    },
    [addLogIn.rejected]: (state, action) => {
      state.loginLoading = false;
      state.loginLoadingFailed = true;
      state.error = "";
      state.isAuthenticated = false;
    },
    [checkUserSessionAction.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.loginLoading = false;
      state.loginLoadingSucess = true;
      state.login = action.payload;
      state.isSessionLoading = false;
      state.error = "";
    },
    [checkUserSessionAction.rejected]: (state, action) => {
      state.isSessionLoading = false;
      state.isSessionLoadingFailed = true;
      state.isAuthenticated = false;
    },
  },
});

export const { removeToken } = loginSlicer.actions;

export default loginSlicer.reducer;
