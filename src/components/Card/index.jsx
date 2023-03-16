import { useEffect, useState } from "react";
import { getSpecieName } from "services/api";
import { useNavigate } from "react-router-dom";
import { cardTypes } from "./cardType";

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

   const navigateTo = (id) => {
      localStorage.setItem("type", type);
      navigate(`/knowmore/${id}/${type}`);
   };

   const CardType = cardTypes[type];

   return <CardType props={props} speciesNames={speciesNames} knowMoreClick={navigateTo} />;
};
