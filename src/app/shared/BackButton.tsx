"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface BackButtonProps {
  destination: string;
  onClick?: () => void; // Corrected the prop name to follow convention (onClick instead of onclick)
}

export default function BackButton({ destination, onClick }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      className="w-[69px] cursor-pointer flex items-center justify-center h-[30px] text-[22px] bg-[#FFFFF0] border-r-[0.5px] border-b-2 border-gray-800"
      onClick={() => {
        router.push(destination);
        if (onClick) {
          onClick();
        }
      }}
    >
      Back
    </button>
  );
}
