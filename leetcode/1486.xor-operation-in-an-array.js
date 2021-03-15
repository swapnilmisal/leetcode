/*
 * @lc app=leetcode id=1486 lang=javascript
 *
 * [1486] XOR Operation in an Array
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let res = 0;
  for (let i = 0; i < n; i++) res ^= start + 2 * i;
  return res;
};
// @lc code=end
