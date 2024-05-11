import { configureStore } from "@reduxjs/toolkit";
import { myapis } from "./api";
import { myreducer } from "./reducer";

export const store = configureStore({
  reducer: {
    [myapis.reducerPath]: myapis.reducer,
    [myreducer.name]: myreducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myapis.middleware),
});
