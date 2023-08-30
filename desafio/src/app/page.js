"use client";

import React, { useEffect, useState } from "react";

import Character from "./components/character";

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const response = await fetch("https://swapi.dev/api/people/");
      const data = await response.json();
      setCharacters(data.results);
    }

    getCharacters();
  }, []);

  const charactersElements = characters.map((character, index) => {
    return <Character />;
  });

  return (
    <main className="flex min-h-screen flex-row flex-wrap items-center p-24 gap-8">
      {charactersElements}
    </main>
  );
}
