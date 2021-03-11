/*
 * @lc app=leetcode id=1528 lang=javascript
 *
 * [1528] Shuffle String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const str = [];
  for (let index = 0; index < indices.length; index++)
    str[indices[index]] = s[index];
  return str.join("");
};
// @lc code=end
