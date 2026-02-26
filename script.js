/* Logical Model: 
    player clicks, validate move,
    update board, check win,
    check tie, switch player*/

const Gameboard = () => {
  let board = ["", "", "", "", "", "", "", "", ""];
  const getBoard = () => board;

  const setCell = (index, marker) => {
    if (board[index] === "") {
      board[index] = marker;
      return true;
    }
    return false;
  };
};
