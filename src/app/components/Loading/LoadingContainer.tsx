"use client";

import React from "react";
import LoadingGif from "../../../../public/assets/video.gif";
import Image from "next/image";

export default function LoadingContainer() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <Image src={LoadingGif} alt="loading gif" width={200} height={200} />
    </div>
  );
}
