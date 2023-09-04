'use client'
import React from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/redux-hooks";
import { fetchCharacters } from "@/redux/reducers/characters";
import { useEffect } from "react";
import { ICharacter, IPeople } from "@/types/characters";
import Card from "../Card";

export default function CharactersList() {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.characters.peopleObj);
  console.log(characters.results);
  
  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <section className="py-4 box-border overflow-y-auto h-[80vh]">
      <div className="grid grid-cols-5 gap-8">
        {characters.results?.map((item: any) => (
          <Card key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}
