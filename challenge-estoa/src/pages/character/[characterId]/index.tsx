import axios from "axios";
import { useEffect, useState } from "react";

export default function CharacterDetailsPage() {
  const [characterDetails, setCharacterDetails] = useState<{}>();

  useEffect(() => {
    fetchCharacterById();
  }, []);

  const fetchCharacterById = async (id: string) => {
    await axios
      .get(`"https://swapi.dev/api/people/${id}/"`)
      .then((response) => {
        setCharacterDetails(response.data);
        console.log(characterDetails);
      });
  };
  return <div></div>;
}
