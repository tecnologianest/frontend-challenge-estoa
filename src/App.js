import React, { useEffect, useState } from "react";
import Router from "./routes/Router";
import { GlobalContext } from "./contexts/GlobalContext.js";
import axios from "axios";
import { BASE_URL, BASE_URL_FILMS } from "./constants/url";

function App() {
  const [charactersList, setCharactersList] = useState([]);
  const [films, setFilms] = useState(null);
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    const fetchAllCharacters = async (page, allCharacters) => {
      const response = await axios.get(`${BASE_URL}/?page=${page}`);
      const newCharacters = allCharacters.concat(response.data.results);
      if (response.data.next) {
        return fetchAllCharacters(page + 1, newCharacters);
      } else {
        setCharactersList(newCharacters);
      }
    };
    console.log(charactersList);
    fetchAllCharacters(1, []);
  }, []);

  useEffect(() => {
    axios
      .get(BASE_URL_FILMS)
      .then((response) => {
        setFilms(response.data.results);
        console.log(films);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const context = { selectedFilm, setSelectedFilm, charactersList, films };

  return (
    <div>
      <GlobalContext.Provider value={context}>
        <Router />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
