import { IPeople } from "@/types/characters";
import { ICharacterDetails } from "@/types/characterDetails";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IFilm, IFilms } from "@/types/films";


interface InicitalState {
  filmsObj: IFilms;
  loading: boolean;
  error: string;
}

const initialState: InicitalState = {
  filmsObj: {},
  loading: false,
  error: "",
};

export const fetchFilms = createAsyncThunk(
  "characters/fetchFilms",
  async () => {
    const res = await axios.get(`https://swapi.dev/api/films`);
    console.log(res.data);

    return res.data;
  }
);


export const films = createSlice({
  name: "films",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        fetchFilms.fulfilled,
        (state, { payload }: PayloadAction<IFilms>) => {
          state.filmsObj = payload;
          state.loading = false;
        }
      )
      .addCase(
        fetchFilms.pending,
        (state, { payload }: PayloadAction) => {
          state.loading = true
        }
      );
  }
  
});

// export const { clearSelectedCharacter, numOfPagesHandler } = films.actions;
export default films.reducer;
