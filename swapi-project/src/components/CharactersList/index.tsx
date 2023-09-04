'use client'
import React from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/redux-hooks";
import { fetchCharacters } from "@/redux/reducers/characters";
import { useEffect } from "react";

export default function CharactersList() {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.characters.charactersList);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return <div>CharactersList</div>;
}
