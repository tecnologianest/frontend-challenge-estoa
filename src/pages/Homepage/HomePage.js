import React, { useContext } from "react";
import { CharacterCard } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Container, Main } from "./style";
import Form from "react-bootstrap/Form";

export const HomePage = () => {
  const context = useContext(GlobalContext);
  const { selectedFilm, setSelectedFilm, charactersList, films } = context;

  const handleFilmChange = (event) => {
    setSelectedFilm(event.target.value);
  };

  return (
    <Container>
      <Header />
      <Form.Group
        className="mb-3"
        style={{
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Form.Label style={{ color: "black" }}>
          Filter your characters by movie!
        </Form.Label>
        <Form.Select
          style={{ width: "18rem" }}
          value={selectedFilm}
          onChange={handleFilmChange}
        >
          <option value="">All Films</option>
          {films &&
            films.map((film) => (
              <option key={film.url} value={film.url}>
                {film.title}
              </option>
            ))}
        </Form.Select>
      </Form.Group>

      <Main>
        {charactersList &&
          charactersList
            .filter((character) => {
              if (selectedFilm) {
                return character.films.includes(selectedFilm);
              }
              return true;
            })
            .map((character) => (
              <CharacterCard
                character={character}
                key={character.name}
                specieUrl={character.species[0]}
              />
            ))}
      </Main>
      <Footer />
    </Container>
  );
};
