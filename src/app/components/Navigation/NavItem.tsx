"use client";
import { setIsDropDown } from "@/app/redux/features/DropDownSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { JSX } from "react";
import { useDispatch } from "react-redux";

interface NavItemProps {
  href: string;
  label: string;
}

export function NavItem({ href, label}: NavItemProps): JSX.Element {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const isActive = pathname === href;

  return (
    <li
      onClick={() => {dispatch(setIsDropDown(null))}}
      className={`w-[69px] h-[30px] flex justify-center items-center 
        ${
          isActive
            ? "shadow-[0px_1px_0px_rgba(0,0,0,0.2)] border-r-[0.5px] relative border-gray-800"
            : "border-r-[0.5px] border-b-[1.9px] border-gray-800 shadow-[0px_1px_0px_rgba(0,0,0,0.6)]"
        }
        bg-white`}
    >
      <Link
        href={href}
        className={`text-black text-[20px] ${
          isActive ? "underline-li" : "no-underline"
        }`}
      >
        {label}
      </Link>
    </li>
  );
}
