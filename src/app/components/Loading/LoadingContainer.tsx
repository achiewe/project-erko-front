"use client";

import React from "react";
import GifButtonDiv from "./GifButtonDiv";

export default function LoadingContainer() {
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center gap-[50px]">
      <h1 className="text-[32px]">Welcome to Erko</h1>
      <GifButtonDiv />
    </div>
  );
}
