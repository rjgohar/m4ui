import { createAsyncThunk } from "@reduxjs/toolkit";
import { postSignUp } from "./apis";

export const addSignUp = createAsyncThunk(
  "SignUp/createAccount",
  async (payload) => {
    const res = await postSignUp(payload);

    return res;
  }
);
