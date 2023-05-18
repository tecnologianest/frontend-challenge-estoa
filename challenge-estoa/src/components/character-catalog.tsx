import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Character {
  name: string;
  species: [];
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  url: string;
  skin_color: string;
  homeworld: string;
  films: [];
}

export default function CharacterCard() {
  const [characterData, setCharacterData] = useState<Character[] | null>(null);
  const [searchInput, setSearchinput] = useState<String>("");

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/people");
      setCharacterData(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl text-bold font-mono">
        Star Wars Character Wiki
      </h1>
      <br />
      <input
        type="text"
        className="justify-center border border-red-600 rounded-lg h-10 w-96"
      ></input>
      {characterData ? (
        <div className="flex gap-1 flex-wrap justify-center">
          {characterData.map((person ) => (
            <Link
              key={person.name}
              href={`/character/${person.url.split("/").at(-2)}`}
              passHref
            >
              <div className="hover:translate-y-5 hover:transition-all w-60 h-16 border-x-2 bg-gray-600 border border-red-600 mt-5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg text-white">Name: {person.name}</p>
                  <p className="text-lg text-white">
                    Birth Year: {person.birth_year}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
