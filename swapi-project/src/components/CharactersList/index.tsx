"use client";
import React from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/redux-hooks";
import { fetchCharacters, fetchPage, numOfPagesHandler } from "@/redux/reducers/characters";
import { useEffect } from "react";
import Card from "../Card";
import { Spinner } from "@nextui-org/react";

export default function CharactersList() {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.characters.peopleObj);
  const loading = useAppSelector((state) => state.characters.loading);
  
  const pageNum = useAppSelector((state) => state.characters.currentPage);
  const previousPage = useAppSelector((state) => state.characters.peopleObj.previous);
  const nextPage = useAppSelector((state) => state.characters.peopleObj.next);
  const quantity = useAppSelector((state) => state.characters.numOfPages);  

  function resolveNextPage() {
    if (nextPage == null) {
      dispatch(fetchPage("https://swapi.dev/api/people/?page=1"));
      return;
    }
    dispatch(fetchPage(nextPage));
  }
  function resolvePreviousPage() {
    if (previousPage == null) {
      dispatch(fetchPage(`https://swapi.dev/api/people/?page=${quantity}`));
      return;
    }
    dispatch(fetchPage(previousPage));
  }

  useEffect(() => {
    dispatch(fetchCharacters(pageNum));
  }, []);
  
  useEffect(() => {
    dispatch(numOfPagesHandler());
  }, [characters]);



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
        <section className="py-4 box-border overflow-y-auto h-[80vh]">
          <button
            className="text-slate-100 hover:text-blue-400"
            onClick={() => resolvePreviousPage()}
          >
            Previous
          </button>
          <span className="text-slate-100 mx-2">{pageNum}</span>
          <button
            className="text-slate-100 hover:text-blue-400"
            onClick={() => resolveNextPage()}
          >
            Next
          </button>

          {quantity && <span className="text-white">{quantity}</span>}

          <div className="grid grid-cols-5 gap-8 mt-4">
            {characters.results?.map((item: any) => (
              <Card key={item.name} {...item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
