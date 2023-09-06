"use client";
import CharacterInfo from "@/components/CharacterInfo";
import Homeworld from "@/components/Homeworld";
import Specie from "@/components/Specie";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import {
  clearSelectedCharacter,
  fetchCharacterDetails,
} from "@/redux/reducers/characters";
import React, { useEffect } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

function page({ params }: PageProps) {
  const dispatch = useAppDispatch();
  const characterDetails = useAppSelector(
    (state) => state.characters.selectedCharacter
  );

  useEffect(() => {
    dispatch(fetchCharacterDetails(params.id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(clearSelectedCharacter());
  }, [dispatch]);

  return (
    <div
      className="flex justify-center items-center bg-[#141318]
                  box-border overflow-hidden pt-8 md:pt-20"
    >
      <div className="flex flex-col  md:flex-row gap-4 bg-[#23222b] px-8 md:px-32 py-4 rounded w-[85%] md:w-[50%]">
        <h1 className="mb-4 font-bold text-lg text-yellow-500">
          {characterDetails.name}
        </h1>

        <aside className="flex flex-col gap-2">
          <CharacterInfo text="Nome" info={characterDetails.name} />
          <CharacterInfo text="Nascimento" info={characterDetails.birth_year} />
          <CharacterInfo
            text="Cor dos olhos"
            info={characterDetails.eye_color}
          />
          <CharacterInfo text="Genero" info={characterDetails.gender} />
          <CharacterInfo
            text="Cor do cabelo"
            info={characterDetails.hair_color}
          />
          <div>
            <CharacterInfo
              text="Altura"
              info={(Number(characterDetails.height) / 100).toFixed(2)}
            />
            <span className="text-slate-100">m</span>
          </div>
          <div>
            <CharacterInfo text="peso" info={characterDetails.mass} />
            <span className="text-slate-100">Kg</span>
          </div>
          <CharacterInfo
            text="Cor da pele"
            info={characterDetails.skin_color}
          />

          {characterDetails.homeworld !== undefined && (
            <Homeworld planet={characterDetails.homeworld} />
          )}

          <span className="text-white flex flex-col">Films: {characterDetails.films}</span>

          {characterDetails.species !== undefined && (
            <Specie specie={characterDetails.species} />
          )}
        </aside>
      </div>
    </div>
  );
}

export default page;
