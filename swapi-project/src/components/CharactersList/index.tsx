'use client'
import React from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/redux-hooks";
import { clearpage, fetchCharacters, fetchPage } from "@/redux/reducers/characters";
import { useEffect } from "react";
import Card from "../Card";


export default function CharactersList() {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.characters.peopleObj);
  
  const pageNum = useAppSelector( state => state.characters.currentPage ) 
  const previousPage = useAppSelector( state => state.characters.peopleObj.previous)  
  const nextPage = useAppSelector( state => state.characters.peopleObj.next)    
  
  function resolveNextPage() {
    if (nextPage == null) {
      dispatch(fetchPage("https://swapi.dev/api/people/?page=1"))
      return;
    }
    dispatch(clearpage())
    dispatch(fetchPage(nextPage))
  }
  function resolvePreviousPage() {
    if (previousPage == null) {
      dispatch(fetchPage("https://swapi.dev/api/people/?page=8"))
      return;
    }
    dispatch(clearpage())
    dispatch(fetchPage(previousPage))
  }

  
  useEffect(() => {
    dispatch(fetchCharacters(pageNum));
  }, []);

  return (
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

      <div className="grid grid-cols-5 gap-8 mt-4">
        {characters.results?.map((item: any) => (
          <Card key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}
