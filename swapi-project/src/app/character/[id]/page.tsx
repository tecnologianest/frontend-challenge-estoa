"use client";
import CharacterInfo from "@/components/CharacterInfo";
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
      className="flex flex-col gap-2
                  bg-[#141318]
                  px-8 md:px-32 py-4 box-border overflow-hidden"
    >
      <h1 className="mb-4 font-bold text-lg text-slate-50">
        {characterDetails.name}
      </h1>

      <CharacterInfo text="Nome" info={characterDetails.name} />
      <CharacterInfo text="Nascimento" info={characterDetails.birth_year} />
      <CharacterInfo text="Cor dos olhos" info={characterDetails.eye_color} />
      <CharacterInfo text="Genero" info={characterDetails.gender} />
      <CharacterInfo text="Cor do cabelo" info={characterDetails.hair_color} />
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
      <CharacterInfo text="Cor da pele" info={characterDetails.skin_color} />

      {characterDetails.species !== undefined && (
        <Specie specie={characterDetails.species} />
      )}

      <span>Genero: {characterDetails.gender}</span>
      <span>Genero: {characterDetails.gender}</span>
      <span>Genero: {characterDetails.gender}</span>
    </div>
  );
}

export default page;
