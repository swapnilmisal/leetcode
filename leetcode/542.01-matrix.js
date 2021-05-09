/*
 * @lc app=leetcode id=542 lang=javascript
 *
 * [542] 01 Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const rows = mat.length;
  const columns = mat[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (mat[i][j]) {
        mat[i][j] = Math.min(
          (mat[i][j - 1] ?? Infinity) + 1,
          (mat[i - 1]?.[j] ?? Infinity) + 1
        );
      }
    }
  }

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = columns - 1; j >= 0; j--) {
      if (mat[i][j]) {
        mat[i][j] = Math.min(
          mat[i][j],
          (mat[i][j + 1] ?? Infinity) + 1,
          (mat[i + 1]?.[j] ?? Infinity) + 1
        );
      }
    }
  }
  return mat;
};
// @lc code=end
