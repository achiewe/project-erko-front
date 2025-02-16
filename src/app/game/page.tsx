import React from "react";
import GameBoard from "../components/tictactoe/GameBoard";

export default function page() {
  return (
    <div className="flex justify-center items-center w-full h-screen h-mx:h-full">
      <GameBoard />
    </div>
  );
}
