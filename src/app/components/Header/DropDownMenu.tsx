import React from "react";

export default function DropDownMenu() {
  return (
    <ul
      role="menu"
      aria-labelledby="file-menu-button"
      className="absolute pl-[7px] top-[20px] bg-[white] w-[160px] border-b-2 border-r-2 border-l-2 border-t-2 border-b-gray-800 border-r-gray-800 border-l-gray-200 border-t-gray-200"
    >
      <li role="menuitem" className="hover:bg-gray-100">
        <button type="button">New File</button>
      </li>
      <li role="menuitem" className="hover:bg-gray-100">
        <button type="button">Open</button>
      </li>
      <li role="menuitem" className="">
        <button type="button">Print</button>
      </li>
      <li role="menuitem" className="text-[#bbbbbb]">
        <button type="button">Close Window</button>
      </li>
      <li role="menuitem" className="text-[#bbbbbb]">
        <button type="button">Search</button>
      </li>
    </ul>
  );
}
