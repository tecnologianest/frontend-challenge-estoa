'use client'
import React from "react";

export default function Header() {
    
  return (
    <header className="w-full flex gap-8 items-center px-32 py-4 bg-[#000000]">
      <img src="assets/images/main-Logo.png" alt="logo" className="w-24"/>
      <nav>
        <ul className="flex gap-4 font-semibold text-slate-100 select-none">
          <li className="hover:cursor-pointer hover:text-sky-400">Home</li>
          <li className="hover:cursor-pointer hover:text-sky-400">
            Favorites
          </li>
        </ul>

      </nav>
        
    </header>
  );
}
