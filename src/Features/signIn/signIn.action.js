import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkSessionAPI, postLogIn } from "./apis";

export const addLogIn = createAsyncThunk("SignIn/login", async (payload) => {
  try {
    const res = await postLogIn(payload);
    return res;
  } catch (err) {
    return err.response;
  }
});

export const checkUserSessionAction = createAsyncThunk(
  "Auth/checkUserSession",
  async () => {
    const res = await checkSessionAPI();
    if (res.status === 204) throw new Error("Session is not valid");
    return res;
  }
);
