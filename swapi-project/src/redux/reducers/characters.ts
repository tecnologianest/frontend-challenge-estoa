import { ICharacter } from "@/types/characters";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";



interface InicitalState {
    charactersList: ICharacter[]
    loading: boolean
    error: string
}

const initialState: InicitalState = {
  charactersList: [],
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
        builder.addCase( fetchCharacters.fulfilled, (state, {payload}: PayloadAction<ICharacters[]>) => {
            state.charactersList = payload;
            state.loading = false
            state.error = ''
        } )
        .addCase( fetchCharacters.pending, (state, { payload }: PayloadAction) => {
            state.loading = true
        } )
    }
})

export default characters.reducer