"use client";
import Specie from "@/components/Specie";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { clearSelectedCharacter, fetchCharacterDetails } from "@/redux/reducers/characters";
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
    <div className="p-4 flex flex-col gap-2">
      <h1 className="mb-4 font-bold text-lg text-slate-800">
        {characterDetails.name}
      </h1>
      <span>Nome: {characterDetails.name}</span>
      <span>Nascimento: {characterDetails.birth_year}</span>
      <span>Cor dos olhos: {characterDetails.eye_color}</span>
      <span>Genero: {characterDetails.gender}</span>
      <span>Cor do cabelo: {characterDetails.hair_color}</span>
      <span>
        Altura: {(Number(characterDetails.height) / 100).toFixed(2)} m
      </span>
      <span>Peso: {characterDetails.mass} kg</span>
      <span>Cor da pele: {characterDetails.skin_color}</span>

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
