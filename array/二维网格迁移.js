/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (
  grid = [
    [3, 8, 1, 9],
    [19, 7, 2, 5],
    [4, 6, 11, 10],
    [12, 0, 21, 13],
  ],
  k = 4
) {
    let numCols = grid[0].length;
    let numRows = grid.length;

    let newGrid = [];

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {

        let newCol = (col + k) % numCols;
        let wrapAroundCount = Math.floor((col + k) / numCols);
        let newRow = (row + wrapAroundCount) % numRows;

        if (!newGrid[newRow]) {
          newGrid[newRow] = [];
        }
        newGrid[newRow][newCol] = grid[row][col];
      }
    }

    return newGrid;
//   while (k--) {
//     let previous = grid[grid.length - 1][grid[0].length - 1];
//     for (let row = 0; row < grid.length; row++) {
//       for (let col = 0; col < grid[0].length; col++) {
//         let temp = grid[row][col];
//         grid[row][col] = previous;
//         previous = temp;
//       }
//     }
//   }
//   return grid;
};

console.log(shiftGrid());
