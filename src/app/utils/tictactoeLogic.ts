
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
  // Example AI logic for making the best move
  // In real-world scenarios, you might want to use a more sophisticated AI algorithm
  for (let i = 0; i < board.length; i++) {
    if (board[i] === EMPTY) {
      return i; // Returns the first available spot for simplicity
    }
  }
  return -1;
};