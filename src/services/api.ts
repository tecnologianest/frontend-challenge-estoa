import axios from "axios";

const apiUrl = "https://swapi.dev/api";

export const api = axios.create({
  baseURL: apiUrl,
});
