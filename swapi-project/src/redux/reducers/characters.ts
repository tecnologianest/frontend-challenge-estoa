import { ICharacter, IPeople } from "@/types/characters";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";



interface InicitalState {
    peopleObj: IPeople
    loading: boolean
    error: string
}

const initialState: InicitalState = {
  peopleObj: {},
  loading: false,
  error: "",
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters", 
  async () => {
    const res = await axios.get("https://swapi.dev/api/people/");
    console.log(res.data);

    return res.data;
  }
);

export  const characters = createSlice({
    name: 'characters',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase( fetchCharacters.fulfilled, (state, {payload}: PayloadAction<IPeople>) => {
            state.peopleObj = payload;
            state.loading = false
            state.error = ''
        } )
        .addCase( fetchCharacters.pending, (state, { payload }: PayloadAction) => {
            state.loading = true
        } )
    }
})

export default characters.reducer