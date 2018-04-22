let a = [
  ['1', '3', '2'],
  ['.', '7', '.'],
  ['1', '.', '.']
];


let b = [
  ['1', '.', '2'],
  ['3', '7', '.'],
  ['.', '.', '.']
]

c = [[".","4",".",".",".",".",".",".","."],
     [".",".","4",".",".",".",".",".","."],
     [".",".",".","1",".",".","7",".","."],
     [".",".",".",".",".",".",".",".","."],
     [".",".",".","3",".",".",".","6","."],
     [".",".",".",".",".","6",".","9","."],
     [".",".",".",".","1",".",".",".","."],
     [".",".",".",".",".",".","2",".","."],
     [".",".",".","8",".",".",".",".","."]]


d = [[".","4",".",".",".",".",".",".","."],
     [".",".","1",".","1",".",".",".","."],
     [".",".",".","1",".",".","7",".","."],
     [".",".",".",".",".",".",".",".","."],
     [".",".",".","3",".",".",".","6","."],
     [".",".",".",".",".","6",".","9","."],
     [".",".",".",".","1",".",".",".","."],
     [".",".",".",".",".",".","2",".","."],
     [".",".",".","8",".",".",".",".","."]]

function fun(a) {
  let subgrids  = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []}
  for (var row = 0; row < a.length; row++) {
    let rowNums = [];
    let colNums = [];


    for (var col = 0; col < a.length; col++) {
      if (rowNums.indexOf(a[row][col]) === -1) {
        if (a[row][col] !== '.') {
          rowNums.push(a[row][col]);
        }

      } else {
        return false;
      }

      if (colNums.indexOf(a[col][row]) === -1) {
        if (a[col][row] !== '.') {
          colNums.push(a[col][row]);
        }

      } else {
        return false;
      }

      if ((row >= 0 && row <= 2) && (col >= 0 && col <= 2)) {
        if (subgrids[1].indexOf(a[row][col]) === -1) {
          if (a[row][col] !== '.'){
            subgrids[1].push(a[row][col]);
          }

        } else {
          return false;
        }
      }

     if ((row >= 3 && row <= 5) && (col >= 0 && col <= 2)) {
       if (subgrids[2].indexOf(a[row][col]) === -1) {
         if (a[row][col] !== '.'){
           subgrids[2].push(a[row][col]);
         }

       } else {
         return false;
       }
     }

     if ((row >= 6 && row <= 8) && (col >= 0 && col <= 2)) {
       if (subgrids[3].indexOf(a[row][col]) === -1) {
         if (a[row][col] !== '.'){
           subgrids[3].push(a[row][col]);
         }

       } else {
         return false;
       }
     }


     if ((row >= 0 && row <= 2) && (col >= 3 && col <= 5)) {
       if (subgrids[4].indexOf(a[row][col]) === -1) {
         if (a[row][col] !== '.'){
           subgrids[4].push(a[row][col]);
         }
       } else {
         return false;
       }
      }


      if ((row >= 0 && row <= 2) && (col >= 6 && col <= 8)) {
        if (subgrids[5].indexOf(a[row][col]) === -1) {
          if (a[row][col] !== '.'){
            subgrids[5].push(a[row][col]);
          }
        } else {
         return false;
        }
      }

      if ((row >= 3 && row <= 5) && (col >= 3 && col <= 5)) {
        if (subgrids[6].indexOf(a[row][col]) === -1) {
          if (a[row][col] !== '.'){
            subgrids[6].push(a[row][col]);
          }
        } else {
          return false;
        }
      }

      if ((row >= 3 && row <= 5) && (col >= 6 && col <= 8)) {
        if (subgrids[7].indexOf(a[row][col]) === -1) {
          if (a[row][col] !== '.'){
            subgrids[7].push(a[row][col]);
          }
        } else {
          return false;
        }
      }

      if ((row >= 6 && row <= 8) && (col >= 3 && col <= 5)) {
        if (subgrids[8].indexOf(a[row][col]) === -1) {
          if (a[row][col] !== '.'){
             subgrids[8].push(a[row][col]);
          }
         } else {
           return false;
         }
       }


       if ((row >= 6 && row <= 8) && (col >= 6 && col <= 8)) {
        if (subgrids[9].indexOf(a[row][col]) === -1) {
          console.log(a[row][col])
          if (a[row][col] !== '.'){
            subgrids[9].push(a[row][col]);
          }

        } else {
          return false;
        }
      }
    }
  }

  return true;
}

// console.log(fun(a));
// console.log(fun(b));
// console.log(fun(c));
console.log(fun(d));
