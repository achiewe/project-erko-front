"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="w-[69px] cursor-pointer flex items-center justify-center h-[30px] text-[22px] bg-[#FFFFF0] border-r-[0.5px] border-b-2 border-gray-800"
      onClick={() => {
        router.push("/erko/team");
      }}
    >
      Back
    </button>
  );
}
