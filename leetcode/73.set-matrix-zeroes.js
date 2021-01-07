/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @swapnilmisal
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = new Set();
  const cols = new Set();
  const totalRows = matrix.length;
  const totalCols = matrix[0].length;
  matrix.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (!matrix[rowIndex][colIndex]) {
        rows.add(rowIndex);
        cols.add(colIndex);
      }
    });
  });
  for (const iterator of rows)
    for (let index = 0; index < totalCols; index++) matrix[iterator][index] = 0;
  for (const iterator of cols)
    for (let index = 0; index < totalRows; index++) matrix[index][iterator] = 0;
};
// @lc code=end
