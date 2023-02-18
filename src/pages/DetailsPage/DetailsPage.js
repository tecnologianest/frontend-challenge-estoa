import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import Card from "react-bootstrap/Card";
import { Button, ButtonGroup } from "react-bootstrap";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const DetailsPage = () => {
  const { name } = useParams();
  const [character, setCharacter] = useState(null);
  const [homeworld, setHomeworld] = useState([]);
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/?search=${name}`)
      .then((response) => {
        setCharacter(response.data.results[0]);
        axios
          .get(response.data.results[0].homeworld)
          .then((response) => setHomeworld(response.data.name))
          .catch((error) => console.log(error));
        Promise.all(
          response.data.results[0].films.map((filmUrl) => axios.get(filmUrl))
        )
          .then((responses) =>
            setFilms(responses.map((response) => response.data.title))
          )
          .catch((error) => console.log(error));
        axios
          .get(response.data.results[0].species)
          .then((response) => setSpecies(response.data.name))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, [name]);

  if (!character || !homeworld || !films.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <Card
        border="light"
        style={{ width: "100vw", height: "54vh", display: "flex" }}
        bg={"dark"}
      >
        <Card.Header>
          <Card.Title style={{ textAlign: "center" }}>
            {character.name}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>Birth date: {character.birth_year}</Card.Text>
          <Card.Text>Eye color: {character.eye_color}</Card.Text>
          <Card.Text>Sex: {character.gender}</Card.Text>
          <Card.Text>Hair color: {character.hair_color}</Card.Text>
          <Card.Text>Hight: {character.height}</Card.Text>
          <Card.Text>Weight: {character.mass}</Card.Text>
          <Card.Text>Skin color: {character.skin_color}</Card.Text>
          <Card.Text>Homeworld: {homeworld}</Card.Text>
          <Card.Text>Specie: {species ? species : "Human"}</Card.Text>
        </Card.Body>
      </Card>

      <Card
        border="light"
        style={{ width: "100vw", display: "flex", alignItems: "center" }}
        bg={"dark"}
      >
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            Featuring movies:
          </Card.Title>
          <ButtonGroup vertical>
            {films.map((film, index) => (
              <Button action variant="warning" key={index}>
                {film}
              </Button>
            ))}
          </ButtonGroup>
        </Card.Body>
      </Card>
      <br />
      <Footer />
    </div>
  );
};
