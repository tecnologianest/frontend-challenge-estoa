import { removeCharactersFromString } from "@/utils/removeCharactersFromString";
import { useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./index.scss";

interface CardMovieProps {
  name: string;
  personLink: string;
}

export const CharacterCard: React.FC<CardMovieProps> = ({
  name,
  personLink,
}) => {
  const navigate = useNavigate();
  const personID = removeCharactersFromString(personLink);

  const handleSelectCharacter = () => {
    navigate(`character/${personID}`);
  };

  return (
    <div className="card-container">
      <Card onClick={handleSelectCharacter}>
        <Card.Img
          variant="top"
          src={`https://starwars-visualguide.com/assets/img/characters/${personID}.jpg`}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};
