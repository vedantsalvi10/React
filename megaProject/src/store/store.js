import { configureStore } from "@reduxjs/toolkit";
import authentication from './auth.js';
export const store = configureStore({
  reducer:{
    auth: authentication,
  }
})
