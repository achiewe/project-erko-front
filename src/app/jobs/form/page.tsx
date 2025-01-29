import Header from "@/app/components/Header/Header";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <div className="flex px-[5px] w-full h-full items-start pb-[10px] flex-col">
        <div
          className="flex mt-[1px] flex-row items-center sm:justify-center justify-start w-full h-full h-mn:gap-y-[0px] h-sm:gap-y-[10px] h-mm:pt-[0px] gap-y-[40px] flex-wrap gap-x-[50px] bg-[#FFFFF0] 
border-r-2 border-b-2 border-gray-800 drop-shadow-[4px_3px_3px_rgba(0,0,0,0.40)] py-[20px] relative"
        ></div>
      </div>
    </div>
  );
}
