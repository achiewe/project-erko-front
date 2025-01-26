"use client";
import Link from "next/link";
import React, { JSX } from "react";

interface NavItemProps {
  href: string;
  label: string;
}

export function NavItem({ href, label }: NavItemProps): JSX.Element {
  return (
    <li
      className="w-[69px] h-[30px] bg-[white] flex justify-center items-center border-r-[0.5px] border-b-[1.9px] 
      border-gray-800 shadow-[0px_1px_0px_rgba(0,0,0,0.5)]"
    >
      <Link href={href} className="text-black text-[20px]">
        {label}
      </Link>
    </li>
  );
}
