import { IPeople } from "@/types/characters";
import { ICharacterDetails } from '@/types/characterDetails'
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";



interface InicitalState {
  peopleObj: IPeople;
  selectedCharacter: ICharacterDetails;
  loading: boolean;
  currentPage: number;
  numOfPages: number;
  numOfCharacters: number | undefined;
  error: string;
}

const initialState: InicitalState = {
  peopleObj: {},
  selectedCharacter: {},
  numOfCharacters: 0,
  loading: false,
  currentPage: 1,
  numOfPages: 0,
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

export const characters = createSlice({
    name: 'characters',
    initialState,
    reducers:{
      clearSelectedCharacter: (state) => { state.selectedCharacter = {} },
      numOfPagesHandler: (state) => {
        if (state.numOfCharacters !== undefined) {
          const num = Math.trunc(state.numOfCharacters/10);
          const numPart = state.numOfCharacters % 10;

          numPart === 0 ? state.numOfPages = num : state.numOfPages = num + 1;

        }
      }
    },
    extraReducers: builder => {
        builder
          .addCase(
            fetchCharacters.fulfilled,
            (state, { payload }: PayloadAction<IPeople>) => {
              state.peopleObj = payload;
              state.numOfCharacters = payload.count;
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
            state.numOfCharacters = payload.count;
            state.loading = false;
            state.error = "";
          })
          .addCase(fetchPage.pending, (state) => {
            state.loading = true
          })
          .addCase(
            fetchCharacterDetails.fulfilled,
            (state, { payload }: PayloadAction<ICharacterDetails>) => {
              state.selectedCharacter = payload;
            }
          );
    }
})

export const { clearSelectedCharacter, numOfPagesHandler } = characters.actions;
export default characters.reducer
