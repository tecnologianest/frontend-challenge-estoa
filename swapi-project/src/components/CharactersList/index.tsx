'use client'
import React from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/redux-hooks";
import { fetchCharacters } from "@/redux/reducers/characters";
import { useEffect } from "react";
import { ICharacter, IPeople } from "@/types/characters";

export default function CharactersList() {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.characters.peopleObj);
  console.log(characters.results);
  
  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <section className="py-4 box-border overflow-y-auto h-[80vh]">
      <div className=" flex flex-col">
        {characters.results?.map((item: any) => (
          <div className="text-slate-100 mb-4 h-full bg-gray-500 hover:bg-sky-900 hover:cursor-pointer w-[255px] rounded p-2">
            <h2>Nome:{item.name}</h2>
            <h2>Nascimento: {item.birth_year} </h2>
            <h2> Especie: </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
