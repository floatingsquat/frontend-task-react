import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./src/features/eventSlice";

export const store = configureStore({
  reducer: {
    event: eventSlice,
  },
});
