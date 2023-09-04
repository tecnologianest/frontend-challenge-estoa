'use client'
import Link from "next/link";
import React from "react";

export default function Header() {
    
  return (
    <header className="w-full flex gap-8 items-center px-32 py-4 bg-[#000000] box-border">
      <img src="assets/images/main-Logo.png" alt="logo" className="w-24" />
      <nav>
        <ul className="flex gap-4 font-semibold text-slate-100 select-none">
          <li className="hover:cursor-pointer hover:text-sky-400"> <Link href='/'>Home</Link> </li>
          <li className="hover:cursor-pointer hover:text-sky-400"> <Link href='/favorites'> Favorites </Link> </li>
        </ul>
      </nav>
      <input
        type="text"
        className="ml-auto bg-slate-200 px-4 py-2 placeholder:text-slate-500 placeholder:font-medium outline-none "
        placeholder="Pesquisar personagem"
      />
    </header>
  );
}
