import Films from "./filmes";
import Planeta from "./planeta";
import Species from "./species";

export default interface People {
    name: string, 
    height: number, 
    mass: number, 
    hair_color: string, 
    skin_color: string, 
    eye_color: string, 
    birth_year: string, 
    gender: string, 
    homeworld: string, 
    films: string[],
    species: string[],
    vehicles: string[], 
    starships: string[], 
    created: string, 
    edited: string, 
    url: string
    newStarships: [],
    newVehicles: [],
    newFilms: Films[],
    newSpecies: Species,
    newHomeWorld: Planeta,
    newPeoples: [],
}