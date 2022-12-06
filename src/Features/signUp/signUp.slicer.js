import { createSlice } from "@reduxjs/toolkit";
import { addSignUp } from "./signUp.action";

const initialState = {
  signUp: {},
  signUpLoading: false,
  signUpLoadingSucess: false,
  signUpLoadingFailed: false,
};

const signUpSlicer = createSlice({
  name: "signUp/createAccount",
  initialState: initialState,
  extraReducers: {
    [addSignUp.pending]: (state) => {
      state.signUpLoading = true;
    },
    [addSignUp.fulfilled]: (state, action) => {
      state.signUpLoading = false;
      state.signUpLoadingSucess = true;
      state.signUp = action.payload;
    },
    [addSignUp.rejected]: (state) => {
      state.signUpLoading = false;
      state.signUpLoadingFailed = true;
    },
  },
});
export default signUpSlicer.reducer;
