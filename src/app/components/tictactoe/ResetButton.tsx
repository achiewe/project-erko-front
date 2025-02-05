import React from "react";

interface ResetButtonProps {
  onReset: () => void;
}

export default function ResetButton({ onReset }: ResetButtonProps) {
  return (
    <button
      onClick={onReset}
      className="w-[69px] cursor-pointer flex items-center justify-center h-[30px] text-[22px] bg-[#FFFFF0] border-r-[0.5px] border-b-2 border-gray-800"
    >
      Again
    </button>
  );
}
