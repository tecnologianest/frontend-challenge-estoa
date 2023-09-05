import { tipo } from "./[...type]/models/tipo";

export const RouteMapping: Record<string, string> = {
    [tipo.PERSONAGEM]: "https://swapi.dev/api/people/",
    [tipo.FILMES]: "https://swapi.dev/api/films/",
    [tipo.PLANETA]: "https://swapi.dev/api/planets/",
    [tipo.NAVES]: "https://swapi.dev/api/starships/",
    [tipo.VEICULOS]: "https://swapi.dev/api/vehicles/",
};