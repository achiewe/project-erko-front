// components/GameBoard.tsx
"use client";
import { useState } from "react";
import { EMPTY, handleCellClick } from "../../utils/tictactoeLogic";
import Cell from "./Cell";
import GameStatus from "./GameStatus";
import ResetButton from "./ResetButton";
import BackButton from "../../shared/BackButton";
import CreativityTxtDiv from "../../shared/CreativityTxtDiv";
import SmileTxt from "./SmileTxt";
import Header from "../Header/Header";
import NavigationPages from "../Navigation/NavigationPages";

export default function GameBoard() {
  const [board, setBoard] = useState<string[]>(Array(9).fill(EMPTY));
  const [gameStatus, setGameStatus] = useState<string>("Your turn");
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(true);

  const resetGame = (): void => {
    setBoard(Array(9).fill(EMPTY));
    setGameStatus("Your turn");
    setIsPlayerTurn(true);
  };

  return (
    <div className="flex w-full h-full items-start flex-col bg-[#EEEEEE] lg:max-w-[960px] lg:h-[697px] lg:shadow-lg lg:shadow-gray-800">
      <Header/>
      <div className="w-full px-[5px] pb-[10px] flex flex-col lg:px-[20px]">
      <NavigationPages/>
      <div
        className="flex mt-[1px] flex-col items-center justify-start w-full h-full 
  gap-y-[25px] gap-x-[30px] bg-[#FFFFF0] border-r-2 border-b-2 border-gray-800 drop-shadow-[4px_3px_3px_rgba(0,0,0,0.40)] py-[20px] relative lg:h-[605px] lg:py-[10px] lg:gap-y-[5]"
      >
        <div className="flex w-full flex-col justify-center items-center gap-[25px] lg:flex-row lg:gap-[100px]">
        <SmileTxt />
        <div className="grid grid-cols-3 gap-1 mb-4 px-[10px] py-[22px] rounded-xl bg-[#F3F3F3] border-black border-2 lg:mb-0">
          {board.map((value, index) => (
            <Cell
              key={index}
              value={value}
              onClick={() =>
                handleCellClick(
                  index,
                  board,
                  isPlayerTurn,
                  setBoard,
                  setGameStatus,
                  setIsPlayerTurn
                )
              }
              index={index}
            />
          ))}
        </div>
        </div>
        <GameStatus status={gameStatus} />
        <div className="flex flex-row items-center justify-center gap-[15px]">
          <BackButton destination="/erko" />
          <ResetButton onReset={resetGame} />
        </div>
        <CreativityTxtDiv text="Crush Erko in XO, snap your winning shot, and score an epic gift or discount on our services" />
      </div>
      </div>
    </div>
  );
}
