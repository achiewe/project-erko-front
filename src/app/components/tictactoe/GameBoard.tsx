// components/GameBoard.tsx
"use client";
import { useState } from "react";
import { EMPTY, handleCellClick } from "../../utils/tictactoeLogic";
import Cell from "./Cell";
import GameStatus from "./GameStatus";
import ResetButton from "./ResetButton";
import BackButton from "../MemberCard/BackButton";
import ErkoLogo from "../../../../public/assets/erkoLLogo.png";
import Image from "next/image";
import CreativityTxtDiv from "../Loading/CreativityTxtDiv";

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
    <div className="max-w-sm mx-auto text-center h-screen flex justify-center items-center flex-col gap-6 relative">
      <Image
        src={ErkoLogo}
        alt="erko logo"
        width={84}
        height={80}
        className="absolute top-4 h-sv:top-2 h-sv:w-[70px] h-sv:h-[60px] h-mm:w-[50px] h-mm:h-[40px] "
      />
      <div className="grid grid-cols-3 gap-1 mb-4">
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
      <GameStatus status={gameStatus} />
      <div className="flex flex-row items-center justify-center gap-[15px]">
        <BackButton destination="/erko" />
        <ResetButton onReset={resetGame} />
      </div>
      <CreativityTxtDiv text="Crush Erko in XO, snap your winning shot, and score an epic gift or discount on our services" />
    </div>
  );
}
