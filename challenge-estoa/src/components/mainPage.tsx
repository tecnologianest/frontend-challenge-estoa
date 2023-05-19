import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Species from "./speciesInfoDisplay";
import Image from "next/image";
import { getImagePath } from "../utils/getImagePath";
import { useRouter } from "next/router";

type Character = {
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
};

export default function CharacterCard() {
  const [characterData, setCharacterData] = useState<Character[] | null>(null);

  const { query, isReady } = useRouter();
  const search = query.search ?? "";

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/people${
            search !== "" ? `?search=${search}` : ""
          }`
        );
        setCharacterData(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    if (isReady) {
      fetchCharacters();
    }
  }, [search, isReady]);

  return (
    <div className="flex flex-col justify-center items-center max-w-7xl mx-auto p-6">
      <h1 className="text-white text-center text-3xl text-bold font-mono">
        Star Wars Character Wiki
      </h1>
      <br />

      <form>
        <input
          placeholder="character name + enter"
          name="search"
          defaultValue={search}
          type="text"
          className="p-4 justify-center border border-red-600 rounded-lg h-10 w-96"
        />
      </form>

      {characterData ? (
        <div className="flex flex-col md:grid md:grid-cols-3 gap-2 items-stretch justify-center w-full">
          {characterData.map((person) => (
            <Link
              key={person.name}
              href={`/character/${person.url.split("/").at(-2)}`}
              passHref
            >
              <div className="hover:translate-y-2 hover:transition-all h-full border-x-2 bg-gray-600 border border-red-600 mt-5 rounded-lg flex items-center justify-center">
                <div className="text-center flex flex-col ">
                  <Image
                    src={getImagePath(person.name)}
                    alt={person.name}
                    className="w-auto h-auto"
                    width={300}
                    height={300}
                  />
                  <p className="text-lg text-white font-mono">
                    Name: {person.name}
                  </p>
                  <p className="text-lg text-white font-mono">
                    Birth Year: {person.birth_year}
                  </p>
                  {person.species.length > 0 ? (
                    <>
                      {person.species.map((specieUrl: string, index) => (
                        <p className="text-lg font-mono text-white" key={index}>
                          <Species
                            specieId={`${specieUrl.split("/").at(-2)}`}
                          />
                        </p>
                      ))}
                    </>
                  ) : (
                    <p className="text-xs text-white font-semibold font-mono underline">
                      Specie not provided by API!
                    </p>
                  )}
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
