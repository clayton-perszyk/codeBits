//jshint esnext:true

let board1 = [['o', ' ', 'x'],
              ['o', 'x', 'o'],
              ['o', 'o', 'x']];

let board2 = [['x', 'x', 'x', 'o'],
              ['o', 'o', 'o', 'x'],
              ['o', 'o', 'x', 'o'],
              ['x', 'x', 'o', 'o']];

let board3 = [['x', 'x', 'x', 'x'],
              ['o', 'x', 'o', 'x'],
              ['o', 'o', 'x', 'o'],
              ['o', 'x', 'o', 'x']];

let board4 = [['x', 'x', 'x', 'o'],
              ['o', 'x', 'o', 'x'],
              ['o', 'o', 'x', 'o'],
              ['o', 'x', 'o', 'x']];

let board5 = [['x', 'x', 'x', 'o'],
              ['o', 'x', 'x', 'x'],
              ['o', 'o', 'x', 'o'],
              ['o', 'x', 'x', 'x']];

let board6 = [['x', 'x', 'x', 'x', 'o', 'x', 'x'],
              ['o', 'x', 'o', 'x', 'x', 'x', 'o'],
              ['o', 'x', 'x', 'o', 'o', 'x', 'o'],
              ['o', 'x', 'o', 'x', 'o', 'o', 'x'],
              ['o', 'x', 'o', 'x', 'o', 'o', 'x'],
              ['o', 'x', 'o', 'x', 'o', 'x', 'o'],
              ['o', 'x', 'o', 'x', 'x', 'o', 'x']];

let board7 = [[' ', 'x', 'x'],
              ['o', 'x', 'o'],
              ['o', 'o', 'x']];

let board8 = [['o', 'x', 'x'],
              ['o', 'o', 'o'],
              ['x', 'o', 'x']];

let board9 = [['o', 'x', 'x'],
              ['o', ' ', 'o'],
              ['x', 'o', 'x']];


function tie(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] == ' ') {
        return false;
      }
    }
  }

  return true;
}


function isWinner(count1, count2, count3, count4, board) {
  let length = board.length;

  return count1 === length ||
         count2 === length ||
         count3 === length ||
         count4 === length;
}

function checkBoard(board, currentPlayer){
   let rowCount = 0,
       colCount = 0,
       diagLeftCount = 0,
       diagRightCount = 0;

   for (let row = 0; row < board.length; row++) {

       for (let col = 0; col < board.length; col++) {
           if (board[row][col] == currentPlayer) {
             rowCount++;
           }

           if (board[col][row] == currentPlayer) {
             colCount++;
           }

           if (board[col][col] == currentPlayer) {
             diagLeftCount++;
           }

           if (board[col][(board.length - 1) - col] == currentPlayer) {
             diagRightCount++;
           }
       }


       if (isWinner(rowCount, colCount, diagLeftCount, diagRightCount, board)) {
         return currentPlayer + " wins!";
       }

       rowCount = 0;
       colCount = 0;
       diagLeftCount = 0;
       diagRightCount = 0;
   }

   if (tie(board)) {
     return "It's a draw!";
   } else {
     return currentPlayer === 'x' ? "It's o's turn" : "It's x's turn";
   }


}

console.log(checkBoard(board1, 'o')); // returns o wins
console.log(checkBoard(board2, 'o')); // returns It's a draw
console.log(checkBoard(board3, 'x')); // returns x wins
console.log(checkBoard(board4, 'o')); // returns o wins
console.log(checkBoard(board5, 'x')); // returns x wins
console.log(checkBoard(board6, 'x')); // returns x wins
console.log(checkBoard(board7, 'x')); // returns It's o's turn
console.log(checkBoard(board8, 'o')); // returns o wins
console.log(checkBoard(board9, 'o')); // returns It's x's turn
