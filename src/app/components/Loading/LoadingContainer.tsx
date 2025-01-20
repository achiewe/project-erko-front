"use client";

import React from "react";
import GifButtonDiv from "./GifButtonDiv";
import CreativityTxtDiv from "./CreativityTxtDiv";
import anyDeskPng from "../../../../public/assets/anyDesk.png";
import Image from "next/image";

export default function LoadingContainer() {
  return (
    <div className="flex flex-col overflow-hidden w-full h-full justify-start items-center gap-[40px] bg-[#FFFFF0] pt-[30px]">
      <h1 className="text-[24px] sm:text-[32px] text-center">
        Welcome to Erko
      </h1>
      <GifButtonDiv />
      <CreativityTxtDiv />
      <Image src={anyDeskPng} alt="any desk png" className="fixed bottom-10" />
    </div>
  );
}
