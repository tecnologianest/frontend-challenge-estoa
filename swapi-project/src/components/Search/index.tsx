'use client'
import React from 'react'

export default function Search() {
  return (
    <input
      type="text"
      className="ml-auto bg-slate-200 px-4 py-2 placeholder:text-slate-500 placeholder:font-medium outline-none "
      placeholder="Pesquisar personagem"
    />
  );
}
