import { IPeople } from "@/types/characters";
import { ICharacterDetails } from '@/types/characterDetails'
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";



interface InicitalState {
  peopleObj: IPeople;
  selectedCharacter: ICharacterDetails;
  loading: boolean;
  error: string;
}

const initialState: InicitalState = {
  peopleObj: {},
  selectedCharacter: {},
  loading: false,
  error: "",
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters", 
  async () => {
    const res = await axios.get("https://swapi.dev/api/people/?page=2");
    console.log(res.data);

    return res.data;
  }
);

export const fetchCharacterDetails = createAsyncThunk(
  "characters/fetchCharacterDetails", 
  async (id:string) => {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);

    return res.data;
  }
);

export  const characters = createSlice({
    name: 'characters',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
          .addCase(
            fetchCharacters.fulfilled,
            (state, { payload }: PayloadAction<IPeople>) => {
              state.peopleObj = payload;
              state.loading = false;
              state.error = "";
            }
          )
          .addCase(
            fetchCharacters.pending,
            (state, { payload }: PayloadAction) => {
              state.loading = true;
            }
          )
          .addCase(
            fetchCharacterDetails.fulfilled,
            (state, { payload }: PayloadAction<ICharacterDetails>) => {
              state.selectedCharacter = payload;
            }
          );
    }
})

export default characters.reducer