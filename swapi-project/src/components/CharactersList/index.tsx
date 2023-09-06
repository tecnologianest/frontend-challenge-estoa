"use client";

import React from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/redux-hooks";
import {
  fetchCharacters,
  fetchPage,
  numOfPagesHandler,
} from "@/redux/reducers/characters";
import { useEffect } from "react";
import Card from "../Card";
import { Pagination, Skeleton, Spinner } from "@nextui-org/react";
import CardsSkeleton from "../CardsSkeleton";

export default function CharactersList() {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => {
    const regexp = new RegExp(state.search, "i");
    const itens = state.characters.peopleObj.results?.filter((item) =>
      item.name.match(regexp)
    );
    return itens;
  });

  const loading = useAppSelector((state) => state.characters.loading);
  const pageNum = useAppSelector((state) => state.characters.currentPage);
  const quantityOfPages = useAppSelector(
    (state) => state.characters.numOfPages
  );

  const [currentPage, setCurrentPage] = React.useState(1);

  function resolvePagination() {
    dispatch(fetchPage(`https://swapi.dev/api/people/?page=${currentPage}`));
  }

  useEffect(() => {
    dispatch(fetchCharacters(pageNum));
  }, []);

  useEffect(() => {
    if (characters) {
      dispatch(numOfPagesHandler());
    }
  }, [characters]);

  useEffect(() => {
    if (characters) {
      resolvePagination();
    }
  }, [currentPage]);

  return (
    <div className="relative">
      {loading && (
        <div className="">
          <CardsSkeleton />
          <Spinner
            labelColor="warning"
            color="default"
            className="mt-16 ml-auto"
            size="sm"
          />
        </div>
      )}

      {!loading && quantityOfPages > 1 && (
        <section className="md:py-8 box-border md:h-[100vh] overflow-y-auto sticky top-4">
          <div className="flex flex-col gap-4 md:flex-row justify-between w-full">
            <h1 className="font-semibold text-xl text-sky-400 mt-4 border-b-2 border-sky-400 inline-block pr-12">
              Star Wars personagens
            </h1>

            <Pagination
              total={quantityOfPages}
              initialPage={currentPage}
              onChange={setCurrentPage}
              size="sm"
              showControls
              loop
              className="dark"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-8 overflow-y-hidden">
            {characters?.map((item: any) => (
              <Card key={item.name} {...item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
