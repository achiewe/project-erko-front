"use client";
import Link from "next/link";
import React from "react";

export default function NavigationPages() {
  return (
    <nav aria-label="Main navigation" className="p-4">
      <ul className="flex flex-row items-center">
        <li className="w-[69px] h-[30px] bg-[white] flex justify-center items-center border-r-[0.5px] border-b-[1.9px] border-gray-800 shadow-[0px_1px_0px_rgba(0,0,0,0.6)]">
          <Link href="/erko" className="text-black text-[20px]">
            ERKO
          </Link>
        </li>
        <li className="w-[69px] h-[30px] bg-[white] flex justify-center items-center border-r-[0.5px] border-b-[1.9px] border-gray-800 shadow-[0px_1px_0px_rgba(0,0,0,0.6)]">
          <Link href="/jobs" className="text-black text-[20px]">
            Jobs
          </Link>
        </li>
        <li className="w-[69px] h-[30px] bg-[white] flex justify-center items-center border-r-[0.5px] border-b-[1.9px] border-gray-800 shadow-[0px_1px_0px_rgba(0,0,0,0.6)]">
          <Link href="/game" className="text-black text-[20px]">
            Game
          </Link>
        </li>
      </ul>
    </nav>
  );
}
