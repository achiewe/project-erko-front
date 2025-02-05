import React from "react";

interface GameStatusProps {
  status: string;
}

export default function GameStatus({ status }: GameStatusProps) {
  return (
    <p className="text-2xl mb-4 w-full flex justify-center items-center">
      {status}
    </p>
  );
}
