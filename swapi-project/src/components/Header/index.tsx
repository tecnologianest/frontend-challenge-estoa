"use client";
import Link from "next/link";
import React, { useState } from "react";
import Search from "../Search";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header
      className=" w-full flex flex-col md:flex-row md:flex-wrap gap-8 items-center 
                  px-4 py-6 md:px-32 md:py-4 bg-[#000000] box-border relative"
    >
      <Link href="/">
        <img src="assets/images/main-Logo.png" alt="logo" className="w-24" />
      </Link>
      <nav
        className={` ml-8 bg-gray-600 md:bg-inherit 
            absolute top-0 right-0 md:relative md:translate-y-0
            px-6 pt-12 pb-6 z-20 md:p-0
            ${openMenu ? "translate-y-0" : "-translate-y-full"} transition-all`}
      >
        <ul className="flex flex-col md:flex-row gap-4 font-semibold text-slate-100 select-none">
          <li className="hover:cursor-pointer hover:text-sky-400">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:cursor-pointer hover:text-sky-400">
            <Link href="/favorites"> Favoritos </Link>
          </li>
        </ul>
        <FaTimes
          className="text-slate-50 absolute top-6 right-6 md:hidden"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
      </nav>
      <Search />
      <FaBars
        className="text-white text-xl md:hidden absolute top-8 right-8 z-10"
        onClick={() => setOpenMenu(!openMenu)}
      />
    </header>
  );
}
