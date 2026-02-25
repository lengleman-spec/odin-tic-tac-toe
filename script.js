// array inside a Gameboard object
gameboard = [[""], [""], [""], [""], [""], [""], [""]];

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const player1 = createPlayer("Liz", "X");
const player2 = createPlayer("Computer", "O");

let currentPlayer = player1;

// function for current player / to switch player
function switchPlayer() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}

// function to create a player
function createPlayer(name, marker) {
  let score = 0; // private
  function incrementScore() {
    score++;
  }

  function getScore() {
    return score;
  }

  return {
    name,
    marker,
    incrementScore,
    getScore,
  };
}

let gameOver = false;

// need function to play round:
function playRound(index) {
  if (gameOver) {
    return;
  }
  // Check if there's spaces available:
  if (gameboard[index] !== "") {
    return;
  }

  // check to place marker:
  gameboard[index] = currentPlayer.marker;
}

// check winner:
// loops through winning patterns
// returns true if any match
function checkWinner() {
  return winningCombos.some((combo) => {
    const [a, b, c] = combo;

    return (
      gameboard[a] !== "" &&
      gameboard[a] === gameboard[b] &&
      gameboard[a] === gameboard[c]
    );
  });
}

// function to play 1 move

// function to check for winner
// functiion to check for a tie(will have 0 empty spaces)
// need function to display score
// need function to reset game

/* Logical Model: 
    player clicks, validate move,
    update board, check win,
    check tie, switch player*/
