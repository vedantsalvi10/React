import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../features/TodoSlice";
export const Store = configureStore({
  reducer: TodoReducer
})