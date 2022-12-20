import { createAsyncThunk } from "@reduxjs/toolkit";
import { github, getGithub } from "./apis";

export const addIssue = createAsyncThunk("github/issue", async (payload) => {
  try {
    const res = await github(payload);
    return res;
  } catch (err) {
    return err.response;
  }
});

export const getGithubValues = createAsyncThunk(
  "getGithub/getIssue",
  async () => {
    try {
      const res = await getGithub();
      return res;
    } catch (err) {
      return err.response;
    }
  }
);
