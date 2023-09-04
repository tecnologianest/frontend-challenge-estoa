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

  const routeMapping: Record<string, string> = {
    [tipo.PERSONAGEM]: "https://swapi.dev/api/people/?search=",
    [tipo.FILMES]: "https://swapi.dev/api/films/?search=",
    [tipo.PLANETA]: "https://swapi.dev/api/planets/?search=",
    [tipo.NAVES]: "https://swapi.dev/api/starships/?search=",
    [tipo.VEICULOS]: "https://swapi.dev/api/vehicles/?search=",
  };
  
  const route = routeMapping[tipoParams] || "";
  
  if (!route) {
    throw new Error("Tipo de parâmetro inválido: " + tipoParams);
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
