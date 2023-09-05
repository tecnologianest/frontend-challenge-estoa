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
import { Pagination, Spinner } from "@nextui-org/react";

export default function CharactersList() {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(
    (state) => state.characters.peopleObj.results
  );
  const loading = useAppSelector((state) => state.characters.loading);

  const pageNum = useAppSelector((state) => state.characters.currentPage);
  const previousPage = useAppSelector(
    (state) => state.characters.peopleObj.previous
  );
  const nextPage = useAppSelector((state) => state.characters.peopleObj.next);
  const quantity = useAppSelector((state) => state.characters.numOfPages);

  const [currentPage, setCurrentPage] = React.useState(1);

  function resolvePagination() {
    dispatch(fetchPage(`https://swapi.dev/api/people/?page=${currentPage}`));
  }

  // useEffect(() => {
  //   dispatch(fetchCharacters(pageNum));
  // }, []);

  useEffect(() => {
    dispatch(numOfPagesHandler());
  }, [characters]);

  useEffect(() => {
    resolvePagination();
  }, [currentPage]);

  return (
    <div>
      {loading && (
        <div className="w-screen">
          <Spinner
            label="Loading..."
            labelColor="warning"
            color="warning"
            className="mt-16 ml-auto"
          />
        </div>
      )}

      {!loading && (
        <section className="py-8 box-border h-[80vh]">
          <div className="flex justify-between w-full">
            <h1 className="font-semibold text-xl text-sky-400 mt-4 border-b-2 border-sky-400 inline-block pr-12">
              Star Wars personagens
            </h1>

            <Pagination
              total={quantity}
              initialPage={currentPage}
              onChange={setCurrentPage}
              size='sm'
              showControls
              loop
              className="dark"
            />
          </div>
          <div className="grid grid-cols-5 gap-8 mt-8">
            {characters?.map((item: any) => (
              <Card key={item.name} {...item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
