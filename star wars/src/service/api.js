import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.dev/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;