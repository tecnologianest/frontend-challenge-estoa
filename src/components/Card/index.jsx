import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { getUrlId } from "utils/getUrlId";
import { getSpecieName } from "services/api";

import "./card.css";

export const CardComponent = ({ name, species, birth_year, url }) => {
   const [speciesNames, setSpeciesNames] = useState([]);

   useEffect(() => {
      const fetchSpeciesNames = async () => {
         if (species) {
            const speciesNamesArray = await Promise.all(
               species.map(async (specie) => {
                  const specieID = await getUrlId(specie);
                  const specieName = await getSpecieName(specieID);
                  return specieName.name || "";
               })
            );
            setSpeciesNames(speciesNamesArray);
         }
      };

      fetchSpeciesNames();
   }, [species]);

   return (
      <Card className="mt-4 cardCustom shadow">
         <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(url)}.jpg`} />
         <Card.Body>
            <Card.Title className="cart-title">{name}</Card.Title>
            <Card.Text>Especie: {speciesNames.join(", ") || ""}</Card.Text>
            <Card.Text>Ano de Nasc: {birth_year}</Card.Text>
         </Card.Body>
         <Card.Footer>
            <Button variant="primary" onClick={() => console.log("Primary")}>
               Saiba mais
            </Button>
         </Card.Footer>
      </Card>
   );
};
