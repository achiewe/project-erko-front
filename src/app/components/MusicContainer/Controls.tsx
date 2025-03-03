// components/Controls.tsx
"use client";

import { ControlsProps } from "../../../../type/type";
import pausePng from "../../../../public/assets/pause.png";
import playPng from "../../../../public/assets/play.png";
import previousPng from "../../../../public/assets/previous.png";
import nextPng from "../../../../public/assets/next.png";
import Image from "next/image";

export default function Controls({
  isPlaying,
  togglePlayPause,
  nextSong,
  previousSong,
}: ControlsProps) {
  return (
    <div className="mt-4 flex flex-row justify-center items-center">
      <button
        onClick={previousSong}
        className="w-[40px] h-[20px] bg-[#DBDBDB] border-r-[2px] border-b-[2px] border-gray-800 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.40)] flex justify-center items-center"
      >
        <Image src={previousPng} alt="previous button" width={15} />
      </button>

      <button
        onClick={togglePlayPause}
        className="w-[70px] h-[20px] bg-[#DBDBDB] border-r-[2px] border-b-[2px] border-gray-800 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.40)] flex justify-center items-center"
      >
        <Image
          src={isPlaying ? pausePng : playPng}
          alt={isPlaying ? "Pause" : "Play"}
          width={13}
        />
      </button>

      <button
        onClick={nextSong}
        className="w-[40px] h-[20px] bg-[#DBDBDB] border-r-[2px] border-b-[2px] border-gray-800 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.40)] flex justify-center items-center"
      >
        <Image src={nextPng} alt="next png" width={15} />
      </button>
    </div>
  );
}
