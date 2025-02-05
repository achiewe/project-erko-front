import Image from "next/image";
import React from "react";
import lightPng from "../../../../public/assets/light bulb.png";

interface CreativityTxtProps {
  text: string;
}

export default function CreativityTxtDiv({ text }: CreativityTxtProps) {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Image src={lightPng} alt="light png" width={53} height={49} />
      <p className="text-[17px] text-center w-full font-medium px-[10px]">
        {text}
      </p>
    </div>
  );
}
