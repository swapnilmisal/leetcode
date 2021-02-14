/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const memo = Array(m);
  var backtrack = (r, c) => {
    if (r >= m || c >= n) return false;
    if (memo[r] === undefined) memo[r] = [];
    else if (memo[r][c] !== undefined) return memo[r][c];
    if (r === m - 1 && c === n - 1) return true;
    memo[r][c] = backtrack(r + 1, c) + backtrack(r, c + 1);
    return memo[r][c];
  };
  return backtrack(0, 0);
};
// @lc code=end
