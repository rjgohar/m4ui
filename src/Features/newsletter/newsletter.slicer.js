import { createSlice } from "@reduxjs/toolkit";
import { addNewsletter } from "./newsletter.action";

const initialState = {
  newsletter: {},
  newsletterLoading: false,
  newsletterLoadingSucess: false,
  newsletterLoadingFailed: false,
};

const newsletterSlicer = createSlice({
  name: "email/newsletter",
  initialState: initialState,
  extraReducers: {
    [addNewsletter.pending]: (state) => {
      state.newsletterLoading = true;
    },
    [addNewsletter.fulfilled]: (state, action) => {
      state.newsletterLoading = false;
      state.newsletterLoadingSucess = true;
      state.newsletter = action.payload;
    },
    [addNewsletter.rejected]: (state, action) => {
      state.newsletterLoading = false;
      state.newsletterLoadingFailed = true;
    },
  },
});

export default newsletterSlicer.reducer;
