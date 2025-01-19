"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoadingGif from "../../../../public/assets/video.gif";
import { setIsLoading } from "@/app/redux/features/IsLoadingSlice";
import Image from "next/image";

export default function LoadingContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setIsLoading(false)); // Stop loading after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);
  return (
    <div className="flex w-full justify-center items-center absolute top-[50%] bottom-[50%]">
      <Image src={LoadingGif} alt="loading gif" width={200} height={200} />
    </div>
  );
}
