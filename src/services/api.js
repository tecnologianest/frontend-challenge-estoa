import { getUrlId } from "utils/getUrlId";
const API_URL = "https://swapi.dev/api";

async function fetchData(endpoint) {
   const response = await fetch(`${API_URL}/${endpoint}`);

   if (!response.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
   }

   return response.json();
}

async function fetchDataUrl(url) {
   const response = await fetch(url);

   if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
   }

   return response.json();
}

export async function getUserById(id) {
   return fetchData(`people/${id}/`);
}

export async function getDataById(type, id) {
   return fetchData(`${type}/${id}/`);
}

export async function getAllUsers() {
   return fetchData(`people/`);
}

export async function getAllMovies() {
   return fetchData(`films/`);
}
export async function getAllSpecies() {
   return fetchData(`species/`);
}
export async function getAllPlanets() {
   return fetchData(`planets/`);
}
export async function getAllStarships() {
   return fetchData(`starships/`);
}
export async function getAllVehicles() {
   return fetchData(`vehicles/`);
}

export async function getSpecieName(url) {
   return fetchDataUrl(url);
}

export async function searchUserByName(typeSearch, name) {
   return fetchData(`${typeSearch}/?search=${name}`);
}

export async function getNextAndBefore(url) {
   return fetchDataUrl(url);
}

export async function getHomeworldName(homeWorld) {
   return fetchDataUrl(homeWorld);
}

export async function getFilm(url) {
   return fetchDataUrl(url);
}

export async function getVehicles(url) {
   return fetchDataUrl(url);
}
export async function getStarships(url) {
   return fetchDataUrl(url);
}

async function getCharacterData(data) {
   const promises = data.characters.map(async (character) => {
      const characterData = await fetchDataUrl(character);
      return {
         name: characterData.name,
         id: getUrlId(characterData.url),
      };
   });
   const characters = await Promise.all(promises);
   return characters;
}

async function getPlanetsData(data) {
   try {
      const promises = data.planets.map(async (planet) => {
         const planetData = await fetchDataUrl(planet);
         return {
            name: planetData.name,
            id: getUrlId(planetData.url),
         };
      });
      const planets = await Promise.all(promises);
      return planets;
   } catch (error) {
      console.log(error);
      throw new Error(`Failed to fetch data from Planets`);
   }
}

async function getStarshipsData(data) {
   const promises = data.starships.map(async (starship) => {
      const starshipsData = await fetchDataUrl(starship);
      return {
         name: starshipsData.name,
         id: getUrlId(starshipsData.url),
      };
   });
   const starships = await Promise.all(promises);
   return starships;
}

async function getVehiclesData(data) {
   try {
      const promises = data.vehicles.map(async (vehicle) => {
         const vehicleData = await fetchDataUrl(vehicle);
         return {
            name: vehicleData.name,
            id: getUrlId(vehicleData.url),
         };
      });
      const vehicles = await Promise.all(promises);
      return vehicles;
   } catch (error) {
      throw new Error(`Failed to fetch data from Vehicle`);
   }
}

async function getSpeciesData(data) {
   const promises = data.species.map(async (specie) => {
      const specieData = await fetchDataUrl(specie);
      return {
         name: specieData.name,
         id: getUrlId(specieData.url),
      };
   });
   const species = await Promise.all(promises);
   return species;
}

async function getFilmsData(data) {
   const promises = data.films.map(async (film) => {
      const filmData = await fetchDataUrl(film);
      return {
         name: filmData.name,
         id: getUrlId(filmData.url),
      };
   });
   const films = await Promise.all(promises);
   return films;
}

export async function getMovieInfo(id) {
   try {
      const movieData = await fetchData(`films/${id}`);
      const characters = await getCharacterData(movieData);
      const planets = await getPlanetsData(movieData);
      const starships = await getStarshipsData(movieData);
      const vehicles = await getVehiclesData(movieData);
      const species = await getSpeciesData(movieData);

      return {
         movieData,
         characters,
         planets,
         starships,
         vehicles,
         species,
      };
   } catch (error) {
      throw new Error(`Failed to fetch data from Movie`);
   }
}

export async function getPeopleInfo(id) {
   try {
      const peopleData = await getUserById(id);
      const films = await getFilmsData(peopleData);
      const starships = await getStarshipsData(peopleData);
      const vehicles = await getVehiclesData(peopleData);
      const species = await getSpeciesData(peopleData);

      return {
         peopleData,
         films,
         starships,
         vehicles,
         species,
      };
   } catch (error) {
      throw new Error(`Failed to fetch data from People`);
   }
}

export async function getHomeData(type) {
   switch (type) {
      case "films":
         return getAllMovies();
      case "people":
         return getAllUsers();
      case "planets":
         return getAllPlanets();
      case "species":
         return getAllSpecies();
      case "starships":
         return getAllStarships();
      case "vehicles":
         return getAllVehicles();
      default:
         break;
   }
}

export async function getAllData(id, type) {
   switch (type) {
      case "films":
         return getMovieInfo(id);
      case "people":
         return getPeopleInfo(id);
      default:
         break;
   }
}
