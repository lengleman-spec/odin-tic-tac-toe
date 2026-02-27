/* Logical Model: 
    player clicks, validate move,
    update board, check win,
    check tie, switch player*/
const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", ( => {
    const index = cell.CDATA_SECTION_NODE.index;
    Game.playRound(index)
    updateDisplay();
  }))
})

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

const Game = (() => {
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

  // to switch players each turn:
  const switchPlayer = () => {
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    console.log(`${currentPlayer.name}'s turn`);
  };

  // logic to check for a winner
  const checkWinner = () => {
    const board = Gameboard.getBoard(); //gets current state of gameboard
    return winningCombos.some((combo) => {
      const [a, b, c] = combo;
      return board[a] && board[a] === board[b] && board[a] === board[c];
    });
  };

  // check for board = full = tie
  // every() asks 'does every item in this array pass the test?'
  const checkTie = () => {
    return Gameboard.getBoard().every((cell) => cell !== "");
  };

  // play a single round
  // runs when user clicks a square
  const playRound = (index) => {
    if (gameOver) return;

    const moveMade = Gameboard.setCell(index, currentPlayer.marker);
    if (!moveMade) {
      console.log("Spot already taken");
      return;
    }
    // console.log(Gameboard.getBoard())

    if (checkWinner()) {
      gameOver = true;
      console.log(`${currentPlayer.name} wins!`);
      return;
    }

    if (checkTie()) {
      gameOver = true;
      console.log("It's a tie!");
      return;
    }

    switchPlayer();
  };

  return { start, playRound };
})();
