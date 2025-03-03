import React from "react";
import MusicPlayer from "./MusicPlayer";

export default function MusicPlayContainer() {
  return (
    <div className="w-full bg-[#F3F3F3] drop-shadow-[2px_4px_2px_rgba(0,0,0,0.3)] flex flex-col gap-[30px] border-black border-[0.5px]">
      <MusicPlayer />
    </div>
  );
}
