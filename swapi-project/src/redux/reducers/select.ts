import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "";

const select = createSlice({
  name: "select",
  initialState,
  reducers: {
    changeSelect: (state, { payload }) => payload,
  },
});

export const { changeSelect } = select.actions;
export default select.reducer;
