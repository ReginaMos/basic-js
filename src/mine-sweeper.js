const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = Array.from({ length: matrix.length }, () => Array(matrix[0].length).fill(0));

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j]) {
        res[i][j] = 1;
        
        const neighbours = [
          [-1, -1], [-1, 0], [-1, 1],
          [0, -1], [0, 1],
          [1, -1], [1, 0], [1, 1]
        ]
      
        neighbours.forEach(coordinates => {
          const newI = i + coordinates[0];
          const newJ = j + coordinates[1];
          if (newI >= 0 &&  newJ >= 0 && newI < matrix.length && newJ < matrix[0].length && !matrix[newI][newJ]) {
            res[newI][newJ] += 1;
          }
        })
      }
    }
  }

  return res;
}

module.exports = {
  minesweeper
};
