import { IPeople } from "@/types/characters";
import { ICharacterDetails } from '@/types/characterDetails'
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";



interface InicitalState {
  peopleObj: IPeople;
  selectedCharacter: ICharacterDetails;
  loading: boolean;
  currentPage: number
  error: string;
}

const initialState: InicitalState = {
  peopleObj: {},
  selectedCharacter: {},
  loading: false,
  currentPage: 1,
  error: "",
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters", 
  async (pgNum:number = 1) => {
    const res = await axios.get(`https://swapi.dev/api/people/?page=${pgNum}`);
    console.log(res.data);

    return res.data;
  }
);
export const fetchPage = createAsyncThunk(
  "characters/fetchPage", 
  async (url:string) => {
    const res = await axios.get(url);
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
    reducers:{
      clearSelectedCharacter: (state) => { state.selectedCharacter = {} },
      clearpage: (state) => initialState
    },
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
          .addCase(fetchPage.fulfilled, (state, {payload}: PayloadAction<IPeople>) => {
            state.peopleObj = payload;
            state.loading = false;
            state.error = "";
          })
          .addCase(
            fetchCharacterDetails.fulfilled,
            (state, { payload }: PayloadAction<ICharacterDetails>) => {
              state.selectedCharacter = payload;
            }
          );
    }
})

export const { clearSelectedCharacter, clearpage } = characters.actions;
export default characters.reducer
