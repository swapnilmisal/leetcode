/*
 * @lc app=leetcode id=830 lang=javascript
 *
 * [830] Positions of Large Groups
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const result = [];
  for (let i = 0; i < s.length; ) {
    let j = i + 1;
    for (; j < s.length && s[j] === s[i]; j++);
    if (j - i >= 3) result.push([i, j - 1]);
    i = j;
  }
  return result;
};
// @lc code=end
