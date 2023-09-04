'use client'
import { ComponentProps, useEffect, useState } from 'react';
import { Button } from './button';
import { tipo } from '../models/tipo';
import { Input } from "@nextui-org/react";
import Image from 'next/image';

export type ButtonProps = ComponentProps<'input'> & {
  tipoParams: string;
}

export function InputSearch({ tipoParams, ...props }: ButtonProps) {

  let route: string = ''
  switch (tipoParams) {
    case tipo.PERSONAGEM:
      route = "https://swapi.dev/api/people/?search="
      break;

    case tipo.FILMES:
      route = "https://swapi.dev/api/films/?search="
      break;

    case tipo.PLANETA:
      route = "https://swapi.dev/api/planets/?search="
      break;

    case tipo.NAVES:
      route = "https://swapi.dev/api/starships/?search="
      break;

    case tipo.VEICULOS:
      route = "https://swapi.dev/api/vehicles/?search="
      break;

  }

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue === '') {
      document.getElementById('searchButton')?.click();
    }
  }, [inputValue]);

  return (
    <div className='flex'>
      <Input
        label="Pesquisar"
        value={inputValue}
        onValueChange={setInputValue}
        className='text-black max-w-xs'
      />
      <Button route={route} search={inputValue} id="searchButton">
        <Image
          src="/assets/pesquisar.svg"
          alt="Imagem pesquisar"
          width={60}
          height={60}
        />
      </Button>
    </div>
  )

}
