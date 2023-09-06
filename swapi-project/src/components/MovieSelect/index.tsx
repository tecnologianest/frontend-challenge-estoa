'use client'
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { fetchFilms } from '@/redux/reducers/films';
import { changeSelect } from '@/redux/reducers/select';
import React, { useEffect } from 'react'

export default function MovieSelect() {
    const dispatch = useAppDispatch()
    const selectValue = useAppSelector( state => state.select)
    const loading = useAppSelector( state => state.films.loading );
    const films: any = useAppSelector(state => state.films.filmsObj.results);


    useEffect(() => {
        dispatch(fetchFilms())
    }, [])

  return (
    <div className="mt-8">
      {loading && <span className="text-white">Loading films...</span>}
      {!loading && films !== undefined && (
        <select className="" value={selectValue} onChange={e => dispatch(changeSelect(e.target.value))}>
          <option value="">Selecione um filme</option>
          {films.map((film: any, index: number) => (
            <option key={index} value={film.url}>
              {film.title}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
