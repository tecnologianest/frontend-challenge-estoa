'use client'
import { ComponentProps, useEffect, useState } from 'react';
import { RouteMapping } from '../../urls';
import { Button } from './button';
import { Input } from "@nextui-org/react";
import Image from 'next/image';

export type ButtonProps = ComponentProps<'input'> & {
  tipoParams: string;
}

export function InputSearch({ tipoParams}: ButtonProps) {

  const route =`${RouteMapping[tipoParams] || ""}?search=`;
  
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
