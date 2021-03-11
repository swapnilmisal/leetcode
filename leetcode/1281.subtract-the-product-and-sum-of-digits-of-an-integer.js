/*
 * @lc app=leetcode id=1281 lang=javascript
 *
 * [1281] Subtract the Product and Sum of Digits of an Integer
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const array = Array.from(String(n), Number);
  const multiplication = array.reduce((acc, curr) => acc * curr);
  const sum = array.reduce((acc, curr) => acc + curr);
  return multiplication - sum;
};
// @lc code=end
