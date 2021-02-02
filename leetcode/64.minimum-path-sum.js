/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid, x = 0, y = 0, memo = []) {
  const m = grid.length;
  const n = grid[0].length;
  if (x === m - 1 && y === n - 1) return grid[x][y];
  if (memo[x]?.[y]) return memo[x][y];
  const rightSum = x + 1 < m ? minPathSum(grid, x + 1, y, memo) : Infinity;
  const downSum = y + 1 < n ? minPathSum(grid, x, y + 1, memo) : Infinity;

  const value = rightSum < downSum ? rightSum : downSum;
  if (!memo[x]) memo[x] = [];
  memo[x][y] = grid[x][y] + value;
  return memo[x][y];
};
// @lc code=end
