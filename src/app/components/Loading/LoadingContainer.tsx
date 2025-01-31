"use client";

import React from "react";
import GifButtonDiv from "./GifButtonDiv";
import CreativityTxtDiv from "./CreativityTxtDiv";
import anyDeskPng from "../../../../public/assets/anyDesk.png";
import Image from "next/image";

export default function LoadingContainer() {
  return (
    <div
      className="flex flex-col overflow-hidden w-full h-full h-sv:h-[660px] 
      h-sm:h-[730px] h-mm:h-[610px] h-mn:h-[570px] h-mw:h-[540px] h-ml:h-[490px] justify-start items-center gap-[40px] bg-[#FFFFF0] 
    border-r-2 border-b-2 border-gray-800 drop-shadow-[4px_3px_3px_rgba(0,0,0,0.40)] pt-[30px] relative"
    >
      <h1 className="text-[36px] font-bold sm:text-[32px] text-center">
        Welcome to Erko
      </h1>
      <GifButtonDiv />
      <CreativityTxtDiv />
      <Image
        src={anyDeskPng}
        alt="any desk png"
        className="absolute bottom-10 h-sm:bottom-20"
        width={131}
        height={24}
      />
    </div>
  );
}
