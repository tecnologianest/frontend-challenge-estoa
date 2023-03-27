import { CharacterCard } from "@/components/CharacterCard";
import { api } from "@/services/api";
import { removeCharactersFromString } from "@/utils/removeCharactersFromString";
import { useEffect, useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Character, characterFromApi } from "./adapters/characterFromApi";
import { IoIosArrowRoundBack } from "react-icons/io";

import "./index.scss";

export const CharacterPage: React.FC = () => {
  const { characterID } = useParams();
  const [image, setImage] = useState("");

  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    const loadCharacter = async () => {
      try {
        const { data } = await api.get(`people/${characterID}`);
        const characterMapped = characterFromApi(data);
        setCharacter(characterMapped);
      } catch (err) {
        console.error(err);
      } finally {
      }
    };

    loadCharacter();
  }, []);

  return (
    <Container>
      <div className="back-button">
        <Link to="/">
          <IoIosArrowRoundBack />
        </Link>
      </div>

      <Row>
        <Col md={6}>
          <div className="image-container">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${characterID}.jpg`}
              alt=""
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="character-informations">
            <h1>{character?.name}</h1>

            <p>Birthdate : {character?.birth_year}</p>
            <p>hair color : {character?.hair_color}</p>
            <p>eye color : {character?.eye_color}</p>
            <p>height : {character?.height}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
