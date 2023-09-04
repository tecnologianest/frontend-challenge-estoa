'use client'
import React from "react";

export default function Header() {
    
  return (
    <header className="w-full flex gap-8 items-center p-4 bg-[#000000]">
      <img src="assets/images/main-Logo.png" alt="logo" className="w-24"/>
      <nav>
        <ul className="flex gap-4 font-semibold text-slate-100">
          <li className="hover:cursor-pointer hover:text-slate-300">Home</li>
          <li className="hover:cursor-pointer hover:text-slate-300">
            Favorites
          </li>
        </ul>

      </nav>
    </header>
  );
}
