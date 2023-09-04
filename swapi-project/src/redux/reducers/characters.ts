import { createSlice } from "@reduxjs/toolkit"

interface ICharacters {
  name: string;
  species: string
  birth_year: string
}

interface InicitalState {
    charactersList: ICharacters[]
    loading: boolean
    error: string
}

const initialState: InicitalState = {
  charactersList: [],
  loading: false,
  error: "",
};

export  const characters = createSlice({
    name: 'characters',
    initialState,
    reducers:{}
})

export default characters.reducer