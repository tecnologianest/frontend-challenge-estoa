"use client";
import CharacterInfo from "@/components/CharacterInfo";
import Homeworld from "@/components/Homeworld";
import Specie from "@/components/Specie";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { clearSelectedCharacter,fetchCharacterDetails } from "@/redux/reducers/characters";
import { fetchFilms } from "@/redux/reducers/films";
import { Chip, Spinner } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

function page({ params }: PageProps) {
  const dispatch = useAppDispatch();
  const loadingFilm = useAppSelector( state => state.films.loading)
  const characterDetails = useAppSelector(
    (state) => state.characters.selectedCharacter
  );
  const characterFilms: any = useAppSelector(
    (state) => state.films.filmsObj.results
  );

  const [moviesList, setMoviesList] = useState<any>([]);

  useEffect(() => {
    dispatch(fetchCharacterDetails(params.id));
    dispatch(fetchFilms());
  }, [dispatch]);

  useEffect(() => {
    dispatch(clearSelectedCharacter());
  }, [dispatch]);

  useEffect(() => {
    testList();
  }, [characterFilms]);

  function testList() {
    if (characterFilms !== undefined) {
      characterFilms.forEach((item: any) => {
        characterDetails.films?.forEach((film) => {
          if (film == item.url) {
            console.log("same");
            console.log(item.title);
            setMoviesList((prevMovieList: string[]) => [
              ...prevMovieList,
              item.title,
            ]);
          }
        });
      });
    }
  }

  return (
    <div
      className="flex justify-center items-center bg-[#141318]
                  box-border overflow-hidden pt-8 md:pt-20"
    >
      <div className="flex flex-col  md:flex-row gap-8 bg-[#23222b] px-8 md:px-32 py-4 md:py-8 rounded w-[85%] md:w-[60%]">
        <div className="flex flex-col gap-2 md:items-end md:w-[50%]">
          <h1 className="mb-4 font-bold text-lg text-yellow-500 w-fit">
            {characterDetails.name}
          </h1>

          {loadingFilm && (
            <Spinner
              labelColor="warning"
              color="default"
              className="mt-16 ml-auto"
              size="sm"
            />
          )}
          {!loadingFilm &&
            moviesList.map((movie: string, index: number) => (
              <Chip size="sm" key={index} className="text-slate-800">
                {movie}
              </Chip>
            ))}
        </div>
        <aside className="flex flex-col gap-2">
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

          {characterDetails.species !== undefined && (
            <Specie specie={characterDetails.species} />
          )}
        </aside>
      </div>
    </div>
  );
}

export default page;
