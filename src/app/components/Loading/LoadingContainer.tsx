"use client";

import React from "react";
import GifButtonDiv from "./GifButtonDiv";
import CreativityTxtDiv from "./CreativityTxtDiv";

export default function LoadingContainer() {
  return (
    <div className="flex bg-[#FFFFF0] border-r-2 border-b-2 border-gray-800 drop-shadow-[4px_3px_3px_rgba(0,0,0,0.40)] flex-col w-full min-h-screen justify-center items-center gap-[60px]">
      <h1 className="text-[32px]">Welcome to Erko</h1>
      <GifButtonDiv />
      <CreativityTxtDiv />
    </div>
  );
}
