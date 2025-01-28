// components/GameBoard.tsx
"use client";
import { useState } from "react";
import {
  checkWinner,
  bestMove,
  PLAYER,
  COMPUTER,
  EMPTY,
} from "../../utils/tictactoeLogic";
import Cell from "./Cell";

const GameBoard: React.FC = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(EMPTY));
  const [gameStatus, setGameStatus] = useState<string>("Your turn");
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(true);

  const handleCellClick = (index: number): void => {
    if (board[index] !== EMPTY || !isPlayerTurn) return;

    // Player's move
    const newBoard = [...board];
    newBoard[index] = PLAYER;
    setBoard(newBoard);
    setIsPlayerTurn(false);

    const winner = checkWinner(newBoard);
    if (winner === PLAYER) {
      setGameStatus("You win!");
      return;
    }
    if (winner === "draw") {
      setGameStatus("It's a draw!");
      return;
    }

    // Computer's move
    const computerMove = bestMove(newBoard);
    newBoard[computerMove] = COMPUTER;
    setBoard(newBoard);

    const computerWinner = checkWinner(newBoard);
    if (computerWinner === COMPUTER) {
      setGameStatus("Erko wins!"); // You can customize the computer's win message
      return;
    }
    if (computerWinner === "draw") {
      setGameStatus("It's a draw!");
      return;
    }

    setIsPlayerTurn(true);
  };

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
            onClick={handleCellClick}
            index={index}
          />
        ))}
      </div>
      <div className="text-2xl mb-4">{gameStatus}</div>
      <button
        onClick={resetGame}
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-400 transition duration-200"
      >
        Restart Game
      </button>
    </div>
  );
};

export default GameBoard;
