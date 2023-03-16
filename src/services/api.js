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

export async function getAllUsers() {
   return fetchData(`people/`);
}

export async function getAllMovies() {
   return fetchData(`films/`);
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
