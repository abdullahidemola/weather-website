import { configureStore } from "@reduxjs/toolkit";
import fetchSlice from "./fetchSlice";

const Store = configureStore({
  reducer: {
    fetchHandler: fetchSlice,
  },
});

export default Store;
