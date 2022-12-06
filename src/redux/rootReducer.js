import { combineReducers } from "@reduxjs/toolkit";
import signUpSlicer from "../Features/signUp/signUp.slicer";
import loginSlicer from "../Features/signIn/signIn.slicer";

const rootReducer = combineReducers({
  SignUp: signUpSlicer,
  LoginSlicer: loginSlicer,
});

export default rootReducer;
