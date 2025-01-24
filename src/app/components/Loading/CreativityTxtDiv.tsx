import Image from "next/image";
import React from "react";
import lightPng from "../../../../public/assets/light.png";

export default function CreativityTxtDiv() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Image src={lightPng} alt="light png" />
      <p className="text-[17px] text-center w-full font-medium h-sm:text-[15px]">
        Creativity isn’t thinking outside the box; it’s realising the box was
        never there to begin with.
      </p>
    </div>
  );
}
