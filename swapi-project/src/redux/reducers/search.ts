import { createSlice } from "@reduxjs/toolkit";

const initialState: string = ''

const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeSearch: (state, { payload }) => payload,
  },
});

export const { changeSearch } = search.actions; 
export default search.reducer;