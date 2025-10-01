import { createSlice } from "@reduxjs/toolkit";

const Search = createSlice({
  name: "slice",
  initialState: "",
  reducers: {
    setValue: (state, action) => {
      return action.payload;
    },
  },
});

export const { setValue } = Search.actions;

export default Search.reducer;
