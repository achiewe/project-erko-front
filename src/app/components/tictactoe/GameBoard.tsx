// components/GameBoard.tsx
"use client";
import { useState } from "react";
import { EMPTY, handleCellClick } from "../../utils/tictactoeLogic";
import Cell from "./Cell";
import GameStatus from "./GameStatus";
import ResetButton from "./ResetButton";

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
    <div className="max-w-sm mx-auto text-center">
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
      <ResetButton onReset={resetGame} />
    </div>
  );
}
