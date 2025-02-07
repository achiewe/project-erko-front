
export const PLAYER = 'X';
export const COMPUTER = 'O';
export const EMPTY = '';

export const checkWinner = (board: string[]): string | null => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (board.every(cell => cell !== EMPTY)) {
    return 'draw';
  }

  return null;
};


export const bestMove = (board: string[]): number => {
    // Check if the computer can win
    for (let i = 0; i < board.length; i++) {
      if (board[i] === EMPTY) {
        board[i] = COMPUTER;
        if (checkWinner(board) === COMPUTER) {
          return i; // Return the winning move
        }
        board[i] = EMPTY; // Reset the move if it's not a winning move
      }
    }
  
    // Check if the player can win, and block them
    for (let i = 0; i < board.length; i++) {
      if (board[i] === EMPTY) {
        board[i] = PLAYER;
        if (checkWinner(board) === PLAYER) {
          return i; // Block the player from winning
        }
        board[i] = EMPTY; // Reset the move if it's not a blocking move
      }
    }
  
    // If no immediate win or block, pick the best available move (you can implement smarter strategies here)
    // For simplicity, return the first empty spot
    for (let i = 0; i < board.length; i++) {
      if (board[i] === EMPTY) {
        return i;
      }
    }
  
    return -1; // Return -1 if no moves are available (should not happen in a valid game)
  };


  export const handleCellClick = (
    index: number,
    board: string[],
    isPlayerTurn: boolean,
    setBoard: (board: string[]) => void,
    setGameStatus: (status: string) => void,
    setIsPlayerTurn: (turn: boolean) => void
  ): void => {
    if (board[index] !== EMPTY || !isPlayerTurn) return;
  
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
  
    // Step 1: Show first message
    setGameStatus("Erko is thinking...");
  
    setTimeout(() => {
      // Step 2: Randomly decide whether to show "Oh shit, it's difficult..."
      if (Math.random() > 0.5) { 
        setGameStatus("Oh shit, it's difficult...");
  
        setTimeout(() => {
          performComputerMove();
        }, 2000); // Move after additional 2 seconds (total 5 seconds)
      } else {
        performComputerMove(); // Skip extra message and move at 3 seconds
      }
    }, 3000); // First status change after 3 seconds
  
    function performComputerMove() {
      const computerMove = bestMove(newBoard);
      newBoard[computerMove] = COMPUTER;
      setBoard(newBoard);
  
      const computerWinner = checkWinner(newBoard);
      if (computerWinner === COMPUTER) {
        setGameStatus("Erko wins!");
        return;
      }
      if (computerWinner === "draw") {
        setGameStatus("It's a draw!");
        return;
      }
  
      setIsPlayerTurn(true);
      setGameStatus("Your turn");
    }
  };