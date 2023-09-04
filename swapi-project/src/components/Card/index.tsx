"use client";
import { ICharacter } from "@/types/characters";
import Link from "next/link";
import React from "react";

export default function Card({ name, birth_year, url }: ICharacter) {
    const cardNumber = getString(url); 
  
    function getString(url: any) {
    const arrUrl = url.split("people/");
    const number = arrUrl[1].split("/");
    return number[0];
  }

  return (
    <Link href={`character/${cardNumber}`}>
      <div
        className="text-slate-100 bg-gray-500 hover:bg-sky-900 hover:cursor-pointer
                        w-full min-h-35 rounded p-2
                    "
      >
        <h2>Nome:{name}</h2>
        <h2>Nascimento: {birth_year} </h2>
        <h2> Especie:</h2>
      </div>
    </Link>
  );
}
