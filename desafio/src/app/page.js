"use client";

import React, { useEffect, useState } from "react";

import Character from "./components/character";

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const response = await fetch("https://swapi.dev/api/people/");
      const character = await response.json();
      setCharacters(character.results);
    }

    getCharacters();
  }, []);

  useEffect(() => {
    async function fetchHomeworlds() {
      const updatedCharacters = await Promise.all(
        characters.map(async (character) => {
          const homeworldResponse = await fetch(character.homeworld);
          const homeworldData = await homeworldResponse.json();
          const updatedCharacter = {
            ...character,
            homeworld: homeworldData.name,
          };
          return updatedCharacter;
        })
      );

      setCharacters(updatedCharacters);
    }

    if (characters.length > 0) {
      fetchHomeworlds();
    }
  }, [characters]);

  const charactersElements = characters.map((character, index) => {
    return <Character {...character} key={index} />;
  });

  return (
    <main className="flex min-h-screen justify-center flex-wrap items-center p-24 gap-8">
      {charactersElements}
    </main>
  );
}
