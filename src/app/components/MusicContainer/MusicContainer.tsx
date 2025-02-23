import React from "react";
import MusicPlayContainer from "./MusicPlayContainer";
import SpotifyImage from "./SpotifyImage";

export default function MusicContainer() {
  return (
    <div
      className="flex flex-col gap-y-[80px] px-[15px] w-full items-center justify-start min-h-screen bg-[#FFFFF0] 
  border-r-2 border-b-2 border-gray-800 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.40)] py-[40px] relative"
    >
      <h3 className="text-[30px]">Enjoy some of our selections!</h3>
      <MusicPlayContainer />
      <SpotifyImage top="1" right="1" />
      <SpotifyImage bottom="1" left="1" />
    </div>
  );
}
