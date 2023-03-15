const API_URL = "https://swapi.dev/api";

async function fetchData(endpoint) {
   const response = await fetch(`${API_URL}/${endpoint}`);

   if (!response.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
   }

   return response.json();
}

export async function getUserById(id) {
   return fetchData(`people/${id}/`);
}

export async function getAllUsers() {
   return fetchData(`people/`);
}

export async function getSpecieName(id) {
   return fetchData(`species/${id}/`);
}