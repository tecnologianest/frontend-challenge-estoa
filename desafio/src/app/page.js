"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import Character from "./components/character";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchCharacters() {
      const response = await fetch(
        `https://swapi.dev/api/people/?page=${currentPage}`
      );
      const characterData = await response.json();
      setCharacters(characterData.results);
      setTotalPages(
        Math.ceil(characterData.count / characterData.results.length)
      );
    }

    fetchCharacters();
  }, [currentPage]);

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
  }, [currentPage, characters]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const charactersElements = characters.map((character, index) => {
    return <Character {...character} key={index} />;
  });

  return (
    <main className="flex min-h-screen justify-center flex-wrap items-center p-24 gap-8">
      {charactersElements}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-slate-900/10 py-4 px-8 flex justify-between">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </main>
  );
}
