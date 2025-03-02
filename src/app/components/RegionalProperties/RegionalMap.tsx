"use client";
import Image from "next/image";
import React from "react";
import worldMap from "../../../../public/assets/worldMap.png";
import DotAnimation from "./DotAnimation";

export default function RegionalMap() {
  return (
    <div className="h-full border-black border-2 w-full max-w-[329px] relative lg:max-h-[605px]">
      <Image src={worldMap} alt="world map" className="h-[605px]" />
      <DotAnimation className="top-[130px] left-[154px]" />
      <DotAnimation className="bottom-[333px] left-[168px]" />
      <DotAnimation className="bottom-[318px] left-[190px]" />
      <DotAnimation className="bottom-[286px] left-[188px]" />
      <DotAnimation className="bottom-[265px] left-[175px]" />
    </div>
  );
}
