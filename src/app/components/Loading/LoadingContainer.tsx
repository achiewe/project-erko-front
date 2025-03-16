"use client";

import React from "react";
import GifButtonDiv from "./GifButtonDiv";
import CreativityTxtDiv from "../../shared/CreativityTxtDiv";

export default function LoadingContainer() {
  return (
    <div
      className="flex flex-col overflow-hidden w-full h-full h-sv:h-[660px] 
      h-sm:h-[730px] h-mm:h-[610px] h-mn:h-[570px] h-mw:h-[540px] h-ml:h-[490px] justify-start items-center gap-[50px] bg-[#FFFFF0] 
    border-r-2 border-b-2 border-gray-800 drop-shadow-[4px_3px_3px_rgba(0,0,0,0.40)] pt-[30px] relative"
    >
      <h1 className="text-[36px] font-bold sm:text-[32px] text-center lg:text-[56px]">
        Welcome to Erko
      </h1>
      <GifButtonDiv />
      <CreativityTxtDiv text="Creativity isn’t thinking outside the box; it’s realising the box was never there to begin with." />
    </div>
  );
}
