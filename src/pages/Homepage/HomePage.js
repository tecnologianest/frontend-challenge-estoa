import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { CharacterCard } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { BASE_URL } from "../../constants/url";
import { Container, DivButton, Main } from "./style";

export const HomePage = () => {
  const [charactersList, setCharactersList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCharactersList();
  }, [page]);

  const fetchCharactersList = () => {
    axios
      .get(`${BASE_URL}/?page=${page}`)
      .then((resp) => {
        setCharactersList(resp.data.results);
      })
      .catch((error) => {
        console.log("Erro ao buscar informaçöes de Star Wars API");
        console.log(error.response);
      });
  };

  return (
    <Container>
      <Header />
      <Main>
        {charactersList.map((character) => {
          return (
            <CharacterCard
              character={character}
              key={character.name}
              specieUrl={
                character.species[0]
                  ? character.species[0]
                  : "https://swapi.dev/api/species/1/"
              }
            />
          );
        })}
      </Main>
      <DivButton>
        <Button onClick={() => setPage(page - 1)} variant="warning">
          &#8249;
        </Button>
        <Button onClick={() => setPage(page + 1)} variant="warning">
          &#8250;
        </Button>
      </DivButton>
      <Footer />
    </Container>
  );
};
