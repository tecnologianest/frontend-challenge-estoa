'use client'
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { changeSearch } from '@/redux/reducers/search';
import React from 'react'

export default function Search() {
    const search = useAppSelector( store => store.search )
    const dispatch = useAppDispatch()

  return (
    <input
      type="text"
      className="mx-auto md:mx-0 md:ml-auto bg-slate-200 px-4 py-2 placeholder:text-slate-500 placeholder:font-medium outline-none "
      placeholder="Pesquisar personagem"
      value={search}
      onChange={e => dispatch(changeSearch(e.target.value))}
    />
  );
}
