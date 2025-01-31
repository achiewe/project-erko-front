"use client";
import React from "react";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/features/store";

export default function DropDownMenu() {
  const isDropDown = useSelector(
    (store: RootState) => store.isDropDown.isDropDown
  );
  const activeMenu = useSelector(
    (store: RootState) => store.isDropDown.activeMenu
  );
  const leftPositions: Record<string, string> = {
    File: "left-[55px]",
    View: "left-[95px]",
    Surprise: "left-[150px]",
  };

  return (
    <ul
      role="menu"
      aria-labelledby="file-menu-button"
      className={`${
        isDropDown ? "absolute" : "hidden"
      } pl-[7px] top-[38px] z-10 bg-white w-[160px] border-b-2 border-r-2 border-l-2 border-t-2 
      border-b-gray-800 border-r-gray-800 border-l-gray-200 border-t-gray-200 
      ${leftPositions[activeMenu || "File"]}`}
    >
      <MenuItem text="New File" />
      <MenuItem text="Open" />
      <MenuItem text="Print" />
      <MenuItem text="Close Window" disabled />
      <MenuItem text="Search" disabled />
    </ul>
  );
}
