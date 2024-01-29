import { configureStore } from "@reduxjs/toolkit";
import uploadReducer from "./features/uploadSlice";

export const store = configureStore({
  reducer: uploadReducer,
});
