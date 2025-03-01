"use client";

import React from "react";
import LoadingGif from "../../../../public/assets/loadingGif.gif";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setIsLoading } from "@/app/redux/features/IsLoadingSlice";
import { useRouter } from "next/navigation";

function GifButtonDiv() {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className="flex flex-col w-full justify-center items-center gap-[10px]">
      <Image
        src={LoadingGif}
        alt="loading gif"
        width={150}
        height={150}
        className="lg:w-[200px]"
      />
      <button
        onClick={() => {
          dispatch(setIsLoading(true));
          router.push("/erko");
        }}
        className="bg-[#FFFFF0] text-[20px] border-r-2 border-b-2 border-gray-500 drop-shadow-[4px_3px_3px_rgba(0,0,0,0.40)] 
        focus:drop-shadow-[4px_3px_3px_rgba(0,0,0,0.10)] border-solid flex justify-center items-center w-[90px] lg:w-[150px] h-[30px] cursor-pointer"
      >
        START
      </button>
    </div>
  );
}

export default GifButtonDiv;
