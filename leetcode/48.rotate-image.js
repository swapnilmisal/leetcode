/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let row = matrix.length - 1; row >= 0; row--)
    for (let col = 0; col < matrix.length; col++)
      matrix[col].push(matrix[row].shift());
};
// @lc code=end
