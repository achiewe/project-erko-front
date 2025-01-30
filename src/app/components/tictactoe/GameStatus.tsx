import React from "react";

interface GameStatusProps {
  status: string;
}

export default function GameStatus({ status }: GameStatusProps) {
  return <div className="text-2xl mb-4">{status}</div>;
}
