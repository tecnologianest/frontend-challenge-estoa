'use client'
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { fetchFilms } from '@/redux/reducers/films';
import React, { useEffect } from 'react'

export default function Films() {
    const dispatch = useAppDispatch()
    const loading = useAppSelector( state => state.films.loading )

    useEffect(() => {
        dispatch(fetchFilms())
    }, [])

  return (
    <div className='mt-8'>
      {loading && <span className='text-white'>Loading films...</span>}
      {!loading && <span className="text-white">Films</span>}
    </div>
  );
}
