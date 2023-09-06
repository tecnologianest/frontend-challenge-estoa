"use client";
import { ICharacter } from "@/types/characters";
import Link from "next/link";
import React from "react";
import Specie from "../Specie";
import { Avatar, AvatarIcon } from "@nextui-org/react";

export default function Card({ name, birth_year, url, species }: ICharacter) {
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
                        w-full min-h-35 rounded px-1
                    "
      >
        <div className="border-b border-gray-400 p-4 rounded-t flex items-center gap-4">
          <Avatar
            icon={<AvatarIcon />}
          />
          <h2 className=" text-yellow-500 font-semibold ">{name}</h2>
        </div>
        <div className="p-4">
          <h2>Nascimento: {birth_year} </h2>
          <Specie specie={species} />
        </div>
      </div>
    </Link>
  );
}
