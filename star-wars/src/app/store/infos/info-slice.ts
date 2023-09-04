
import People from "@/app/infos/[...type]/models/people";
import { PayloadAction, createSlice } from "@reduxjs/toolkit"


const initialState: People = {
    birth_year: "",
    created: "",
    edited: "",
    eye_color: "",
    films: [],
    gender: "",
    hair_color: "",
    height: 0,
    homeworld: "",
    mass: 0,
    name: "",
    skin_color: "",
    species: [],
    starships: [],
    url: "",
    vehicles: [],
    newFilms: [],
    newHomeWorld: {
      climate: '',
      created: '',
      diameter: '',
      edited: '',
      films: [],
      gravity: '',
      name: '',
      orbital_period: '',
      population: '',
      residents: [],
      rotation_period: '',
      surface_water: '',
      terrain: '',
      url: '',
    },
    newSpecies: {
      average_height: '',
      average_lifespan: "",
      classification: "",
      created: '',
      designation: "",
      edited: "",
      eye_colors: '',
      films: [],
      hair_colors: '',
      homeworld: [],
      language: '',
      name: '',
      people: [],
      skin_colors: '',
      url: '',
    },
    newStarships: [],
    newVehicles: [],
  };

  function addInfosPerson(state: People, action: PayloadAction<People>): People {
    return action.payload;
  }

  
const InfoSlice = createSlice({
    name: "Info",
    initialState,
    reducers: {
        addInfosPerson,
    }
})

export const {reducer: infoPersonReducer, actions} = InfoSlice