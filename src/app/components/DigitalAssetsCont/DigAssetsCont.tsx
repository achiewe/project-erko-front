import React from "react";
import AssetPng from "./AssetPng";
import random1Png from "../../../../public/assets/random1.png";
import random2Png from "../../../../public/assets/random2.png";
import DocContainer from "@/app/shared/DocContainer";

export default function DigAssetsCont() {
  return (
    <div
      className="flex flex-row gap-x-[80px] flex-wrap w-full items-start justify-center min-h-screen bg-[#FFFFF0] 
border-r-2 border-b-2 border-gray-800 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.40)] relative py-9 lg:min-h-[605px]"
    >
      <DocContainer justifyContent="center" gap="20px">
        <AssetPng src={random1Png} alt="s" imgTitle="11a5 ERKO BLUE.JPG" />
        <AssetPng src={random2Png} alt="s" imgTitle="Free World 2121-DX.JPG" />
      </DocContainer>
    </div>
  );
}
