"use client";
import Link from "next/link";
import React from "react";
import Search from "../Search";

export default function Header() {
  return (
    <header className="w-full flex gap-8 items-center px-32 py-4 bg-[#000000] box-border">
      <Link href="/">
        <img src="assets/images/main-Logo.png" alt="logo" className="w-24" />
      </Link>
      <nav className="ml-8">
        <ul className="flex gap-4 font-semibold text-slate-100 select-none">
          <li className="hover:cursor-pointer hover:text-sky-400">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:cursor-pointer hover:text-sky-400">
            <Link href="/favorites"> Favoritos </Link>
          </li>
        </ul>
      </nav>
      <Search />
      
    </header>
  );
}
