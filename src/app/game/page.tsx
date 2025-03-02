import React from "react";
import GameBoard from "../components/tictactoe/GameBoard";
import Wrapper from "../shared/Wrapper";

export default function page() {
  return (
    <Wrapper>
      <main className="flex justify-center items-center w-full h-screen h-mx:h-full lg:max-w-[960px] lg:max-h-[700px]">
        <GameBoard />
      </main>
    </Wrapper>
  );
}
