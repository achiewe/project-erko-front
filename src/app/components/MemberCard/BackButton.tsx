"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="w-[40px] cursor-pointer flex items-center justify-center h-[30px] text-[22px] bg-[#FFFFF0] border-r-2 border-b-2 border-gray-800 drop-shadow-[4px_3px_3px_rgba(0,0,0,0.40)]"
      onClick={() => {
        router.push("/erko/team");
      }}
    >
      Back
    </button>
  );
}
