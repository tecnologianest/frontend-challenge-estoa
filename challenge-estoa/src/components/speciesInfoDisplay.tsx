import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Specie = {
  specieId: string;
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
};

export default function Species({ specieId }: { specieId: string }) {
  const router = useRouter();
  const [species, setSpecies] = useState<Specie>();

  useEffect(() => {
    const fetchSpecies = async () => {
      await axios
        .get(`https://swapi.dev/api/species/${specieId}/`)
        .then((res) => {
          setSpecies(res.data);
        });
    };

    fetchSpecies();
  }, [specieId]);

  return (
    <div>
      {species ? (
        <div>
          <p className="text-lg">
            {" "}
            <strong>Specie Name:</strong> {species.name}
          </p>
          <p className="text-lg">
            {" "}
            <strong>Average Height:</strong> {species.average_height}
          </p>
          <p className="text-lg">
            <strong>Average Lifespan:</strong> {species.average_lifespan}
          </p>
          <p className="text-lg">
            <strong>Classification:</strong> {species.classification}
          </p>
        </div>
      ) : (
        <p>oi</p>
      )}
    </div>
  );
}
