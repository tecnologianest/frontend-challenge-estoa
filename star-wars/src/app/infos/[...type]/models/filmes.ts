import People from "./people";
import Species from "./species";

export default interface Films {
    title:string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
    characters: People[],
    planets: string[],
    starships: string[],
    vehicles: string[],
    species: Species[],
    created: string,
    edited: string,
    url: string
    }