import { createSlice } from "@reduxjs/toolkit";
import { addIssue, getGithubValues } from "./github.action";

const initialState = {
  github: {},
  githubLoading: false,
  githubLoadingSucess: false,
  githubLoadingFailed: false,
  getIssue: {},
  getIssueLoading: false,
  getIssueLoadingSucess: false,
  getIssueLoadingFailed: false,
};

const githubSlicer = createSlice({
  name: "github/issues",
  initialState: initialState,
  extraReducers: {
    [addIssue.pending]: (state) => {
      state.githubLoading = true;
    },
    [addIssue.fulfilled]: (state, action) => {
      state.githubLoading = false;
      state.githubLoadingSucess = true;
      state.github = action.payload;
    },
    [addIssue.rejected]: (state, action) => {
      state.githubLoading = false;
      state.githubLoadingFailed = true;
    },
    // Get Issue
    [getGithubValues.pending]: (state) => {
      state.getIssueLoading = true;
    },
    [getGithubValues.fulfilled]: (state, action) => {
      state.getIssueLoading = false;
      state.getIssueLoadingSucess = true;
      state.getIssue = action.payload;
    },
    [getGithubValues.rejected]: (state, action) => {
      state.getIssueLoading = false;
      state.getIssueLoadingFailed = true;
    },
  },
});

export default githubSlicer.reducer;
