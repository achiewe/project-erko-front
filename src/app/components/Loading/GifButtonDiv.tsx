import React from "react";
import LoadingGif from "../../../../public/assets/video.gif";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setIsLoading } from "@/app/redux/features/IsLoadingSlice";

function GifButtonDiv() {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col w-full justify-center items-center gap-[10px]">
      <Image src={LoadingGif} alt="loading gif" width={150} height={150} />
      <button
        onClick={() => {
          dispatch(setIsLoading(true));
        }}
        className="bg-[#FFFFF0] border-r-2 border-b-2 border-gray-500 drop-shadow-[4px_3px_3px_rgba(0,0,0,0.40)] border-solid flex justify-center items-center w-[85px] h-[24px] cursor-pointer"
      >
        START
      </button>
    </div>
  );
}

export default GifButtonDiv;
