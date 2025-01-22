import React from "react";
import MenuItem from "./MenuItem";

export default function DropDownMenu() {
  return (
    <ul
      role="menu"
      aria-labelledby="file-menu-button"
      className="absolute pl-[7px] top-[20px] bg-[white] w-[160px] border-b-2 border-r-2 border-l-2 border-t-2 border-b-gray-800 border-r-gray-800 border-l-gray-200 border-t-gray-200"
    >
      <MenuItem text="New File" />
      <MenuItem text="Open" />
      <MenuItem text="Print" />
      <MenuItem text="Close Window" disabled />
      <MenuItem text="Search" disabled />
    </ul>
  );
}
