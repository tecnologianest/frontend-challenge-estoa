import { ICharacter } from '@/types/characters';
import React from 'react'


export default function Card({name, birth_year}: ICharacter) {
  return (
    <div className="text-slate-100 bg-gray-500 hover:bg-sky-900 hover:cursor-pointer
                     w-[255px] mb-4 min-h-35 rounded p-2"
    >
      <h2>Nome:{name}</h2>
      <h2>Nascimento: {birth_year} </h2>
      <h2> Especie: </h2>
    </div>
  );
}
