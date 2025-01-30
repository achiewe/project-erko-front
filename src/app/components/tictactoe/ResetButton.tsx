import React from "react";

interface ResetButtonProps {
  onReset: () => void;
}

export default function ResetButton({ onReset }: ResetButtonProps) {
  return (
    <button
      onClick={onReset}
      className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-400 transition duration-200"
    >
      Restart Game
    </button>
  );
}
