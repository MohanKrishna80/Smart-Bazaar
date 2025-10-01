import { configureStore } from "@reduxjs/toolkit";
import Search from "../../redux/slices/searchSlice.js";

const store = configureStore({
  reducer: {
    search: Search,
  },
});

export default store;
