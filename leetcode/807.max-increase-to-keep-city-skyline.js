/*
 * @lc app=leetcode id=807 lang=javascript
 *
 * [807] Max Increase to Keep City Skyline
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  const leftRight = grid.map((row) => Math.max(...row));
  const topBottom = [];
  for (let i = 0; i < grid[0].length; i++) {
    let max = 0;
    for (let j = 0; j < grid.length; j++) max = Math.max(max, grid[j][i]);
    topBottom.push(max);
  }

  let res = 0;
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[i].length; j++)
      res += Math.min(topBottom[j], leftRight[i]) - grid[i][j];
  return res;
};
// @lc code=end
