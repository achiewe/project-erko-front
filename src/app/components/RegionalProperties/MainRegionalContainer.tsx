import React from "react";
import RegionalMap from "./RegionalMap";

export default function MainRegionalContainer() {
  return (
    <div
      className="flex flex-col py-[50px] gap-y-[80px] px-[15px] w-full items-center justify-start min-h-screen bg-[#FFFFF0] 
  border-r-2 border-b-2 border-gray-800 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.40)]"
    >
      <RegionalMap />
    </div>
  );
}
