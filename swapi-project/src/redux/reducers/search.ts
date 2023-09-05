import { createSlice } from "@reduxjs/toolkit";

const initialState: string = ''

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeSearch: (state, { payload }) => payload
    }
})

export const { changeSearch } = searchSlice.actions 
export default searchSlice.reducer