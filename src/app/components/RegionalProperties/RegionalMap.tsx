"use client";
import Image from "next/image";
import React from "react";
import worldMap from "../../../../public/assets/worldMap.png";
import DotAnimation from "./DotAnimation";

export default function RegionalMap() {
  return (
    <div className="h-full border-black border-2 w-full max-w-[329px] relative">
      <Image src={worldMap} alt="world map" />
      <DotAnimation top="145px" left="154px" />
      <DotAnimation bottom="358px" left="168px" />
      <DotAnimation bottom="345px" left="190px" />
      <DotAnimation bottom="305px" left="188px" />
      <DotAnimation bottom="285px" left="175px" />
    </div>
  );
}
