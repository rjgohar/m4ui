import { createAsyncThunk } from "@reduxjs/toolkit";
import { newsletter } from "./apis";

export const addNewsletter = createAsyncThunk(
  "email/newsletter",
  async (payload) => {
    try {
      const res = await newsletter(payload);
      return res;
    } catch (err) {
      return err.response;
    }
  }
);
