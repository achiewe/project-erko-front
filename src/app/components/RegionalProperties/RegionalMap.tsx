import Image from "next/image";
import React from "react";
import worldMap from "../../../../public/assets/worldMap.png";

export default function RegionalMap() {
  return (
    <div className="h-full border-black border-2 w-full">
      <Image src={worldMap} alt="world map" />
    </div>
  );
}
