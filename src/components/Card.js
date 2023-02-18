import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../routes/coordinator";

export const CharacterCard = (props) => {
  const { character, specieUrl } = props;
  const [specie, setSpecie] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSpecie();
  }, []);

  const fetchSpecie = () => {
    axios
      .get(specieUrl)
      .then((resp) => {
        setSpecie(resp.data);
      })
      .catch((error) => {
        console.log("Erro ao buscar informaçöes de Star Wars API");
        console.log(error.response);
      });
  };

  return (
    <Card
      style={{
        width: "18rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
      bg={"dark"}
    >
      <Card.Body bg={"dark"}>
        <Card.Title style={{ textAlign: "center" }}>
          {character.name}
        </Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          Specie: {specie.name}
        </Card.Text>
        <Card.Text style={{ textAlign: "center" }}>
          {character.birth_year}
        </Card.Text>
      </Card.Body>
      <Button
        variant="warning"
        style={{ height: "4rem", marginRight: "1rem" }}
        onClick={() => {
          goToDetailsPage(navigate, character.name);
        }}
      >
        Details
      </Button>
    </Card>
  );
};
