import React from "react";
import LoadingGif from "../../../../public/assets/video.gif";
import Image from "next/image";

function GifButtonDiv() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-[10px]">
      <Image src={LoadingGif} alt="loading gif" width={200} height={200} />
      <button className="bg-[#FFFFF0] flex justify-center items-center">
        START
      </button>
    </div>
  );
}

export default GifButtonDiv;
