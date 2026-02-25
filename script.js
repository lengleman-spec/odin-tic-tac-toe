// array inside a Gameboard object
Gameboard = [
  [1, 2, 3],
  [1, 4, 7],
  [3, 6, 9],
  [7, 8, 9],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7],
];

const player1 = createPlayer("Liz", "X");
const player2 = createPlayer("Computer", "O");

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

// need function to play round
// function to play 1 move
// function to switch player
// function to check for winner
// functiion to check for a tie(will have 0 empty spaces)
// need function to display score
// need function to reset game

/* Logical Model: 
    player clicks, validate move,
    update board, check win,
    check tie, switch player*/
