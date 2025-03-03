// components/NowPlaying.tsx
"use client";

import { NowPlayingProps } from "../../../../type/type";

export default function NowPlaying({
  currentSongIndex,
  songs,
}: NowPlayingProps) {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <div className="w-full flex flex-row gap-2 justify-start items-center">
        <h3 className="text-[#000000] text-[23px]">Artist:</h3>
        <div className="bg-[#DBDBDB] w-full h-[30px] border-r-[2px] border-b-[2px] border-gray-800 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.40)] flex justify-center items-center">
          <p className="text-[#000000] text-[23px]">
            {songs[currentSongIndex]?.artist}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-row gap-2 justify-start items-center">
        <h3 className="text-[#000000] text-[23px]">Title:</h3>
        <div className="bg-[#DBDBDB] w-full h-[30px] border-r-[2px] border-b-[2px] border-gray-800 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.40)] flex justify-center items-center overflow-hidden">
          <p
            className="text-[#000000] text-[23px] whitespace-nowrap inline-block animate-scrollText"
            style={{
              paddingLeft: "100%",
              animationDuration: "10s",
            }}
          >
            {songs[currentSongIndex]?.title}
          </p>
        </div>
      </div>
    </div>
  );
}
