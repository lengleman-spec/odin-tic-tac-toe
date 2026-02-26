/* Logical Model: 
    player clicks, validate move,
    update board, check win,
    check tie, switch player*/

const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  const getBoard = () => board;

  const setCell = (index, marker) => {
    if (board[index] === "") {
      board[index] = marker;
      return true;
    }
    return false;
  };

  const reset = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  return {
    getBoard,
    setCell,
    reset,
  };
})();

// Player factory:
function createPlayer(name, marker) {
  return { name: name, marker: marker };
}

const Game = () => {
  let players = [];
  let currentPlayer;
  let gameOver = false;

  const winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [1, 4, 7],
    [2, 4, 6],
    [6, 7, 8],
    [2, 5, 8],
  ];

  const start = (name1, name2) => {
    players = [
      createPlayer(name1 || "Player 1", "X"),
      createPlayer(name2 || "Player 2", "O"),
    ];

    currentPlayer = players[0];
    gameOver = false;
    Gameboard.reset();

    console.log(`Game started! ${currentPlayer.name}'s turn!`);
  };
};
