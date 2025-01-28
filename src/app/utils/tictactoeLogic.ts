
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