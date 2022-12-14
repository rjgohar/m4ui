import { combineReducers } from "@reduxjs/toolkit";
import signUpSlicer from "../Features/signUp/signUp.slicer";
import loginSlicer from "../Features/signIn/signIn.slicer";
import newsletterSlicer from "../Features/newsletter/newsletter.slicer";

const rootReducer = combineReducers({
  SignUp: signUpSlicer,
  LoginSlicer: loginSlicer,
  NewsletterSlicer: newsletterSlicer,
});

export default rootReducer;
