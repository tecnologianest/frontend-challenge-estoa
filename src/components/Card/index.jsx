import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { getUrlId } from "utils/getUrlId";
import { getSpecieName } from "services/api";
import { useNavigate } from "react-router-dom";

import "./card.css";

export const CardComponent = ({ props, type }) => {
   const navigate = useNavigate();
   const [speciesNames, setSpeciesNames] = useState([]);
   useEffect(() => {
      const fetchSpeciesNames = async () => {
         if (props.species) {
            const speciesNamesArray = await Promise.all(
               props.species.map(async (specie) => {
                  const specieName = await getSpecieName(specie);
                  return specieName.name || "";
               })
            );
            setSpeciesNames(speciesNamesArray);
         }
      };

      fetchSpeciesNames();
   }, [props?.species]);

   const navigateTo = (id, type) => {
      localStorage.setItem("type", type);
      navigate(`/knowmore/${id}/${type}`);
   };

   const cardCreator = () => {
      if (type === "films") {
         return (
            <Card className="mt-4 cardCustom shadow">
               <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/films/${getUrlId(props.url)}.jpg`} />
               <Card.Body>
                  <Card.Title className="cart-title">{props.title}</Card.Title>
                  <Card.Text>Episodios: {props.episode_id || ""}</Card.Text>
                  <Card.Text>Diretor: {props.director}</Card.Text>
                  <Card.Text>Lançamento: {props.release_date}</Card.Text>
               </Card.Body>
               <Card.Footer>
                  <Button variant="primary" onClick={() => navigateTo(getUrlId(props.url), type)}>
                     Saiba mais
                  </Button>
               </Card.Footer>
            </Card>
         );
      } else if (type === "people") {
         return (
            <Card className="mt-4 cardCustom shadow">
               <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(props.url)}.jpg`} />
               <Card.Body>
                  <Card.Title className="cart-title">{props.name}</Card.Title>
                  <Card.Text>Especie: {speciesNames.join(", ") || ""}</Card.Text>
                  <Card.Text>Ano de Nasc: {props.birth_year}</Card.Text>
               </Card.Body>
               <Card.Footer>
                  <Button variant="primary" onClick={() => navigateTo(getUrlId(props.url), type)}>
                     Saiba mais
                  </Button>
               </Card.Footer>
            </Card>
         );
      }
   };

   return cardCreator();
};
