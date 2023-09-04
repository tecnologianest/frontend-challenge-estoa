import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    charactersList: [],
    loading: false,
    error: ''
}

export  const characters = createSlice({
    name: 'characters',
    initialState,
    reducers:{}
})

export default characters.reducer